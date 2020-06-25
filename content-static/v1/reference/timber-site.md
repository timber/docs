---
title: "Timber\\Site"
menu:
  main:
    parent: "reference"
---

Timber\Site gives you access to information you need about your site. In Multisite setups, you can get info on other sites in your network.

<!--more-->

**PHP**
```php
<?php
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

### Properties

| Name | Type | Description |
| --- | --- | --- |
admin_email | `string` | the admin email address set in the WP admin panel |
charset | `string` |  |
description | `string` |  |
id | `int` | the ID of a site in multisite |
language | `string` | the language setting ex: en-US |
multisite | `bool` | true if multisite, false if plain ole' WordPress |
name | `string` |  |
pingback_url | `string` | for people who like trackback spam |
theme | `\Timber\Theme` |  |
title | `string` |  |
rdf | `string` |  |
### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [link](#link) | `string` |  |

---

## Class Methods

### __construct
`__construct( mixed/string/int $site_name_or_id=null )`

**returns:** `void` 

Constructs a Timber\Site object

| Name | Type | Description |
| --- | --- | --- |
| $site_name_or_id | `mixed/string/int` |  |


**PHP**
```php
<?php
//multisite setup
$site = new Timber\Site(1);
$site_two = new Timber\Site("My Cool Site");
//non-multisite
$site = new Timber\Site();
```

---

### __get
`__get( string $field )`

**returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $field | `string` |  |




---

### icon
`icon( )`

**returns:** `void` 



---

### language_attributes
`language_attributes( )`

**returns:** `string` 

Returns the language attributes that you're looking for



---

### link
`link( )`

**returns:** `string` 

Returns the link to the site's home.

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

### <strike>url</strike>
**DEPRECATED** 1.0.4

`url( )`

**returns:** `string` 



---

### icon_multisite
`icon_multisite( mixed $site_id )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $site_id | `mixed` |  |




---

### switch_to_blog
`switch_to_blog( string/\Timber\integer/null $site_name_or_id )`

**returns:** `\Timber\integer` with the ID of the new blog

Switches to the blog requested in the request

| Name | Type | Description |
| --- | --- | --- |
| $site_name_or_id | `string/\Timber\integer/null` |  |




---




*This class extends \Timber\Core*

*This class implements \Timber\CoreInterface*

