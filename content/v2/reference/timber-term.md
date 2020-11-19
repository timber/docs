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
// Get a term by its ID
$context['term'] = Timber::get_term(6);

// Get a term when on a term archive page
$context['term_page'] = Timber::get_term();

// Get a term with a slug
$context['team'] = Timber::get_term('patriots');
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

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$name</span> | <span class="property-type">`string`</span> | <span class="property-description">the human-friendly name of the term (ex: French Cuisine)</span> |
| <span class="property-name">$taxonomy</span> | <span class="property-type">`string`</span> | <span class="property-description">the WordPress taxonomy slug (ex: `post_tag` or `actors`)</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description">The string the term will render as by default</span> |
| <span class="method-name">[description()](#description)</span> | <span class="method-type">`string`</span> | <span class="method-description">Return the description of the term</span> |
| <span class="method-name">[edit_link()](#edit_link)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[from()](#from)</span> | <span class="method-type">`static`</span> | <span class="method-description"></span> |
| <span class="method-name">[~~get_children~~()](#get_children)</span> | <span class="method-type">`array`</span> | <span class="method-description"></span> |
| <span class="method-name">[~~get_edit_url~~()](#get_edit_url)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[~~get_field~~()](#get_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a term meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[~~get_meta_field~~()](#get_meta_field)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets a term meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[~~get_posts~~()](#get_posts)</span> | <span class="method-type">`array` or `bool` or `null`</span> | <span class="method-description">Get Posts that have been "tagged" with the particular term</span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description">Returns a full link to the term archive page like `http://example.com/category/news`</span> |
| <span class="method-name">[meta()](#meta)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a term meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The custom field value or an array of custom field values. Null if no value could be found.</span></span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description">Returns a relative link (path) to the term archive page like `/category/news`</span> |
| <span class="method-name">[posts()](#posts)</span> | <span class="method-type">`\Timber\PostQuery`</span> | <span class="method-description">Gets posts that have the current term assigned.</span> |
| <span class="method-name">[raw_meta()](#raw_meta)</span> | <span class="method-type">`null` or `mixed`</span> | <span class="method-description">Gets a term meta value directly from the database.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The custom field value(s). Null if no value could be found, an empty array if all fields were requested but no values could be found.</span></span> |
| <span class="method-name">[title()](#title)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |

</div>


## Class Methods

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

**see** https://timber.github.io/docs/v2/guides/posts/

`posts( $query = [], string $post_type_or_class = null )`

**Returns:** `\Timber\PostQuery` 

| Name | Type | Description |
| --- | --- | --- |
| $numberposts_or_args | `int` or `array` | Optional. Either the number of posts or an array of arguments for the post query to be performed. Default is an empty array, the equivalent of: ```php [   'posts_per_page' => get_option('posts_per_page'),   'post_type'      => 'any',   'tax_query'      => [ ...tax query for this Term... ] ] ``` |
| $post_type_or_class | `string` | Deprecated. Before Timber 2.x this was a post_type to be used for querying posts OR the Timber\Post subclass to instantiate for each post returned. As of Timber 2.0.0, specify `post_type` in the `$query` array argument. To specify the class, use Class Maps. |

Query the default posts_per_page for this Term:

**Twig**

```twig
<h4>Recent posts in {{ term.name }}</h4>

<ul>
{% for post in term.posts() %}
    <li>
        <a href="{{ post.link }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
```

Query exactly 3 Posts from this Term:

**Twig**

```twig
<h4>Recent posts in {{ term.name }}</h4>

<ul>
{% for post in term.posts(3) %}
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
    post_type: 'branch',
    posts_per_page: -1,
    orderby: 'menu_order'
}) %}
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

`get_posts( int $numberposts = 10 )`

**Returns:** `array|bool|null` 

| Name | Type | Description |
| --- | --- | --- |
| $numberposts | `int` |  |

---

### ~~get\_children~~()

**DEPRECATED** since 2.0.0, use `{{ term.children }}` instead.

**Returns:** `array` 

---

