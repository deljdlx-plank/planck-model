<?php
namespace Planck\Model\Traits;



use Planck\Helper\StringUtil;
use Planck\Model\Exception;

Trait HasQName
{

    protected $qNameFieldName = 'qname';


    public function getQNameFieldName()
    {
        return $this->qNameFieldName;
    }


    public function setQNameFromString($string)
    {
        $qname = StringUtil::slugify($string);

        $this->setValue(
            $this->getQNameFieldName(),
            $qname
        );
        return $this;
    }


    protected function HasQNameDoBeforeInsert()
    {
        if(!$this->getValue($this->getQNameFieldName())) {
            $labelField = $this->getLabelFieldName();
            if(!$labelField) {
                throw new Exception('Can not set qname automatically. No field assume Label role ('.get_class($this).')');
            }
            $this->setQNameFromString(
               $this->getValue($labelField)
            );
        }
        return true;
    }



}
