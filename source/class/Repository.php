<?php

namespace Planck\Model;



use Phi\Model\Entity;
use Planck\Application\Application;
use Planck\Model\Exception\DoesNotExist;
use Planck\Model\Exception\NotUnique;
use Planck\Model\Interfaces\Timestampable;
use Planck\Traits\IsApplicationObject;
use Planck\Traits\Listenable;

class Repository extends \Phi\Model\Repository
{


    use Listenable;
    use IsApplicationObject;

    /**
     * @var Application
     */
    protected $application;

    /**
     * @var Model
     */
    protected $model;

    private $transactionStarted = false;

    private $describeData;


    public function __construct(Model $model)
    {
        $this->model = $model;

        $source = $this->model->getSource();

        parent::__construct($source);
    }

    public function now()
    {
        return date('Y-m-d H:i:s');
    }




    public function loadForeignEntities(
        $foreignEntityRepositoryName,
        $relationRepositoryName,
        $entityIdKey,
        $foreignEntityIdKey,
        $entity
    )
    {

        $foreignEntityRepository = $this->model->getRepository($foreignEntityRepositoryName);

        $relationRepository =  $this->model->getRepository($relationRepositoryName);

        $foreignEntityFields = $foreignEntityRepository->getEntityFieldsString('foreignEntity.');




        $query ="
            SELECT ".$foreignEntityFields." FROM ".$foreignEntityRepository->getTableName()." foreignEntity
            JOIN ".$relationRepository->getTableName()." relation
                ON foreignEntity.id = relation.".$foreignEntityIdKey."
            WHERE
                relation.".$entityIdKey." = :entity_id
        ";

        $rows = $this->queryAndFetch($query,  array(
            ':entity_id' => $entity->getId()
        ));

        return $foreignEntityRepository->getDataset($rows);

    }



    public function describe($toDescriptor = false)
    {


        if(!$this->describeData) {
            $query ='PRAGMA table_info('.$this->escape($this->getTableName()).');';
            $rows = $this->queryAndFetch($query);
            $this->describeData = $rows;
        }


        if($toDescriptor) {
            $descriptor = new EntityDescriptor($this, $this->describeData);
            return $descriptor;
        }
        else {
            return $this->describeData;
        }



    }

    public function getDescriptor()
    {
        $descriptor = str_replace('\Repository\\', '\Descriptor\\', get_class($this));

        if(class_exists($descriptor)) {
            return new $descriptor($this);
        }
        else {
            return new EntityDescriptor($this);
        }
    }



    public function getEntityFields()
    {
        $descriptors = $this->describe();

        foreach ($descriptors as $descriptor) {
            $fields[] = $descriptor['name'];
        }

        return $fields;
    }

    public function getEntityFieldsString($prefix = null, $alias = null)
    {
        $fields = array();

        $descriptors = $this->describe();


        foreach ($descriptors as $descriptor) {
            $fieldName = $descriptor['name'];
            $field = $prefix.$fieldName;

            if($alias) {
                $field .= ' as '.$alias.$fieldName;
            }

            $fields[] = $field;
        }

        return implode(",\n", $fields);
    }


    public function getList(array $fields = null, $offset = null, $limit = null, &$totalRows = null)
    {

        if(!empty($fields)) {

            foreach ($fields as &$value) {
                $value = $this->escapeField($value);
            }
            $fieldList = implode(',', $fields);
        }
        else {
            $fieldList = '*';
        }

        $query = "
            SELECT ".$fieldList." FROM ".$this->getTableName()."
        ";


        $parameters = [];

        if($limit !== null || $offset !== null) {
            $query.=" LIMIT :limit ";
            if($limit !== null) {
                $parameters[':limit'] = (int) $limit;
            }
            else {
                $parameters[':limit'] = -1;
            }

        }

        if($offset !== null) {
            $query .= " OFFSET :offset ";
            $parameters[':offset'] = (int) $offset;
        }
        $dataset = $this->queryAndGetDataset($query, $parameters);


        $query = "
            SELECT COUNT(*) FROM ".$this->getTableName()." as total
        ";
        $totalRows = (int) $this->queryAndFetchValue($query, array(), 'total');

        return $dataset->getAll();
    }





    public function insert($entity, $dryRun = false)
    {

        if($dryRun) {
            $this->startTransaction();
        }

        $entity->doBeforeInsert();


        $descriptors = $this->describe();

        if(!$entity->getId()) {
            $entity->setValue('id', null);
        }

        $fields = array();
        $placeholders = array();
        $values = array();

        if($entity instanceof Timestampable) {
            $entity->setValue('creation_date', $this->now());
        }

        foreach ($descriptors as $descriptor) {
            $fieldName = $descriptor['name'];

            if($entity->getValue($fieldName) !== null) {
                $value = $entity->getValue($fieldName);
                $fields[] = $fieldName;
                $placeholders[] = ':'.$fieldName;
                $values[':'.$fieldName] = $value;
            }
        }

        $query = "
            INSERT INTO ".$this->getTableName()." (
                ".implode(',', $fields)."
            ) VALUES (
                ".implode(',', $placeholders)."
            );
        ";

        $this->query($query, $values);
        $entity->setPrimaryKey($this->getLastInsertId());
        return $entity;
    }

    public function update($entity, $dryRun = false)
    {

        if($dryRun) {
            $this->startTransaction();
        }

        $entity->doBeforeUpdate();

        $descriptors = $this->describe();

        $fields = array();

        $values = array();


        $needUpdate = false;
        foreach ($descriptors as $descriptor) {
            $fieldName = $descriptor['name'];
            if($entity->isFieldUpdated($fieldName)) {
                $needUpdate = true;
                $value = $entity->getValue($fieldName);
                $fields[] = $fieldName.' = :'.$fieldName;
                $values[':'.$fieldName] = $value;
            }
        }



        if($needUpdate) {

            $values[':id'] = $entity->getId();


            if($entity instanceof Timestampable) {
                $entity->setValue('update_date', $this->now());
            }

            $query = "
                UPDATE ".$this->getTableName()." SET
                    ".implode(',', $fields)."
                WHERE
                    ".$entity->getPrimaryKeyFieldName()." = :id
            ";

            $this->query($query, $values);
        }
        return $entity;
    }




    public function store(Entity $object, $dryRun = false)
    {

        if($dryRun) {
            $this->startTransaction();
        }

        if(!$object->getValue('id')) {
            return $this->insert($object, $dryRun);
        }
        else {
            return $this->update($object, $dryRun);
        }
    }



    public function delete($entity, $dryRun = false)
    {
        if($dryRun) {
            $this->startTransaction();
        }
        $query = "
              DELETE FROM ".$this->getTableName()."
              WHERE
                ".$entity->getPrimaryKeyFieldName()." = :id
        ";

        $this->query($query, array(
            ':id' => $entity->getId()
        ));
        return $entity;
    }


    /**
     * @param $query
     * @param $parameters
     * @param null $cast
     * @return Dataset
     */
    public function queryAndGetDataset($query, $parameters= array(), $cast = null)
    {
        $rows = $this->queryAndFetch($query, $parameters);
        return $this->getDataset($rows, $cast);
    }


    /**
     * @param $field
     * @param null $value
     * @param string $orderBy
     * @param bool $caseInsensitive
     * @return Dataset
     */
    public function getBy($field, $value = null, $orderBy = '', $caseInsensitive = true)
    {


        if(is_array($field)) {
            return $this->getByArray($field, $orderBy, $caseInsensitive);
        }


        $collate = '';
        if($caseInsensitive) {
            $collate = 'COLLATE NOCASE';
        }

        $query = '
        SELECT * FROM '.$this->getTableName().'
        WHERE '.$field.' = :value '.$collate.'
            '.$orderBy.'
        ';


        $rows = $this->queryAndFetch($query, array(
            ':value' => $value
        ));


        return $this->getDataset($rows);
    }


    /**
     * @param array $fields
     * @param string $orderBy
     * @param bool $caseInsensitive
     * @return Dataset
     */
    public function getByArray(array $fields, $orderBy = '', $caseInsensitive = true)
    {

        $collate = '';
        if($caseInsensitive) {
            $collate = 'COLLATE NOCASE';
        }

        $where = '';
        $parameters = array();
        foreach ($fields as $fieldName => $value) {
            if($where == '')  {
                $where .= $fieldName.'=:'.$fieldName.' '.$collate.' ';
            }
            else {
                $where .= 'AND '.$fieldName.'=:'.$fieldName.' '.$collate.' ';
            }
            $parameters[':'.$fieldName] = $value;
        }

        $query = '
                SELECT * FROM '.$this->getTableName().'
                WHERE '.$where.'
                '.$orderBy.'
            ';

        $rows = $this->queryAndFetch($query, $parameters);
        return $this->getDataset($rows);

    }


    /**
     * @param $field
     * @param $value
     * @param string $orderBy
     * @param bool $caseInsensitive
     * @return Entity
     * @throws \Exception
     */
    public function getOneBy($field, $value, $orderBy = '', $caseInsensitive = true)
    {
        $records = $this->getBy($field, $value, $orderBy, $caseInsensitive);
        if(count($records) === 1) {
            return $records[0];
        }
        else {
            if(count($records)) {
                throw new NotUnique('getBy() returned more than one record');
            }
            else {
                throw new DoesNotExist('getBy() returned no record');
            }

        }
    }


    /**
     * @param $qName
     * @return Dataset
     */
    public function getByQName($qName)
    {
        $records = $this->getBy('qname', $qName);
        return $records->first();
    }


    public function getEntityInstance($cast = null)
    {
        $instance = parent::getEntityInstance($cast);
        $instance = $this->model->decorateEntity($instance);
        return $instance;
    }


    public function getById($id)
    {

        $instance = $this->getEntityInstance();

        $query = '
          SELECT * FROM '.$this->getTableName().'
          WHERE '.$instance->getPrimaryKeyFieldName().' = :id
        ';
        $values = $this->queryAndFetchOne(
            $query,
            array(':id' => $id)
        );

        if(empty($values)) {
            throw new DoesNotExist('No object ('.$this->getTableName().') with id = '.$id.' (type : '.get_class($this).')');
        }


        $instance->setValues($values);
        return $instance;
    }


    public function commit()
    {
        if($this->transactionStarted) {
            $this->database->query('COMMIT;');
            $this->transactionStarted = false;
        }

        return $this;
    }

    public function startTransaction()
    {
        if(!$this->transactionStarted) {
            $this->database->query('BEGIN  TRANSACTION;');
            $this->transactionStarted = true;
        }

        return $this;
    }

    public function getFingerPrint()
    {
        return json_encode(array(
            'type' => 'repository',
            'instance' => get_class($this)
        ));
    }


    public function getName()
    {
        return str_replace('\\', '-', get_class($this));
    }


}

