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
$other_site_id = 2;

$context = Timber::context( [
    'other_site' => new Timber\Site( $other_site_id ),
] );

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

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$admin_email</span> | <span class="property-type">`string`</span> | <span class="property-description">The admin email address set in the WP admin panel</span> |
| <span class="property-name">$blogname</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$charset</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$description</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$id</span> | <span class="property-type">`int`</span> | <span class="property-description">the ID of a site in multisite</span> |
| <span class="property-name">$language</span> | <span class="property-type">`string`</span> | <span class="property-description">the language setting ex: en-US</span> |
| <span class="property-name">$multisite</span> | <span class="property-type">`bool`</span> | <span class="property-description">true if multisite, false if plain ole' WordPress</span> |
| <span class="property-name">$name</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$pingback_url</span> | <span class="property-type">`string`</span> | <span class="property-description">for people who like trackback spam</span> |
| <span class="property-name">$siteurl</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$theme</span> | <span class="property-type">`\Timber\Theme`</span> | <span class="property-description"></span> |
| <span class="property-name">$title</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$url</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$home_url</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$site_url</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |
| <span class="property-name">$rdf</span> | <span class="property-type">`string`</span> | <span class="property-description"></span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__construct()](#__construct)</span> | <span class="method-type"></span> | <span class="method-description">Constructs a Timber\Site object</span> |
| <span class="method-name">[__get()](#__get)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Get the value for a site option.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The option value.</span></span> |
| <span class="method-name">[icon()](#icon)</span> | <span class="method-type">`null` or `\Timber\Image`</span> | <span class="method-description"></span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description">Returns the link to the site's home.</span> |
| <span class="method-name">[~~meta~~()](#meta)</span> | <span class="method-type"></span> | <span class="method-description">Get the value for a site option.</span> |
| <span class="method-name">[option()](#option)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Get the value for a site option.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The option value.</span></span> |

</div>


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

