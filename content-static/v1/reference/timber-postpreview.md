
---
title: "Timber\\PostPreview"
menu:
  main:
    parent: "reference"
---

The PostPreview class lets a user modify a post preview/excerpt to their liking.

It’s designed to be used through the `Timber\Post::preview()` method. The public methods of this
class all return the object itself, which means that this is a **chainable object**. You can
change the output of the preview by **adding more methods**.

By default, the preview will

- have a length of 50 words, which will be forced, even if a longer excerpt is set on the post.
- be stripped of all HTML tags.
- have an ellipsis (…) as the end of the text.
- have a "Read More" link appended.

<!--more-->

**Twig**
```twig
{# Use default preview #}
<p>{{ post.preview }}</p>
{# Change the post preview text #}
<p>{{ post.preview.read_more('Continue Reading') }}</p>
{# Additionally restrict the length to 50 words #}
<p>{{ post.preview.length(50).read_more('Continue Reading') }}</p>
```

## Overview

### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [__construct](#__construct) | `void` |  |
| [__toString](#__toString) | `string` |  |
| [chars](#chars) | `\Timber\PostPreview` |  |
| [end](#end) | `\Timber\PostPreview` |  |
| [force](#force) | `\Timber\PostPreview` |  |
| [length](#length) | `\Timber\PostPreview` |  |
| [read_more](#read_more) | `\Timber\PostPreview` |  |
| [strip](#strip) | `\Timber\PostPreview` |  |

---

## Class Methods

### __construct
`__construct( \Timber\Post $post )`

**returns:** `void` 

PostPreview constructor.

| Name | Type | Description |
| --- | --- | --- |
| $post | `\Timber\Post` | The post to pull the preview from. |




---

### __toString
`__toString( )`

**returns:** `string` 

Returns the resulting preview.



---

### chars
`chars( bool/int/bool $char_length=false )`

**returns:** `\Timber\PostPreview` 

Restricts the length of the preview to a certain amount of characters.

| Name | Type | Description |
| --- | --- | --- |
| $char_length | `bool/int/bool` | The maximum amount of characters for the preview. Default `false`. |


**Twig**
```twig
<p>{{ post.preview.chars(180) }}</p>
```

---

### end
`end( string $end="&hellip;" )`

**returns:** `\Timber\PostPreview` 

Defines the text to end the preview with.

| Name | Type | Description |
| --- | --- | --- |
| $end | `string` | The text for the end of the preview. Default `…`. |


**Twig**
```twig
<p>{{ post.preview.end('… and much more!') }}</p>
```

---

### force
`force( bool $force=true )`

**returns:** `\Timber\PostPreview` 

Forces preview lengths.

What happens if your custom post excerpt is longer than the length requested? By default, it
will use the full `post_excerpt`. However, you can set this to `true` to *force* your excerpt
to be of the desired length.

| Name | Type | Description |
| --- | --- | --- |
| $force | `bool` | Whether the length of the preview should be forced to the requested length, even if an editor wrote a manual excerpt that is longer than the set length. Default `true`. |


**Twig**
```twig
<p>{{ post.preview.length(20).force }}</p>
```

---

### length
`length( mixed/int $length=50 )`

**returns:** `\Timber\PostPreview` 

Restricts the length of the preview to a certain amount of words.

| Name | Type | Description |
| --- | --- | --- |
| $length | `mixed/int` | The maximum amount of words (not letters) for the preview. Default `50`. |


**Twig**
```twig
<p>{{ post.preview.length(50) }}</p>
```

---

### read_more
`read_more( string $readmore="Read More" )`

**returns:** `\Timber\PostPreview` 

Defines the text to be used for the "Read More" link.

Set this to `false` to not add a "Read More" link.

| Name | Type | Description |
| --- | --- | --- |
| $readmore | `string` | Text for the link. Default 'Read More'. |




---

### strip
`strip( bool/bool/string $strip=true )`

**returns:** `\Timber\PostPreview` 

Defines how HTML tags should be stripped from the preview.

| Name | Type | Description |
| --- | --- | --- |
| $strip | `bool/bool/string` | Whether or how HTML tags in the preview should be stripped. Use `true` to strip all tags, `false` for no stripping, or a string for a list of allowed tags (e.g. '<p><a>'). Default `true`. |




---

### assemble
`assemble( string $text, array/bool $readmore_matches, boolean $trimmed )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` |  |
| $readmore_matches | `array/bool` |  |
| $trimmed | `boolean` | was the text trimmed? |




---

### run
`run( )`

**returns:** `void` 



---




