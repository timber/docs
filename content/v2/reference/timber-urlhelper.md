---
title: "Timber\\​URLHelper"
linktitle: "URLHelper"
is_reference: true
---

## Overview

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [file_system_to_url()](#file_system_to_url) |  |  |
| [get_content_subdir()](#get_content_subdir) | `string` | Get the path to the content directory relative to the site.<br><br>*Returns:* (ex: /wp-content or /content) |
| [get_current_url()](#get_current_url) | `string` | Get the current URL of the page |
| [get_full_path()](#get_full_path) | `string` |  |
| [get_host()](#get_host) | `string` | Some setups like HTTP_HOST, some like SERVER_NAME, it's complicated<br><br>*Returns:* the HTTP_HOST or SERVER_NAME |
| [get_params()](#get_params) | `array` or `string` | Returns the url parameters |
| [get_path_base()](#get_path_base) | `string` |  |
| [get_rel_path()](#get_rel_path) | `string` |  |
| [get_rel_url()](#get_rel_url) | `string` |  |
| [get_scheme()](#get_scheme) | `string` | Get url scheme |
| [is_external()](#is_external) | `bool` | Determines if URL is an external URL. |
| [is_external_content()](#is_external_content) | `bool` | This function is slightly different from the one below in the case of: an image hosted on the same domain BUT on a different site than the WordPress install will be reported as external content.<br><br>*Returns:* if $url points to an external location returns true |
| [is_local()](#is_local) | `bool` |  |
| [is_url()](#is_url) | `bool` |  |
| [prepend_to_url()](#prepend_to_url) | `string` | Add something to the start of the path in an URL<br><br>*Returns:* the result (ex 'https://nytimes.com/2017/news/article.html') |
| [preslashit()](#preslashit) | `string` | Add slash (if not already present) to a path |
| [remove_double_slashes()](#remove_double_slashes) | `string` | Look for accidental slashes in a URL and remove them<br><br>*Returns:* the result (ex: http://nytimes.com/news/article.html) |
| [remove_trailing_slash()](#remove_trailing_slash) | `string` | Pass links through untrailingslashit unless they are a single / |
| [remove_url_component()](#remove_url_component) | `string` | Removes the subcomponent of a URL regardless of protocol |
| [starts_with()](#starts_with) | `bool` | Check to see if the URL begins with the string in question Because it's a URL we don't care about protocol (HTTP vs HTTPS) Or case (so it's cAsE iNsEnSeTiVe) |
| [swap_protocol()](#swap_protocol) | `string` | Swaps whatever protocol of a URL is sent. http becomes https and vice versa<br><br>*Returns:* ex: https://example.org/wp-content/uploads/dog.jpg |
| [unpreslashit()](#unpreslashit) | `string` | Remove slashes (if found) from a path |
| [url_to_file_system()](#url_to_file_system) | `string` | Takes a url and figures out its place based in the file system based on path NOTE: Not fool-proof, makes a lot of assumptions about the file path matching the URL path |
| [user_trailingslashit()](#user_trailingslashit) | `string` | Pass links through user_trailingslashit handling query strings properly |


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

Returns the url parameters

For example, for URL `http://example.org/blog/post/news/2014/whatever` this will return
`array('blog', 'post', 'news', '2014', 'whatever');` OR if sent an integer like:
`Timber\URLHelper::get_params(2);` this will return `news`.

`get_params( int $i = false )`

**Returns:** `array|string` 

| Name | Type | Description |
| --- | --- | --- |
| $i | `int` | the position of the parameter to grab. |

---

