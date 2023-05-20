---
title: "Timber\\​ImageDimensions"
linktitle: "ImageDimensions"
is_reference: true
---

Helper class to deal with Image Dimensions

<!--more-->

## Overview

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$file_loc</span> | <span class="property-type">`string`</span> | <span class="property-description">The absolute path to the image in the filesystem (Example: `/var/www/htdocs/wp-content/uploads/2015/08/my-pic.jpg`)</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[aspect()](#aspect)</span> | <span class="method-type">`float` or `null`</span> | <span class="method-description">Gets the aspect ratio of the image.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The aspect ratio of the image. Null if the aspect ratio can’t be calculated.</span></span> |
| <span class="method-name">[height()](#height)</span> | <span class="method-type">`int` or `null`</span> | <span class="method-description">Gets the height of the image in pixels.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The height of the image in pixels. Null if the height can’t be read, e.g. because the file doesn’t exist.</span></span> |
| <span class="method-name">[width()](#width)</span> | <span class="method-type">`int` or `null`</span> | <span class="method-description">Gets the width of the image in pixels.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The width of the image in pixels. Null if the width can’t be read, e.g. because the file doesn’t exist.</span></span> |

</div>


## Class Methods

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
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" width="1600" />
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
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" height="900" />
```

---

### aspect()

Gets the aspect ratio of the image.

**Returns:** `float|null` The aspect ratio of the image. Null if the aspect ratio can’t be calculated.

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

