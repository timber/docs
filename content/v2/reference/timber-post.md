---
title: "Timber\\​Post"
linktitle: "Post"
is_reference: true
---

This is the object you use to access or extend WordPress posts. Think of it as Timber's (more
accessible) version of `WP_Post`. This is used throughout Timber to represent posts retrieved
from WordPress making them available to Twig templates. See the PHP and Twig examples for an
example of what it’s like to work with this object in your code.

<!--more-->

**single.php**

**PHP**

```php
$context = Timber::context();

Timber::render( 'single.twig', $context );
```

**single.twig**

**Twig**

```twig
<article>
    <h1 class="headline">{{ post.title }}</h1>
    <div class="body">
        {{ post.content }}
    </div>
</article>
```

**HTML**

```html
<article>
    <h1 class="headline">The Empire Strikes Back</h1>
    <div class="body">
        It is a dark time for the Rebellion. Although the Death Star has been
        destroyed, Imperial troops have driven the Rebel forces from their
        hidden base and pursued them across the galaxy.
    </div>
</article>
```

## Overview

*This class extends `Timber\Core`*  
*This class implements `Timber\CoreInterface`, `Timber\MetaInterface`, `Timber\DatedInterface`, `Timber\Setupable`*  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $id | `int` | The numeric WordPress id of a post. |
| $ID | `int` | The numeric WordPress id of a post, capitalized to match WordPress usage. |
| $post_author | `int` | The numeric ID of the a post's author corresponding to the wp_user database table |
| $post_content | `string` | The raw text of a WP post as stored in the database |
| $post_date | `string` | The raw date string as stored in the WP database, ex: 2014-07-05 18:01:39 |
| $post_excerpt | `string` | The raw text of a manual post excerpt as stored in the database |
| $post_parent | `int` | The numeric ID of a post's parent post |
| $post_status | `string` | The status of a post ("draft", "publish", etc.) |
| $post_title | `string` | The raw text of a post's title as stored in the database |
| $post_type | `string` | The name of the post type, this is the machine name (so "my_custom_post_type" as opposed to "My Custom Post Type") |
| $slug | `string` | The URL-safe slug, this corresponds to the poorly-named "post_name" in the WP database, ex: "hello-world" |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__call()](#__call) | `mixed` | This is helpful for twig to return properties and methods see: https://github.com/fabpot/Twig/issues/2 |
| [__construct()](#__construct) |  | If you send the constructor nothing it will try to figure out the current post id based on being inside The_Loop. |
| [__get()](#__get) | `mixed` | This is helpful for twig to return properties and methods see: https://github.com/fabpot/Twig/issues/2 |
| [__toString()](#__toString) | `string` | Outputs the title of the post if you do something like `<h1>{{post}}</h1>` |
| [audio()](#audio) | `bool` or `array` | Returns audio tags embedded in the post’s content.<br><br>*Returns:* A list of found HTML embeds. |
| [author()](#author) | `\Timber\User` or `null` | Return the author of a post<br><br>*Returns:* A User object if found, false if not |
| [authors()](#authors) | `array` | Got more than one author? That's cool, but you'll need Co-Authors plus or another plugin to access any data |
| [categories()](#categories) | `array` | Get the categories on a particular post<br><br>*Returns:* of Timber\Term objects |
| [category()](#category) | `\Timber\Term` or `null` | Returns a category attached to a post |
| [children()](#children) | `array` | Returns an array of children on the post as Timber\Posts (or other claass as you define). |
| [comment_count()](#comment_count) | `int` | <br><br>*Returns:* the number of comments on a post |
| [comment_form()](#comment_form) | `string` | Gets the comment form for use on a single article page<br><br>*Returns:* of HTML for the form |
| [comments()](#comments) | `bool` or `\Timber\CommentThread` | Gets the comments on a Timber\Post and returns them as an array of `Timber\Comment` objects (or whatever comment class you set). |
| [content()](#content) | `string` | Gets the actual content of a WP Post, as opposed to post_content this will run the hooks/filters attached to the_content. \This guy will return your posts content with WordPress filters run on it (like for shortcodes and wpautop). |
| [convert()](#convert) |  | Finds any WP_Post objects and converts them to Timber\Posts |
| [date()](#date) | `string` | Gets the publishing date of the post. |
| [edit_link()](#edit_link) | `bool` or `string` | Returns the edit URL of a post if the user has access to it<br><br>*Returns:* the edit URL of a post in the WordPress admin |
| [excerpt()](#excerpt) | `\Timber\PostPreview` | Gets a preview/excerpt of your post. |
| [field_object()](#field_object) | `mixed` | Gets the field object data from Advanced Custom Fields. |
| [format()](#format) | `mixed` |  |
| [gallery()](#gallery) | `array` | Returns galleries from the post’s content.<br><br>*Returns:* A list of arrays, each containing gallery data and srcs parsed from the expanded shortcode. |
| [~~get_field~~()](#get_field) | `mixed` | Gets a post meta value.<br><br>*Returns:* The meta field value. |
| [has_field()](#has_field) | `bool` |  |
| [has_term()](#has_term) | `bool` |  |
| [~~import_field~~()](#import_field) |  | Import field data onto this object |
| [link()](#link) | `string` | get the permalink for a post object<br><br>*Returns:* ex: http://example.org/2015/07/my-awesome-post |
| [meta()](#meta) | `mixed` | Gets a post meta value.<br><br>*Returns:* The custom field value or an array of custom field values. Null if no value could be found. |
| [modified_author()](#modified_author) | `\Timber\User` or `null` | Get the author (WordPress user) who last modified the post<br><br>*Returns:* A User object if found, false if not |
| [modified_date()](#modified_date) | `string` | Gets the date the post was last modified. |
| [modified_time()](#modified_time) | `string` | Gets the time of the last modification of the post to use in your template. |
| [modified_timestamp()](#modified_timestamp) | `bool` or `int` | Gets the timestamp when the post was last modified.<br><br>*Returns:* Unix timestamp on success, false on failure. |
| [name()](#name) | `string` |  |
| [next()](#next) | `mixed` |  |
| [pagination()](#pagination) | `array` | Get a data array of pagination so you can navigate to the previous/next for a paginated post. |
| [parent()](#parent) | `bool` or `\Timber\Post` | Gets the parent (if one exists) from a post as a Timber\Post object (or whatever is set in Timber\Post::$PostClass) |
| [password_required()](#password_required) | `bool` | whether post requires password and correct password has been provided |
| [path()](#path) | `string` | Gets the relative path of a WP Post, so while link() will return http://example.org/2015/07/my-cool-post this will return just /2015/07/my-cool-post |
| [prev()](#prev) | `mixed` | Get the previous post in a set |
| [~~preview~~()](#preview) | `\Timber\PostPreview` | Gets a preview (excerpt) of your post. |
| [raw_meta()](#raw_meta) | `null` or `mixed` | Gets a post meta value directly from the database.<br><br>*Returns:* The meta field value(s). Null if no value could be found, an empty array if all fields were requested but no values could be found. |
| [setup()](#setup) | `\Timber\Post` | Sets up a post.<br><br>*Returns:* The post instance. |
| [tags()](#tags) | `array` | Gets the tags on a post, uses WP's post_tag taxonomy |
| [teardown()](#teardown) | `\Timber\Post` | Resets variables after post has been used.<br><br>*Returns:* The post instance. |
| [terms()](#terms) | `array` | Gets the terms associated with the post.<br><br>*Returns:* An array of taxonomies. |
| [thumbnail()](#thumbnail) | `\Timber\Image` or `null` | get the featured image as a Timber/Image<br><br>*Returns:* of your thumbnail |
| [thumbnail_id()](#thumbnail_id) | `bool` or `int` | Gets the post’s thumbnail ID.<br><br>*Returns:* The default post’s ID. False if no thumbnail was defined. |
| [time()](#time) | `string` | Gets the time the post was published to use in your template. |
| [timestamp()](#timestamp) | `bool` or `int` | Gets the timestamp when the post was published.<br><br>*Returns:* Unix timestamp on success, false on failure. |
| [title()](#title) | `string` | Returns the processed title to be used in templates. This returns the title of the post after WP's filters have run. This is analogous to `the_title()` in standard WP template tags. |
| [type()](#type) | `\Timber\PostType` | Returns the PostType object for a post’s post type with labels and other info. |
| [video()](#video) | `bool` or `array` | Returns video tags embedded in the post’s content.<br><br>*Returns:* A list of found HTML embeds. |


## Class Methods

### \_\_construct()

If you send the constructor nothing it will try to figure out the current post id based on
being inside The_Loop.

`__construct( mixed $pid = null )`

| Name | Type | Description |
| --- | --- | --- |
| $pid | `mixed` |  |

**PHP**

```php
$post = new Timber\Post();
$other_post = new Timber\Post($random_post_id);
```

---

### \_\_get()

This is helpful for twig to return properties and methods see:
https://github.com/fabpot/Twig/issues/2

This is also here to ensure that {{ post.class }} remains usable.

`__get( $field )`

**Returns:** `mixed` 

---

### \_\_call()

This is helpful for twig to return properties and methods see:
https://github.com/fabpot/Twig/issues/2

This is also here to ensure that {{ post.class }} remains usable

`__call( $field, $args )`

**Returns:** `mixed` 

---

### setup()

Sets up a post.

Sets up the `$post` global, and other global variables as well as variables in the
`$wp_query` global that makes Timber more compatible with WordPress.

This function will be called automatically when you loop over Timber posts as well as in
`Timber::context()`.

**since** 2.0.0 

**Returns:** `\Timber\Post` The post instance.

---

### teardown()

Resets variables after post has been used.

This function will be called automatically when you loop over Timber posts.

**since** 2.0.0 

**Returns:** `\Timber\Post` The post instance.

---

### \_\_toString()

Outputs the title of the post if you do something like `<h1>{{post}}</h1>`

**Returns:** `string` 

---

### excerpt()

Gets a preview/excerpt of your post.

If you have an excerpt is set on the post, the excerpt will be used. Otherwise it will try to
pull from a preview from `post_content`. If there’s a `<!-- more -->` tag in the post
content, it will use that to mark where to pull through.

**see** Timber\PostPreview

`excerpt( array $options = array() )`

**Returns:** `\Timber\PostPreview` 

| Name | Type | Description |
| --- | --- | --- |
| $options | `array` | An array of configuration options for generating the excerpt. Default empty.<br><br><ul><li>**$words**<br>`int` Number of words in the excerpt. Default `50`.</li><li>**$chars**<br>`int` or `bool` Number of characters in the excerpt. Default `false` (no character limit).</li><li>**$end**<br>`string` String to append to the end of the excerpt. Default '&hellip;' (HTML ellipsis character).</li><li>**$force**<br>`bool` Whether to shorten the excerpt to the length/word count specified, if the editor wrote a manual excerpt longer than the set length. Default `false`.</li><li>**$strip**<br>`bool` Whether to strip HTML tags. Default `true`.</li><li>**$read_more**<br>`string` String for what the "Read More" text should be. Default 'Read More'.</li></ul> |

**Twig**

```twig
<h2>{{ post.title }}</h2>
<div>{{ post.excerpt({ words: 100, read_more: 'Keep reading' }) }}</div>
```

---

### ~~preview~~()

Gets a preview (excerpt) of your post.

**DEPRECATED** since 2.0.0, use `{{ post.excerpt }}` instead.

If you have an excerpt is set on the post, the excerpt will be used. Otherwise it will try to
pull from a preview from `post_content`. If there’s a `<!-- more -->` tag in the post
content, it will use that to mark where to pull through.

This method returns a `Timber\PostPreview` object, which is a **chainable object**. This
means that you can change the output of the preview by **adding more methods**. Refer to the
[documentation of the `Timber\PostPreview` class](https://timber.github.io/docs/reference/timber-postpreview/)
to get an overview of all the available methods.

**see** Timber\PostPreview

**Returns:** `\Timber\PostPreview` 

**Twig**

```twig
{# Use default preview #}
<p>{{ post.preview }}</p>

{# Change the post preview text #}
<p>{{ post.preview.read_more('Continue Reading') }}</p>

{# Additionally restrict the length to 50 words #}
<p>{{ post.preview.length(50).read_more('Continue Reading') }}</p>
```

---

### comment\_form()

Gets the comment form for use on a single article page

`comment_form( array $args = array() )`

**Returns:** `string` of HTML for the form

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` | see [WordPress docs on comment_form](http://codex.wordpress.org/Function_Reference/comment_form) for reference on acceptable parameters |

---

### terms()

Gets the terms associated with the post.

`terms( string|array $args = array() )`

**Returns:** `array` An array of taxonomies.

| Name | Type | Description |
| --- | --- | --- |
| $args | `string` or `array` | Optional. Name of the taxonomy or array of arguments.<br><br><ul><li>**$query**<br>`array` Any array of term query parameters for getting the terms. See `WP_Term_Query::__construct()` for supported arguments. Use the `taxonomy` argument to choose which taxonomies to get. Defaults to querying all registered taxonomies for the post type. You can use custom or built-in WordPress taxonomies (category, tag). Timber plays nice and figures out that `tag`, `tags` or `post_tag` are all the same (also for `categories` or `category`). For custom taxonomies you need to define the proper name.</li><li>**$merge**<br>`bool` Whether the resulting array should be one big one (`true`) or whether it should be an array of sub-arrays for each taxonomy (`false`). Default `true`.</li><li>**$term_class**<br>`string` The Timber term class to use for the term objects.</li></ul> |

**Twig**

```twig
<section id="job-feed">
{% for post in job %}
    <div class="job">
        <h2>{{ post.title }}</h2>
        <p>{{ post.terms( {query:{taxonomy:'category', orderby:'name', order: 'ASC'}} )|join(', ') }}</p>
    </div>
{% endfor %}
</section>
```
**HTML**

```html
<section id="job-feed">
    <div class="job">
        <h2>Cheese Maker</h2>
        <p>Cheese, Food, Fromage</p>
    </div>
    <div class="job">
        <h2>Mime</h2>
        <p>Performance, Silence</p>
    </div>
</section>
```
**PHP**

```php
// Get all terms of a taxonomy.
$terms = $post->terms( 'category' );

// Get terms of multiple taxonomies.
$terms = $post->terms( array( 'books', 'movies' ) );

// Use custom arguments for taxonomy query and options.
$terms = $post->terms( array(
    'query' => [
        'taxonomy' => 'custom_tax',
        'orderby'  => 'count',
    ],
    'merge'      => false,
    'term_class' => 'My_Term_Class'
) );
```

---

### has\_term()

`has_term( string|int $term_name_or_id, string $taxonomy = all )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $term_name_or_id | `string` or `int` |  |
| $taxonomy | `string` |  |

---

### comment\_count()

**Returns:** `int` the number of comments on a post

---

### has\_field()

`has_field( string $field_name )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` |  |

---

### field\_object()

Gets the field object data from Advanced Custom Fields.

This includes metadata on the field like whether it's conditional or not.

**since** 1.6.0 

`field_object( string $field_name )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | of the field you want to lookup. |

---

### meta()

Gets a post meta value.

Returns a meta value or all meta values for all custom fields of a post saved in the post
meta database table.

Fetching all values is only advised during development, because it can have a big performance
impact, when all filters are applied.

`meta( string $field_name = '', array $args = array() )`

**Returns:** `mixed` The custom field value or an array of custom field values. Null if no value
could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | Optional. The field name for which you want to get the value. If no field name is provided, this function will fetch values for all custom fields. Default empty string. |
| $args | `array` | An array of arguments for getting the meta value. Third-party integrations can use this argument to make their API arguments available in Timber. Default empty array.<br><br><ul><li>**$apply_filters**<br>`bool` Whether to apply filtering of meta values. You can also use the `raw_meta()` method as a shortcut to apply this argument. Default true.</li></ul> |

---

### raw\_meta()

Gets a post meta value directly from the database.

Returns a raw meta value or all raw meta values saved in the post meta database table. In
comparison to `meta()`, this function will return raw values that are not filtered by third-
party plugins.

Fetching raw values for all custom fields will not have a big performance impact, because
WordPress gets all meta values, when the first meta value is accessed.

**since** 2.0.0 

`raw_meta( string $field_name = '', array $args = array() )`

**Returns:** `null|mixed` The meta field value(s). Null if no value could be found, an empty array
if all fields were requested but no values could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | Optional. The field name for which you want to get the value. If no field name is provided, this function will fetch values for all custom fields. Default empty string. |
| $args | `array` | Optional. An array of args for `Post::meta()`. Default empty array. |

---

### ~~get\_field~~()

Gets a post meta value.

**DEPRECATED** since 2.0.0, use `{{ post.meta('field_name') }}` instead.

**see** [Timber\Post::meta()](../timber-post/#meta)

`get_field( string $field_name = null )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### ~~import\_field~~()

Import field data onto this object

**DEPRECATED** since  since 2.0.0

`import_field( string $field_name )`

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` |  |

---

### author()

Return the author of a post

**Returns:** `\Timber\User|null` A User object if found, false if not

**Twig**

```twig
<h1>{{post.title}}</h1>
<p class="byline">
    <a href="{{post.author.link}}">{{post.author.name}}</a>
</p>
```

---

### authors()

Got more than one author? That's cool, but you'll need Co-Authors plus or another plugin to access any data

**Returns:** `array` 

---

### modified\_author()

Get the author (WordPress user) who last modified the post

**Returns:** `\Timber\User|null` A User object if found, false if not

**Twig**

```twig
Last updated by {{ post.modified_author.name }}
```
**HTML**

```html
Last updated by Harper Lee
```

---

### categories()

Get the categories on a particular post

**Returns:** `array` of Timber\Term objects

---

### category()

Returns a category attached to a post

If multiple categories are set, it will return just the first one

**Returns:** `\Timber\Term|null` 

---

### children()

Returns an array of children on the post as Timber\Posts
(or other claass as you define).

`children( string|array $post_type = any, string|bool $child_post_class = false )`

**Returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` or `array` | _optional_ use to find children of a particular post type (attachment vs. page for example). You might want to restrict to certain types of children in case other stuff gets all mucked in there. You can use 'parent' to use the parent's post type or you can pass an array of post types. |
| $child_post_class | `string` or `bool` | _optional_ a custom post class (ex: 'MyTimber\Post') to return the objects as. By default (false) it will use Timber\Post::$post_class value. |

**Twig**

```twig
{% if post.children %}
    Here are the child pages:
    {% for child in post.children %}
        <a href="{{ child.link }}">{{ child.title }}</a>
    {% endfor %}
{% endif %}
```

---

### comments()

Gets the comments on a Timber\Post and returns them as an array of `Timber\Comment` objects (or whatever comment class you set).

**see** Timber\CommentThread for an example with nested comments

`comments( int $count = null, string $order = wp, string $type = comment, string $status = approve, $CommentClass = Timber\Comment )`

**Returns:** `bool|\Timber\CommentThread` 

| Name | Type | Description |
| --- | --- | --- |
| $count | `int` | Set the number of comments you want to get. `0` is analogous to "all". |
| $order | `string` | Use ordering set in WordPress admin, or a different scheme. |
| $type | `string` | For when other plugins use the comments table for their own special purposes. Might be set to 'liveblog' or other, depending on what’s stored in your comments table. |
| $status | `string` | Could be 'pending', etc. |

**single.twig**

**Twig**

```twig
<div id="post-comments">
  <h4>Comments on {{ post.title }}</h4>
  <ul>
    {% for comment in post.comments() %}
      {% include 'comment.twig' %}
    {% endfor %}
  </ul>
  <div class="comment-form">
    {{ function('comment_form') }}
  </div>
</div>
```

**comment.twig**

**Twig**

```twig
{# comment.twig #}
<li>
  <p class="comment-author">{{ comment.author.name }} says:</p>
  <div>{{ comment.content }}</div>
</li>
```

---

### content()

Gets the actual content of a WP Post, as opposed to post_content this will run the hooks/filters attached to the_content. \This guy will return your posts content with WordPress filters run on it (like for shortcodes and wpautop).

`content( int $page = '', $len = -1 )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $page | `int` |  |

**Twig**

```twig
<div class="article">
    <h2>{{post.title}}</h2>
    <div class="content">{{ post.content }}</div>
</div>
```

---

### timestamp()

Gets the timestamp when the post was published.

**since** 2.0.0 

**Returns:** `bool|int` Unix timestamp on success, false on failure.

---

### modified\_timestamp()

Gets the timestamp when the post was last modified.

**since** 2.0.0 

**Returns:** `bool|int` Unix timestamp on success, false on failure.

---

### date()

Gets the publishing date of the post.

This function will also apply the
[`get_the_date`](https://developer.wordpress.org/reference/hooks/get_the_date/) filter to the
output.

`date( string|null $date_format = null )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $date_format | `string` or `null` | Optional. PHP date format. Will use the `date_format` option as a default. |

**Twig**

```twig
{# Uses date format set in Settings → General #}
Published on {{ post.date }}
OR
Published on {{ post.date('F jS') }}
```

**HTML**

```html
Published on January 12, 2015
OR
Published on Jan 12th
```

---

### modified\_date()

Gets the date the post was last modified.

This function will also apply the
[`get_the_modified_date`](https://developer.wordpress.org/reference/hooks/get_the_modified_date/)
filter to the output.

`modified_date( string|null $date_format = null )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $date_format | `string` or `null` | Optional. PHP date format. Will use the `date_format` option as a default. |

**Twig**

```twig
{# Uses date format set in Settings → General #}
Last modified on {{ post.modified_date }}
OR
Last modified on {{ post.modified_date('F jS') }}
```

**HTML**

```html
Last modified on January 12, 2015
OR
Last modified on Jan 12th
```

---

### time()

Gets the time the post was published to use in your template.

This function will also apply the
[`get_the_time`](https://developer.wordpress.org/reference/hooks/get_the_time/) filter to the
output.

`time( string|null $time_format = null )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $time_format | `string` or `null` | Optional. PHP date format. Will use the `time_format` option as a default. |

**Twig**

```twig
{# Uses time format set in Settings → General #}
Published at {{ post.time }}
OR
Published at {{ post.time|time('G:i') }}
```

**HTML**

```html
Published at 1:25 pm
OR
Published at 13:25
```

---

### modified\_time()

Gets the time of the last modification of the post to use in your template.

This function will also apply the
[`get_the_time`](https://developer.wordpress.org/reference/hooks/get_the_modified_time/)
filter to the output.

`modified_time( string|null $time_format = null )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $time_format | `string` or `null` | Optional. PHP date format. Will use the `time_format` option as a default. |

**Twig**

```twig
{# Uses time format set in Settings → General #}
Published at {{ post.time }}
OR
Published at {{ post.time|time('G:i') }}
```

**HTML**

```html
Published at 1:25 pm
OR
Published at 13:25
```

---

### type()

Returns the PostType object for a post’s post type with labels and other info.

**since** 1.0.4 

**Returns:** `\Timber\PostType` 

**Twig**

```twig
This post is from <span>{{ post.type.labels.name }}</span>
```

**HTML**

```html
This post is from <span>Recipes</span>
```

---

### edit\_link()

Returns the edit URL of a post if the user has access to it

**Returns:** `bool|string` the edit URL of a post in the WordPress admin

---

### format()

**Returns:** `mixed` 

---

### password\_required()

whether post requires password and correct password has been provided

**Returns:** `bool` 

---

### link()

get the permalink for a post object

**Returns:** `string` ex: http://example.org/2015/07/my-awesome-post

**Twig**

```twig
<a href="{{post.link}}">Read my post</a>
```

---

### name()

**Returns:** `string` 

---

### next()

`next( bool|string $in_same_term = false )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $in_same_term | `bool` or `string` |  |

---

### pagination()

Get a data array of pagination so you can navigate to the previous/next for a paginated post.

**Returns:** `array` 

---

### convert()

Finds any WP_Post objects and converts them to Timber\Posts

`convert( array|\WP_Post $data )`

| Name | Type | Description |
| --- | --- | --- |
| $data | `array` or `\WP_Post` |  |
| $class | `string` |  |

---

### parent()

Gets the parent (if one exists) from a post as a Timber\Post object (or whatever is set in
Timber\Post::$PostClass)

**Returns:** `bool|\Timber\Post` 

**Twig**

```twig
Parent page: <a href="{{ post.parent.link }}">{{ post.parent.title }}</a>
```

---

### path()

Gets the relative path of a WP Post, so while link() will return http://example.org/2015/07/my-cool-post
this will return just /2015/07/my-cool-post

**Returns:** `string` 

**Twig**

```twig
<a href="{{post.path}}">{{post.title}}</a>
```

---

### prev()

Get the previous post in a set

`prev( string|bool $in_same_term = false )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $in_same_term | `string` or `bool` |  |

**Twig**

```twig
<h4>Prior Entry:</h4>
<h3>{{post.prev.title}}</h3>
<p>{{post.prev.preview(25)}}</p>
```

---

### tags()

Gets the tags on a post, uses WP's post_tag taxonomy

**Returns:** `array` 

---

### thumbnail\_id()

Gets the post’s thumbnail ID.

**since** 2.0.0 

**Returns:** `bool|int` The default post’s ID. False if no thumbnail was defined.

---

### thumbnail()

get the featured image as a Timber/Image

**Returns:** `\Timber\Image|null` of your thumbnail

**Twig**

```twig
<img src="{{ post.thumbnail.src }}" />
```

---

### title()

Returns the processed title to be used in templates. This returns the title of the post after WP's filters have run. This is analogous to `the_title()` in standard WP template tags.

**Returns:** `string` 

**Twig**

```twig
<h1>{{ post.title }}</h1>
```

---

### gallery()

Returns galleries from the post’s content.

`gallery( $html = true )`

**Returns:** `array` A list of arrays, each containing gallery data and srcs parsed from the
expanded shortcode.

**Twig**

```twig
{{ post.gallery }}
```

---

### audio()

Returns audio tags embedded in the post’s content.

**Returns:** `bool|array` A list of found HTML embeds.

**Twig**

```twig
{{ post.audio }}
```

---

### video()

Returns video tags embedded in the post’s content.

**Returns:** `bool|array` A list of found HTML embeds.

**Twig**

```twig
{{ post.video }}
```

---

