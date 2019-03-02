<?php

namespace Planck\Model;

class FieldDescriptor implements \JsonSerializable
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

        '_isLabel' => false,
    );

    protected $accessLevel = self::LEVEL_GUEST;

    /**
     * @var \Phi\Database\FieldDescriptor
     */
    protected $fieldDescriptor;

    public function __construct($fieldDescriptor)
    {
        $this->fieldDescriptor = $fieldDescriptor;

        //$this->fieldDescriptor->
        //$this->fieldDescriptor = array_merge($this->defaultFieldDescriptor, $fieldDescriptor->toArray());
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
        return $this->fieldDescriptor->isPrimaryKey();
    }

    public function getDefaultValue()
    {
        return $this->fieldDescriptor['dflt_value'];
    }


    public function getLabel()
    {
        return $this->fieldDescriptor['name'];
    }

    public function getName()
    {
        return  $this->fieldDescriptor->getName();
    }

    public function getType()
    {
        return $this->fieldDescriptor['type'];
    }

    public function isLabel($value = null)
    {
        if($value !== null) {
            $this->fieldDescriptor->isLabel($value);
        }
        return $this->fieldDescriptor->isLabel();
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


    public function jsonSerialize()
    {
        $data = [
            'name' => $this->getName(),
            'role' => '',
        ];


        if($this->isLabel()) {
            $data['role'] = 'label';
        }
        else if($this->isPrimaryKey()) {
            $data['role'] = 'primaryKey';
        }



        return $data;
    }



}
