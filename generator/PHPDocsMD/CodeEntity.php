<?php
namespace PHPDocsMD;


/**
 * Object describing a piece of code
 * @package PHPDocsMD
 */
class CodeEntity
{
    /**
     * @var string
     */
    private $name='';

    /**
     * @var string
     */
    private $description = '';

    /**
     * @var bool
     */
    private $isDeprecated = false;

    /**
     * @var string
     */
    private $deprecationMessage = '';

    /**
     * @var string
     */
    private $example = '';

    /**
     * @var array
     */
    private $tags = array();


    /**
     * @param bool|null $toggle
     * @return bool
     */
    public function isDeprecated($toggle = null)
    {
        if ($toggle !== null) {
            $this->isDeprecated = (bool) $toggle;
        }

        return $this->isDeprecated;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $deprecationMessage
     */
    public function setDeprecationMessage($deprecationMessage)
    {
        $this->deprecationMessage = $deprecationMessage;
    }

    /**
     * @return string
     */
    public function getDeprecationMessage()
    {
        return $this->deprecationMessage;
    }

    /**
     * @param string $example
     */
    public function setExample($example)
    {
        $this->example = $example;
    }

    /**
     * @return string
     */
    public function getExample()
    {
        return $this->example;
    }

    /**
     * @return bool
     */
    public function hasTag($tag)
    {
        if (isset($this->tags[$tag])) {
            return true;
        }
        return false;
    }

    public function setTags($tags)
    {
        $this->tags = $tags;
    }

    /**
     * @return array
     */
    public function getTags()
    {
        return $this->tags;
    }
}
