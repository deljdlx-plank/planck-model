<?php

namespace Planck\Model;



use Phi\Traits\Introspectable;
use Planck\Exception;
use Planck\Model\Exception\DoesNotExist;
use Planck\Model\Interfaces\Timestampable as iTimestampable;
use Planck\Model\Traits\Timestampable;
use Planck\Traits\Decorable;
use Planck\Traits\IsApplicationObject;


abstract class Entity extends \Phi\Model\Entity implements iTimestampable
{

    use Timestampable;
    use Introspectable;
    use IsApplicationObject;

    use Decorable;


    protected $primaryKeyName = 'id';


    /**
     * @var Entity[]
     */
    protected $ownedEntities = [];


    protected $foreignKeys = [];

    /**
     * @var Repository
     */
    protected $repository;


    public function __construct($repository = null)
    {
        parent::__construct($repository);



        $parentTypes = $this->getParentClasses();

        foreach ($parentTypes as $type) {
            $this->initializeTraits($type);
        }
        $this->initializeTraits($this);

    }


    /**
     * @return EntityDescriptor
     */
    public function getDescriptor()
    {
        return $this->getRepository()->getDescriptor();
    }



    public function getForeignKeys()
    {
        return $this->foreignKeys;
    }


    protected function initializeTraits($trait)
    {
        $traits = class_uses($trait);

        foreach ($traits as $trait) {
            $methodName = '_initializeTrait'.$this->getClassBaseName($trait);

            if(method_exists($this, $methodName)) {
                $this->$methodName();
            }
        }

        return $this;
    }







    public function setRepository(\Phi\Model\Repository $repository)
    {
        parent::setRepository($repository);
        $fields = $repository->getEntityFields();

        foreach ($fields as $field) {
            if(!isset($this->values[$field])) {
                $this->values[$field] = null;
            }
        }

        return $this;
    }

    public function loadForeignEntities($repositoryName, $foreignKey, $orderBy = '', $datasource = null)
    {
        if(!$datasource) {
            $repository = $this->getRepository($repositoryName);
        }
        else {
            $repository = $this->getRepository($repositoryName, $datasource);
        }

        return $repository->getBy($foreignKey, $this->getId(), $orderBy, true);
    }

    public function getForeignEntities(&$property, $repositoryName, $foreignKey, $orderBy = '', $datasource = null)
    {
        if($property === null) {
            $property = $this->loadForeignEntities($repositoryName, $foreignKey, $orderBy, $datasource);
        }
        return $property;
    }



    public function loadForeignEntity($repositoryName, $innerForeignKey)
    {
        $repository = $this->getRepository($repositoryName);
        try {
            return $repository->getById($this->getValue($innerForeignKey));
        } catch(\Exception $exception) {
            return $repository->getEntityInstance();
        }
    }

    public function getForeignEntity(&$property, $repositoryName, $foreignKey)
    {
        if($property === null) {
            $property = $this->loadForeignEntity($repositoryName, $foreignKey);
            $this->ownedEntities[$foreignKey] = $property;
        }
        return $property;
    }

    public function getOwnedEntities()
    {
        return $this->ownedEntities;
    }




    public function setPrimaryKey($value)
    {
        $this->setValue($this->getPrimaryKeyFieldName(), $value);
        return $this;
    }

    public function getPrimaryKeyFieldName()
    {
        return $this->primaryKeyName;
    }

    public function loadById($id, $isATry = false)
    {
        try {
            $this->setValues(
                $this->repository->getById(
                    $id
                )->getValues()
            );
            foreach ($this->getValues() as $key => $value) {
                $this->oldValues[$key] = $value;
            }
        }
        catch(DoesNotExist $exception) {
            if($isATry) {
                return $this;
            }
            throw $exception;
        }



        return $this;
    }

    public function loadBy($fieldNameOrValues, $value = null)
    {

        if(is_array($fieldNameOrValues)) {
            $dataset = $this->repository->getBy($fieldNameOrValues);
            if($dataset->length()>1) {
                throw new Exception('More than one record returned');
            }
            if($dataset->length() == 0) {
                throw new DoesNotExist('More record found');
            }
            $instance = $dataset->first();
            $this->setValues($instance->getValues());
        }
        else {
            $this->setValues(
                $this->repository->getOneBy(
                    $fieldNameOrValues,
                    $value
                )->getValues()
            );
        }

        return $this;
    }


    public function getEntityBaseName()
    {
        return basename(str_replace(
            '\\', '/', get_class($this)
        ));
    }



    public function getId()
    {
        return $this->getValue($this->primaryKeyName);
    }

    public function delete($dryRun = false)
    {
        $this->repository->delete($this, $dryRun);
    }


    public function reload()
    {
        $this->setValues(
            $this->repository->getById(
                $this->getId()
            )->getValues()
        );
        return $this;
    }

    public function getFingerPrint()
    {
        return json_encode(array(
            'type' => 'entity',
            'instance' => get_class($this),
            'id' => $this->getId()
        ));
    }

    public function toArray()
    {
        $traits = class_uses($this);

        $data = parent::jsonSerialize();
        $data['_fingerprint'] = $this->getFingerPrint();
        $data['_className'] = get_class($this);

        foreach ($traits as $trait) {
            $methodName = '_jsonSerializeTrait'.$this->getClassBaseName($trait);
            if(method_exists($this, $methodName)) {
                $data = array_merge($data, $this->$methodName());
            }
        }
        return $data;
    }

    public function toExtendedArray()
    {


        $this->loadAll();

        $entityData = $this->toArray();
        $foreignEntities = array();

        foreach ($this as $attribute => $value) {
            if($value instanceof Entity) {
                $foreignEntities[$attribute] = $value->toExtendedArray();
            }
        }


        return array(
           'values' => $entityData,
            'foreignEntities' => $foreignEntities,
            'metadata' => array(
                'fingerprint' => $this->getFingerPrint(),
                'className' => get_class($this),
                'descriptor' => $this->getDescriptor()
            ),
        );
    }

    public function loadAll()
    {
        return $this;
    }


    /**
     * @param null $className
     * @return Repository
     */
    public function getRepository($className = null)
    {
        if($className === null) {
            if($this->repository === null) {
                $this->repository = $this->getApplication()->getModelRepositoryByEntityName(get_class($this));
            }
            return $this->repository;
        }
        else {
            return $this->getApplication()->getModel()->getRepository($className);
        }
    }


    public function jsonSerialize()
    {
        return $this->toArray();
    }


    public function commit()
    {
        $this->repository->commit();
        return $this;
    }

    public function startTransaction()
    {
        $this->repository->startTransaction();
        return $this;
    }


    public function getLabelFieldName()
    {
        return $this->getDescriptor()->getLabelFieldName();
    }


    public function fieldExists($fieldName)
    {
        try {
            $this->getDescriptor()->getFieldByName($fieldName);
            return true;
        }
        catch (\Planck\Model\Exception $exception) {
            return false;
        }
    }



    public function doBeforeStore()
    {

        $returnValue = true;

        foreach ($this->getTraits() as $trait) {
            $methodName = basename($trait).'DoBeforeStore';
            if(method_exists($this, $methodName)) {
                $result = $this->$methodName();
                $returnValue = $returnValue && $result;
            }
        }


        return $returnValue;

    }

    public function doBeforeUpdate()
    {
        $returnValue = parent::doBeforeUpdate();

        foreach ($this->getTraits() as $trait) {
            $methodName = basename($trait).'DoBeforeUpdate';
            if(method_exists($this, $methodName)) {
                $result = $this->$methodName();
                $returnValue = $returnValue && $result;
            }
        }
        return $returnValue;
    }


    public function doBeforeInsert()
    {
        $returnValue = parent::doBeforeInsert();

        foreach ($this->getTraits() as $trait) {
            $methodName = basename($trait).'DoBeforeInsert';
            if(method_exists($this, $methodName)) {
                $result = $this->$methodName();
                $returnValue = $returnValue && $result;
            }
        }
        return $returnValue;

    }


}

