---
title: "Timber\\TextHelper"
menu:
  main:
    parent: "reference"
---

Class provides different text-related functions
commonly used in WordPress development

<!--more-->




---

## Class Methods

### close_tags
`close_tags( string $html )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $html | `string` |  |




---

### ends_with
`ends_with( string $haystack, string $needle )`

**returns:** `boolean` 

Does the string in question (haystack)

end with the substring in question (needle)?

| Name | Type | Description |
| --- | --- | --- |
| $haystack | `string` |  |
| $needle | `string` |  |




---

### remove_tags
`remove_tags( mixed $string, array $tags=array() )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $string | `mixed` |  |
| $tags | `array` |  |




---

### starts_with
`starts_with( string $haystack, string $needle )`

**returns:** `boolean` 

| Name | Type | Description |
| --- | --- | --- |
| $haystack | `string` |  |
| $needle | `string` |  |




---

### trim_characters
`trim_characters( string $text, mixed/int $num_chars=60, string $more="&hellip;" )`

**returns:** `string` trimmed text.

Trims text to a certain number of characters.

This function can be useful for excerpt of the post

As opposed to wp_trim_words trims characters that makes text to

take the same amount of space in each post for example

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | Text to trim. |
| $num_chars | `mixed/int` | Number of characters. Default is 60. |
| $more | `string` | What to append if $text needs to be trimmed. Defaults to '&hellip;'. |




---

### trim_words
`trim_words( string $text, mixed/int $num_words=55, mixed/string/null/false $more=null, string $allowed_tags="p a span b i br blockquote" )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` |  |
| $num_words | `mixed/int` |  |
| $more | `mixed/string/null/false` | text to appear in "Read more...". Null to use default, false to hide |
| $allowed_tags | `string` |  |




---




