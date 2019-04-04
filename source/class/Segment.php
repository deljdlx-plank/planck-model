<?php

namespace Planck\Model;


class Segment extends \Phi\Model\Segment
{



    public function jsonSerialize()
    {

        $serialized = parent::jsonSerialize();
        return $serialized;



        $fieldDescriptors = [
            'roles' => [
                'primaryKey' => $this->repository->getDescriptor()->getPrimaryKeyField(),
                'label' => $this->repository->getDescriptor()->getLabelField(),
            ],
            //'items' => []
        ];

        //=======================================================

        $values  = [];
        foreach ($this->entities as $entity) {
            $values[]= $entity->getValues();
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




    }



}
