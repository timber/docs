---
title: "Timber\\​ImageHelper"
linktitle: "ImageHelper"
is_reference: true
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

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [img_to_jpg()](#img_to_jpg) | `string` | Generates a new image by converting the source GIF or PNG into JPG.<br><br>*Returns:* The URL of the processed image. |
| [is_animated_gif()](#is_animated_gif) | `bool` | Checks to see if the given file is an animated GIF.<br><br>*Returns:* True if it’s an animated GIF, false if not. |
| [letterbox()](#letterbox) | `string` | Generate a new image with the specified dimensions. |
| [resize()](#resize) | `string` | Generates a new image with the specified dimensions.<br><br>*Returns:* The URL of the resized image. |
| [retina_resize()](#retina_resize) | `string` | Generates a new image with increased size, for display on Retina screens.<br><br>*Returns:* URL to the new image. |


## Class Methods

### resize()

Generates a new image with the specified dimensions.

New dimensions are achieved by cropping to maintain ratio.

`resize( string $src, int|string $w, int $h = '', string $crop = default, bool $force = false )`

**Returns:** `string` The URL of the resized image.

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | A URL (absolute or relative) to the original image. |
| $w | `int` or `string` | Target width (int) or WordPress image size (WP-set or user-defined). |
| $h | `int` | Optional. Target height (ignored if `$w` is WP image size). If not set, will ignore and resize based on `$w` only. Default `0`. |
| $crop | `string` | Optional. Your choices are `default`, `center`, `top`, `bottom`, `left`, `right`. Default `default`. |
| $force | `bool` | Optional. Whether to remove any already existing result file and force file generation. Default `false`. |

**Twig**

```twig
<img src="{{ image.src | resize(300, 200, 'top') }}" />
```
**HTML**

```html
<img src="http://example.org/wp-content/uploads/pic-300x200-c-top.jpg" />
```

---

### retina\_resize()

Generates a new image with increased size, for display on Retina screens.

`retina_resize( string $src, float $multiplier = 2, bool $force = false )`

**Returns:** `string` URL to the new image.

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | URL of the file to read from. |
| $multiplier | `float` | Optional. Factor the original dimensions should be multiplied with. Default `2`. |
| $force | `bool` | Optional. Whether to remove any already existing result file and force file generation. Default `false`. |

---

### is\_animated\_gif()

Checks to see if the given file is an animated GIF.

`is_animated_gif( string $file )`

**Returns:** `bool` True if it’s an animated GIF, false if not.

| Name | Type | Description |
| --- | --- | --- |
| $file | `string` | Local filepath to a file, not a URL. |

---

### letterbox()

Generate a new image with the specified dimensions.

New dimensions are achieved by adding colored bands to maintain ratio.

`letterbox( string $src, int $w, int $h, string $color = false, bool $force = false )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` |  |
| $w | `int` |  |
| $h | `int` |  |
| $color | `string` |  |
| $force | `bool` |  |

---

### img\_to\_jpg()

Generates a new image by converting the source GIF or PNG into JPG.

`img_to_jpg( string $src, string $bghex = #FFFFFF, $force = false )`

**Returns:** `string` The URL of the processed image.

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | A URL or path to the image (http://example.org/wp-content/uploads/2014/image.jpg) or (/wp-content/uploads/2014/image.jpg). |
| $bghex | `string` | The hex color to use for transparent zones. |

---

