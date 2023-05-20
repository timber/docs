---
title: "Timber\\​TextHelper"
linktitle: "TextHelper"
is_reference: true
---

Class provides different text-related functions commonly used in WordPress development

<!--more-->

## Overview

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[remove_tags()](#remove_tags)</span> | <span class="method-type">`null` or `string` or `string[]`</span> | <span class="method-description"></span> |
| <span class="method-name">[trim_characters()](#trim_characters)</span> | <span class="method-type">`string`</span> | <span class="method-description">Trims text to a certain number of characters.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> trimmed text.</span></span> |
| <span class="method-name">[trim_words()](#trim_words)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |

</div>


## Class Methods

### trim\_characters()

Trims text to a certain number of characters.

This function can be useful for excerpt of the post
As opposed to wp_trim_words trims characters that makes text to
take the same amount of space in each post for example

**since** 1.2.0

`trim_characters( string $text, int $num_chars = 60, string $more = '&hellip;' )`

**Returns:** `string` trimmed text.

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | Text to trim. |
| $num_chars | `int` | Number of characters. Default is 60. |
| $more | `string` | What to append if $text needs to be trimmed. Defaults to '&hellip;'. |

---

### trim\_words()

`trim_words( string $text, int $num_words = 55, string|null|false $more = null, string $allowed_tags = 'p a span b i br blockquote' )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` |  |
| $num_words | `int` |  |
| $more | `string` or `null` or `false` | text to appear in "Read more...". Null to use default, false to hide |
| $allowed_tags | `string` |  |

---

### remove\_tags()

`remove_tags( mixed $string, array $tags = [] )`

**Returns:** `null|string|string[]` 

| Name | Type | Description |
| --- | --- | --- |
| $string |  |  |
| $tags | `array` |  |

---

