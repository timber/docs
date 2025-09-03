---
title: "Timber\\URLHelper"
menu:
  main:
    parent: "reference"
---



<!--more-->




---

## Class Methods

### file_system_to_url
`file_system_to_url( string $fs )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $fs | `string` |  |




---

### get_content_subdir
`get_content_subdir( )`

**returns:** `string` (ex: /wp-content or /content)

Get the path to the content directory relative to the site.
This replaces the WP_CONTENT_SUBDIR constant



---

### get_current_url
`get_current_url( )`

**returns:** `string` 



---

### get_full_path
`get_full_path( string $src )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` |  |




---

### get_host
`get_host( )`

**returns:** `string` the HTTP_HOST or SERVER_NAME

Some setups like HTTP_HOST, some like SERVER_NAME, it's complicated



---

### get_params
`get_params( bool/int $i=false )`

**returns:** `array/string` 

Returns the url parameters, for example for url http://example.org/blog/post/news/2014/whatever
this will return array('blog', 'post', 'news', '2014', 'whatever');
OR if sent an integer like: TimberUrlHelper::get_params(2); this will return 'news';

| Name | Type | Description |
| --- | --- | --- |
| $i | `bool/int` | the position of the parameter to grab. |




---

### get_path_base
`get_path_base( )`

**returns:** `string` 



---

### get_rel_path
`get_rel_path( string $src )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` |  |




---

### get_rel_url
`get_rel_url( string $url, bool $force=false )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |
| $force | `bool` |  |




---

### get_scheme
`get_scheme( )`

**returns:** `string` 

Get url scheme



---

### is_absolute
`is_absolute( string $path )`

**returns:** `boolean` true if $path is an absolute url, false if relative.

This will evaluate whether a URL is at an absolute location (like http://example.org/whatever)

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` |  |




---

### is_external
`is_external( string $url )`

**returns:** `bool` true if $path is an external url, false if relative or local. true if it's a subdomain (http://cdn.example.org = true)

Checks if URL is external or internal.
Works with domains, subdomains and protocol relative domains.

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |




---

### is_external_content
`is_external_content( string $url )`

**returns:** `boolean` if $url points to an external location returns true

This function is slightly different from the one below in the case of:
an image hosted on the same domain BUT on a different site than the
WordPress install will be reported as external content.

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | a URL to evaluate against |




---

### is_local
`is_local( string $url )`

**returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |




---

### is_url
`is_url( string $url )`

**returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |




---

### prepend_to_url
`prepend_to_url( string $url, string $path )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |
| $path | `string` |  |




---

### preslashit
`preslashit( string $path )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` |  |




---

### remove_double_slashes
`remove_double_slashes( string $url )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |




---

### remove_trailing_slash
`remove_trailing_slash( string $link )`

**returns:** `string` 

Pass links through untrailingslashit unless they are a single /

| Name | Type | Description |
| --- | --- | --- |
| $link | `string` |  |




---

### remove_url_component
`remove_url_component( string $haystack, string $needle )`

**returns:** `string` 

Removes the subcomponent of a URL regardless of protocol

| Name | Type | Description |
| --- | --- | --- |
| $haystack | `string` | ex: http://example.org/wp-content/uploads/dog.jpg |
| $needle | `string` | ex: http://example.org/wp-content |




---

### starts_with
`starts_with( mixed $haystack, mixed $starts_with )`

**returns:** `boolean` 

Check to see if the URL begins with the string in question
Because it's a URL we don't care about protocol (HTTP vs HTTPS)
Or case (so it's cAsE iNsEnSeTiVe)

| Name | Type | Description |
| --- | --- | --- |
| $haystack | `mixed` |  |
| $starts_with | `mixed` |  |




---

### swap_protocol
`swap_protocol( string $url )`

**returns:** `string` ex: https://example.org/wp-content/uploads/dog.jpg

Swaps whatever protocol of a URL is sent. http becomes https and vice versa

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | ex: http://example.org/wp-content/uploads/dog.jpg |




---

### unpreslashit
`unpreslashit( string $path )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` |  |




---

### url_to_file_system
`url_to_file_system( string $url )`

**returns:** `string` 

Takes a url and figures out its place based in the file system based on path
NOTE: Not fool-proof, makes a lot of assumptions about the file path
matching the URL path

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |




---

### user_trailingslashit
`user_trailingslashit( string $link )`

**returns:** `string` 

Pass links through user_trailingslashit handling query strings properly

| Name | Type | Description |
| --- | --- | --- |
| $link | `string` |  |




---




