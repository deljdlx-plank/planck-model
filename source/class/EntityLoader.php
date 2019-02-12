<?php
namespace Planck\Model;


class EntityLoader
{


    const LOAD_BY_ATTRIBUTE = 'by-attribute';

    protected $model;

    protected $entityClassName;

    protected $loadMethod;

    protected $attributeValues = [];


    public function __construct(Model $model)
    {
        $this->model = $model;
    }


    public function setEntityType($entityClassName)
    {
        $this->entityClassName = $entityClassName;
        return $this;
    }


    public function setLoadMethod($method)
    {
        $this->loadMethod = $method;
        return $this;
    }

    public function setAttributeValue($attributeName, $value)
    {
        $this->attributeValues[$attributeName] = $value;

        return $this;
    }


    public function getEntity()
    {
        if($this->loadMethod == static::LOAD_BY_ATTRIBUTE) {
            return $this->getEntityByAttributes();
        }
    }


    protected function getEntityByAttributes()
    {
        $instance = $this->model->getEntity($this->entityClassName);
        return $instance->loadBy($this->attributeValues);
    }


}
