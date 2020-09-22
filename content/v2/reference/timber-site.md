---
title: "Timber\\​Site"
linktitle: "Site"
is_reference: true
---

`Timber\Site` gives you access to information you need about your site. In Multisite setups, you
can get info on other sites in your network.

<!--more-->

**PHP**

```php
$context = Timber::context();
$other_site_id = 2;
$context['other_site'] = new Timber\Site($other_site_id);
Timber::render('index.twig', $context);
```
**Twig**

```twig
My site is called {{site.name}}, another site on my network is {{other_site.name}}
```
**HTML**

```html
My site is called Jared's blog, another site on my network is Upstatement.com
```

## Overview

*This class extends `Timber\Core`*  
*This class implements `Timber\CoreInterface`*  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $admin_email | `string` | The admin email address set in the WP admin panel |
| $blogname | `string` |  |
| $charset | `string` |  |
| $description | `string` |  |
| $id | `int` | the ID of a site in multisite |
| $language | `string` | the language setting ex: en-US |
| $multisite | `bool` | true if multisite, false if plain ole' WordPress |
| $name | `string` |  |
| $pingback_url | `string` | for people who like trackback spam |
| $siteurl | `string` |  |
| $theme | `\Timber\Theme` |  |
| $title | `string` |  |
| $url | `string` |  |
| $home_url | `string` |  |
| $site_url | `string` |  |
| $rdf | `string` |  |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__construct()](#__construct) |  | Constructs a Timber\Site object |
| [__get()](#__get) | `mixed` | Get the value for a site option.<br><br>*Returns:* The option value. |
| [icon()](#icon) | `null` or `\Timber\Image` |  |
| [link()](#link) | `string` | Returns the link to the site's home. |
| [~~meta~~()](#meta) |  | Get the value for a site option. |
| [option()](#option) | `mixed` | Get the value for a site option.<br><br>*Returns:* The option value. |
| [~~url~~()](#url) | `string` |  |


## Class Methods

### \_\_construct()

Constructs a Timber\Site object

`__construct( string|int $site_name_or_id = null )`

| Name | Type | Description |
| --- | --- | --- |
| $site_name_or_id | `string` or `int` |  |

**PHP**

```php
//multisite setup
$site = new Timber\Site(1);
$site_two = new Timber\Site("My Cool Site");
//non-multisite
$site = new Timber\Site();
```

---

### \_\_get()

Get the value for a site option.

`__get( string $option )`

**Returns:** `mixed` The option value.

| Name | Type | Description |
| --- | --- | --- |
| $option | `string` | The name of the option to get the value for. |

**Twig**

```twig
Published on: {{ post.date|date(site.date_format) }}
```

---

### option()

Get the value for a site option.

`option( string $option )`

**Returns:** `mixed` The option value.

| Name | Type | Description |
| --- | --- | --- |
| $option | `string` | The name of the option to get the value for. |

**Twig**

```twig
Published on: {{ post.date|date(site.option('date_format')) }}
```

---

### ~~meta~~()

Get the value for a site option.

**DEPRECATED** since 2.0.0, use `{{ site.option }}` instead

`meta( $option )`

---

### icon()

**Returns:** `null|\Timber\Image` 

---

### link()

Returns the link to the site's home.

**Returns:** `string` 

**Twig**

```twig
<a href="{{ site.link }}" title="Home">
	  <img src="/wp-content/uploads/logo.png" alt="Logo for some stupid thing" />
</a>
```
**HTML**

```html
<a href="http://example.org" title="Home">
	  <img src="/wp-content/uploads/logo.png" alt="Logo for some stupid thing" />
</a>
```

---

### ~~url~~()

**DEPRECATED** since 1.0.4, use `{{ site.link }}` instead.

**see** [Timber\Site::link()](../timber-site/#link)

**Returns:** `string` 

---

