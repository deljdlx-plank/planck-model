<?php
namespace Planck\Model;

use Phi\Database\Source;
use Planck\Exception;
use Planck\Exception\ClassDoesNotExist;

class Model
{

    const DEFAULT_SOURCE_NAME = 'main';

    /**
     * @var Source[]
     */
    protected $sources = [];


    protected $entityDecorators = [];


    public function __construct()
    {

    }

    public function addEntityDecorator($entityClassName, $decoratorClassName)
    {
        if(!class_exists($entityClassName)) {
            throw new ClassDoesNotExist($entityClassName);
        }
        if(!class_exists($decoratorClassName)) {
            throw new ClassDoesNotExist($decoratorClassName);
        }
        if(!array_key_exists($entityClassName, $this->entityDecorators)) {
            $this->entityDecorators[$entityClassName] = [];
        }

        $this->entityDecorators[$entityClassName][$decoratorClassName] = $decoratorClassName;
        return $this;
    }




    public function addSource(Source $source, $name = null)
    {
        if($name === null ) {
            $name = static::DEFAULT_SOURCE_NAME;
        }
        $this->sources[$name] = $source;
        return $this;
    }

    public function getSource($name = null) {
        if($name === null ) {
            $name = static::DEFAULT_SOURCE_NAME;
        }

        if(array_key_exists($name, $this->sources)) {
            return $this->sources[$name];
        }
        else {
            throw new Exception('Datasource '.$name.' does not exists');
        }
    }


    /**
     * @param $entityName
     * @param null $sourceName
     * @return Entity
     * @throws Exception
     */
    public function getEntity($entityName, $sourceName = null)
    {


        if(class_exists($entityName)) {
            $repositoryClassName = str_replace('\Entity\\', '\Repository\\', $entityName);
            $repository = new $repositoryClassName($this);
            $instance = new $entityName($repository);

            $instance = $this->decorateEntity($instance);



        }
        else {
            throw new Exception('Model entity '.$entityName.' does not exists');
        }

        return $instance;
    }


    /**
     * @param Entity $instance
     * @return Entity|\Planck\Pattern\Decorator
     */
    public function decorateEntity(Entity $instance)
    {
        $entityName = get_class($instance);

        if(array_key_exists($entityName, $this->entityDecorators)) {
            foreach ($this->entityDecorators[$entityName] as $decoratorClassName) {
                $instance= $instance->decorate($decoratorClassName);
            }
        }
        return $instance;


    }


    /**
     * @param $repositoryName
     * @param null $sourceName
     * @return Repository
     * @throws Exception
     */
    public function getRepository($repositoryName, $sourceName = null)
    {

        if(class_exists($repositoryName)) {
            $repository = new $repositoryName($this);
            return $repository;
        }
        else {
            throw new Exception('Model repository '.$repositoryName.' does not exists');
        }
    }


    /**
     * @param $fingerPrint
     * @return Entity|Repository
     */
    public function getInstanceByFingerPrint($fingerPrint)
    {
        if(is_string($fingerPrint)) {
            $data = json_decode($fingerPrint);
        }
        else {
            $data = $fingerPrint;
        }

        if($data->type == 'repository') {
            return $this->getRepository($data->instance);
        }
        else if($data->type == 'entity') {
            $instance = $this->getEntity($data->instance);
            if($data->id) {
                $instance->loadById($data->id);
            }
            return $instance;
        }

    }




}