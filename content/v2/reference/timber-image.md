---
title: "Timber\\​Image"
linktitle: "Image"
is_reference: true
---

The `Timber\Image` class represents WordPress attachments that are images.

<!--more-->

**PHP**

```php
$context         = Timber::context();

// Lets say you have an alternate large 'cover image' for your post
// stored in a custom field which returns an image ID.
$cover_image_id = $context['post']->cover_image;
$context['cover_image'] = new Timber\Image($cover_image_id);
Timber::render('single.twig', $context);
```

**Twig**

```twig
<article>
  <img src="{{cover_image.src}}" class="cover-image" />
  <h1 class="headline">{{post.title}}</h1>
  <div class="body">
    {{post.content}}
  </div>

 <img
   src="{{ Image(post.custom_field_with_image_id).src }}"
   alt="Another way to initialize images as Timber\Image objects, but within Twig" />
</article>
```

**HTML**

```html
<article>
  <img src="http://example.org/wp-content/uploads/2015/06/nevermind.jpg" class="cover-image" />
  <h1 class="headline">Now you've done it!</h1>
  <div class="body">
    Whatever whatever
  </div>
  <img
    src="http://example.org/wp-content/uploads/2015/06/kurt.jpg"
    alt="Another way to initialize images as Timber\Image objects, but within Twig" />
</article>
```

## Overview

*This class extends `Timber\Attachment`*  
  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $object_type | `string` | What the object represents in WordPress terms. |
| $representation | `string` | What does this class represent in WordPress terms? |
| $sizes | `array` | An array of available sizes for the image. |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [alt()](#alt) | `string` | Gets the alt text for an image.<br><br>*Returns:* Alt text stored in WordPress. |
| [aspect()](#aspect) | `float` | Gets the aspect ratio of the image.<br><br>*Returns:* The aspect ratio of the image. |
| [height()](#height) | `int` | Gets the height of the image in pixels.<br><br>*Returns:* The height of the image in pixels. |
| [img_sizes()](#img_sizes) | `bool` or `string` |  |
| [src()](#src) | `bool` or `string` | Gets the source URL for the image.<br><br>*Returns:* The src URL for the image. |
| [srcset()](#srcset) | `bool` or `string` |  |
| [width()](#width) | `int` | Gets the width of the image in pixels.<br><br>*Returns:* The width of the image in pixels. |


## Class Methods

### src()

Gets the source URL for the image.

You can use WordPress image sizes (including the ones you registered with your theme or
plugin) by passing the name of the size to this function (like `medium` or `large`). If the
WordPress size has not been generated, it will return an empty string.

`src( string $size = full )`

**Returns:** `bool|string` The src URL for the image.

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` | Optional. The requested image size. This can be a size that was in WordPress. Example: `medium` or `large`. Default `full`. |

**Twig**

```twig
<img src="{{ post.thumbnail.src }}">
<img src="{{ post.thumbnail.src('medium') }}">
```
**HTML**

```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" />
<img src="http://example.org/wp-content/uploads/2015/08/pic-800-600.jpg">
```

---

### width()

Gets the width of the image in pixels.

**Returns:** `int` The width of the image in pixels.

**Twig**

```twig
<img src="{{ image.src }}" width="{{ image.width }}" />
```
**HTML**

```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" width="1600" />
```

---

### height()

Gets the height of the image in pixels.

**Returns:** `int` The height of the image in pixels.

**Twig**

```twig
<img src="{{ image.src }}" height="{{ image.height }}" />
```
**HTML**

```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" height="900" />
```

---

### aspect()

Gets the aspect ratio of the image.

**Returns:** `float` The aspect ratio of the image.

**Twig**

```twig
{% if post.thumbnail.aspect < 1 %}
  {# handle vertical image #}
  <img src="{{ post.thumbnail.src|resize(300, 500) }}" alt="A basketball player" />
{% else %}
  <img src="{{ post.thumbnail.src|resize(500) }}" alt="A sumo wrestler" />
{% endif %}
```

---

### alt()

Gets the alt text for an image.

For better accessibility, you should always add an alt attribute to your images, even if it’s
empty.

**Returns:** `string` Alt text stored in WordPress.

**Twig**

```twig
<img src="{{ image.src }}" alt="{{ image.alt }}" />
```
**HTML**

```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg"
    alt="You should always add alt texts to your images for better accessibility" />
```

---

### srcset()

`srcset( string $size = full )`

**Returns:** `bool|string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` | a size known to WordPress (like "medium") |

**Twig**

```twig
<h1>{{ post.title }}</h1>
<img src="{{ post.thumbnail.src }}" srcset="{{ post.thumbnail.srcset }}" />
```
**HTML**

```html
<img src="http://example.org/wp-content/uploads/2018/10/pic.jpg" srcset="http://example.org/wp-content/uploads/2018/10/pic.jpg 1024w, http://example.org/wp-content/uploads/2018/10/pic-600x338.jpg 600w, http://example.org/wp-content/uploads/2018/10/pic-300x169.jpg 300w" />
```

---

### img\_sizes()

`img_sizes( string $size = full )`

**Returns:** `bool|string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` | a size known to WordPress (like "medium") |

**Twig**

```twig
<h1>{{ post.title }}</h1>
<img src="{{ post.thumbnail.src }}" srcset="{{ post.thumbnail.srcset }}" sizes="{{ post.thumbnail.img_sizes }}" />
```
**HTML**

```html
<img src="http://example.org/wp-content/uploads/2018/10/pic.jpg" srcset="http://example.org/wp-content/uploads/2018/10/pic.jpg 1024w, http://example.org/wp-content/uploads/2018/10/pic-600x338.jpg 600w, http://example.org/wp-content/uploads/2018/10/pic-300x169.jpg 300w sizes="(max-width: 1024px) 100vw, 102" />
```

---
