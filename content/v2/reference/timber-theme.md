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
*This class implements `JsonSerializable`*  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$name</span> | <span class="property-type">`string`</span> | <span class="property-description">the human-friendly name of the theme (ex: `My Timber Starter Theme`)</span> |
| <span class="property-name">$version</span> | <span class="property-type">`string`</span> | <span class="property-description">the version of the theme (ex: `1.2.3`)</span> |
| <span class="property-name">$parent</span> | <span class="property-type">`\Timber\Theme`</span> | <span class="property-description">the Timber\Theme object for the parent theme</span> |
| <span class="property-name">$parent_slug</span> | <span class="property-type">`string`</span> | <span class="property-description">the slug of the parent theme (ex: `_s`)</span> |
| <span class="property-name">$slug</span> | <span class="property-type">`string`</span> | <span class="property-description">the slug of the theme (ex: `my-timber-theme`)</span> |
| <span class="property-name">$uri</span> | <span class="property-type">`string`</span> | <span class="property-description">Retrieves template directory URI for the active (parent) theme. (ex: `http://example.org/wp-content/themes/my-timber-theme`).</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__construct()](#__construct)</span> | <span class="method-type"></span> | <span class="method-description">Constructs a new `Timber\Theme` object.</span> |
| <span class="method-name">[display()](#display)</span> | <span class="method-type">`false` or `string`</span> | <span class="method-description">Gets a theme header, formatted and translated for display.</span> |
| <span class="method-name">[get()](#get)</span> | <span class="method-type">`false` or `string`</span> | <span class="method-description">Gets a raw, unformatted theme header.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> String on success, false on failure.</span></span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description"><br><br><span class="method-return"><span class="method-return-label">Returns:</span> Retrieves template directory URI for the active (child) theme. (ex: `http://example.org/wp-content/themes/my-timber-theme`).</span></span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description"><br><br><span class="method-return"><span class="method-return-label">Returns:</span> The relative path to the theme (ex: `/wp-content/themes/my-timber-theme`).</span></span> |
| <span class="method-name">[theme_mod()](#theme_mod)</span> | <span class="method-type">`string`</span> | <span class="method-description"></span> |
| <span class="method-name">[theme_mods()](#theme_mods)</span> | <span class="method-type">`array`</span> | <span class="method-description"></span> |

</div>


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
    $theme = new Timber\Theme("my-timber-theme");
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

**Returns:** `string` Retrieves template directory URI for the active (child) theme. (ex: `http://example.org/wp-content/themes/my-timber-theme`).

---

### path()

**Returns:** `string` The relative path to the theme (ex: `/wp-content/themes/my-timber-theme`).

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

**Returns:** `false|string` String on success, false on failure.

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

**Returns:** `false|string` 

| Name | Type | Description |
| --- | --- | --- |
| $header | `string` | Name of the theme header. Name, Description, Author, Version, ThemeURI, AuthorURI, Status, Tags. |

**Twig**

```twig
{{ theme.display('Description') }}
```

---

