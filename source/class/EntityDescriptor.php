<?php

namespace Planck\Model;


use Planck\Exception\DoesNotExist;

class EntityDescriptor
{

    /**
     * @var Repository
     */
    protected $repository;


    protected $descriptor;

    /**
     * @var FieldDescriptor[]
     */
    protected $fields;


    public function __construct(Repository $repository, array $descriptor = null)
    {

        $this->repository = $repository;


        if($descriptor === null) {
            $descriptor = $this->repository->describe();
        }
        $this->descriptor = $descriptor;



        foreach ($this->descriptor as $fieldDescriptor) {
            $descriptor = new FieldDescriptor($fieldDescriptor);
            $fieldName = $fieldDescriptor['name'];
            $this->fields[$fieldName] = $descriptor;
        }
    }

    public function getEntityLabel()
    {
        return get_class($this->repository->getEntityInstance());
    }


    /**
     * @param $fieldName
     * @return FieldDescriptor
     * @throws DoesNotExist
     */
    public function getFieldByName($fieldName)
    {
        if(array_key_exists($fieldName, $this->fields)) {
            return $this->fields[$fieldName];
        }
        else {
            throw new DoesNotExist('No field with name "'.$fieldName.'" for '.get_class($this));
        }
    }



    public function getLabelFieldName()
    {

        foreach ($this->getFields() as $field) {
            if($field->isCaption()) {
                return $field->getName();
            }
        }


        $possibleKeys = [
            'label',
            'caption',
            'title',
            'name',
            'qname'
        ];

        foreach ($possibleKeys as $key) {

            if(array_key_exists($key, $this->fields)) {
                return $key;
            }
        }

        return false;

    }


    public function getPrimaryKeyField()
    {
        foreach ($this->getFields() as $field) {
            if($field->isPrimaryKey()) {
                return $field;
            }
        }
    }

    public function getLabelField()
    {
        foreach ($this->getFields() as $field) {
            if($field->isLabel()) {
                return $field;
            }
        }
    }




    public function getIdFieldName()
    {
        return $this->repository->getEntityInstance()->getPrimaryKeyFieldName();
    }


    public function getFields()
    {
        return $this->fields;
    }


}
