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
$comment = Timber::get_comment( $comment_id );

$context = [
    'comment_of_the_day' => $comment
];

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

*This class extends `Timber\CoreEntity`*  
  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$ID</span> | <span class="property-type">`int`</span> | <span class="property-description"></span> |
| <span class="property-name">$id</span> | <span class="property-type">`int`</span> | <span class="property-description"></span> |
| <span class="property-name">$comment_author_email</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$comment_content</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$comment_date</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$comment_ID</span> | <span class="property-type">`int`</span> | <span class="property-description"></span> |
| <span class="property-name">$user_id</span> | <span class="property-type">`int`</span> | <span class="property-description"></span> |
| <span class="property-name">$post_id</span> | <span class="property-type">`int`</span> | <span class="property-description"></span> |
| <span class="property-name">$comment_author</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the content.</span> |
| <span class="method-name">[add_child()](#add_child)</span> | <span class="method-type">`array`</span> | <span class="method-description">Adds a child.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Comment children.</span></span> |
| <span class="method-name">[approved()](#approved)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Is the comment approved?</span> |
| <span class="method-name">[author()](#author)</span> | <span class="method-type">`\Timber\User`</span> | <span class="method-description">Gets the author.</span> |
| <span class="method-name">[avatar()](#avatar)</span> | <span class="method-type">`bool` or `mixed` or `string`</span> | <span class="method-description">Fetches the Gravatar.</span> |
| <span class="method-name">[can_edit()](#can_edit)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks whether the current user can edit the comment.</span> |
| <span class="method-name">[children()](#children)</span> | <span class="method-type">`array`</span> | <span class="method-description">Gets the comment children.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Comments</span></span> |
| <span class="method-name">[content()](#content)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets the content.</span> |
| <span class="method-name">[date()](#date)</span> | <span class="method-type">`string`</span> | <span class="method-description">The date for the comment.</span> |
| <span class="method-name">[depth()](#depth)</span> | <span class="method-type">`int`</span> | <span class="method-description">At what depth is this comment?</span> |
| <span class="method-name">[edit_link()](#edit_link)</span> | <span class="method-type">`string` or `null`</span> | <span class="method-description">Gets the edit link for a comment if the current user has the correct rights.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The edit URL of a comment in the WordPress admin or null if the current user can’t edit the comment.</span></span> |
| <span class="method-name">[~~get_field~~()](#get_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a comment meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[~~get_meta_field~~()](#get_meta_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a comment meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[is_child()](#is_child)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks if the comment is a child.</span> |
| <span class="method-name">[reply_link()](#reply_link)</span> | <span class="method-type">`string`</span> | <span class="method-description">Enqueue the WP threaded comments JavaScript, and fetch the reply link for various comments.</span> |
| <span class="method-name">[time()](#time)</span> | <span class="method-type">`string`</span> | <span class="method-description">What time was the comment posted?</span> |
| <span class="method-name">[update_depth()](#update_depth)</span> | <span class="method-type"></span> | <span class="method-description">Updates the comment depth.</span> |

</div>


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

`reply_link( string $reply_text = 'Reply' )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $reply_text | `string` | Text of the reply link. |

---

### can\_edit()

Checks whether the current user can edit the comment.

**Returns:** `bool` 

**Twig**

```twig
{% if comment.can_edit %}
    <a href="{{ comment.edit_link }}">Edit</a>
{% endif %}
```

---

### edit\_link()

Gets the edit link for a comment if the current user has the correct rights.

**since** 2.0.0

**Returns:** `string|null` The edit URL of a comment in the WordPress admin or null if the current user can’t edit the
comment.

**Twig**

```twig
{% if comment.can_edit %}
    <a href="{{ comment.edit_link }}">Edit</a>
{% endif %}
```

---

