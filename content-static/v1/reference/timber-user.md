
---
title: "Timber\\User"
menu:
  main:
    parent: "reference"
---

This is used in Timber to represent users retrived from WordPress. You can call `$my_user = new Timber\User(123);` directly, or access it through the `{{ post.author }}` method.

<!--more-->

**PHP**
```php
<?php
$context['current_user'] = new Timber\User();
$context['post'] = new Timber\Post();
Timber::render('single.twig', $context);
```
**Twig**
```twig
<p class="current-user-info">Your name is {{ current_user.name }}</p>
<p class="article-info">This article is called "{{ post.title }}" and it's by {{ post.author.name }}
```
**HTML**
```html
<p class="current-user-info">Your name is Jesse Eisenberg</p>
<p class="article-info">This article is called "Consider the Lobster" and it's by David Foster Wallace
```

## Overview

### Properties

| Name | Type | Description |
| --- | --- | --- |
avatar_override | `string` | A URL to an avatar that overrides anything from Gravatar, etc. |
description | `string` | The description from WordPress |
first_name | `string` | The first name of the user |
last_name | `string` | The last name of the user |
id | `int` | The ID from WordPress |
roles | `array` |  |
### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [avatar](#avatar) | `string/\Timber\Image` | The avatar URL. |
| [can](#can) | `bool` | Whether the user has the capability. |
| [link](#link) | `string` | http://example.org/author/lincoln |
| [name](#name) | `string` | the human-friendly name of the user (ex: "Buster Bluth") |
| [path](#path) | `string` | ex: /author/lincoln |
| [roles](#roles) | `array/null` |  |
| [slug](#slug) | `string` | ex baberaham-lincoln |

---

## Class Methods

### __construct
`__construct( bool/object/int/bool $uid=false )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $uid | `bool/object/int/bool` |  |




---

### __toString
`__toString( )`

**returns:** `string` a fallback for TimberUser::name()

**Twig**
```twig
This post is by {{ post.author }}
```
**HTML**
```html
This post is by Jared Novack
```

---

### avatar
`avatar( mixed/null/array $args=null )`

**returns:** `string/\Timber\Image` The avatar URL.

Gets a user’s avatar URL.

| Name | Type | Description |
| --- | --- | --- |
| $args | `mixed/null/array` | Parameters for [`get_avatar_url()`](https://developer.wordpress.org/reference/functions/get_avatar_url/). |


Get a user avatar with a width and height of 150px:
**Twig**
```twig
<img src="{{ post.author.avatar({ size: 150 }) }}">
```

---

### can
`can( string $capability )`

**returns:** `bool` Whether the user has the capability.

Checks whether a user has a capability.

Don’t use role slugs for capability checks. While checking against a role in place of a
capability is supported in part, this practice is discouraged as it may produce unreliable
results. This includes cases where you want to check whether a user is registered. If you
want to check whether a user is a Subscriber, use `{{ user.can('read') }}`. If you only want
to check whether a user is logged in, you can use `{% if user %}`.

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

### get_custom
`get_custom( )`

**returns:** `array/null` 



---

### get_meta_field
`get_meta_field( string $field_name )`

**returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` |  |




---

### link
`link( )`

**returns:** `string` http://example.org/author/lincoln



---

### meta
`meta( string $field_name )`

**returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` |  |




---

### name
`name( )`

**returns:** `string` the human-friendly name of the user (ex: "Buster Bluth")



---

### path
`path( )`

**returns:** `string` ex: /author/lincoln



---

### roles
`roles( )`

**returns:** `array/null` 

Gets the user roles.
Roles shouldn’t be used to check whether a user has a capability. Use roles only for
displaying purposes. For example, if you want to display the name of the subscription a user
has on the site behind a paywall.

If you want to check for capabilities, use `{{ user.can('capability') }}`. If you only want
to check whether a user is logged in, you can use `{% if user %}`.

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

### slug
`slug( )`

**returns:** `string` ex baberaham-lincoln



---




*This class extends \Timber\Core*

*This class implements \Timber\CoreInterface*

