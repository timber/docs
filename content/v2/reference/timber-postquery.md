---
title: "Timber\\​PostQuery"
linktitle: "PostQuery"
is_reference: true
---

Query for a collection of WordPress posts.

This is the equivalent of using `WP_Query` in normal WordPress development.

PostQuery is used directly in Twig templates to iterate through post query results and
retrieve meta information about them.

<!--more-->

## Overview

*This class extends `ArrayObject`*  
*This class implements `Timber\PostCollectionInterface`, `JsonSerializable`*  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$found_posts</span> | <span class="property-type">`int`</span> | <span class="property-description">The amount of posts found in the query.</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__construct()](#__construct)</span> | <span class="method-type"></span> | <span class="method-description">Query for a collection of WordPress posts.</span> |
| <span class="method-name">[pagination()](#pagination)</span> | <span class="method-type">`\Timber\Pagination`</span> | <span class="method-description">Get pagination for a post collection.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> object</span></span> |

</div>


## Class Methods

### \_\_construct()

Query for a collection of WordPress posts.

Refer to the official documentation for
[WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) for a list of all
the arguments that can be used for the `$query` parameter.

`__construct( \WP_Query $query )`

| Name | Type | Description |
| --- | --- | --- |
| $query | `\WP_Query` | The WP_Query object to wrap. |

**PHP**

```php
// Get posts from default query
global $wp_query;
$posts = Timber::get_posts( $wp_query );

// Using the WP_Query argument format
$posts = Timber::get_posts( [
    'post_type'     => 'article',
    'category_name' => 'sports',
] );

// Passing a WP_Query instance
$posts = Timber::get_posts( new WP_Query( 'post_type=any' ) );
```

---

### pagination()

Get pagination for a post collection.

Refer to the [Pagination Guide]({{< relref "../guides/pagination.md" >}}) for a detailed usage example.

Optionally could be used to get pagination with custom preferences.

`pagination( array $prefs = array() )`

**Returns:** `\Timber\Pagination` object

| Name | Type | Description |
| --- | --- | --- |
| $prefs | `array` | Optional. Custom preferences. Default `array()`. |

**Twig**

```twig
{% if posts.pagination.prev %}
    <a href="{{ posts.pagination.prev.link }}">Prev</a>
{% endif %}

<ul class="pages">
    {% for page in posts.pagination.pages %}
        <li>
            <a href="{{ page.link }}" class="{{ page.class }}">{{ page.title }}</a>
        </li>
    {% endfor %}
</ul>

{% if posts.pagination.next %}
    <a href="{{ posts.pagination.next.link }}">Next</a>
{% endif %}
```

---

