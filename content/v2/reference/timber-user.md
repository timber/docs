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

*This class extends `Timber\CoreEntity`*  
  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$avatar_override</span> | <span class="property-type">`string`</span> | <span class="property-description">A URL to an avatar that overrides anything from Gravatar, etc.</span> |
| <span class="property-name">$description</span> | <span class="property-type">`string`</span> | <span class="property-description">The description from WordPress</span> |
| <span class="property-name">$display_name</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$first_name</span> | <span class="property-type">`string`</span> | <span class="property-description">The first name of the user</span> |
| <span class="property-name">$last_name</span> | <span class="property-type">`string`</span> | <span class="property-description">The last name of the user</span> |
| <span class="property-name">$id</span> | <span class="property-type">`int`</span> | <span class="property-description">The ID from WordPress</span> |
| <span class="property-name">$user_nicename</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$roles</span> | <span class="property-type">`array`</span> | <span class="property-description"></span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description"><br><br><span class="method-return"><span class="method-return-label">Returns:</span> a fallback for Timber\User::name()</span></span> |
| <span class="method-name">[avatar()](#avatar)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets a user’s avatar URL.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The avatar URL.</span></span> |
| <span class="method-name">[can()](#can)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks whether a user has a capability.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Whether the user has the capability.</span></span> |
| <span class="method-name">[~~get_field~~()](#get_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a user meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[~~get_meta~~()](#get_meta)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a user meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[~~get_meta_field~~()](#get_meta_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a user meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the URL of the user's profile<br><br><span class="method-return"><span class="method-return-label">Returns:</span> http://example.org/author/lincoln</span></span> |
| <span class="method-name">[name()](#name)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the name of the User<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the human-friendly name of the user (ex: "Buster Bluth")</span></span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the relative path to the user's profile<br><br><span class="method-return"><span class="method-return-label">Returns:</span> ex: /author/lincoln</span></span> |
| <span class="method-name">[roles()](#roles)</span> | <span class="method-type">`array` or `null`</span> | <span class="method-description">Gets the user roles.</span> |
| <span class="method-name">[slug()](#slug)</span> | <span class="method-type">`string`</span> | <span class="method-description"><br><br><span class="method-return"><span class="method-return-label">Returns:</span> ex baberaham-lincoln</span></span> |

</div>


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

**Returns:** `string` The avatar URL.

| Name | Type | Description |
| --- | --- | --- |
| $args | `null` or `array` | Parameters for [`get_avatar_url()`](https://developer.wordpress.org/reference/functions/get_avatar_url/). |

Get a user avatar with a width and height of 150px:

**Twig**

```twig
<img src="{{ post.author.avatar({ size: 150 }) }}">
```

---

