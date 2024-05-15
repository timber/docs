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
*This class implements `Stringable`*  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$avatar_override</span> | <span class="property-type">`string`</span> | <span class="property-description">A URL to an avatar that overrides anything from Gravatar, etc.</span> |
| <span class="property-name">$id</span> | <span class="property-type">`int`</span> | <span class="property-description">The ID from WordPress</span> |
| <span class="property-name">$user_nicename</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$user_email</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$roles</span> | <span class="property-type">`array`</span> | <span class="property-description"></span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description"><br><br><span class="method-return"><span class="method-return-label">Returns:</span> a fallback for Timber\User::name()</span></span> |
| <span class="method-name">[avatar()](#avatar)</span> | <span class="method-type">`string`</span> | <span class="method-description">Gets a user’s avatar URL.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The avatar URL.</span></span> |
| <span class="method-name">[can()](#can)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks whether a user has a capability.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Whether the user has the capability.</span></span> |
| <span class="method-name">[can_edit()](#can_edit)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks whether the current user can edit the post.</span> |
| <span class="method-name">[edit_link()](#edit_link)</span> | <span class="method-type">`string` or `null`</span> | <span class="method-description">Gets the edit link for a user if the current user has the correct rights or the profile link for the current user.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The edit URL of a user in the WordPress admin or the profile link if the user object is for the current user. Null if the current user can’t edit the user.</span></span> |
| <span class="method-name">[~~get_field~~()](#get_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a user meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[~~get_meta~~()](#get_meta)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a user meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[~~get_meta_field~~()](#get_meta_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a user meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[is_current()](#is_current)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Check if the user object is the current user<br><br><span class="method-return"><span class="method-return-label">Returns:</span> true if the user is the current user</span></span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the URL of the user's profile<br><br><span class="method-return"><span class="method-return-label">Returns:</span> https://example.org/author/lincoln</span></span> |
| <span class="method-name">[name()](#name)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the name of the User<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the human-friendly name of the user (ex: "Buster Bluth")</span></span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the relative path to the user's profile<br><br><span class="method-return"><span class="method-return-label">Returns:</span> ex: /author/lincoln</span></span> |
| <span class="method-name">[profile_link()](#profile_link)</span> | <span class="method-type">`string` or `null`</span> | <span class="method-description">Gets the profile link to the user’s profile in the WordPress admin if the ID in the user object is the same as the current user’s ID.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The profile link for the current user.</span></span> |
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

**Returns:** `string` https://example.org/author/lincoln

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

### is\_current()

Check if the user object is the current user

**Returns:** `bool` true if the user is the current user

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

### profile\_link()

Gets the profile link to the user’s profile in the WordPress admin if the ID in the user object
is the same as the current user’s ID.

**since** 2.1.0

**Returns:** `string|null` The profile link for the current user.

Get the profile URL for the current user:

**Twig**

```twig
{% if user.profile_link %}
    <a href="{{ user.profile_link }}">My profile</a>
{% endif %}
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

`can( string $capability, mixed $args )`

**Returns:** `bool` Whether the user has the capability.

| Name | Type | Description |
| --- | --- | --- |
| $capability | `string` | The capability to check. |
| $args | `mixed` | Additional arguments to pass to the user_can function |

Give moderation users another CSS class to style them differently.

**Twig**

```twig
<span class="comment-author {{ comment.author.can('moderate_comments') ? 'comment-author--is-moderator }}">
    {{ comment.author.name }}
</span>
```

---

### can\_edit()

Checks whether the current user can edit the post.

**Returns:** `bool` 

**Twig**

```twig
{% if user.can_edit %}
    <a href="{{ user.edit_link }}">Edit</a>
{% endif %}
```

---

### edit\_link()

Gets the edit link for a user if the current user has the correct rights or the profile link for the current
user.

**since** 2.0.0

**Returns:** `string|null` The edit URL of a user in the WordPress admin or the profile link if the user object is for
the current user. Null if the current user can’t edit the user.

**Twig**

```twig
{% if user.can_edit %}
    <a href="{{ user.edit_link }}">Edit</a>
{% endif %}
```

Get the profile URL for the current user:

**Twig**

```twig
{# Assuming user is the current user. #}
{% if user %}
    <a href="{{ user.edit_link }}">My profile</a>
{% endif %}
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

