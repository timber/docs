
---
title: "Timber\\Theme"
menu:
  main:
    parent: "reference"
---

Need to display info about your theme? Well you've come to the right place. By default info on the current theme comes for free with what's fetched by `Timber::context()` in which case you can access it your theme like so:

<!--more-->

**PHP**
```php
<?php
<?php
$context = Timber::context();
Timber::render('index.twig', $context);
?>
```
**Twig**
```twig
<script src="{{theme.link}}/static/js/all.js"></script>
```
**HTML**
```html
<script src="http://example.org/wp-content/themes/my-theme/static/js/all.js"></script>
```

## Overview

### Properties

| Name | Type | Description |
| --- | --- | --- |
name | `string` | the human-friendly name of the theme (ex: `My Timber Starter Theme`) |
version | `string` | the version of the theme (ex: `1.2.3`) |
parent | `TimberTheme/bool` | the TimberTheme object for the parent theme (if it exists), false otherwise |
parent_slug | `string` | the slug of the parent theme (ex: `_s`) |
slug | `string` | the slug of the theme (ex: `my-super-theme`) |
### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [display](#display) | `false/string` |  |
| [get](#get) | `false/string` | String on success, false on failure. |
| [link](#link) | `string` | the absolute path to the theme (ex: `http://example.org/wp-content/themes/my-timber-theme`) |
| [path](#path) | `string` | the relative path to the theme (ex: `/wp-content/themes/my-timber-theme`) |

---

## Class Methods

### __construct
`__construct( mixed/string $slug=null )`

**returns:** `void` 

Constructs a new TimberTheme object. NOTE the TimberTheme object of the current theme comes in the default `Timber::context()` call. You can access this in your twig template via `{{site.theme}}.

| Name | Type | Description |
| --- | --- | --- |
| $slug | `mixed/string` |  |


**PHP**
```php
<?php
<?php
    $theme = new TimberTheme("my-theme");
    $context['theme_stuff'] = $theme;
    Timber::render('single.twig', $context);
?>
```
**Twig**
```twig
We are currently using the {{ theme_stuff.name }} theme.
```
**HTML**
```html
We are currently using the My Theme theme.
```

---

### display
`display( string $header )`

**returns:** `false/string` 

Gets a theme header, formatted and translated for display.

| Name | Type | Description |
| --- | --- | --- |
| $header | `string` | Name of the theme header. Name, Description, Author, Version, ThemeURI, AuthorURI, Status, Tags. |


**Twig**
```twig
{{ theme.display('Description') }}
```

---

### get
`get( string $header )`

**returns:** `false/string` String on success, false on failure.

Gets a raw, unformatted theme header.

| Name | Type | Description |
| --- | --- | --- |
| $header | `string` | Name of the theme header. Name, Description, Author, Version, ThemeURI, AuthorURI, Status, Tags. |


**Twig**
```twig
{{ theme.get('Version') }}
```

---

### link
`link( )`

**returns:** `string` the absolute path to the theme (ex: `http://example.org/wp-content/themes/my-timber-theme`)



---

### path
`path( )`

**returns:** `string` the relative path to the theme (ex: `/wp-content/themes/my-timber-theme`)



---

### theme_mod
`theme_mod( string $name, bool $default=false )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $name | `string` |  |
| $default | `bool` |  |




---

### theme_mods
`theme_mods( )`

**returns:** `array` 



---




*This class extends \Timber\Core*

