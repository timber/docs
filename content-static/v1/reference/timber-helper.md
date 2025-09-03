---
title: "Timber\\Helper"
menu:
  main:
    parent: "reference"
---

As the name suggests these are helpers for Timber (and you!) when developing. You can find additional (mainly internally-focused helpers) in TimberURLHelper

<!--more-->



## Overview

### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [ob_function](#ob_function) | `string` |  |
| [start_timer](#start_timer) | `\Timber\float` |  |
| [transient](#transient) | `mixed` |  |

---

## Class Methods

### array_to_object
`array_to_object( array $array )`

**returns:** `\stdClass` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |




---

### array_truncate
`array_truncate( array $array, int $len )`

**returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $len | `int` |  |




---

### <strike>close_tags</strike>
**DEPRECATED** since 1.2.0

`close_tags( string $html )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $html | `string` |  |




---

### convert_wp_object
`convert_wp_object( \Timber\mix $obj )`

**returns:** `\Timber\mix` Instance of equivalent Timber object, or the argument if no match is found

Converts a WP object (WP_Post, WP_Term) into his
equivalent Timber class (Timber\Post, Timber\Term).

If no match is found the function will return the initial argument.

| Name | Type | Description |
| --- | --- | --- |
| $obj | `\Timber\mix` | WP Object |




---

### error_log
`error_log( mixed $error )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $error | `mixed` |  |




---

### filter_array
`filter_array( array $list, \Timber\callback/string/array $arrow, string $operator="AND" )`

**returns:** `array` 

Filters a list of objects, based on a set of key => value arguments.
Uses native Twig Filter.

| Name | Type | Description |
| --- | --- | --- |
| $list | `array` | to filter. |
| $arrow | `\Timber\callback/string/array` | function used for filtering, string or array for backward compatibility. |
| $operator | `string` | to use (AND, NOT, OR). For backward compatibility. |




---

### <strike>function_wrapper</strike>
**DEPRECATED** since 1.3.0

`function_wrapper( mixed $function_name, array $defaults=array(), bool $return_output_buffer=false )`

**returns:** `\Timber\FunctionWrapper/mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $function_name | `mixed` | String or array( $class( string|object ), $function_name ). |
| $defaults | `array` |  |
| $return_output_buffer | `bool` | Optional. Return function output instead of return value. Default false. |




---

### <strike>get_comment_form</strike>
**DEPRECATED** 0.21.8 use `{{ function('comment_form') }}` instead

`get_comment_form( mixed/int $post_id=null, array $args=array() )`

**returns:** `string` 

Gets the comment form for use on a single article page

| Name | Type | Description |
| --- | --- | --- |
| $post_id | `mixed/int` | which post_id should the form be tied to? |
| $args | `array` |  |




---

### get_current_url
`get_current_url( )`

**returns:** `string` 



---

### get_object_by_property
`get_object_by_property( array $array, string $key, mixed $value )`

**returns:** `array/null` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $key | `string` |  |
| $value | `mixed` |  |




---

### get_object_index_by_property
`get_object_index_by_property( array $array, string $key, mixed $value )`

**returns:** `bool/int` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $key | `string` |  |
| $value | `mixed` |  |




---

### get_wp_title
`get_wp_title( string $separator=" ", string $seplocation="left" )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $separator | `string` |  |
| $seplocation | `string` |  |




---

### is_array_assoc
`is_array_assoc( array $arr )`

**returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $arr | `array` |  |




---

### is_true
`is_true( mixed $value )`

**returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $value | `mixed` |  |




---

### iseven
`iseven( int $i )`

**returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $i | `int` |  |




---

### isodd
`isodd( int $i )`

**returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $i | `int` |  |




---

### ob_function
`ob_function( \Timber\callback $function, array $args=array() )`

**returns:** `string` 

Calls a function with an output buffer. This is useful if you have a function that outputs text that you want to capture and use within a twig template.

| Name | Type | Description |
| --- | --- | --- |
| $function | `\Timber\callback` |  |
| $args | `array` |  |


**PHP**
```php
<?php
function the_form() {
    echo '<form action="form.php"><input type="text" /><input type="submit /></form>';
}
$context = Timber::context();
$context['post'] = new Timber\Post();
$context['my_form'] = TimberHelper::ob_function('the_form');
Timber::render('single-form.twig', $context);
```
**Twig**
```twig
<h1>{{ post.title }}</h1>
{{ my_form }}
```
**HTML**
```html
<h1>Apply to my contest!</h1>
<form action="form.php"><input type="text" /><input type="submit /></form>
```

---

### osort
`osort( array $array, string $prop )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $prop | `string` |  |




---

### <strike>paginate_links</strike>
**DEPRECATED** since 1.1.2

`paginate_links( array $args=array() )`

**returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` |  |




---

### pluck
`pluck( array $array, string $key )`

**returns:** `void` 

Plucks the values of a certain key from an array of objects

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $key | `string` |  |




---

### start_timer
`start_timer( )`

**returns:** `\Timber\float` 

For measuring time, this will start a timer



---

### stop_timer
`stop_timer( int $start )`

**returns:** `string` 

For stopping time and getting the data

| Name | Type | Description |
| --- | --- | --- |
| $start | `int` |  |


**PHP**
```php
<?php
$start = TimberHelper::start_timer();
// do some stuff that takes awhile
echo TimberHelper::stop_timer( $start );
```

---

### transient
`transient( string $slug, \Timber\callable $callback, \Timber\integer $transient_time, mixed/\Timber\integer $lock_timeout=5, bool/boolean $force=false )`

**returns:** `mixed` 

A utility for a one-stop shop for Transients

| Name | Type | Description |
| --- | --- | --- |
| $slug | `string` | Unique identifier for transient |
| $callback | `\Timber\callable` | Callback that generates the data that's to be cached |
| $transient_time | `\Timber\integer` | (optional) Expiration of transients in seconds |
| $lock_timeout | `mixed/\Timber\integer` | (optional) How long (in seconds) to lock the transient to prevent race conditions |
| $force | `bool/boolean` | (optional) Force callback to be executed when transient is locked |


**PHP**
```php
<?php
$context = Timber::context();
$context['favorites'] = Timber\Helper::transient('user-' .$uid. '-favorites', function() use ($uid) {
 	//some expensive query here that's doing something you want to store to a transient
 	return $favorites;
}, 600);
Timber::render('single.twig', $context);
```

---

### <strike>trim_words</strike>
**DEPRECATED** since 1.2.0

`trim_words( string $text, mixed/int $num_words=55, mixed/string/null/false $more=null, string $allowed_tags="p a span b i br blockquote" )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` |  |
| $num_words | `mixed/int` |  |
| $more | `mixed/string/null/false` | text to appear in "Read more...". Null to use default, false to hide |
| $allowed_tags | `string` |  |




---

### warn
`warn( string $message )`

**returns:** `boolean` 

| Name | Type | Description |
| --- | --- | --- |
| $message | `string` | that you want to output |




---

### wp_list_filter
`wp_list_filter( array $list, string/array $args, string $operator="AND" )`

**returns:** `array` 

Filters a list of objects, based on a set of key => value arguments.
Uses WordPress WP_List_Util's filter.

| Name | Type | Description |
| --- | --- | --- |
| $list | `array` | to filter. |
| $args | `string/array` | to search for. |
| $operator | `string` | to use (AND, NOT, OR). |




---

### handle_transient_locking
`handle_transient_locking( string $slug, \Timber\callable $callback, \Timber\integer $transient_time, \Timber\integer $lock_timeout, boolean $force, boolean $enable_transients )`

**returns:** `void` 

Does the dirty work of locking the transient, running the callback and unlocking

| Name | Type | Description |
| --- | --- | --- |
| $slug | `string` |  |
| $callback | `\Timber\callable` |  |
| $transient_time | `\Timber\integer` | Expiration of transients in seconds |
| $lock_timeout | `\Timber\integer` | How long (in seconds) to lock the transient to prevent race conditions |
| $force | `boolean` | Force callback to be executed when transient is locked |
| $enable_transients | `boolean` | Force callback to be executed when transient is locked |




---




