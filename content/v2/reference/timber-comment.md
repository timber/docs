---
title: "Timber\\​Comment"
linktitle: "Comment"
is_reference: true
---

The `Timber\Comment` class is used to view the output of comments. 99% of the time this will be
in the context of the comments on a post. However you can also fetch a comment directly using its
comment ID.

<!--more-->

**PHP**

```php
$comment = new Timber\Comment($comment_id);
$context['comment_of_the_day'] = $comment;
Timber::render('index.twig', $context);
```

**Twig**

```twig
<p class="comment">{{comment_of_the_day.content}}</p>
<p class="comment-attribution">- {{comment.author.name}}</p>
```

**HTML**

```html
<p class="comment">But, O Sarah! If the dead can come back to this earth and flit unseen around those they loved, I shall always be near you; in the garish day and in the darkest night -- amidst your happiest scenes and gloomiest hours - always, always; and if there be a soft breeze upon your cheek, it shall be my breath; or the cool air fans your throbbing temple, it shall be my spirit passing by.</p>
<p class="comment-attribution">- Sullivan Ballou</p>
```

## Overview

*This class extends `Timber\Core`*  
*This class implements `Timber\CoreInterface`, `Timber\MetaInterface`*  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $ID | `int` |  |
| $id | `int` |  |
| $comment_author_email | `string` |  |
| $comment_content | `string` |  |
| $comment_date | `string` |  |
| $comment_ID | `int` |  |
| $user_id | `int` |  |
| $post_id | `int` |  |
| $comment_author | `string` |  |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__toString()](#__toString) | `string` | Gets the content. |
| [add_child()](#add_child) | `array` | Adds a child.<br><br>*Returns:* Comment children. |
| [approved()](#approved) | `bool` | Is the comment approved? |
| [author()](#author) | `\Timber\User` | Gets the author. |
| [avatar()](#avatar) | `bool` or `mixed` or `string` | Fetches the Gravatar. |
| [children()](#children) | `array` | Gets the comment children.<br><br>*Returns:* Comments |
| [content()](#content) | `string` | Gets the content. |
| [date()](#date) | `string` | The date for the comment. |
| [depth()](#depth) | `int` | At what depth is this comment? |
| [~~get_field~~()](#get_field) | `mixed` | Gets a comment meta value.<br><br>*Returns:* The meta field value. |
| [~~get_meta_field~~()](#get_meta_field) | `mixed` | Gets a comment meta value.<br><br>*Returns:* The meta field value. |
| [is_child()](#is_child) | `bool` | Checks if the comment is a child. |
| [meta()](#meta) | `mixed` | Gets a comment meta value.<br><br>*Returns:* The meta field value. Null if no value could be found. |
| [raw_meta()](#raw_meta) | `null` or `mixed` | Gets a comment meta value directly from the database.<br><br>*Returns:* The meta field value(s). Null if no value could be found, an empty array if all fields were requested but no values could be found. |
| [reply_link()](#reply_link) | `string` | Enqueue the WP threaded comments JavaScript, and fetch the reply link for various comments. |
| [time()](#time) | `string` | What time was the comment posted? |
| [update_depth()](#update_depth) |  | Updates the comment depth. |


## Class Methods

### \_\_toString()

Gets the content.

**Returns:** `string` 

---

### author()

Gets the author.

**Returns:** `\Timber\User` 

**Twig**

```twig
<h3>Comments by...</h3>
<ol>
{% for comment in post.comments %}
    <li>{{comment.author.name}}, who is a {{comment.author.roles[0]}}</li>
{% endfor %}
</ol>
```
**HTML**

```html
<h3>Comments by...</h3>
<ol>
 <li>Jared Novack, who is a contributor</li>
 <li>Katie Ricci, who is a subscriber</li>
 <li>Rebecca Pearl, who is a author</li>
</ol>
```

---

### avatar()

Fetches the Gravatar.

`avatar( int|mixed $size = 92, string $default = '' )`

**Returns:** `bool|mixed|string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `int` or `mixed` | Size of avatar. |
| $default | `string` | Default avatar URL. |

**Twig**

```twig
<img src="{{comment.avatar(36,template_uri~"/img/dude.jpg")}}" alt="Image of {{comment.author.name}}" />
```
**HTML**

```html
<img src="http://gravatar.com/i/sfsfsdfasdfsfa.jpg" alt="Image of Katherine Rich" />
```

---

### content()

Gets the content.

**Returns:** `string` 

---

### children()

Gets the comment children.

**Returns:** `array` Comments

---

### add\_child()

Adds a child.

`add_child( \Timber\Comment $child_comment )`

**Returns:** `array` Comment children.

| Name | Type | Description |
| --- | --- | --- |
| $child_comment | `\Timber\Comment` | Comment child to add. |

---

### update\_depth()

Updates the comment depth.

`update_depth( int $depth = '' )`

| Name | Type | Description |
| --- | --- | --- |
| $depth | `int` | Level of depth. |

---

### depth()

At what depth is this comment?

**Returns:** `int` 

---

### approved()

Is the comment approved?

**Returns:** `bool` 

**Twig**

```twig
{% if comment.approved %}
  Your comment is good
{% else %}
  Do you kiss your mother with that mouth?
{% endif %}
```

---

### date()

The date for the comment.

`date( string $date_format = '' )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $date_format | `string` | of desired PHP date format (eg "M j, Y"). |

**Twig**

```twig
{% for comment in post.comments %}
<article class="comment">
  <p class="date">Posted on {{ comment.date }}:</p>
  <p class="comment">{{ comment.content }}</p>
</article>
{% endfor %}
```
**HTML**

```html
<article class="comment">
  <p class="date">Posted on September 28, 2015:</p>
  <p class="comment">Happy Birthday!</p>
</article>
```

---

### time()

What time was the comment posted?

`time( string $time_format = '' )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $time_format | `string` | of desired PHP time format (eg "H:i:s"). |

**Twig**

```twig
{% for comment in post.comments %}
<article class="comment">
  <p class="date">Posted on {{ comment.date }} at {{comment.time}}:</p>
  <p class="comment">{{ comment.content }}</p>
</article>
{% endfor %}
```
**HTML**

```html
<article class="comment">
  <p class="date">Posted on September 28, 2015 at 12:45 am:</p>
  <p class="comment">Happy Birthday!</p>
</article>
```

---

### ~~get\_meta\_field~~()

Gets a comment meta value.

**DEPRECATED** since 2.0.0, use `{{ comment.meta('field_name') }}` instead.

`get_meta_field( string $field_name )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### is\_child()

Checks if the comment is a child.

**Returns:** `bool` 

---

### meta()

Gets a comment meta value.

Returns a meta value for a comment that’s saved in the comment meta database table.

`meta( string $field_name = '', array $args = array() )`

**Returns:** `mixed` The meta field value. Null if no value could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |
| $args | `array` | An array of arguments for getting the meta value. Third-party integrations can use this argument to make their API arguments available in Timber. Default empty. |

---

### raw\_meta()

Gets a comment meta value directly from the database.

Returns a raw meta value or all raw meta values saved in the comment meta database table. In
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
| $args | `array` | Optional. An array of args for `Comment::meta()`. Default empty array. |

---

### ~~get\_field~~()

Gets a comment meta value.

**DEPRECATED** since 2.0.0, use `{{ comment.meta('field_name') }}` instead.

**see** [Timber\Comment::meta()](../timber-comment/#meta)

`get_field( string $field_name = null )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### reply\_link()

Enqueue the WP threaded comments JavaScript, and fetch the reply link for various comments.

`reply_link( string $reply_text = Reply )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $reply_text | `string` | Text of the reply link. |

---

