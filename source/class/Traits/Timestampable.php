<?php
namespace Planck\Model\Traits;



Trait Timestampable
{



    public function TimestampableDoBeforeUpdate()
    {
        $this->setValue('update_date', $this->getRepository()->now());
        return true;
    }



}
