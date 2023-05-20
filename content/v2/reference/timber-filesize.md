---
title: "Timber\\​FileSize"
linktitle: "FileSize"
is_reference: true
---

Helper class to deal with File sizes logic

<!--more-->

## Overview

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$file_loc</span> | <span class="property-type">`string`</span> | <span class="property-description">The absolute path to the image in the filesystem (Example: `/var/www/htdocs/wp-content/uploads/2015/08/my-pic.jpg`)</span> |
| <span class="property-name">$file_size</span> | <span class="property-type">`string`</span> | <span class="property-description">The pre-calculated file size.</span> |
| <span class="property-name">$file_size_raw</span> | <span class="property-type">`string`</span> | <span class="property-description">The precalculed file size</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[size()](#size)</span> | <span class="method-type">`string` or `null`</span> | <span class="method-description">Gets filesize in a human-readable format.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The filesize string in a human-readable format or null if the filesize can’t be read.</span></span> |
| <span class="method-name">[size_raw()](#size_raw)</span> | <span class="method-type">`int` or `false`</span> | <span class="method-description">Gets filesize in bytes.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The filesize string in bytes, or false if the filesize can’t be read.</span></span> |

</div>


## Class Methods

### size()

Gets filesize in a human-readable format.

This can be useful if you want to display the human-readable filesize for a file. It’s
easier to read «16 KB» than «16555 bytes» or «1 MB» than «1048576 bytes».

**since** 2.0.0

**Returns:** `string|null` The filesize string in a human-readable format or null if the
filesize can’t be read.

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

**Returns:** `int|false` The filesize string in bytes, or false if the filesize can’t be read.

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

