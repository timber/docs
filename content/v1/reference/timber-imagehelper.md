---
title: "Timber\\ImageHelper"
menu:
  main:
    parent: "reference"
---

Implements the Twig image filters:
https://timber.github.io/docs/guides/cookbook-images/#arbitrary-resizing-of-images
- resize
- retina
- letterbox
- tojpg

Implementation:
- public static functions provide the methods that are called by the filter
- most of the work is common to all filters (URL analysis, directory gymnastics, file caching, error management) and done by private static functions
- the specific part (actual image processing) is delegated to dedicated subclasses of TimberImageOperation

<!--more-->



## Overview

### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [resize](#resize) | `string` | (ex: ) |

---

## Class Methods

### _delete_generated_if_image
`_delete_generated_if_image( int $post_id )`

**returns:** `void` 

Checks if attachment is an image before deleting generated files

| Name | Type | Description |
| --- | --- | --- |
| $post_id | `int` | an attachment post id |




---

### add_relative_upload_dir_key
`add_relative_upload_dir_key( array $arr )`

**returns:** `array` 

Adds a 'relative' key to wp_upload_dir() result.
It will contain the relative url to upload dir.

| Name | Type | Description |
| --- | --- | --- |
| $arr | `array` |  |




---

### analyze_url
`analyze_url( string $url )`

**returns:** `array` an array (see keys in code below)

Takes in an URL and breaks it into components,
that will then be used in the different steps of image processing.
The image is expected to be either part of a theme, plugin, or an upload.

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | an URL (absolute or relative) pointing to an image |




---

### delete_attachment
`delete_attachment( int $post_id )`

**returns:** `void` 

Deletes all resized versions of an image when the source is deleted.

| Name | Type | Description |
| --- | --- | --- |
| $post_id | `int` | an attachment post id |




---

### delete_generated_files
`delete_generated_files( string $local_file )`

**returns:** `void` 

Deletes the auto-generated files for resize and letterboxing created by Timber

| Name | Type | Description |
| --- | --- | --- |
| $local_file | `string` | ex: /var/www/wp-content/uploads/2015/my-pic.jpg or: http://example.org/wp-content/uploads/2015/my-pic.jpg |




---

### generate_attachment_metadata
`generate_attachment_metadata( array $metadata, int $post_id )`

**returns:** `array` 

Delete all resized version of an image when its meta data is regenerated.

| Name | Type | Description |
| --- | --- | --- |
| $metadata | `array` |  |
| $post_id | `int` | an attachment post id |




---

### get_letterbox_file_path
`get_letterbox_file_path( mixed $url, mixed $w, mixed $h, mixed $color )`

**returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `mixed` |  |
| $w | `mixed` |  |
| $h | `mixed` |  |
| $color | `mixed` |  |




---

### get_letterbox_file_url
`get_letterbox_file_url( mixed $url, mixed $w, mixed $h, mixed $color )`

**returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `mixed` |  |
| $w | `mixed` |  |
| $h | `mixed` |  |
| $color | `mixed` |  |




---

### get_resize_file_path
`get_resize_file_path( mixed $url, mixed $w, mixed $h, mixed $crop )`

**returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `mixed` |  |
| $w | `mixed` |  |
| $h | `mixed` |  |
| $crop | `mixed` |  |




---

### get_resize_file_url
`get_resize_file_url( mixed $url, mixed $w, mixed $h, mixed $crop )`

**returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $url | `mixed` |  |
| $w | `mixed` |  |
| $h | `mixed` |  |
| $crop | `mixed` |  |




---

### get_server_location
`get_server_location( string $url )`

**returns:** `string` 

Determines the filepath corresponding to a given URL

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` |  |




---

### get_sideloaded_file_loc
`get_sideloaded_file_loc( string $file )`

**returns:** `string` 

Determines the filepath where a given external file will be stored.

| Name | Type | Description |
| --- | --- | --- |
| $file | `string` |  |




---

### img_to_jpg
`img_to_jpg( string $src, string $bghex="#FFFFFF", bool $force=false )`

**returns:** `string` 

Generates a new image by converting the source GIF or PNG into JPG

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | a url or path to the image (http://example.org/wp-content/uploads/2014/image.jpg) or (/wp-content/uploads/2014/image.jpg) |
| $bghex | `string` |  |
| $force | `bool` |  |




---

### img_to_webp
`img_to_webp( string $src, mixed/int $quality=80, bool $force=false )`

**returns:** `void` 

Generates a new image by converting the source into WEBP if supported by the server

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | a url or path to the image (http://example.org/wp-content/uploads/2014/image.webp) or (/wp-content/uploads/2014/image.jpg) If webp is not supported, a jpeg image will be generated |
| $quality | `mixed/int` | ranges from (worst quality, smaller file) to 100 (best quality, biggest file) |
| $force | `bool` |  |




---

### init
`init( )`

**returns:** `void` 



---

### is_animated_gif
`is_animated_gif( string $file )`

**returns:** `boolean` true if it's an animated gif, false if not

checks to see if the given file is an aimated gif

| Name | Type | Description |
| --- | --- | --- |
| $file | `string` | local filepath to a file, not a URL |




---

### is_svg
`is_svg( string $file_path )`

**returns:** `bool` True if SVG, false if not SVG or file doesn't exist.

Checks if file is an SVG.

| Name | Type | Description |
| --- | --- | --- |
| $file_path | `string` | File path to check. |




---

### letterbox
`letterbox( string $src, int $w, int $h, bool/string $color=false, bool $force=false )`

**returns:** `string` 

Generate a new image with the specified dimensions.
New dimensions are achieved by adding colored bands to maintain ratio.

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` |  |
| $w | `int` |  |
| $h | `int` |  |
| $color | `bool/string` |  |
| $force | `bool` |  |




---

### resize
`resize( string $src, mixed $w, int $h, string $crop="default", bool $force=false )`

**returns:** `string` (ex: )

Generates a new image with the specified dimensions.
New dimensions are achieved by cropping to maintain ratio.

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | an URL (absolute or relative) to the original image |
| $w | `mixed` |  |
| $h | `int` | target height (ignored if $w is WP image size). If not set, will ignore and resize based on $w only. |
| $crop | `string` | your choices are 'default', 'center', 'top', 'bottom', 'left', 'right' |
| $force | `bool` |  |


**Twig**
```twig
<img src="{{ image.src | resize(300, 200, 'top') }}" />
```
**HTML**
```html
<img src="http://example.org/wp-content/uploads/pic-300x200-c-top.jpg" />
```

---

### retina_resize
`retina_resize( string $src, mixed/\Timber\float $multiplier=2, bool/boolean $force=false )`

**returns:** `string` url to the new image

Generates a new image with increased size, for display on Retina screens.

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` |  |
| $multiplier | `mixed/\Timber\float` |  |
| $force | `bool/boolean` |  |




---

### sideload_image
`sideload_image( string $file )`

**returns:** `string` the URL to the downloaded file

downloads an external image to the server and stores it on the server

| Name | Type | Description |
| --- | --- | --- |
| $file | `string` | the URL to the original file |




---

### theme_url_to_dir
`theme_url_to_dir( string $src )`

**returns:** `string` full path to the file in question

Converts a URL located in a theme directory into the raw file path

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | a URL (http://example.org/wp-content/themes/twentysixteen/images/home.jpg) |




---

### is_in_theme_dir
`is_in_theme_dir( string $path )`

**returns:** `bool` If the image is located in the theme directory it returns true. If not or $path doesn't exits it returns false.

Checks if uploaded image is located in theme.

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` | image path. |




---

### maybe_realpath
`maybe_realpath( string $path )`

**returns:** `string` the resolved path

Runs realpath to resolve symbolic links (../, etc). But only if it's a path and not a URL

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` |  |




---

### process_delete_generated_files
`process_delete_generated_files( string $filename, string $ext, string $dir, string $search_pattern, mixed/string $match_pattern=null )`

**returns:** `void` 

Deletes resized versions of the supplied file name.
So if passed a value like my-pic.jpg, this function will delete my-pic-500x200-c-left.jpg, my-pic-400x400-c-default.jpg, etc.

keeping these here so I know what the hell we're matching
$match = preg_match("/\/srv\/www\/wordpress-develop\/src\/wp-content\/uploads\/2014\/05\/$filename-[0-9]*x[0-9]*-c-[a-z]*.jpg/", $found_file);
$match = preg_match("/\/srv\/www\/wordpress-develop\/src\/wp-content\/uploads\/2014\/05\/arch-[0-9]*x[0-9]*-c-[a-z]*.jpg/", $filename);

| Name | Type | Description |
| --- | --- | --- |
| $filename | `string` | ex: my-pic |
| $ext | `string` | ex: jpg |
| $dir | `string` |  |
| $search_pattern | `string` | pattern of files to pluck from |
| $match_pattern | `mixed/string` | pattern of files to go forth and delete |




---




