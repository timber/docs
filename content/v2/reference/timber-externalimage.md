---
title: "Timber\\​ExternalImage"
linktitle: "ExternalImage"
is_reference: true
---

The `Timber\ExternalImage` class represents an image that is not part of the WordPress content (Attachment).
Instead, it’s an image that can be either a path (relative/absolute) on the same server, or a URL (either from the
same or from a different website). When you use a URL of an image on a different website, Timber will load it into
your WordPress installation once and then load it from there.

<!--more-->

**PHP**

```php
$context = Timber::context();

// Lets say you have an external image that you want to use in your theme

$context['cover_image'] = Timber::get_external_image($url);

Timber::render('single.twig', $context);
```

**Twig**

```twig
<article>
  <img src="{{ cover_image.src }}" class="cover-image" />
  <h1 class="headline">{{ post.title }}</h1>
  <div class="body">
    {{ post.content }}
  </div>
</article>
```

**HTML**

```html
<article>
  <img src="https://example.org/wp-content/uploads/2015/06/nevermind.jpg" class="cover-image" />
  <h1 class="headline">Now you've done it!</h1>
  <div class="body">
    Whatever whatever
  </div>
</article>
```

## Overview

*This class implements `Timber\ImageInterface`*  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$alt_text</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$caption</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$file_loc</span> | <span class="property-type">`string`</span> | <span class="property-description">The absolute path to the attachmend file in the filesystem (Example: `/var/www/htdocs/wp-content/themes/my-theme/images/`)</span> |
| <span class="property-name">$file_extension</span> | <span class="property-type">`string`</span> | <span class="property-description">A file extension.</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the src for an attachment.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The src of the attachment.</span></span> |
| <span class="method-name">[alt()](#alt)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the alt text for an image.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Alt text stored in WordPress.</span></span> |
| <span class="method-name">[aspect()](#aspect)</span> | <span class="method-type">`float`</span> | <span class="method-description">Gets the aspect ratio of the image.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The aspect ratio of the image.</span></span> |
| <span class="method-name">[extension()](#extension)</span> | <span class="method-type">`string` or `null`</span> | <span class="method-description">Gets the extension of the attached file.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> An uppercase extension string.</span></span> |
| <span class="method-name">[file_loc()](#file_loc)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the absolute path to the image.</span> |
| <span class="method-name">[height()](#height)</span> | <span class="method-type">`int` or `null`</span> | <span class="method-description">Gets the height of the image in pixels.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The height of the image in pixels. Null if the height can’t be read, e.g. because the file doesn’t exist.</span></span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the relative path to the file.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The relative path to the image file.</span></span> |
| <span class="method-name">[size()](#size)</span> | <span class="method-type">`null` or `int`</span> | <span class="method-description">Gets filesize in a human-readable format.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Filsize or null if the filesize couldn't be determined.</span></span> |
| <span class="method-name">[src()](#src)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the source URL for the image.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The src URL for the image.</span></span> |
| <span class="method-name">[width()](#width)</span> | <span class="method-type">`int` or `null`</span> | <span class="method-description">Gets the width of the image in pixels.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The width of the image in pixels. Null if the width can’t be read, e.g. because the file doesn’t exist.</span></span> |

</div>


## Class Methods

### src()

Gets the source URL for the image.

`src( string $size = 'full' )`

**Returns:** `string` The src URL for the image.

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` | Ignored. For compatibility with Timber\Image. |

**Twig**

```twig
<img src="{{ post.thumbnail.src }}">
<img src="{{ post.thumbnail.src('medium') }}">
```
**HTML**

```html
<img src="https://example.org/wp-content/uploads/2015/08/pic.jpg" />
<img src="https://example.org/wp-content/uploads/2015/08/pic-800-600.jpg">
```

---

### path()

Gets the relative path to the file.

**Returns:** `string` The relative path to the image file.

**Twig**

```twig
<img src="{{ image.path }}" />
```
**HTML**

```html
<img src="/wp-content/uploads/2015/08/pic.jpg" />
```

---

### file\_loc()

Gets the absolute path to the image.

**Returns:** `string` 

---

### size()

Gets filesize in a human-readable format.

This can be useful if you want to display the human-readable filesize for a file. It’s
easier to read «16 KB» than «16555 bytes» or «1 MB» than «1048576 bytes».

**since** 2.0.0

**Returns:** `null|int` Filsize or null if the filesize couldn't be determined.

Use filesize information in a link that downloads a file:

**Twig**

```twig
<a class="download" href="{{ attachment.src }}" download="{{ attachment.title }}">
    <span class="download-title">{{ attachment.title }}</span>
    <span class="download-info">(Download, {{ attachment.size }})</span>
</a>
```

---

### \_\_toString()

Gets the src for an attachment.

**Returns:** `string` The src of the attachment.

---

### extension()

Gets the extension of the attached file.

**since** 2.0.0

**Returns:** `string|null` An uppercase extension string.

Use extension information in a link that downloads a file:

**Twig**

```twig
<a class="download" href="{{ attachment.src }}" download="{{ attachment.title }}">
    <span class="download-title">{{ attachment.title }}</span>
    <span class="download-info">
        (Download {{ attachment.extension|upper }}, {{ attachment.size }})
    </span>
</a>
```

---

### width()

Gets the width of the image in pixels.

**Returns:** `int|null` The width of the image in pixels. Null if the width can’t be read, e.g. because the file doesn’t
exist.

**Twig**

```twig
<img src="{{ image.src }}" width="{{ image.width }}" />
```
**HTML**

```html
<img src="https://example.org/wp-content/uploads/2015/08/pic.jpg" width="1600" />
```

---

### height()

Gets the height of the image in pixels.

**Returns:** `int|null` The height of the image in pixels. Null if the height can’t be read, e.g. because the file
doesn’t exist.

**Twig**

```twig
<img src="{{ image.src }}" height="{{ image.height }}" />
```
**HTML**

```html
<img src="https://example.org/wp-content/uploads/2015/08/pic.jpg" height="900" />
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
<img
    src="https://example.org/wp-content/uploads/2015/08/pic.jpg"
    alt="You should always add alt texts to your images for better accessibility"
/>
```

---

