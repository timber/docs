---
title: "Timber\\​Theme"
linktitle: "Theme"
is_reference: true
---

Need to display info about your theme? Well you've come to the right place. By default info on
the current theme comes for free with what's fetched by `Timber::context()` in which case you
can access it your theme like so:

<!--more-->

**PHP**

```php
<?php
$context = Timber::context();
Timber::render('index.twig', $context);
?>
```
**Twig**

```twig
<script src="{{ theme.link }}/static/js/all.js"></script>
```
**HTML**

```html
<script src="http://example.org/wp-content/themes/my-theme/static/js/all.js"></script>
```

## Overview

*This class extends `Timber\Core`*  
  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $name | `string` | the human-friendly name of the theme (ex: `My Timber Starter Theme`) |
| $version | `string` | the version of the theme (ex: `1.2.3`) |
| $parent | `\Timber\Theme` or `bool` | the Timber\Theme object for the parent theme (if it exists), false otherwise |
| $parent_slug | `string` | the slug of the parent theme (ex: `_s`) |
| $slug | `string` | the slug of the theme (ex: `my-super-theme`) |
| $uri | `string` |  |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__construct()](#__construct) |  | Constructs a new `Timber\Theme` object. |
| [display()](#display) | `bool` or `string` | Gets a theme header, formatted and translated for display. |
| [get()](#get) | `bool` or `string` | Gets a raw, unformatted theme header.<br><br>*Returns:* String on success, false on failure. |
| [link()](#link) | `string` | <br><br>*Returns:* the absolute path to the theme (ex: `http://example.org/wp-content/themes/my-timber-theme`) |
| [path()](#path) | `string` | <br><br>*Returns:* the relative path to the theme (ex: `/wp-content/themes/my-timber-theme`) |
| [theme_mod()](#theme_mod) | `string` |  |
| [theme_mods()](#theme_mods) | `array` |  |


## Class Methods

### \_\_construct()

Constructs a new `Timber\Theme` object.

The `Timber\Theme` object of the current theme comes in the default `Timber::context()`
call. You can access this in your twig template via `{{ site.theme }}`.

`__construct( string $slug = null )`

| Name | Type | Description |
| --- | --- | --- |
| $slug | `string` |  |

**PHP**

```php
<?php
    $theme = new Timber\Theme("my-theme");
    $context['theme_stuff'] = $theme;
    Timber::render('single.twig', $context);
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

### link()

**Returns:** `string` the absolute path to the theme (ex: `http://example.org/wp-content/themes/my-timber-theme`)

---

### path()

**Returns:** `string` the relative path to the theme (ex: `/wp-content/themes/my-timber-theme`)

---

### theme\_mod()

`theme_mod( string $name, bool $default = false )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $name | `string` |  |
| $default | `bool` |  |

---

### theme\_mods()

**Returns:** `array` 

---

### get()

Gets a raw, unformatted theme header.

**see** WP_Theme::get()

`get( string $header )`

**Returns:** `bool|string` String on success, false on failure.

| Name | Type | Description |
| --- | --- | --- |
| $header | `string` | Name of the theme header. Name, Description, Author, Version, ThemeURI, AuthorURI, Status, Tags. |

**Twig**

```twig
{{ theme.get('Version') }}
```

---

### display()

Gets a theme header, formatted and translated for display.

**see** WP_Theme::display()

`display( string $header )`

**Returns:** `bool|string` 

| Name | Type | Description |
| --- | --- | --- |
| $header | `string` | Name of the theme header. Name, Description, Author, Version, ThemeURI, AuthorURI, Status, Tags. |

**Twig**

```twig
{{ theme.display('Description') }}
```

---

