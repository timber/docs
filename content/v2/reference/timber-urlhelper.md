---
title: "Timber\\​URLHelper"
linktitle: "URLHelper"
is_reference: true
---

## Overview

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[file_system_to_url()](#file_system_to_url)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[get_content_subdir()](#get_content_subdir)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the path to the content directory relative to the site.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> (ex: /wp-content or /content)</span></span> |
| <span class="method-name">[get_current_url()](#get_current_url)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the current URL of the page</span> |
| <span class="method-name">[get_full_path()](#get_full_path)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[get_host()](#get_host)</span> | <span class="method-type">`string`</span> | <span class="method-description">Some setups like HTTP_HOST, some like SERVER_NAME, it's complicated<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the HTTP_HOST or SERVER_NAME</span></span> |
| <span class="method-name">[get_params()](#get_params)</span> | <span class="method-type">`array` or `string` or `bool`</span> | <span class="method-description">Returns the url path parameters, or a single parameter if given an index.</span> |
| <span class="method-name">[get_path_base()](#get_path_base)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[get_rel_path()](#get_rel_path)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[get_rel_url()](#get_rel_url)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[get_scheme()](#get_scheme)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get url scheme</span> |
| <span class="method-name">[is_external()](#is_external)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Determines if URL is an external URL.</span> |
| <span class="method-name">[is_external_content()](#is_external_content)</span> | <span class="method-type">`bool`</span> | <span class="method-description">This function is slightly different from the one below in the case of: an image hosted on the same domain BUT on a different site than the WordPress install will be reported as external content.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> if $url points to an external location returns true</span></span> |
| <span class="method-name">[is_local()](#is_local)</span> | <span class="method-type">`bool`</span> | <span class="method-description"></span> |
| <span class="method-name">[is_url()](#is_url)</span> | <span class="method-type">`bool`</span> | <span class="method-description"></span> |
| <span class="method-name">[prepend_to_url()](#prepend_to_url)</span> | <span class="method-type">`string`</span> | <span class="method-description">Add something to the start of the path in an URL<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the result (ex 'https://nytimes.com/2017/news/article.html')</span></span> |
| <span class="method-name">[preslashit()](#preslashit)</span> | <span class="method-type">`string`</span> | <span class="method-description">Add slash (if not already present) to a path</span> |
| <span class="method-name">[remove_double_slashes()](#remove_double_slashes)</span> | <span class="method-type">`string`</span> | <span class="method-description">Look for accidental slashes in a URL and remove them<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the result (ex: http://nytimes.com/news/article.html)</span></span> |
| <span class="method-name">[remove_trailing_slash()](#remove_trailing_slash)</span> | <span class="method-type">`string`</span> | <span class="method-description">Pass links through untrailingslashit unless they are a single /</span> |
| <span class="method-name">[remove_url_component()](#remove_url_component)</span> | <span class="method-type">`string`</span> | <span class="method-description">Removes the subcomponent of a URL regardless of protocol</span> |
| <span class="method-name">[starts_with()](#starts_with)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Check to see if the URL begins with the string in question Because it's a URL we don't care about protocol (HTTP vs HTTPS) Or case (so it's cAsE iNsEnSeTiVe)</span> |
| <span class="method-name">[swap_protocol()](#swap_protocol)</span> | <span class="method-type">`string`</span> | <span class="method-description">Swaps whatever protocol of a URL is sent. http becomes https and vice versa<br><br><span class="method-return"><span class="method-return-label">Returns:</span> ex: https://example.org/wp-content/uploads/dog.jpg</span></span> |
| <span class="method-name">[unpreslashit()](#unpreslashit)</span> | <span class="method-type">`string`</span> | <span class="method-description">Remove slashes (if found) from a path</span> |
| <span class="method-name">[url_to_file_system()](#url_to_file_system)</span> | <span class="method-type">`string`</span> | <span class="method-description">Takes a url and figures out its place based in the file system based on path NOTE: Not fool-proof, makes a lot of assumptions about the file path matching the URL path</span> |
| <span class="method-name">[user_trailingslashit()](#user_trailingslashit)</span> | <span class="method-type">`string`</span> | <span class="method-description">Pass links through user_trailingslashit handling query strings properly</span> |

</div>


## Class Methods

### get\_current\_url()

Get the current URL of the page

**Returns:** `string` 

---

### get\_scheme()

Get url scheme

**Returns:** `string` 

---

### starts\_with()

Check to see if the URL begins with the string in question
Because it's a URL we don't care about protocol (HTTP vs HTTPS)
Or case (so it's cAsE iNsEnSeTiVe)

`starts_with( $haystack, $starts_with )`

**Returns:** `bool` 

---

### is\_url()

`is_url( string $url )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |

---

### get\_path\_base()

**Returns:** `string` 

---

### get\_rel\_url()

`get_rel_url( string $url, bool $force = false )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |
| $force | `bool` |  |

---

### get\_host()

Some setups like HTTP_HOST, some like SERVER_NAME, it's complicated

**link** <http://stackoverflow.com/questions/2297403/http-host-vs-server-name>

**Returns:** `string` the HTTP_HOST or SERVER_NAME

---

### is\_local()

`is_local( string $url )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |

---

### get\_full\_path()

`get_full_path( string $src )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` |  |

---

### url\_to\_file\_system()

Takes a url and figures out its place based in the file system based on path
NOTE: Not fool-proof, makes a lot of assumptions about the file path
matching the URL path

`url_to_file_system( string $url )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |

---

### file\_system\_to\_url()

`file_system_to_url( string $fs )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $fs | `string` |  |

---

### get\_content\_subdir()

Get the path to the content directory relative to the site.

This replaces the WP_CONTENT_SUBDIR constant

**Returns:** `string` (ex: /wp-content or /content)

---

### get\_rel\_path()

`get_rel_path( string $src )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` |  |

---

### remove\_double\_slashes()

Look for accidental slashes in a URL and remove them

`remove_double_slashes( string $url )`

**Returns:** `string` the result (ex: http://nytimes.com/news/article.html)

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | to process (ex: http://nytimes.com//news/article.html) |

---

### prepend\_to\_url()

Add something to the start of the path in an URL

`prepend_to_url( string $url, string $path )`

**Returns:** `string` the result (ex 'https://nytimes.com/2017/news/article.html')

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | a URL that you want to manipulate (ex: 'https://nytimes.com/news/article.html'). |
| $path | `string` | the path you want to insert ('/2017'). |

---

### preslashit()

Add slash (if not already present) to a path

`preslashit( string $path )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` | to process. |

---

### unpreslashit()

Remove slashes (if found) from a path

`unpreslashit( string $path )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` | to process. |

---

### is\_external\_content()

This function is slightly different from the one below in the case of:
an image hosted on the same domain BUT on a different site than the
WordPress install will be reported as external content.

`is_external_content( string $url )`

**Returns:** `bool` if $url points to an external location returns true

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | a URL to evaluate against |

---

### is\_external()

Determines if URL is an external URL.

True if `$url` is an external url or subdomain (http://cdn.example.org = true). False if
relative or local true if it's a subdomain

`is_external( string $url )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | to evalute. |

---

### remove\_trailing\_slash()

Pass links through untrailingslashit unless they are a single /

`remove_trailing_slash( string $link )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $link | `string` | the URL to process. |

---

### remove\_url\_component()

Removes the subcomponent of a URL regardless of protocol

**since** 1.3.3 

`remove_url_component( string $haystack, string $needle )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $haystack | `string` | ex: http://example.org/wp-content/uploads/dog.jpg |
| $needle | `string` | ex: http://example.org/wp-content |

---

### swap\_protocol()

Swaps whatever protocol of a URL is sent. http becomes https and vice versa

**since** 1.3.3 

`swap_protocol( string $url )`

**Returns:** `string` ex: https://example.org/wp-content/uploads/dog.jpg

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | ex: http://example.org/wp-content/uploads/dog.jpg. |

---

### user\_trailingslashit()

Pass links through user_trailingslashit handling query strings properly

`user_trailingslashit( string $link )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $link | `string` | the URL to process. |

---

### get\_params()

Returns the url path parameters, or a single parameter if given an index.

Normalizes REQUEST_URI to lower-case. Returns false if given a
non-existent index.

`get_params( bool|int $i = false )`

**Returns:** `array|string|bool` 

| Name | Type | Description |
| --- | --- | --- |
| $i | `bool` or `int` | the position of the parameter to grab. |

**PHP**

```php
// Given a $_SERVER["REQUEST_URI"] of:
// http://example.org/blog/post/news/2014/whatever

$params = URLHelper::get_params();
// => ["blog", "post", "news", "2014", "whatever"]

$third = URLHelper::get_params(2);
// => "news"

// get_params() supports negative indices:
$last = URLHelper::get_params(-1);
// => "whatever"

$nada = URLHelper::get_params(99);
// => false
```

---

