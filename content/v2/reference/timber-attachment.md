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
  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$file</span> | <span class="property-type">`mixed`</span> | <span class="property-description"></span> |
| <span class="property-name">$file_loc</span> | <span class="property-type">`string`</span> | <span class="property-description">The absolute path to the attachmend file in the filesystem (Example: `/var/www/htdocs/wp-content/uploads/2015/08/my-pic.jpg`)</span> |
| <span class="property-name">$file_size_raw</span> | <span class="property-type">`int`</span> | <span class="property-description">Raw file size in bytes.</span> |
| <span class="property-name">$file_size</span> | <span class="property-type">`null` or `string`</span> | <span class="property-description">File size string.</span> |
| <span class="property-name">$file_extension</span> | <span class="property-type">`null` or `string`</span> | <span class="property-description">A file extension.</span> |
| <span class="property-name">$id</span> | <span class="property-type">`int`</span> | <span class="property-description">The attachment ID.</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the src for an attachment.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The src of the attachment.</span></span> |
| <span class="method-name">[caption()](#caption)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the caption of an attachment.</span> |
| <span class="method-name">[extension()](#extension)</span> | <span class="method-type">`null` or `string`</span> | <span class="method-description">Gets the extension of the attached file.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> An uppercase extension string.</span></span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the link to an attachment.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The URL of the attachment.</span></span> |
| <span class="method-name">[parent()](#parent)</span> | <span class="method-type">`false` or `\Timber\Post`</span> | <span class="method-description">Gets the parent object.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Parent object as a `Timber\Post`. Returns `false` if no parent object is defined.</span></span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the relative path to an attachment.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The relative path to an attachment.</span></span> |
| <span class="method-name">[size()](#size)</span> | <span class="method-type">`mixed` or `null`</span> | <span class="method-description">Gets filesize in a human readable format.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The filesize string in a human readable format.</span></span> |
| <span class="method-name">[size_raw()](#size_raw)</span> | <span class="method-type">`mixed` or `null`</span> | <span class="method-description">Gets filesize in bytes.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The filesize string in bytes, or false if the filesize can’t be read.</span></span> |
| <span class="method-name">[src()](#src)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Gets the source URL for an attachment.</span> |

</div>


## Class Methods

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
<a href="{{ get_attachment(post.meta('job_pdf')).src }}" download>
```
**HTML**

```html
<a href="http://example.org/wp-content/uploads/2015/08/job-ad-5noe2304i.pdf" download>
```

---

### caption()

Gets the caption of an attachment.

**since** 2.0

**Returns:** `string` 

**Twig**

```twig
<figure>
    <img src="{{ post.thumbnail.src }}">

    {% if post.thumbnail is not empty %}
        <figcaption>{{ post.thumbnail.caption }}</figcaption
    {% endif %}
</figure>
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

**Returns:** `false|\Timber\Post` Parent object as a `Timber\Post`. Returns `false` if no parent
object is defined.

**Twig**

```twig
This image is assigned to {{ image.parent.title }}
```

---

