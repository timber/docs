---
title: "Timber\\​Attachment"
linktitle: "Attachment"
is_reference: true
---

Objects of this class represent WordPress attachments. This is the basis that `Timber\Image`
objects build upon.

<!--more-->

## Overview

*This class extends `Timber\Post`*  
*This class implements `Timber\CoreInterface`*  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $file | `mixed` |  |
| $file_loc | `string` | The absolute path to the attachmend file in the filesystem (Example: `/var/www/htdocs/wp-content/uploads/2015/08/my-pic.jpg`) |
| $file_size_raw | `int` | Raw file size in bytes. |
| $file_size | `null` or `string` | File size string. |
| $file_extension | `null` or `string` | A file extension. |
| $id | `int` | The attachment ID. |
| $caption | `string` | The caption that is stored as post_excerpt in the posts table in the database. |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__construct()](#__construct) |  | Creates a new `Timber\Attachment` object. |
| [__toString()](#__toString) | `string` | Gets the src for an attachment.<br><br>*Returns:* The src of the attachment. |
| [extension()](#extension) | `null` or `string` | Gets the extension of the attached file.<br><br>*Returns:* An uppercase extension string. |
| [get_pathinfo()](#get_pathinfo) | `array` | Gets a PHP array with pathinfo() info from the file.<br><br>*Returns:* Path info from the file. |
| [link()](#link) | `string` | Gets the link to an attachment.<br><br>*Returns:* The URL of the attachment. |
| [parent()](#parent) | `bool` or `\Timber\Post` | Gets the parent object.<br><br>*Returns:* Parent object as a `Timber\Post`. Returns `false` if no parent object is defined. |
| [path()](#path) | `string` | Gets the relative path to an attachment.<br><br>*Returns:* The relative path to an attachment. |
| [size()](#size) | `mixed` or `null` | Gets filesize in a human readable format.<br><br>*Returns:* The filesize string in a human readable format. |
| [size_raw()](#size_raw) | `mixed` or `null` | Gets filesize in bytes.<br><br>*Returns:* The filesize string in bytes, or false if the filesize can’t be read. |
| [src()](#src) | `bool` or `string` | Gets the source URL for an attachment. |


## Class Methods

### \_\_construct()

Creates a new `Timber\Attachment` object.

`__construct( int|mixed $attachment )`

| Name | Type | Description |
| --- | --- | --- |
| $attachment | `int` or `mixed` | An attachment ID, a `Timber\Post`, a `WP_Post` object, an ACF image array, a path (absolute or relative) or an URL. |

**PHP**

```php
// You can pass it an ID number
$myImage = new Timber\Attachment(552);

// Or send it a URL to an image
$myImage = new Timber\Attachment( 'http://google.com/logo.jpg' );
```

---

### \_\_toString()

Gets the src for an attachment.

**Returns:** `string` The src of the attachment.

---

### link()

Gets the link to an attachment.

This returns a link to an attachment’s page, but not the link to the image src itself.

**Returns:** `string` The URL of the attachment.

**Twig**

```twig
<a href="{{ image.link }}"><img src="{{ image.src }} "></a>
```
**HTML**

```html
<a href="http://example.org/my-cool-picture">
    <img src="http://example.org/wp-content/uploads/2015/whatever.jpg"/>
</a>
```

---

### path()

Gets the relative path to an attachment.

**Returns:** `string` The relative path to an attachment.

**Twig**

```twig
<img src="{{ image.path }}" />
```
**HTML**

```html
<img src="/wp-content/uploads/2015/08/pic.jpg" />
```

---

### src()

Gets the source URL for an attachment.

**Returns:** `bool|string` 

**Twig**

```twig
<a href="{{ Attachment(post.meta('job_pdf')).src }}" download>
```
**HTML**

```html
<a href="http://example.org/wp-content/uploads/2015/08/job-ad-5noe2304i.pdf" download>
```

---

### size()

Gets filesize in a human readable format.

This can be useful if you want to display the human readable filesize for a file. It’s
easier to read «16 KB» than «16555 bytes» or «1 MB» than «1048576 bytes».

**since** 2.0.0 

**Returns:** `mixed|null` The filesize string in a human readable format.

Use filesize information in a link that downloads a file:

**Twig**

```twig
<a class="download" href="{{ attachment.src }}" download="{{ attachment.title }}">
    <span class="download-title">{{ attachment.title }}</span>
    <span class="download-info">(Download, {{ attachment.size }})</span>
</a>
```

---

### size\_raw()

Gets filesize in bytes.

**since** 2.0.0 

**Returns:** `mixed|null` The filesize string in bytes, or false if the filesize can’t be read.

**Twig**

```twig
<table>
    {% for attachment in Attachment(attachment_ids) %}
        <tr>
            <td>{{ attachment.title }}</td>
            <td>{{ attachment.extension }}</td>
            <td>{{ attachment.size_raw }} bytes</td>
        </tr>
    {% endfor %}
</table>
```

---

### extension()

Gets the extension of the attached file.

**since** 2.0.0 

**Returns:** `null|string` An uppercase extension string.

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

### parent()

Gets the parent object.

The parent object of an attachment is a post it is assigned to.

**Returns:** `bool|\Timber\Post` Parent object as a `Timber\Post`. Returns `false` if no parent
object is defined.

**Twig**

```twig
This image is assigned to {{ image.parent.title }}
```

---

### get\_pathinfo()

Gets a PHP array with pathinfo() info from the file.

**Returns:** `array` Path info from the file.

---

