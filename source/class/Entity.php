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


    protected $ownedEntitiesList = [];

    /**
     * @var Entity[]
     */
    protected $ownedEntities = [];


    protected $foreignKeys = [];

    /**
     * @var Repository
     */
    protected $repository;


    /**
     * @var Model
     */
    protected $model;


    public function __construct($repository = null)
    {
        parent::__construct($repository);


        $parentTypes = $this->getParentClasses();


        if($repository) {
            $this->model = $repository->getModel();
        }

        foreach ($parentTypes as $type) {
            $this->initializeTraits($type);
        }
        $this->initializeTraits($this);

    }


    /**
     * @param Model $model
     * @return $this
     */
    public function setModel(Model $model)
    {
        $this->model = $model;
        return $this;
    }


    /**
     * @param Entity $entity
     * @return $this
     */
    public function loadFromEntity(Entity $entity)
    {
        $this->setValues($entity->getValues());
        return $this;
    }


    /**
     * @return Model
     */
    public function getModel()
    {
        if(!$this->model) {
            $this->model = $this->application->getModel();
        }
        return $this->model;
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


    /**
     * @param $trait
     * @return $this
     */
    protected function initializeTraits($trait)
    {
        $traits = class_uses($trait);

        foreach ($traits as $trait) {
            $methodName = '_initializeTrait' . $this->getClassBaseName($trait);

            if (method_exists($this, $methodName)) {
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
            if (!isset($this->values[$field])) {
                $this->values[$field] = null;
            }
        }

        return $this;
    }

    /**
     * @param $repositoryName
     * @param $foreignKey
     * @param string $orderBy
     * @param null $datasource
     * @return Dataset
     */
    public function loadForeignEntities($repository, $foreignKey, $queryExtra = '', $datasource = null)
    {
        if (is_string($repository)) {
            if (!$datasource) {
                $repository = $this->getRepository($repository);
            } else {
                $repository = $this->getRepository($repository, $datasource);
            }
        }
        if (!$repository instanceof Repository) {
            throw new \Planck\Model\Exception('$repository must be a string or a ' . Repository::class . ' instance');
        }


        return $repository->getBy($foreignKey, $this->getId(), $queryExtra, true);
    }

    /**
     * @param $property
     * @param $repositoryName
     * @param $foreignKey
     * @param string $orderBy
     * @param null $datasource
     * @return Dataset
     */
    public function getForeignEntities(&$property, $repositoryName, $foreignKey, $orderBy = '', $datasource = null)
    {
        if ($property === null) {
            $property = $this->loadForeignEntities($repositoryName, $foreignKey, $orderBy, $datasource);
        }
        return $property;
    }


    /**
     * @param $repositoryName
     * @param $innerForeignKey
     * @return \Phi\Model\Entity|Entity|\Planck\Pattern\Decorator
     */
    public function loadForeignEntity($repositoryName, $innerForeignKey)
    {

        $repository = $this->getRepository($repositoryName);

        try {
            return $repository->getById($this->getValue($innerForeignKey));
        } catch (\Exception $exception) {
            return $repository->getEntityInstance();
        }
    }

    /**
     * @param $property
     * @param $repositoryName
     * @param $foreignKey
     * @return Entity
     */
    public function getForeignEntity(&$property, $repositoryName, $foreignKey)
    {
        if ($property === null) {
            $property = $this->loadForeignEntity($repositoryName, $foreignKey);
            $this->ownedEntities[$foreignKey] = $property;
        }
        return $property;
    }


    /**
     * @param $entityClassName
     * @param null $attribute
     * @param string $queryExtraString
     * @return $this
     * @throws \Planck\Model\Exception
     */
    public function loadOwnedEntities($entityClassName, &$attribute = null, $queryExtraString = '')
    {
        if (!array_key_exists($entityClassName, $this->ownedEntitiesList)) {
            throw new \Planck\Model\Exception('Can not load owned entities ' . $entityClassName . '. Entity must be declared in ' . get_class($this) . '::$ownedEntitiesList');
        }


        $foreignKey = $this->ownedEntitiesList[$entityClassName];
        $ownedEntities = $this->loadForeignEntities(
            $this->getRepositoryByEntity($entityClassName),
            $foreignKey,
            $queryExtraString
        );


        $this->ownedEntities[$entityClassName] = $ownedEntities;

        $attribute = $ownedEntities;


        return $this;

    }

    /**
     * @param $entity
     * @return \Phi\Model\Repository|Repository
     * @throws \Planck\Model\Exception
     */
    public function getRepositoryByEntity($entity)
    {
        if (is_object($entity)) {
            if (!$entity instanceof \Phi\Model\Entity) {
                throw new \Planck\Model\Exception('Entity must be a string or an instance  of \Phi\Model\Entity');
            }
            return $entity->getRepository();
        }

        return $this->getRepository()->getModel()->getRepositoryByEntityName($entity);


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

    /**
     * @param $id
     * @param bool $isATry
     * @return $this
     * @throws DoesNotExist
     */
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
        } catch (DoesNotExist $exception) {
            if ($isATry) {
                return $this;
            }
            throw $exception;
        }


        return $this;
    }

    /**
     * @param $fieldNameOrValues
     * @param null $value
     * @return $this
     * @throws DoesNotExist
     * @throws Exception
     */
    public function loadBy($fieldNameOrValues, $value = null)
    {

        if (is_array($fieldNameOrValues)) {
            $dataset = $this->repository->getBy($fieldNameOrValues);
            if ($dataset->length() > 1) {
                throw new Exception('More than one record returned');
            }
            if ($dataset->length() == 0) {
                throw new DoesNotExist('More record found');
            }
            $instance = $dataset->first();
            $this->setValues($instance->getValues());
        } else {
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
            $methodName = '_jsonSerializeTrait' . $this->getClassBaseName($trait);
            if (method_exists($this, $methodName)) {
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
            if ($value instanceof Entity) {
                $foreignEntities[$attribute] = array(
                    'metadata' => $value->getMetadata(),
                    'values' => $value->getValues(),
                );
            }
        }


        return array(
            'metadata' => $this->getMetadata(),
            'values' => $entityData,
            'foreignEntities' => $foreignEntities,
            'ownedEntitites' => $this->ownedEntities,
        );
    }

    public function getMetadata()
    {
        return array(
            'fingerprint' => $this->getFingerPrint(),
            'className' => get_class($this),
            'descriptor' => $this->getDescriptor()
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


        if ($className === null) {
            if ($this->repository === null) {


                $repositoryName = str_replace('\Entity\\', '\Repository\\', get_class($this));
                if($this->repositoryExists($repositoryName)) {
                    $this->repository = $this->getModel()->getRepository($repositoryName);
                    return $this->repository;
                }

                else {
                    $repository = $this->getInheritedRepository();
                    if($repository) {
                        $this->repository = $repository;
                        return $this->repository;
                    }
                }
                throw new \Planck\Model\Exception('Can not find a valid repository for entity "'.get_class($this).'"');
            }
            return $this->repository;
        } else {
            return $this->getModel()->getRepository($className);
        }
    }


    protected function getInheritedRepository()
    {
        $parentClasses = $this->getParentClasses();
        foreach ($parentClasses as $parentClassName) {

            $repositoryName = str_replace('\Entity\\', '\Repository\\', $parentClassName);

            if($this->repositoryExists($repositoryName)) {
                $this->repository = $this->getModel()->getRepository($repositoryName);
                return $this->repository;
            }
        }
        return false;
    }


    protected function repositoryExists($repositoryName)
    {
        if(class_exists($repositoryName) && is_a($repositoryName, \Phi\Model\Repository::class, true)) {
            return true;
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
        } catch (\Planck\Model\Exception $exception) {
            return false;
        }
    }


    public function doBeforeStore()
    {

        $returnValue = true;

        foreach ($this->getTraits() as $trait) {
            $methodName = basename($trait) . 'DoBeforeStore';
            if (method_exists($this, $methodName)) {
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
            $methodName = basename($trait) . 'DoBeforeUpdate';
            if (method_exists($this, $methodName)) {
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

            $methodName = basename($trait) . 'DoBeforeInsert';
            if (method_exists($this, $methodName)) {
                $result = $this->$methodName();
                if (!$result) {
                    throw new \Planck\Model\Exception('Trait ' . $trait . ' has returned a false in doBeforeInsert hook');
                }
                $returnValue = $returnValue && $result;
            }
        }


        return $returnValue;

    }


}

