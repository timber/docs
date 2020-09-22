---
title: "Timber\\​User"
linktitle: "User"
is_reference: true
---

A user object represents a WordPress user.

The currently logged-in user will be available as `{{ user }}` in your Twig files through the
global context. If a user is not logged in, it will be `false`. This will make it possible for
you to check if a user is logged by checking for `user` instead of calling `is_user_logged_in()`
in your Twig templates.

<!--more-->

**Twig**

```twig
{% if user %}
    Hello {{ user.name }}
{% endif %}
```

The difference between a logged-in user and a post author:

**PHP**

```php
$context = Timber::context();

Timber::render( 'single.twig', $context );
```
**Twig**

```twig
<p class="current-user-info">Your name is {{ user.name }}</p>
<p class="article-info">This article is called "{{ post.title }}"
    and it’s by {{ post.author.name }}</p>
```
**HTML**

```html
<p class="current-user-info">Your name is Jesse Eisenberg</p>
<p class="article-info">This article is called "Consider the Lobster"
    and it’s by David Foster Wallace</p>
```

## Overview

*This class extends `Timber\Core`*  
*This class implements `Timber\CoreInterface`, `Timber\MetaInterface`*  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $avatar_override | `string` | A URL to an avatar that overrides anything from Gravatar, etc. |
| $description | `string` | The description from WordPress |
| $display_name | `string` |  |
| $first_name | `string` | The first name of the user |
| $last_name | `string` | The last name of the user |
| $id | `int` | The ID from WordPress |
| $user_nicename | `string` |  |
| $roles | `array` |  |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__toString()](#__toString) | `string` | <br><br>*Returns:* a fallback for Timber\User::name() |
| [avatar()](#avatar) | `string` or `\Timber\Image` | Gets a user’s avatar URL.<br><br>*Returns:* The avatar URL. |
| [can()](#can) | `bool` | Checks whether a user has a capability.<br><br>*Returns:* Whether the user has the capability. |
| [~~get_field~~()](#get_field) | `mixed` | Gets a user meta value.<br><br>*Returns:* The meta field value. |
| [~~get_meta~~()](#get_meta) | `mixed` | Gets a user meta value.<br><br>*Returns:* The meta field value. |
| [~~get_meta_field~~()](#get_meta_field) | `mixed` | Gets a user meta value.<br><br>*Returns:* The meta field value. |
| [link()](#link) | `string` | Get the URL of the user's profile<br><br>*Returns:* http://example.org/author/lincoln |
| [meta()](#meta) | `mixed` | Gets a user meta value.<br><br>*Returns:* The meta field value. Null if no value could be found. |
| [name()](#name) | `string` | Get the name of the User<br><br>*Returns:* the human-friendly name of the user (ex: "Buster Bluth") |
| [path()](#path) | `string` | Get the relative path to the user's profile<br><br>*Returns:* ex: /author/lincoln |
| [raw_meta()](#raw_meta) | `null` or `mixed` | Gets a user meta value directly from the database.<br><br>*Returns:* The meta field value(s). Null if no value could be found, an empty array if all fields were requested but no values could be found. |
| [roles()](#roles) | `array` or `null` | Gets the user roles. |
| [slug()](#slug) | `string` | <br><br>*Returns:* ex baberaham-lincoln |


## Class Methods

### \_\_toString()

**Returns:** `string` a fallback for Timber\User::name()

**Twig**

```twig
This post is by {{ post.author }}
```
**HTML**

```html
This post is by Jared Novack
```

---

### link()

Get the URL of the user's profile

**Returns:** `string` http://example.org/author/lincoln

---

### meta()

Gets a user meta value.

Returns a meta value for a user that’s saved in the user meta database table.

`meta( string $field_name = '', array $args = array() )`

**Returns:** `mixed` The meta field value. Null if no value could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |
| $args | `array` | An array of arguments for getting the meta value. Third-party integrations can use this argument to make their API arguments available in Timber. Default empty. |

---

### raw\_meta()

Gets a user meta value directly from the database.

Returns a raw meta value or all raw meta values saved in the user meta database table. In
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
| $args | `array` | Optional. An array of args for `User::meta()`. Default empty array. |

---

### ~~get\_field~~()

Gets a user meta value.

**DEPRECATED** since 2.0.0, use `{{ user.meta('field_name') }}` instead.

**see** [Timber\User::meta()](../timber-user/#meta)

`get_field( string $field_name = null )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### name()

Get the name of the User

**Returns:** `string` the human-friendly name of the user (ex: "Buster Bluth")

---

### path()

Get the relative path to the user's profile

**Returns:** `string` ex: /author/lincoln

---

### slug()

**Returns:** `string` ex baberaham-lincoln

---

### ~~get\_meta\_field~~()

Gets a user meta value.

**DEPRECATED** since 2.0.0, use `{{ user.meta('field_name') }}` instead.

`get_meta_field( string $field_name )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### ~~get\_meta~~()

Gets a user meta value.

**DEPRECATED** since 2.0.0, use `{{ user.meta('field_name') }}` instead.

`get_meta( string $field_name )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### roles()

Gets the user roles.

Roles shouldn’t be used to check whether a user has a capability. Use roles only for
displaying purposes. For example, if you want to display the name of the subscription a user
has on the site behind a paywall.

If you want to check for capabilities, use `{{ user.can('capability') }}`. If you only want
to check whether a user is logged in, you can use `{% if user %}`.

**since** 1.8.5 

**Returns:** `array|null` 

**Twig**

```twig
<h2>Role name</h2>
{% for role in post.author.roles %}
    {{ role }}
{% endfor %}
```
**Twig**

```twig
<h2>Role name</h2>
{{ post.author.roles|join(', ') }}
```
**Twig**

```twig
{% for slug, name in post.author.roles %}
    {{ slug }}
{% endfor %}
```

---

### can()

Checks whether a user has a capability.

Don’t use role slugs for capability checks. While checking against a role in place of a
capability is supported in part, this practice is discouraged as it may produce unreliable
results. This includes cases where you want to check whether a user is registered. If you
want to check whether a user is a Subscriber, use `{{ user.can('read') }}`. If you only want
to check whether a user is logged in, you can use `{% if user %}`.

**since** 1.8.5 

`can( string $capability )`

**Returns:** `bool` Whether the user has the capability.

| Name | Type | Description |
| --- | --- | --- |
| $capability | `string` | The capability to check. |

Give moderation users another CSS class to style them differently.

**Twig**

```twig
<span class="comment-author {{ comment.author.can('moderate_comments') ? 'comment-author--is-moderator }}">
    {{ comment.author.name }}
</span>
```

---

### avatar()

Gets a user’s avatar URL.

**since** 1.9.1 

`avatar( null|array $args = null )`

**Returns:** `string|\Timber\Image` The avatar URL.

| Name | Type | Description |
| --- | --- | --- |
| $args | `null` or `array` | Parameters for [`get_avatar_url()`](https://developer.wordpress.org/reference/functions/get_avatar_url/). |

Get a user avatar with a width and height of 150px:

**Twig**

```twig
<img src="{{ post.author.avatar({ size: 150 }) }}">
```

---

