<?php
namespace Planck\Model;

use Planck\Application\Traits\HasModel;
use Planck\Helper\StringUtil;

class Join
{

    use HasModel;


    /**
     * @var Repository
     */
    protected $sourceRepository;

    protected $sourceKey;

    /**
     * @var Repository
     */
    protected $foreignRepository;
    protected $foreignKey;


    protected $extraConditions;


    public function __construct(Repository $sourceRepository, $sourceKey, $foreignRepository, $foreignKey = null, array $extraConditions = null)
    {
        $this->sourceRepository = $sourceRepository;

        $this->extraConditions = $extraConditions;


        if($foreignRepository instanceof Repository) {
            $this->foreignRepository = $sourceRepository;
        }
        else {

            if(!class_exists($foreignRepository)) {
                throw new Exception('Repository with class name '.$foreignRepository.' does not exist');
            }

            if(!is_a($foreignRepository, Repository::class, true)) {
                throw new Exception($foreignRepository.' is not a valid repository');
            }

            $this->foreignRepository = $this->sourceRepository->getModel()->getRepository(
               $foreignRepository
            );
        }

        $this->sourceKey = $sourceKey;
        if(!$foreignKey) {
            $foreignKey = $this->foreignRepository->getPrimaryKeyFieldName();
        }
        $this->foreignKey = $foreignKey;
    }

    public function getJoin()
    {

        $foreignTableAlias = $this->getForeignRepositoryAlias();

        $tableName = $this->foreignRepository->getTableName();

        $join = "
            JOIN ".$tableName." ".$foreignTableAlias."
                ON ".$this->sourceRepository->getTableName().".".$this->sourceKey." = ".$foreignTableAlias.'.'.$this->foreignKey.
        "";


        if($this->extraConditions) {
            foreach ( $this->extraConditions as $condition) {

                $join .= "
                    AND ".$foreignTableAlias.".".$condition.
                "";
            }

        }

        
        return $join;
    }

    public function getForeignEntity($values)
    {
        $entity = $this->foreignRepository->getEntityInstance();
        foreach ($values as $alias => $value) {

            $tableName = $this->getForeignRepositoryAlias();
            if(preg_match('`^'.$tableName.'_`', $alias)) {
                $fieldName = preg_replace('`^'.$tableName.'_`', '', $alias);
                $entity->setValue($fieldName, $value);
            }
        }
        return $entity;

    }
    
    
    
    
    

    public function getSelectedFields()
    {
        $fields = $this->foreignRepository->getEntityFields();

        $alias = [];

        foreach ($fields as $field) {
            $alias[] = $this->getForeignRepositoryAlias().'.'.$field.' as '.$this->getForeignRepositoryFiedAlias($field);
        }

        return $alias;

    }

    protected function getForeignRepositoryAlias()
    {
        return $this->foreignRepository->getTableName().'__';
    }

    protected function getForeignRepositoryFiedAlias($fieldName)
    {
        return $this->getForeignRepositoryAlias().'_'.$fieldName;
    }




}

