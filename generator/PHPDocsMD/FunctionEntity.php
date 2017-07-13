<?php

namespace PHPDocsMD;

/**
 * Object describing a function
 * @package PHPDocsMD
 */
class FunctionEntity extends CodeEntity
{
    /**
     * @var \PHPDocsMD\ParamEntity[]
     */
    private $params = array();

    /**
     * @var string
     */
    private $returnType = 'void';

    /**
     * @var string
     */
    private $visibility = 'public';

    /**
     * @var bool
     */
    private $abstract = false;

    /**
     * @var bool
     */
    private $hasInternalTag = false;

    /**
     * @var bool
     */
    private $isStatic = false;

    /**
     * @var string
     */
    private $class = '';

    /**
     * @param null|bool $toggle
     * @return bool
     */
    public function isStatic($toggle = null)
    {
        if ($toggle === null) {
            return $this->isStatic;
        } else {
            $this->isStatic = (bool)$toggle;
        }

        return false;
    }

    /**
     * @param null|bool $toggle
     * @return bool
     */
    public function isAbstract($toggle = null)
    {
        if ($toggle === null) {
            return $this->abstract;
        } else {
            $this->abstract = (bool)$toggle;
        }

        return false;
    }

    /**
     * @return bool
     */
    public function hasInternalTag($toggle = null)
    {
        if ($toggle === null) {
            return $this->hasInternalTag;
        } else {
            $this->hasInternalTag = (bool)$toggle;
        }

        return false;
    }

    /**
     * @return bool
     */
    public function hasParams()
    {
        return !empty($this->params);
    }

    /**
     * @param \PHPDocsMD\ParamEntity[] $params
     */
    public function setParams(array $params)
    {
        $this->params = $params;
    }

    /**
     * @return \PHPDocsMD\ParamEntity[]
     */
    public function getParams()
    {
        return $this->params;
    }

    /**
     * @param string $returnDesc
     */
    public function setReturnDesc($returnDesc)
    {
        $this->returnDesc = $returnDesc;
    }

    /**
     * @return string
     */
    public function getReturnDesc()
    {
        return $this->returnDesc;
    }

    /**
     * @param string $returnType
     */
    public function setReturnType($returnType)
    {
        $this->returnType = $returnType;
    }

    /**
     * @return string
     */
    public function getReturnType()
    {
        return $this->returnType;
    }

    /**
     * @param string $visibility
     */
    public function setVisibility($visibility)
    {
        $this->visibility = $visibility;
    }

    /**
     * @return string
     */
    public function getVisibility()
    {
        return $this->visibility;
    }

    /**
     * @param string $class
     */
    public function setClass($class)
    {
        $this->class = $class;
    }

    /**
     * @return string
     */
    public function getClass()
    {
        return $this->class;
    }

    /**
     * @return string
     */
    public function getDefinition()
    {
        $str = $this->getName().'(';
        $i = 0;

        foreach ($this->getParams() as $param) {
            if ($i > 0) {
                $str .= ',';
            }
            $str .= ' ' . $param->getType() . ' ' . $param->getName();
            if ($param->getDefault()) {
                $str .= '=' . str_replace("'", '"', $param->getDefault());
            }
            $i++;
        }

        $str .= ' )';
        return $str;
    }
}

