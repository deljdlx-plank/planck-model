<?php
namespace Planck\Model\Traits;



use Planck\Helper\StringUtil;
use Planck\Model\Exception;

Trait HasSlug
{

    protected $slugFieldName = 'slug';


    public function getSlugFieldName()
    {
        return $this->slugFieldName;
    }


    public function setSlugFromString($string)
    {
        $slug = StringUtil::slugify($string);

        $this->setValue(
            $this->getSlugFieldName(),
            $slug
        );
        return $this;
    }

    protected function HasQNameDoBeforeInsert()
    {
        if(!$this->getValue($this->getSlugFieldName())) {
            $labelField = $this->getLabelFieldName();
            if(!$labelField) {
                throw new Exception('Can not set slug automatically. No field assume Label role ('.get_class($this).')');
            }
            $this->setSlugFromString(
                $this->getValue($labelField)
            );
        }
        return true;
    }




}
