
---
title: "Timber\\Archives"
menu:
  main:
    parent: "reference"
---

The TimberArchives class is used to generate a menu based on the date archives of your posts. The [Nieman Foundation News site](http://nieman.harvard.edu/news/) has an example of how the output can be used in a real site ([screenshot](https://cloud.githubusercontent.com/assets/1298086/9610076/3cdca596-50a5-11e5-82fd-acb74c09c482.png)).

<!--more-->

**PHP**
```php
<?php
$context['archives'] = new TimberArchives( $args );
```
**Twig**
```twig
<ul>
{% for item in archives.items %}
    <li><a href="{{item.link}}">{{item.name}}</a></li>
    {% for child in item.children %}
        <li class="child"><a href="{{child.link}}">{{child.name}}</a></li>
    {% endfor %}
{% endfor %}
</ul>
```
**HTML**
```html
<ul>
    <li>2015</li>
    <li class="child">May</li>
    <li class="child">April</li>
    <li class="child">March</li>
    <li class="child">February</li>
    <li class="child">January</li>
    <li>2014</li>
    <li class="child">December</li>
    <li class="child">November</li>
    <li class="child">October</li>
</ul>
```

## Overview

### Properties

| Name | Type | Description |
| --- | --- | --- |
items | `array` | the items of the archives to iterate through and markup for your page |
### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [__construct](#__construct) | `void` |  |
| [get_items](#get_items) | `array/string` |  |

---

## Class Methods

### __construct
`__construct( mixed $args=null, string $base="" )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $args | `mixed` | array of arguments { |
| $base | `string` | any additional paths that need to be prepended to the URLs that are generated, for example: "tags" |




---

### get_items
`get_items( mixed/array/string $args=null )`

**returns:** `array/string` 

| Name | Type | Description |
| --- | --- | --- |
| $args | `mixed/array/string` |  |




---




*This class extends \Timber\Core*

