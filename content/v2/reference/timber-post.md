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

*This class extends `Timber\CoreEntity`*  
*This class implements `Timber\DatedInterface`, `Timber\Setupable`*  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$id</span> | <span class="property-type">`int`</span> | <span class="property-description">The numeric WordPress id of a post.</span> |
| <span class="property-name">$ID</span> | <span class="property-type">`int`</span> | <span class="property-description">The numeric WordPress id of a post, capitalized to match WordPress usage.</span> |
| <span class="property-name">$post_author</span> | <span class="property-type">`int`</span> | <span class="property-description">The numeric ID of the a post's author corresponding to the wp_user database table</span> |
| <span class="property-name">$post_content</span> | <span class="property-type">`string`</span> | <span class="property-description">The raw text of a WP post as stored in the database</span> |
| <span class="property-name">$post_date</span> | <span class="property-type">`string`</span> | <span class="property-description">The raw date string as stored in the WP database, ex: 2014-07-05 18:01:39</span> |
| <span class="property-name">$post_excerpt</span> | <span class="property-type">`string`</span> | <span class="property-description">The raw text of a manual post excerpt as stored in the database</span> |
| <span class="property-name">$post_parent</span> | <span class="property-type">`int`</span> | <span class="property-description">The numeric ID of a post's parent post</span> |
| <span class="property-name">$post_status</span> | <span class="property-type">`string`</span> | <span class="property-description">The status of a post ("draft", "publish", etc.)</span> |
| <span class="property-name">$post_title</span> | <span class="property-type">`string`</span> | <span class="property-description">The raw text of a post's title as stored in the database</span> |
| <span class="property-name">$post_type</span> | <span class="property-type">`string`</span> | <span class="property-description">The name of the post type, this is the machine name (so "my_custom_post_type" as opposed to "My Custom Post Type")</span> |
| <span class="property-name">$slug</span> | <span class="property-type">`string`</span> | <span class="property-description">The URL-safe slug, this corresponds to the poorly-named "post_name" in the WP database, ex: "hello-world"</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__call()](#__call)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">This is helpful for twig to return properties and methods see: https://github.com/fabpot/Twig/issues/2</span> |
| <span class="method-name">[__get()](#__get)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">This is helpful for twig to return properties and methods see: https://github.com/fabpot/Twig/issues/2</span> |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description">Outputs the title of the post if you do something like `<h1>{{post}}</h1>`</span> |
| <span class="method-name">[audio()](#audio)</span> | <span class="method-type">`bool` or `array`</span> | <span class="method-description">Returns audio tags embedded in the post’s content.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A list of found HTML embeds.</span></span> |
| <span class="method-name">[author()](#author)</span> | <span class="method-type">`\Timber\User` or `null`</span> | <span class="method-description">Return the author of a post<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A User object if found, false if not</span></span> |
| <span class="method-name">[authors()](#authors)</span> | <span class="method-type">`array`</span> | <span class="method-description">Got more than one author? That's cool, but you'll need Co-Authors plus or another plugin to access any data</span> |
| <span class="method-name">[can_edit()](#can_edit)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks whether the current user can edit the post.</span> |
| <span class="method-name">[categories()](#categories)</span> | <span class="method-type">`array`</span> | <span class="method-description">Get the categories on a particular post<br><br><span class="method-return"><span class="method-return-label">Returns:</span> of Timber\Term objects</span></span> |
| <span class="method-name">[category()](#category)</span> | <span class="method-type">`\Timber\Term` or `null`</span> | <span class="method-description">Returns a category attached to a post</span> |
| <span class="method-name">[children()](#children)</span> | <span class="method-type">`\Timber\PostCollectionInterface`</span> | <span class="method-description">Returns an array of children on the post as Timber\Posts (or other claass as you define).</span> |
| <span class="method-name">[comment_count()](#comment_count)</span> | <span class="method-type">`int`</span> | <span class="method-description">Gets the number of comments on a post.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The number of comments on a post</span></span> |
| <span class="method-name">[comment_form()](#comment_form)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the comment form for use on a single article page<br><br><span class="method-return"><span class="method-return-label">Returns:</span> of HTML for the form</span></span> |
| <span class="method-name">[comments()](#comments)</span> | <span class="method-type">`bool` or `\Timber\CommentThread`</span> | <span class="method-description">Gets the comments on a Timber\Post and returns them as an array of `Timber\Comment` objects (or whatever comment class you set).</span> |
| <span class="method-name">[content()](#content)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the actual content of a WordPress post.</span> |
| <span class="method-name">[convert()](#convert)</span> | <span class="method-type"></span> | <span class="method-description">Finds any WP_Post objects and converts them to Timber\Posts</span> |
| <span class="method-name">[date()](#date)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the publishing date of the post.</span> |
| <span class="method-name">[edit_link()](#edit_link)</span> | <span class="method-type">`string` or `null`</span> | <span class="method-description">Gets the edit link for a post if the current user has the correct rights.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The edit URL of a post in the WordPress admin or null if the current user can’t edit the post.</span></span> |
| <span class="method-name">[excerpt()](#excerpt)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Gets a excerpt of your post.</span> |
| <span class="method-name">[field_object()](#field_object)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets the field object data from Advanced Custom Fields.</span> |
| <span class="method-name">[format()](#format)</span> | <span class="method-type">`mixed`</span> | <span class="method-description"></span> |
| <span class="method-name">[gallery()](#gallery)</span> | <span class="method-type">`array`</span> | <span class="method-description">Returns galleries from the post’s content.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A list of arrays, each containing gallery data and srcs parsed from the expanded shortcode.</span></span> |
| <span class="method-name">[~~get_field~~()](#get_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a post meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[has_field()](#has_field)</span> | <span class="method-type">`bool`</span> | <span class="method-description"></span> |
| <span class="method-name">[has_term()](#has_term)</span> | <span class="method-type">`bool`</span> | <span class="method-description"></span> |
| <span class="method-name">[~~import_field~~()](#import_field)</span> | <span class="method-type"></span> | <span class="method-description">Import field data onto this object</span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description">get the permalink for a post object<br><br><span class="method-return"><span class="method-return-label">Returns:</span> ex: http://example.org/2015/07/my-awesome-post</span></span> |
| <span class="method-name">[modified_author()](#modified_author)</span> | <span class="method-type">`\Timber\User` or `null`</span> | <span class="method-description">Get the author (WordPress user) who last modified the post<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A User object if found, false if not</span></span> |
| <span class="method-name">[modified_date()](#modified_date)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the date the post was last modified.</span> |
| <span class="method-name">[modified_time()](#modified_time)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the time of the last modification of the post to use in your template.</span> |
| <span class="method-name">[modified_timestamp()](#modified_timestamp)</span> | <span class="method-type">`false` or `int`</span> | <span class="method-description">Gets the timestamp when the post was last modified.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Unix timestamp on success, false on failure.</span></span> |
| <span class="method-name">[name()](#name)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[next()](#next)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets the next post that is adjacent to the current post in a collection.</span> |
| <span class="method-name">[pagination()](#pagination)</span> | <span class="method-type">`array`</span> | <span class="method-description">Gets a data array to display a pagination for your paginated post.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> An array with data to build your paginated content.</span></span> |
| <span class="method-name">[parent()](#parent)</span> | <span class="method-type">`bool` or `\Timber\Post`</span> | <span class="method-description">Gets the parent (if one exists) from a post as a Timber\Post object.</span> |
| <span class="method-name">[password_required()](#password_required)</span> | <span class="method-type">`bool`</span> | <span class="method-description">whether post requires password and correct password has been provided</span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the relative path of a WP Post, so while link() will return http://example.org/2015/07/my-cool-post this will return just /2015/07/my-cool-post</span> |
| <span class="method-name">[prev()](#prev)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Get the previous post that is adjacent to the current post in a collection.</span> |
| <span class="method-name">[~~preview~~()](#preview)</span> | <span class="method-type">`\Timber\PostExcerpt`</span> | <span class="method-description">Gets an excerpt of your post.</span> |
| <span class="method-name">[setup()](#setup)</span> | <span class="method-type">`\Timber\Post`</span> | <span class="method-description">Sets up a post.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The post instance.</span></span> |
| <span class="method-name">[tags()](#tags)</span> | <span class="method-type">`array`</span> | <span class="method-description">Gets the tags on a post, uses WP's post_tag taxonomy</span> |
| <span class="method-name">[teardown()](#teardown)</span> | <span class="method-type">`\Timber\Post`</span> | <span class="method-description">Resets variables after post has been used.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The post instance.</span></span> |
| <span class="method-name">[terms()](#terms)</span> | <span class="method-type">`array`</span> | <span class="method-description">Gets the terms associated with the post.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> An array of taxonomies.</span></span> |
| <span class="method-name">[thumbnail()](#thumbnail)</span> | <span class="method-type">`\Timber\Image` or `null`</span> | <span class="method-description">get the featured image as a Timber/Image<br><br><span class="method-return"><span class="method-return-label">Returns:</span> of your thumbnail</span></span> |
| <span class="method-name">[thumbnail_id()](#thumbnail_id)</span> | <span class="method-type">`false` or `int`</span> | <span class="method-description">Gets the post’s thumbnail ID.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The default post’s ID. False if no thumbnail was defined.</span></span> |
| <span class="method-name">[time()](#time)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the time the post was published to use in your template.</span> |
| <span class="method-name">[timestamp()](#timestamp)</span> | <span class="method-type">`false` or `int`</span> | <span class="method-description">Gets the timestamp when the post was published.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Unix timestamp on success, false on failure.</span></span> |
| <span class="method-name">[title()](#title)</span> | <span class="method-type">`string`</span> | <span class="method-description">Returns the processed title to be used in templates. This returns the title of the post after WP's filters have run. This is analogous to `the_title()` in standard WP template tags.</span> |
| <span class="method-name">[type()](#type)</span> | <span class="method-type">`\Timber\PostType`</span> | <span class="method-description">Returns the PostType object for a post’s post type with labels and other info.</span> |
| <span class="method-name">[video()](#video)</span> | <span class="method-type">`bool` or `array`</span> | <span class="method-description">Returns video tags embedded in the post’s content.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A list of found HTML embeds.</span></span> |

</div>


## Class Methods

### \_\_get()

This is helpful for twig to return properties and methods see:
https://github.com/fabpot/Twig/issues/2

This is also here to ensure that {{ post.class }} remains usable.

`__get( mixed $field )`

**Returns:** `mixed` 

---

### \_\_call()

This is helpful for twig to return properties and methods see:
https://github.com/fabpot/Twig/issues/2

This is also here to ensure that {{ post.class }} remains usable

`__call( mixed $field, mixed $args )`

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

Gets a excerpt of your post.

If you have an excerpt is set on the post, the excerpt will be used. Otherwise it will try to
pull from an excerpt from `post_content`. If there’s a `<!-- more -->` tag in the post
content, it will use that to mark where to pull through.

**see** [Timber\PostExcerpt](../timber-postexcerpt/)

`excerpt( array $options = [] )`

**Returns:** `\Timber\PostExcerpt` 

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

Gets an excerpt of your post.

**DEPRECATED** since 2.0.0, use `{{ post.excerpt }}` instead.

If you have an excerpt is set on the post, the excerpt will be used. Otherwise it will try to
pull from an excerpt from `post_content`. If there’s a `<!-- more -->` tag in the post
content, it will use that to mark where to pull through.

This method returns a `Timber\PostExcerpt` object, which is a **chainable object**. This
means that you can change the output of the excerpt by **adding more methods**. Refer to the
[documentation of the `Timber\PostExcerpt` class](https://timber.github.io/docs/reference/timber-postexcerpt/)
to get an overview of all the available methods.

**see** [Timber\PostExcerpt](../timber-postexcerpt/)

**Returns:** `\Timber\PostExcerpt` 

**Twig**

```twig
{# Use default excerpt #}
<p>{{ post.excerpt }}</p>

{# Change the post excerpt text #}
<p>{{ post.excerpt.read_more('Continue Reading') }}</p>

{# Additionally restrict the length to 50 words #}
<p>{{ post.excerpt.length(50).read_more('Continue Reading') }}</p>
```

---

### comment\_form()

Gets the comment form for use on a single article page

`comment_form( array $args = [] )`

**Returns:** `string` of HTML for the form

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` | see [WordPress docs on comment_form](http://codex.wordpress.org/Function_Reference/comment_form) for reference on acceptable parameters |

---

### terms()

Gets the terms associated with the post.

`terms( string|array $query_args = [], array $options = [] )`

**Returns:** `array` An array of taxonomies.

| Name | Type | Description |
| --- | --- | --- |
| $query_args | `string` or `array` | Any array of term query parameters for getting the terms. See `WP_Term_Query::__construct()` for supported arguments. Use the `taxonomy` argument to choose which taxonomies to get. Defaults to querying all registered taxonomies for the post type. You can use custom or built-in WordPress taxonomies (category, tag). Timber plays nice and figures out that `tag`, `tags` or `post_tag` are all the same (also for `categories` or `category`). For custom taxonomies you need to define the proper name. |
| $options | `array` | Optional. An array of options for the function.<br><br><ul><li>**$merge**<br>`bool` Whether the resulting array should be one big one (`true`) or whether it should be an array of sub-arrays for each taxonomy (`false`). Default `true`.</li></ul> |

**Twig**

```twig
<section id="job-feed">
{% for post in job %}
    <div class="job">
        <h2>{{ post.title }}</h2>
        <p>{{ post.terms({
            taxonomy: 'category',
            orderby: 'name',
            order: 'ASC'
        })|join(', ') }}</p>
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
$terms = $post->terms( [
    'taxonomy' => 'custom_tax',
    'orderby'  => 'count'
], [
    'merge' => false
] );
```

---

### has\_term()

`has_term( string|int $term_name_or_id, string $taxonomy = 'all' )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $term_name_or_id | `string` or `int` |  |
| $taxonomy | `string` |  |

---

### comment\_count()

Gets the number of comments on a post.

**Returns:** `int` The number of comments on a post

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

**DEPRECATED** since since 2.0.0

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

`children( string|array $post_type = 'any' )`

**Returns:** `\Timber\PostCollectionInterface` 

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` or `array` | _optional_ use to find children of a particular post type (attachment vs. page for example). You might want to restrict to certain types of children in case other stuff gets all mucked in there. You can use 'parent' to use the parent's post type or you can pass an array of post types. |

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

`comments( int $count = null, string $order = 'wp', string $type = 'comment', string $status = 'approve' )`

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

Gets the actual content of a WordPress post.

As opposed to using `{{ post.post_content }}`, this will run the hooks/filters attached to
the `the_content` filter. It will return your post’s content with WordPress filters run on it
– which means it will parse blocks, convert shortcodes or run `wpautop()` on the content.

If you use page breaks in your content to split your post content into multiple pages,
use `{{ post.paged_content }}` to display only the content for the current page.

`content( int $page = '', mixed $len = -1 )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $page | `int` | Optional. The page to show if the content of the post is split into multiple pages. Read more about this in the [Pagination Guide](https://timber.github.io/docs/v2/guides/pagination/#paged-content-within-a-post). Default `0`. |

**Twig**

```twig
<article>
    <h1>{{ post.title }}</h1>

    <div class="content">{{ post.content }}</div>
</article>
```

---

### timestamp()

Gets the timestamp when the post was published.

**since** 2.0.0

**Returns:** `false|int` Unix timestamp on success, false on failure.

---

### modified\_timestamp()

Gets the timestamp when the post was last modified.

**since** 2.0.0

**Returns:** `false|int` Unix timestamp on success, false on failure.

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

### can\_edit()

Checks whether the current user can edit the post.

**Returns:** `bool` 

**Twig**

```twig
{% if post.can_edit %}
    <a href="{{ post.edit_link }}">Edit</a>
{% endif %}
```

---

### edit\_link()

Gets the edit link for a post if the current user has the correct rights.

**Returns:** `string|null` The edit URL of a post in the WordPress admin or null if the current user can’t edit the
post.

**Twig**

```twig
{% if post.can_edit %}
    <a href="{{ post.edit_link }}">Edit</a>
{% endif %}
```

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

Gets the next post that is adjacent to the current post in a collection.

Works pretty much the same as
[`get_next_post()`](https://developer.wordpress.org/reference/functions/get_next_post/).

`next( bool|string $in_same_term = false )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $in_same_term | `bool` or `string` | Whether the post should be in a same taxonomy term. Default `false`. |

**Twig**

```twig
{% if post.next %}
    <a href="{{ post.next.link }}">{{ post.next.title }}</a>
{% endif %}
```

---

### pagination()

Gets a data array to display a pagination for your paginated post.

Use this in combination with `{{ post.paged_content }}`.

**Returns:** `array` An array with data to build your paginated content.

Using simple links to the next an previous page.
**Twig**

```twig
{% if post.pagination.next is not empty %}
    <a href="{{ post.pagination.next.link|e('esc_url') }}">Go to next page</a>
{% endif %}

{% if post.pagination.prev is not empty %}
    <a href="{{ post.pagination.prev.link|e('esc_url') }}">Go to previous page</a>
{% endif %}
```
Using a pagination for all pages.
**Twig**

```twig
{% if post.pagination.pages is not empty %}
   <nav aria-label="pagination">
       <ul>
           {% for page in post.pagination.pages %}
               <li>
                   {% if page.current %}
                       <span aria-current="page">Page {{ page.title }}</span>
                   {% else %}
                       <a href="{{ page.link|e('esc_url') }}">Page {{ page.title }}</a>
                   {% endif %}
               </li>
           {% endfor %}
       </ul>
   </nav>
{% endif %}
```

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

Gets the parent (if one exists) from a post as a Timber\Post object.

Honors Class Maps.

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

Get the previous post that is adjacent to the current post in a collection.

Works pretty much the same as
[`get_previous_post()`](https://developer.wordpress.org/reference/functions/get_previous_post/).

`prev( bool|string $in_same_term = false )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $in_same_term | `bool` or `string` | Whether the post should be in a same taxonomy term. Default `false`. |

**Twig**

```twig
{% if post.prev %}
    <a href="{{ post.prev.link }}">{{ post.prev.title }}</a>
{% endif %}
```

---

### tags()

Gets the tags on a post, uses WP's post_tag taxonomy

**Returns:** `array` 

---

### thumbnail\_id()

Gets the post’s thumbnail ID.

**since** 2.0.0

**Returns:** `false|int` The default post’s ID. False if no thumbnail was defined.

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

`gallery( mixed $html = true )`

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

