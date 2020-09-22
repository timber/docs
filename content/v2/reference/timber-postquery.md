---
title: "Timber\\​PostQuery"
linktitle: "PostQuery"
is_reference: true
---

Query for a collection of WordPress posts.

This is the equivalent of using `WP_Query` in normal WordPress development.

PostCollections are used directly in Twig templates to iterate through a collection of posts and
retrieve meta information about it.

<!--more-->

## Overview

*This class extends `Timber\PostCollection`*  
  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $found_posts | `int` | The amount of posts found in the query. |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__construct()](#__construct) |  | Query for a collection of WordPress posts. |
| [pagination()](#pagination) | `\Timber\Pagination` | Get pagination for a post collection.<br><br>*Returns:* object |


## Class Methods

### \_\_construct()

Query for a collection of WordPress posts.

Refer to the official documentation for
[WP_Query](https://developer.wordpress.org/reference/classes/wp_query/) for a list of all
the arguments that can be used for the `$query` parameter.

`__construct( array $args = array() )`

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` | Optional. An array of arguments.<br><br><ul><li>**$query**<br>`mixed` Optional. A query string or an array of arguments for `WP_Query`. Default `false`, which means that the default WordPress query is used.</li><li>**$post_class**<br>`string` or `array` Optional. Class string or class map to wrap the post objects in the collection. Default `Timber\Post`.</li><li>**$merge_default**<br>`bool` Optional. Whether to merge the arguments passed in `query` with the default arguments that WordPress uses for the current template. Default `false`.</li></ul> |

**PHP**

```php
// Get posts from default query
$posts = new Timber\PostQuery();

// Get custom posts collection with a query string
$posts = new Timber\PostQuery( array(
    'query' => 'post_type=article',
) );

// Using the WP_Query argument format
$posts = new Timber\PostQuery( array(
    'query' => array(
        'post_type'     => 'article',
        'category_name' => 'sports',
    ),
) );

// Using a class map for $post_class
$posts = new Timber\PostQuery( array(
    'query' => array(
        'post_type' => 'any',
    ),
    'post_class' => array(
        'portfolio' => 'MyPortfolioClass',
        'alert'     => 'MyAlertClass',
    ),
) );
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

