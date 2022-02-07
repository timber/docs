---
title: "Timber\\​Archives"
linktitle: "Archives"
is_reference: true
---

The `Timber\Archives` class is used to generate a menu based on the date archives of your posts.

The [Nieman Foundation News site](http://nieman.harvard.edu/news/) has an example of how the
output can be used in a real site ([screenshot](https://cloud.githubusercontent.com/assets/1298086/9610076/3cdca596-50a5-11e5-82fd-acb74c09c482.png)).

<!--more-->

**PHP**

```php
$context['archives'] = new Timber\Archives( $args );
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

*This class extends `Timber\Core`*  
  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$base</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$items</span> | <span class="property-type">`array`</span> | <span class="property-description">The items of the archives to iterate through and markup for your page.</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__construct()](#__construct)</span> | <span class="method-type"></span> | <span class="method-description">Build an Archives menu</span> |
| <span class="method-name">[~~get_items~~()](#get_items)</span> | <span class="method-type">`array` or `string`</span> | <span class="method-description">Gets archive items.</span> |
| <span class="method-name">[items()](#items)</span> | <span class="method-type">`array` or `string`</span> | <span class="method-description"></span> |

</div>


## Class Methods

### \_\_construct()

Build an Archives menu

`__construct( array $args = null, string $base = '' )`

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` | Optional. Array of arguments.<br><br><ul><li>**$show_year**<br>`bool` false</li><li>**$**<br>`string`</li><li>**$type**<br>`string` 'monthly-nested'</li><li>**$limit**<br>`int` -1</li><li>**$show_post_count**<br>`bool` false</li><li>**$order**<br>`string` 'DESC'</li><li>**$post_type**<br>`string` 'post'</li><li>**$show_year**<br>`bool` false</li><li>**$nested**<br>`bool` false</li></ul> |
| $base | `string` | Any additional paths that need to be prepended to the URLs that are generated, for example: "tags". Default ''. |

---

### ~~get\_items~~()

Gets archive items.

**DEPRECATED** since 2.0.0, use `{{ archives.items }}` instead.

**see** [Timber\Archives::items()](../timber-archives/#items)

`get_items( mixed $args = null )`

**Returns:** `array|string` 

---

### items()

`items( array|string $args = null )`

**Returns:** `array|string` 

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` or `string` | Optional. Array of arguments. |

---

