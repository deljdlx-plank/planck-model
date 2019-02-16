<?php

namespace Planck\Model;

class FieldDescriptor
{

    const TYPE_TEXT = 'TEXT';
    const TYPE_INT = 'INT';
    const TYPE_INTEGER = 'INTEGER';
    const TYPE_DATETIME = 'DATETIME';

    const LEVEL_SYSTEM =  1024;
    const LEVEL_DEVELOPPER = 512;
    const LEVEL_ADMINISTRATOR = 256;
    const LEVEL_USER = 128;
    const LEVEL_GUEST = 64;


    protected $defaultFieldDescriptor =array(
        'cid' => null,
        'name' => null,
        'type' => null,
        'notnull' => null,
        'dflt_value' => null,
        'pk' => null,

        '_isCaption' => true,
    );

    protected $accessLevel = self::LEVEL_GUEST;

    /**
     * @var array
     */
    protected $fieldDescriptor;

    public function __construct($fieldDescriptor)
    {
        $this->fieldDescriptor = array_merge($this->defaultFieldDescriptor, $fieldDescriptor);
    }

    public function getDescriptor()
    {
        return $this->fieldDescriptor;
    }

    public function getAccessLevel()
    {
        return $this->accessLevel;
    }


    public function isPrimaryKey()
    {
        if($this->fieldDescriptor['pk']) {
            return true;
        }
        return false;
    }

    public function getDefaultValue()
    {
        return $this->fieldDescriptor['dflt_value'];
    }


    public function getCaption()
    {
        return $this->fieldDescriptor['name'];
    }

    public function getName()
    {
        return  $this->fieldDescriptor['name'];
    }

    public function getType()
    {
        return $this->fieldDescriptor['type'];
    }

    public function isCaption($value = null)
    {
        if($value !== null) {
            $this->fieldDescriptor['_isCaption'] = $value;
        }
        return $this->fieldDescriptor['_isCaption'];
    }

    public function isInt()
    {
        if($this->getType() == self::TYPE_INT || $this->getType() == self::TYPE_INTEGER) {

            return true;
        }
        return false;
    }


    public function isDate()
    {
        if($this->getType() == self::TYPE_DATETIME) {

            return true;
        }
        return false;
    }



}
