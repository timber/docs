---
title: "Timber\\​Helper"
linktitle: "Helper"
is_reference: true
---

As the name suggests these are helpers for Timber (and you!) when developing. You can find additional
(mainly internally-focused helpers) in Timber\URLHelper.

<!--more-->

## Overview

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[array_to_object()](#array_to_object)</span> | <span class="method-type">`\stdClass`</span> | <span class="method-description"></span> |
| <span class="method-name">[array_truncate()](#array_truncate)</span> | <span class="method-type">`array`</span> | <span class="method-description"></span> |
| <span class="method-name">[deprecated()](#deprecated)</span> | <span class="method-type">`void`</span> | <span class="method-description">Triggers a deprecation warning.</span> |
| <span class="method-name">[doing_it_wrong()](#doing_it_wrong)</span> | <span class="method-type"></span> | <span class="method-description">Marks something as being incorrectly called.</span> |
| <span class="method-name">[error_log()](#error_log)</span> | <span class="method-type">`void`</span> | <span class="method-description">Output a value (string, array, object, etc.) to the error log</span> |
| <span class="method-name">[get_object_by_property()](#get_object_by_property)</span> | <span class="method-type">`array` or `null`</span> | <span class="method-description"></span> |
| <span class="method-name">[get_object_index_by_property()](#get_object_index_by_property)</span> | <span class="method-type">`bool` or `int`</span> | <span class="method-description"></span> |
| <span class="method-name">[get_wp_title()](#get_wp_title)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[is_array_assoc()](#is_array_assoc)</span> | <span class="method-type">`bool`</span> | <span class="method-description"></span> |
| <span class="method-name">[is_true()](#is_true)</span> | <span class="method-type">`bool`</span> | <span class="method-description"></span> |
| <span class="method-name">[iseven()](#iseven)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Is the number even? Let's find out.</span> |
| <span class="method-name">[isodd()](#isodd)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Is the number odd? Let's find out.</span> |
| <span class="method-name">[ob_function()](#ob_function)</span> | <span class="method-type">`string`</span> | <span class="method-description">Calls a function with an output buffer. This is useful if you have a function that outputs text that you want to capture and use within a twig template.</span> |
| <span class="method-name">[osort()](#osort)</span> | <span class="method-type">`void`</span> | <span class="method-description">Sorts object arrays by properties.</span> |
| <span class="method-name">[pluck()](#pluck)</span> | <span class="method-type">`array`</span> | <span class="method-description">Plucks the values of a certain key from an array of objects</span> |
| <span class="method-name">[start_timer()](#start_timer)</span> | <span class="method-type">`float`</span> | <span class="method-description">For measuring time, this will start a timer.</span> |
| <span class="method-name">[stop_timer()](#stop_timer)</span> | <span class="method-type">`string`</span> | <span class="method-description">For stopping time and getting the data.</span> |
| <span class="method-name">[transient()](#transient)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">A utility for a one-stop shop for transients.</span> |
| <span class="method-name">[warn()](#warn)</span> | <span class="method-type">`void`</span> | <span class="method-description">Trigger a warning.</span> |
| <span class="method-name">[wp_list_filter()](#wp_list_filter)</span> | <span class="method-type">`array`</span> | <span class="method-description">Filters a list of objects, based on a set of key => value arguments.</span> |

</div>


## Class Methods

### transient()

A utility for a one-stop shop for transients.

`transient( string $slug, callable $callback, int $transient_time = '', int $lock_timeout = 5, bool $force = false )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $slug | `string` | Unique identifier for transient |
| $callback | `callable` | Callback that generates the data that's to be cached |
| $transient_time | `int` | (optional) Expiration of transients in seconds |
| $lock_timeout | `int` | (optional) How long (in seconds) to lock the transient to prevent race conditions |
| $force | `bool` | (optional) Force callback to be executed when transient is locked |

**PHP**

```php
$context = Timber::context( [
    'favorites' => Timber\Helper::transient( 'user-' . $uid . '-favorites' , function() use ( $uid ) {
         // Some expensive query here that’s doing something you want to store to a transient.
         return $favorites;
    }, 600 ),
] );

Timber::render('single.twig', $context);
```

---

### start\_timer()

For measuring time, this will start a timer.

**Returns:** `float` 

---

### stop\_timer()

For stopping time and getting the data.

`stop_timer( int $start )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $start | `int` |  |

**PHP**

```php
$start = Timber\Helper::start_timer();
// do some stuff that takes awhile
echo Timber\Helper::stop_timer( $start );
```

---

### ob\_function()

Calls a function with an output buffer. This is useful if you have a function that outputs
text that you want to capture and use within a twig template.

`ob_function( callable $function, array $args = [null] )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $function | `callable` |  |
| $args | `array` |  |

**PHP**

```php
function the_form() {
    echo '<form action="form.php"><input type="text" /><input type="submit /></form>';
}

$context = Timber::context( [
    'form' => Timber\Helper::ob_function( 'the_form' ),
] );

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

### error\_log()

Output a value (string, array, object, etc.) to the error log

`error_log( mixed $error )`

**Returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $arg | `mixed` | that you want to error_log |

---

### warn()

Trigger a warning.

`warn( string $message )`

**Returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $message | `string` | The warning that you want to output. |

---

### doing\_it\_wrong()

Marks something as being incorrectly called.

There is a hook 'doing_it_wrong_run' that will be called that can be used
to get the backtrace up to what file and function called the deprecated
function.

The current behavior is to trigger a user error if `WP_DEBUG` is true.

If you want to catch errors like these in tests, then add the @expectedIncorrectUsage tag.
E.g.: "@expectedIncorrectUsage Timber::get_posts()".

**see** _doing_it_wrong()

**since** 2.0.0

`doing_it_wrong( string $function, string $message, string $version )`

| Name | Type | Description |
| --- | --- | --- |
| $function | `string` | The function that was called. |
| $message | `string` | A message explaining what has been done incorrectly. |
| $version | `string` | The version of Timber where the message was added. |

---

### deprecated()

Triggers a deprecation warning.

If you want to catch errors like these in tests, then add the @expectedDeprecated tag to the
DocBlock. E.g.: "@expectedDeprecated {{ TimberImage() }}".

**see** _deprecated_function()

`deprecated( string $function, string $replacement, string $version )`

**Returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $function | `string` | The name of the deprecated function/method. |
| $replacement | `string` | The name of the function/method to use instead. |
| $version | `string` | The version of Timber when the function was deprecated. |

---

### get\_wp\_title()

`get_wp_title( string $separator = ' ', string $seplocation = 'left' )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $separator | `string` |  |
| $seplocation | `string` |  |

---

### osort()

Sorts object arrays by properties.

`osort( array $array, string $prop )`

**Returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` | The array of objects to sort. |
| $prop | `string` | The property to sort by. |

---

### is\_array\_assoc()

`is_array_assoc( array $arr )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $arr | `array` |  |

---

### array\_to\_object()

`array_to_object( array $array )`

**Returns:** `\stdClass` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |

---

### get\_object\_index\_by\_property()

`get_object_index_by_property( array $array, string $key, mixed $value )`

**Returns:** `bool|int` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $key | `string` |  |
| $value | `mixed` |  |

---

### get\_object\_by\_property()

`get_object_by_property( array $array, string $key, mixed $value )`

**Returns:** `array|null` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $key | `string` |  |
| $value | `mixed` |  |

---

### array\_truncate()

`array_truncate( array $array, int $len )`

**Returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $len | `int` |  |

---

### is\_true()

`is_true( mixed $value )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $value | `mixed` |  |

---

### iseven()

Is the number even? Let's find out.

`iseven( int $i )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $i | `int` | number to test. |

---

### isodd()

Is the number odd? Let's find out.

`isodd( int $i )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $i | `int` | number to test. |

---

### pluck()

Plucks the values of a certain key from an array of objects

`pluck( array $array, string $key )`

**Returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $array | `array` |  |
| $key | `string` |  |

---

### wp\_list\_filter()

Filters a list of objects, based on a set of key => value arguments.

Uses WordPress WP_List_Util's filter.

**since** 1.5.3

`wp_list_filter( array $list, string|array $args, string $operator = 'AND' )`

**Returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $list | `array` | to filter. |
| $args | `string` or `array` | to search for. |
| $operator | `string` | to use (AND, NOT, OR). |

---

