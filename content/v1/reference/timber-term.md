---
title: "Timber\\Term"
menu:
  main:
    parent: "reference"
---

Terms: WordPress has got 'em, you want 'em. Categories. Tags. Custom
Taxonomies. You don't care, you're a fiend. Well let's get this under control:

<!--more-->

**PHP**
```php
<?php
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
<h2>{{term_page.name}} Archives</h2>
<h3>Teams</h3>
<ul>
    <li>{{st_louis.name}} - {{st_louis.description}}</li>
    <li>{{team.name}} - {{team.description}}</li>
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

### Properties

| Name | Type | Description |
| --- | --- | --- |
name | `string` | the human-friendly name of the term (ex: French Cuisine) |
taxonomy | `string` | the WordPress taxonomy slug (ex: `post_tag` or `actors`) |
### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [children](#children) | `array` |  |
| [description](#description) | `string` |  |
| [edit_link](#edit_link) | `string` |  |
| [link](#link) | `string` |  |
| [meta](#meta) | `string` |  |
| [path](#path) | `string` |  |
| [posts](#posts) | `array/bool/null` |  |
| [title](#title) | `string` |  |

---

## Class Methods

### __construct
`__construct( mixed/int $tid=null, string $tax="" )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $tid | `mixed/int` |  |
| $tax | `string` |  |




---

### __toString
`__toString( )`

**returns:** `string` 



---

### children
`children( )`

**returns:** `array` 



---

### description
`description( )`

**returns:** `string` 



---

### edit_link
`edit_link( )`

**returns:** `string` 



---

### from
`from( mixed $tid, mixed $taxonomy )`

**returns:** `\Timber\static` 

| Name | Type | Description |
| --- | --- | --- |
| $tid | `mixed` |  |
| $taxonomy | `mixed` |  |




---

### link
`link( )`

**returns:** `string` 

Returns a full link to the term archive page like
`http://example.com/category/news`

**Twig**
```twig
See all posts in: <a href="{{ term.link }}">{{ term.name }}</a>
```

---

### meta
`meta( string $field_name )`

**returns:** `string` 

Retrieves and outputs meta information stored with a term. This will use
both data stored under (old) ACF hacks and new (WP 4.6+) where term meta
has its own table. If retrieving a special ACF field (repeater, etc.) you
can use the output immediately in Twig — no further processing is
required.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` |  |


**Twig**
```twig
<div class="location-info">
  <h2>{{ term.name }}</h2>
  <p>{{ term.meta('address') }}</p>
</div>
```

---

### path
`path( )`

**returns:** `string` 

Returns a relative link (path) to the term archive page like
`/category/news`

**Twig**
```twig
See all posts in: <a href="{{ term.path }}">{{ term.name }}</a>
```

---

### posts
`posts( mixed/int/array $numberposts_or_args=10, string $post_type_or_class="any", string $post_class="" )`

**returns:** `array/bool/null` 

Gets posts that have the current term assigned.

| Name | Type | Description |
| --- | --- | --- |
| $numberposts_or_args | `mixed/int/array` | Optional. Either the number of posts or an array of arguments for the post query that this method is going. to perform. Default `10`. |
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

### title
`title( )`

**returns:** `string` 



---

### update
`update( string $key, mixed $value )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $key | `string` |  |
| $value | `mixed` |  |




---




*This class extends \Timber\Core*

*This class implements \Timber\CoreInterface*

