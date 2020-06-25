---
title: "Timber\\​Term"
linktitle: "Term"
is_reference: true
---

Terms: WordPress has got 'em, you want 'em. Categories. Tags. Custom Taxonomies. You don't care,
you're a fiend. Well let's get this under control:

<!--more-->

**PHP**

```php
//Get a term by its ID
$context['term'] = new Timber\Term(6);
//Get a term when on a term archive page
$context['term_page'] = new Timber\Term();
//Get a term with a slug
$context['team'] = new Timber\Term('patriots');
//Get a team with a slug from a specific taxonomy
$context['st_louis'] = new Timber\Term('cardinals', 'baseball');
Timber::render('index.twig', $context);
```
**Twig**

```twig
<h2>{{ term_page.name }} Archives</h2>
<h3>Teams</h3>
<ul>
    <li>{{ st_louis.name}} - {{ st_louis.description }}</li>
    <li>{{ team.name}} - {{ team.description }}</li>
</ul>
```
**HTML**

```html
<h2>Team Archives</h2>
<h3>Teams</h3>
<ul>
    <li>St. Louis Cardinals - Winner of 11 World Series</li>
    <li>New England Patriots - Winner of 6 Super Bowls</li>
</ul>
```

## Overview

*This class extends `Timber\Core`*  
*This class implements `Timber\CoreInterface`, `Timber\MetaInterface`*  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $name | `string` | the human-friendly name of the term (ex: French Cuisine) |
| $taxonomy | `string` | the WordPress taxonomy slug (ex: `post_tag` or `actors`) |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__construct()](#__construct) |  |  |
| [__toString()](#__toString) | `string` | The string the term will render as by default |
| [description()](#description) | `string` | Return the description of the term |
| [edit_link()](#edit_link) | `string` |  |
| [from()](#from) | `static` |  |
| [~~get_children~~()](#get_children) | `array` |  |
| [~~get_edit_url~~()](#get_edit_url) | `string` |  |
| [~~get_field~~()](#get_field) | `mixed` | Gets a term meta value.<br><br>*Returns:* The meta field value. |
| [~~get_meta_field~~()](#get_meta_field) | `string` | Gets a term meta value.<br><br>*Returns:* The meta field value. |
| [~~get_posts~~()](#get_posts) | `array` or `bool` or `null` | Get Posts that have been "tagged" with the particular term |
| [link()](#link) | `string` | Returns a full link to the term archive page like `http://example.com/category/news` |
| [meta()](#meta) | `mixed` | Gets a term meta value.<br><br>*Returns:* The custom field value or an array of custom field values. Null if no value could be found. |
| [path()](#path) | `string` | Returns a relative link (path) to the term archive page like `/category/news` |
| [posts()](#posts) | `\Timber\PostQuery` | Gets posts that have the current term assigned. |
| [raw_meta()](#raw_meta) | `null` or `mixed` | Gets a term meta value directly from the database.<br><br>*Returns:* The custom field value(s). Null if no value could be found, an empty array if all fields were requested but no values could be found. |
| [title()](#title) | `string` |  |


## Class Methods

### \_\_construct()

`__construct( int $tid = null, string $tax = '' )`

| Name | Type | Description |
| --- | --- | --- |
| $tid | `int` |  |
| $tax | `string` |  |

---

### \_\_toString()

The string the term will render as by default

**Returns:** `string` 

---

### from()

`from(  $tid,  $taxonomy )`

**Returns:** `static` 

| Name | Type | Description |
| --- | --- | --- |
| $tid |  |  |
| $taxonomy |  |  |

---

### ~~get\_edit\_url~~()

**DEPRECATED** since 2.0.0, use `{{ term.edit_link }}` instead.

**Returns:** `string` 

---

### ~~get\_meta\_field~~()

Gets a term meta value.

**DEPRECATED** since 2.0.0, use `{{ term.meta('field_name') }}` instead.

`get_meta_field( string $field_name )`

**Returns:** `string` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### description()

Return the description of the term

**Returns:** `string` 

---

### edit\_link()

**Returns:** `string` 

---

### link()

Returns a full link to the term archive page like `http://example.com/category/news`

**Returns:** `string` 

**Twig**

```twig
See all posts in: <a href="{{ term.link }}">{{ term.name }}</a>
```

---

### meta()

Gets a term meta value.

Returns a meta value or all meta values for all custom fields of a term saved in the term
meta database table.

Fetching all values is only advised during development, because it can have a big performance
impact, when all filters are applied.

`meta( string $field_name = '', array $args = array() )`

**Returns:** `mixed` The custom field value or an array of custom field values. Null if no value
could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | Optional. The field name for which you want to get the value. If no field name is provided, this function will fetch values for all custom fields. Default empty string. |
| $args | `array` | An array of arguments for getting the meta value. Third-party integrations can use this argument to make their API arguments available in Timber. Default empty array.<br><br><ul><li>**$apply_filters**<br>`bool` Whether to apply filtering of meta values. You can also use the `raw_meta()` method as a shortcut to apply this argument. Default true.</li></ul> |

**Twig**

```twig
<div class="location-info">
  <h2>{{ term.name }}</h2>
  <p>{{ term.meta('address') }}</p>
</div>
```

---

### raw\_meta()

Gets a term meta value directly from the database.

Returns a raw meta value or all raw meta values saved in the term meta database table. In
comparison to `meta()`, this function will return raw values that are not filtered by third-
party plugins.

Fetching raw values for all custom fields will not have a big performance impact, because
WordPress gets all meta values, when the first meta value is accessed.

**since** 2.0.0 

`raw_meta( string $field_name = '', array $args = array() )`

**Returns:** `null|mixed` The custom field value(s). Null if no value could be found, an empty array
if all fields were requested but no values could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | Optional. The field name for which you want to get the value. If no field name is provided, this function will fetch values for all custom fields. Default empty string. |
| $args | `array` | Optional. An array of args for `Term::meta()`. Default empty array. |

---

### ~~get\_field~~()

Gets a term meta value.

**DEPRECATED** since 2.0.0, use `{{ term.meta('field_name') }}` instead.

**see** [Timber\Term::meta()](../timber-term/#meta)

`get_field( string $field_name = null )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### path()

Returns a relative link (path) to the term archive page like `/category/news`

**Returns:** `string` 

**Twig**

```twig
See all posts in: <a href="{{ term.path }}">{{ term.name }}</a>
```

---

### posts()

Gets posts that have the current term assigned.

`posts( int|array $numberposts_or_args = 10, string $post_type_or_class = any, string $post_class = '' )`

**Returns:** `\Timber\PostQuery` 

| Name | Type | Description |
| --- | --- | --- |
| $numberposts_or_args | `int` or `array` | Optional. Either the number of posts or an array of arguments for the post query that this method is going. to perform. Default `10`. |
| $post_type_or_class | `string` | Optional. Either the post type to get or the name of post class to use for the returned posts. Default `any`. |
| $post_class | `string` | Optional. The name of the post class to use for the returned posts. Default `Timber\Post`. |

**Twig**

```twig
<h4>Recent posts in {{ term.name }}</h4>

<ul>
{% for post in term.posts(3, 'post') %}
    <li>
        <a href="{{ post.link }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
```

If you need more control over the query that is going to be performed, you can pass your
custom query arguments in the first parameter.

**Twig**

```twig
<h4>Our branches in {{ region.name }}</h4>

<ul>
{% for branch in region.posts({
    posts_per_page: -1,
    orderby: 'menu_order'
}, 'branch', 'Branch') %}
    <li>
        <a href="{{ branch.link }}">{{ branch.title }}</a>
    </li>
{% endfor %}
</ul>
```

---

### title()

**Returns:** `string` 

---

### ~~get\_posts~~()

Get Posts that have been "tagged" with the particular term

**DEPRECATED** since 2.0.0 use `{{ term.posts }}` instead

`get_posts( int $numberposts = 10, string $post_type = any, string $PostClass = '' )`

**Returns:** `array|bool|null` 

| Name | Type | Description |
| --- | --- | --- |
| $numberposts | `int` |  |
| $post_type | `string` |  |
| $PostClass | `string` |  |

---

### ~~get\_children~~()

**DEPRECATED** since 2.0.0, use `{{ term.children }}` instead.

**Returns:** `array` 

---

