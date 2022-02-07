---
title: "Timber\\​PostExcerpt"
linktitle: "PostExcerpt"
is_reference: true
---

It’s designed to be used through the `Timber\Post::excerpt()` method. The public methods of this
class all return the object itself, which means that this is a **chainable object**. This means
that you could change the output of the excerpt by **adding more methods**. But you can also pass
in your arguments to the object constructor or to `Timber\Post::excerpt()`.

By default, the excerpt will

- have a length of 50 words, which will be forced, even if a longer excerpt is set on the post.
- be stripped of all HTML tags.
- have an ellipsis (…) as the end of the text.
- have a "Read More" link appended, if there’s more to read in the post content.

One thing to note: If the excerpt already contains all of the text that can also be found in the
post’s content, then the read more link as well as the string to use as the end will not be
added.

This class will also handle cases where you use the `<!-- more -->` tag inside your post content.
You can also change the text used for the read more link by adding your desired text to the
`<!-- more -->` tag. Here’s an example: `<!-- more Start your journey -->`.

You can change the defaults that are used for excerpts through the
[`timber/post/excerpt/defaults`](https://timber.github.io/docs/v2/hooks/filters/#timber/post/excerpts/defaults)
filter.

<!--more-->

**Twig**

```twig
{# Use default excerpt #}
<p>{{ post.excerpt }}</p>

{# Preferred method: Use hash notation to pass arguments. #}
<div>{{ post.excerpt({ words: 100, read_more: 'Keep reading' }) }}</div>

{# Change the post excerpt text only #}
<p>{{ post.excerpt.read_more('Continue Reading') }}</p>

{# Additionally restrict the length to 50 words #}
<p>{{ post.excerpt.length(50).read_more('Continue Reading') }}</p>
```

## Overview

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__construct()](#__construct)</span> | <span class="method-type"></span> | <span class="method-description">PostExcerpt constructor.</span> |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description">Returns the resulting excerpt.</span> |
| <span class="method-name">[chars()](#chars)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Restricts the length of the excerpt to a certain amount of characters.</span> |
| <span class="method-name">[end()](#end)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Defines the text to end the excerpt with.</span> |
| <span class="method-name">[force()](#force)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Forces excerpt lengths.</span> |
| <span class="method-name">[length()](#length)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Restricts the length of the excerpt to a certain amount of words.</span> |
| <span class="method-name">[read_more()](#read_more)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Defines the text to be used for the "Read More" link.</span> |
| <span class="method-name">[strip()](#strip)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Defines how HTML tags should be stripped from the excerpt.</span> |

</div>


## Class Methods

### \_\_construct()

PostExcerpt constructor.

`__construct( \Timber\Post $post, array $options = array() )`

| Name | Type | Description |
| --- | --- | --- |
| $post | `\Timber\Post` | The post to pull the excerpt from. |
| $options | `array` | An array of configuration options for generating the excerpt. Default empty.<br><br><ul><li>**$words**<br>`int` Number of words in the excerpt. Default `50`.</li><li>**$chars**<br>`int` or `bool` Number of characters in the excerpt. Default `false` (no character limit).</li><li>**$end**<br>`string` String to append to the end of the excerpt. Default '&hellip;' (HTML ellipsis character).</li><li>**$force**<br>`bool` Whether to shorten the excerpt to the length/word count specified, even if an editor wrote a manual excerpt longer than the set length. Default `false`.</li><li>**$strip**<br>`bool` Whether to strip HTML tags. Default `true`.</li><li>**$read_more**<br>`string` String for what the "Read More" text should be. Default 'Read More'.</li><li>**$always_add_read_more**<br>`bool` Whether a read more link should be added even if the excerpt isn’t trimmed (when the excerpt isn’t shorter than the post’s content). Default `false`.</li><li>**$always_add_end**<br>`bool` Whether the end string should be added even if the excerpt isn’t trimmed (when the excerpt isn’t shorter than the post’s content). Default `false`.</li></ul> |

---

### \_\_toString()

Returns the resulting excerpt.

**Returns:** `string` 

---

### length()

Restricts the length of the excerpt to a certain amount of words.

`length( int $length = 50 )`

**Returns:** `\Timber\PostExcerpt` 

| Name | Type | Description |
| --- | --- | --- |
| $length | `int` | The maximum amount of words (not letters) for the excerpt. Default `50`. |

**Twig**

```twig
<p>{{ post.excerpt.length(50) }}</p>
```

---

### chars()

Restricts the length of the excerpt to a certain amount of characters.

`chars( int|bool $char_length = false )`

**Returns:** `\Timber\PostExcerpt` 

| Name | Type | Description |
| --- | --- | --- |
| $char_length | `int` or `bool` | The maximum amount of characters for the excerpt. Default `false`. |

**Twig**

```twig
<p>{{ post.excerpt.chars(180) }}</p>
```

---

### end()

Defines the text to end the excerpt with.

`end( string $end = '&hellip;' )`

**Returns:** `\Timber\PostExcerpt` 

| Name | Type | Description |
| --- | --- | --- |
| $end | `string` | The text for the end of the excerpt. Default `…`. |

**Twig**

```twig
<p>{{ post.excerpt.end('… and much more!') }}</p>
```

---

### force()

Forces excerpt lengths.

What happens if your custom post excerpt is longer than the length requested? By default, it
will use the full `post_excerpt`. However, you can set this to `true` to *force* your excerpt
to be of the desired length.

`force( bool $force = true )`

**Returns:** `\Timber\PostExcerpt` 

| Name | Type | Description |
| --- | --- | --- |
| $force | `bool` | Whether the length of the excerpt should be forced to the requested length, even if an editor wrote a manual excerpt that is longer than the set length. Default `true`. |

**Twig**

```twig
<p>{{ post.excerpt.length(20).force }}</p>
```

---

### read\_more()

Defines the text to be used for the "Read More" link.

Set this to `false` to not add a "Read More" link.

`read_more( string $text = 'Read More' )`

**Returns:** `\Timber\PostExcerpt` 

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | Text for the link. Default 'Read More'. |

---

### strip()

Defines how HTML tags should be stripped from the excerpt.

`strip( bool|string $strip = true )`

**Returns:** `\Timber\PostExcerpt` 

| Name | Type | Description |
| --- | --- | --- |
| $strip | `bool` or `string` | Whether or how HTML tags in the excerpt should be stripped. Use `true` to strip all tags, `false` for no stripping, or a string for a list of allowed tags (e.g. '<p><a>'). Default `true`. |

---

