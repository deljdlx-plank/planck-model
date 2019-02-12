<?php



namespace Planck\Model\Decorator;



use Planck\Pattern\Traits\Decorator;


class Entity extends \Planck\Model\Entity
{

    use Decorator;



    public function __construct(\Planck\Model\Entity $entity)
    {
        //$this->bindWithEntity($entity);
        $this->decorate($entity);
    }
}

