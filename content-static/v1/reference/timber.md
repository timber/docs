
---
title: "Timber\\Timber"
menu:
  main:
    parent: "reference"
---

Timber Class.

Main class called Timber for this plugin.

<!--more-->

**PHP**
```php
<?php
 $posts = Timber::get_posts();
 $posts = Timber::get_posts('post_type = article')
 $posts = Timber::get_posts(array('post_type' => 'article', 'category_name' => 'sports')); // uses wp_query format.
 $posts = Timber::get_posts(array(23,24,35,67), 'InkwellArticle');
 $context = Timber::context(); // returns wp favorites!
 $context['posts'] = $posts;
 Timber::render('index.twig', $context);
```

## Overview

### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [compile](#compile) | `bool/string` | The returned output. |
| [compile_string](#compile_string) | `bool/string` |  |
| [context](#context) | `array` |  |
| [fetch](#fetch) | `bool/string` | The returned output. |
| [get_context](#get_context) | `array` |  |
| [get_pagination](#get_pagination) | `array` | mixed |
| [get_post](#get_post) | `\Timber\Post/bool` | Timber\Post object if a post was found, false if no post was found. |
| [get_posts](#get_posts) | `array/bool/null` |  |
| [get_sidebar](#get_sidebar) | `bool/string` |  |
| [get_sidebar_from_php](#get_sidebar_from_php) | `string` |  |
| [get_sites](#get_sites) | `array` |  |
| [get_term](#get_term) | `\Timber\Timber\Term/\Timber\WP_Error/null` |  |
| [get_terms](#get_terms) | `mixed` |  |
| [get_widgets](#get_widgets) | `string` |  |
| [query_post](#query_post) | `\Timber\Post/array/bool/null` |  |
| [query_posts](#query_posts) | `\Timber\PostCollection` |  |
| [render](#render) | `bool/string` | The echoed output. |
| [render_string](#render_string) | `bool/string` |  |

---

## Class Methods

### __construct
`__construct( )`

**returns:** `void` 



---

### <strike>add_route</strike>
**DEPRECATED** since 0.20.0 and will be removed in 1.1

`add_route( string $route, \Timber\callable $callback, array $args=array() )`

**returns:** `void` 

Add route.

| Name | Type | Description |
| --- | --- | --- |
| $route | `string` |  |
| $callback | `\Timber\callable` |  |
| $args | `array` |  |




---

### compile
`compile( array/string $filenames, array $data=array(), bool/bool/int $expires=false, string $cache_mode="default", bool $via_render=false )`

**returns:** `bool/string` The returned output.

Compile a Twig file.

Passes data to a Twig file and returns the output.
If the template file doesn't exist it will throw a warning when WP_DEBUG is enabled.

| Name | Type | Description |
| --- | --- | --- |
| $filenames | `array/string` | Name of the Twig file to render. If this is an array of files, Timber will render the first file that exists. |
| $data | `array` | Optional. An array of data to use in Twig template. |
| $expires | `bool/bool/int` | Optional. In seconds. Use false to disable cache altogether. When passed an array, the first value is used for non-logged in visitors, the second for users. Default false. |
| $cache_mode | `string` | Optional. Any of the cache mode constants defined in TimberLoader. |
| $via_render | `bool` | Optional. Whether to apply optional render or compile filters. Default false. |


**PHP**
```php
<?php
$data = array(
    'firstname' => 'Jane',
    'lastname' => 'Doe',
    'email' => 'jane.doe@example.org',
);
$team_member = Timber::compile( 'team-member.twig', $data );
```

---

### compile_string
`compile_string( string $string, array $data=array() )`

**returns:** `bool/string` 

Compile a string.

| Name | Type | Description |
| --- | --- | --- |
| $string | `string` | A string with Twig variables. |
| $data | `array` | Optional. An array of data to use in Twig template. |


**PHP**
```php
<?php
$data = array(
    'username' => 'Jane Doe',
);
$welcome = Timber::compile_string( 'Hi {{ username }}, I’m a string with a custom Twig variable', $data );
```

---

### context
`context( )`

**returns:** `array` 

Alias for Timber::get_context() which is deprecated in 2.0.

This will allow us to update the starter theme to use the ::context() method and better
prepare users for the upgrade (even if the details of what the method returns differs
slightly).



---

### fetch
`fetch( array/string $filenames, array $data=array(), bool/bool/int $expires=false, string $cache_mode="default" )`

**returns:** `bool/string` The returned output.

Fetch function.

| Name | Type | Description |
| --- | --- | --- |
| $filenames | `array/string` | Name of the Twig file to render. If this is an array of files, Timber will render the first file that exists. |
| $data | `array` | Optional. An array of data to use in Twig template. |
| $expires | `bool/bool/int` | Optional. In seconds. Use false to disable cache altogether. When passed an array, the first value is used for non-logged in visitors, the second for users. Default false. |
| $cache_mode | `string` | Optional. Any of the cache mode constants defined in TimberLoader. |




---

### get_context
`get_context( )`

**returns:** `array` 

Get context.



---

### get_pagination
`get_pagination( array $prefs=array() )`

**returns:** `array` mixed

Get pagination.

| Name | Type | Description |
| --- | --- | --- |
| $prefs | `array` |  |




---

### get_post
`get_post( bool/mixed $query=false, string/string/array $PostClass="Timber\Post" )`

**returns:** `\Timber\Post/bool` Timber\Post object if a post was found, false if no post was found.

Get a post by post ID or query (as a query string or an array of arguments).
But it's also cool

| Name | Type | Description |
| --- | --- | --- |
| $query | `bool/mixed` | Optional. Post ID or query (as query string or an array of arguments for WP_Query). If a query is provided, only the first post of the result will be returned. Default false. |
| $PostClass | `string/string/array` | Optional. Class to use to wrap the returned post object. Default 'Timber\Post'. |




---

### get_posts
`get_posts( bool/mixed $query=false, string/string/array $PostClass="Timber\Post", bool $return_collection=false )`

**returns:** `array/bool/null` 

Get posts.

| Name | Type | Description |
| --- | --- | --- |
| $query | `bool/mixed` |  |
| $PostClass | `string/string/array` |  |
| $return_collection | `bool` |  |


**PHP**
```php
<?php
$posts = Timber::get_posts();
 $posts = Timber::get_posts('post_type = article')
 $posts = Timber::get_posts(array('post_type' => 'article', 'category_name' => 'sports')); // uses wp_query format.
 $posts = Timber::get_posts('post_type=any', array('portfolio' => 'MyPortfolioClass', 'alert' => 'MyAlertClass')); //use a classmap for the $PostClass
```

---

### get_sidebar
`get_sidebar( string $sidebar="sidebar.php", array $data=array() )`

**returns:** `bool/string` 

Get sidebar.

| Name | Type | Description |
| --- | --- | --- |
| $sidebar | `string` |  |
| $data | `array` |  |




---

### get_sidebar_from_php
`get_sidebar_from_php( string $sidebar="", array $data )`

**returns:** `string` 

Get sidebar from PHP

| Name | Type | Description |
| --- | --- | --- |
| $sidebar | `string` |  |
| $data | `array` |  |




---

### get_sites
`get_sites( bool/array/bool $blog_ids=false )`

**returns:** `array` 

Get sites.

| Name | Type | Description |
| --- | --- | --- |
| $blog_ids | `bool/array/bool` |  |




---

### get_term
`get_term( int/\Timber\WP_Term/object $term, string $taxonomy="post_tag", string $TermClass="Timber\Term" )`

**returns:** `\Timber\Timber\Term/\Timber\WP_Error/null` 

Get term.

| Name | Type | Description |
| --- | --- | --- |
| $term | `int/\Timber\WP_Term/object` |  |
| $taxonomy | `string` |  |
| $TermClass | `string` |  |




---

### get_terms
`get_terms( mixed/string/array $args=null, array $maybe_args=array(), string $TermClass="Timber\Term" )`

**returns:** `mixed` 

Get terms.

| Name | Type | Description |
| --- | --- | --- |
| $args | `mixed/string/array` |  |
| $maybe_args | `array` |  |
| $TermClass | `string` |  |




---

### get_widgets
`get_widgets( int/string $widget_id )`

**returns:** `string` 

Get widgets.

| Name | Type | Description |
| --- | --- | --- |
| $widget_id | `int/string` | Optional. Index, name or ID of dynamic sidebar. Default 1. |




---

### init_constants
`init_constants( )`

**returns:** `void` 



---

### query_post
`query_post( bool/mixed $query=false, string $PostClass="Timber\Post" )`

**returns:** `\Timber\Post/array/bool/null` 

Query post.

| Name | Type | Description |
| --- | --- | --- |
| $query | `bool/mixed` |  |
| $PostClass | `string` |  |




---

### query_posts
`query_posts( bool/mixed $query=false, string $PostClass="Timber\Post" )`

**returns:** `\Timber\PostCollection` 

Query posts.

| Name | Type | Description |
| --- | --- | --- |
| $query | `bool/mixed` |  |
| $PostClass | `string` |  |




---

### render
`render( array/string $filenames, array $data=array(), bool/bool/int $expires=false, string $cache_mode="default" )`

**returns:** `bool/string` The echoed output.

Render function.

Passes data to a Twig file and echoes the output.

| Name | Type | Description |
| --- | --- | --- |
| $filenames | `array/string` | Name of the Twig file to render. If this is an array of files, Timber will render the first file that exists. |
| $data | `array` | Optional. An array of data to use in Twig template. |
| $expires | `bool/bool/int` | Optional. In seconds. Use false to disable cache altogether. When passed an array, the first value is used for non-logged in visitors, the second for users. Default false. |
| $cache_mode | `string` | Optional. Any of the cache mode constants defined in TimberLoader. |


**PHP**
```php
<?php
$context = Timber::context();
Timber::render( 'index.twig', $context );
```

---

### render_string
`render_string( string $string, array $data=array() )`

**returns:** `bool/string` 

Render a string with Twig variables.

| Name | Type | Description |
| --- | --- | --- |
| $string | `string` | A string with Twig variables. |
| $data | `array` | An array of data to use in Twig template. |


**PHP**
```php
<?php
$data = array(
    'username' => 'Jane Doe',
);
Timber::render_string( 'Hi {{ username }}, I’m a string with a custom Twig variable', $data );
```

---

### init
`init( )`

**returns:** `void` 



---

### test_compatibility
`test_compatibility( )`

**returns:** `void` 

Tests whether we can use Timber



---




