<?php



namespace Planck\Model\Decorator;

use Planck\Pattern\Decorator;

class Entity extends Decorator
{


    public function __construct(\Planck\Model\Entity $object)
    {
        parent::__construct($object);
    }


}


