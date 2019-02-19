<?php

namespace Planck\Model;


class Segment implements \JsonSerializable
{

    /**
     * @var Entity[]
     */
    protected $entities;

    /**
     * @var Repository
     */
    protected $repository;


    protected $selectedFields;

    protected $offset;

    protected $limit;

    protected $totalRows;

    public function __construct(Repository $repository, array $selectedFields = null, $offset = null, $limit = null, $totalRows = null)
    {

        $this->repository = $repository;


        $this->selectedFields = $selectedFields;

        $this->totalRows = $totalRows;
        $this->offset = $offset;
        $this->limit = $limit;
    }


    public function setRepository(Repository $repository)
    {
        $this->repository = $repository;
        return $this;
    }



    public function setEntities(array $entities)
    {
        $this->entities = $entities;
        return $this;
    }

    public function setTotal($total)
    {
        $this->totalRows = $total;
        return $this;
    }

    public function setFields(array $fields)
    {
        $this->selectedFields = $fields;
        return $this;
    }

    public function setOffset($offset)
    {
        $this->offset = $offset;
        return $this;
    }

    public function setLimit($limit)
    {
        $this->limit = $limit;
        return $this;
    }


    public function jsonSerialize()
    {

        $fieldDescriptors = [
            'roles' => [
                'primaryKey' => $this->repository->getDescriptor()->getPrimaryKeyField(),
                'label' => $this->repository->getDescriptor()->getLabelField(),
            ],
            'items' => []
        ];

        foreach ($this->selectedFields as $fieldName) {
            $fieldDescriptors['items'][$fieldName] = $this->repository->getDescriptor()->getFieldByName($fieldName);
        }

        //=======================================================

        $values  = [];
        foreach ($this->entities as $entity) {
            $values[]= $entity->getValues($this->selectedFields);
        }

        //=======================================================


        $segmentCount = 0;
        $currentSegment = 0;
        if($this->limit) {
            $segmentCount = ceil($this->totalRows/$this->limit);
            $currentSegment = floor($this->offset/$this->limit);
        }

        //=======================================================

        $response = array(
            'metadata' => array(
                'entityType' => get_class($this->repository->getEntityInstance()),
                'fields' => $fieldDescriptors,
                'count' => $this->totalRows,
                'segment' => array(
                    'offset' => $this->offset,
                    'limit' => $this->limit,
                    'count' => $segmentCount,
                    'currentIndex' => $currentSegment,
                )
            ),
            'entities' => $values
        );


        return $response;


    }



}
