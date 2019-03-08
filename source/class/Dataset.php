<?php


namespace Planck\Model;

use Planck\Traits\IsApplicationObject;

class Dataset extends \Phi\Model\Dataset
{

    use IsApplicationObject;

    /** @var  Repository */
    protected $repository;

    public function loadForeignEntity($foreignRepositoryName, $foreignKey, $targetFieldName)
    {

        $foreignRepository = $this->getApplication()->getModelRepository($foreignRepositoryName);

        $values = array();
        foreach ($this->getAll() as $entity) {
            $values[$entity->getValue($foreignKey)] = $entity->getValue($foreignKey);
        }


        $query ="
            SELECT * FROM ".$foreignRepository->getTableName()."
            WHERE id IN (".implode(',', $values).")
        ";

        $dataset = $foreignRepository->queryAndGetDataset($query)->indexBy('id');

        foreach ($this->getAll() as $entity) {
            if(isset($dataset[$entity->getValue($foreignKey)])) {
                $foreignEntity = $dataset[$entity->getValue($foreignKey)];
                $entity->setValue($targetFieldName, $foreignEntity);
            }
        }

        return $dataset;
    }

    /**
     * @return Entity[]
     */
    public function getAll()
    {
        return parent::getAll();
    }


    /**
     * @return array
     */
    public function toExtendedArray()
    {
        $data = [];
        foreach ($this->getAll() as $entity) {
            $data[] = $entity->toExtendedArray();
        }

        return $data;

    }

    public function wrapEntity(Entity $entity)
    {
        $this->setValues(array($entity));
    }



}


