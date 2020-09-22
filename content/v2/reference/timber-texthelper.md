---
title: "Timber\\​TextHelper"
linktitle: "TextHelper"
is_reference: true
---

Class provides different text-related functions commonly used in WordPress development

<!--more-->

## Overview

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [ends_with()](#ends_with) | `bool` |  |
| [remove_tags()](#remove_tags) | `null` or `string` or `string[]` |  |
| [starts_with()](#starts_with) | `bool` |  |
| [trim_characters()](#trim_characters) | `string` | Trims text to a certain number of characters.<br><br>*Returns:* trimmed text. |
| [trim_words()](#trim_words) | `string` |  |


## Class Methods

### trim\_characters()

Trims text to a certain number of characters.

This function can be useful for excerpt of the post
As opposed to wp_trim_words trims characters that makes text to
take the same amount of space in each post for example

**since** 1.2.0 

`trim_characters( string $text, int $num_chars = 60, string $more = &hellip; )`

**Returns:** `string` trimmed text.

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | Text to trim. |
| $num_chars | `int` | Number of characters. Default is 60. |
| $more | `string` | What to append if $text needs to be trimmed. Defaults to '&hellip;'. |

---

### trim\_words()

`trim_words( string $text, int $num_words = 55, string|null|bool $more = null, string $allowed_tags = p a span b i br blockquote )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` |  |
| $num_words | `int` |  |
| $more | `string` or `null` or `bool` | text to appear in "Read more...". Null to use default, false to hide |
| $allowed_tags | `string` |  |

---

### remove\_tags()

`remove_tags(  $string, array $tags = array() )`

**Returns:** `null|string|string[]` 

| Name | Type | Description |
| --- | --- | --- |
| $string |  |  |
| $tags | `array` |  |

---

### starts\_with()

`starts_with( string $haystack, string $needle )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $haystack | `string` |  |
| $needle | `string` |  |

---

### ends\_with()

`ends_with( string $haystack, string $needle )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $haystack | `string` |  |
| $needle | `string` |  |

---

