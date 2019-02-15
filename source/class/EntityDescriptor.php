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


    public function getFields()
    {
        return $this->fields;
    }


}
