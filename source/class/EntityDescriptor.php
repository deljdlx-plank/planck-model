<?php

namespace Planck\Model;


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




    public function getLabelFieldName()
    {
        $possibleKeys = [
            'label',
            'caption',
            'title',
            'name',
            'qname',
            'id',
        ];

        foreach ($possibleKeys as $key) {

            if(array_key_exists($key, $this->fields)) {
                return $key;
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
