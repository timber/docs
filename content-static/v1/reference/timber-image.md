
---
title: "Timber\\Image"
menu:
  main:
    parent: "reference"
---

If TimberPost is the class you're going to spend the most time, Timber\Image is the class you're going to have the most fun with.

<!--more-->

**PHP**
```php
<?php
$context = Timber::context();
$post = new Timber\Post();
$context['post'] = $post;
// lets say you have an alternate large 'cover image' for your post stored in a custom field which returns an image ID
$cover_image_id = $post->cover_image;
$context['cover_image'] = new Timber\Image($cover_image_id);
Timber::render('single.twig', $context);
```
**Twig**
```twig
<article>
	<img src="{{cover_image.src}}" class="cover-image" />
	<h1 class="headline">{{post.title}}</h1>
	<div class="body">
		{{post.content}}
	</div>
	<img src="{{ Image(post.custom_field_with_image_id).src }}" alt="Another way to initialize images as TimberImages, but within Twig" />
</article>
```
**HTML**
```html
<article>
	<img src="http://example.org/wp-content/uploads/2015/06/nevermind.jpg" class="cover-image" />
	<h1 class="headline">Now you've done it!</h1>
	<div class="body">
		Whatever whatever
	</div>
	<img src="http://example.org/wp-content/uploads/2015/06/kurt.jpg" alt="Another way to initialize images as TimberImages, but within Twig" />
</article>
```

## Overview

### Properties

| Name | Type | Description |
| --- | --- | --- |
file_loc | `string` | $file_loc the location of the image file in the filesystem (ex: `/var/www/htdocs/wp-content/uploads/2015/08/my-pic.jpg`) |
id | `integer` | the ID of the image (which is a WP_Post) |
caption | `string` | $caption the string stored in the WordPress database |
post_status | `string` | 		$post_status 	the status of a post ("draft", "publish", etc.) |
post_type | `string` | 	$post_type 		the name of the post type, this is the machine name (so "my_custom_post_type" as opposed to "My Custom Post Type") |
slug | `string` | 	$slug 		the URL-safe slug, this corresponds to the poorly-named "post_name" in the WP database, ex: "hello-world" |
### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [alt](#alt) | `string` | alt text stored in WordPress |
| [aspect](#aspect) | `\Timber\float` |  |
| [height](#height) | `int` |  |
| [img_sizes](#img_sizes) | `bool/string` |  |
| [link](#link) | `void` |  |
| [parent](#parent) | `bool/\Timber\TimberPost` |  |
| [path](#path) | `string` | the /relative/path/to/the/file |
| [src](#src) | `bool/string` |  |
| [srcset](#srcset) | `bool/string` |  |
| [width](#width) | `int` |  |

---

## Class Methods

### __construct
`__construct( bool/int/string $iid )`

**returns:** `void` 

Creates a new Timber\Image object

| Name | Type | Description |
| --- | --- | --- |
| $iid | `bool/int/string` |  |


**PHP**
```php
<?php
// You can pass it an ID number
$myImage = new Timber\Image(552);
//Or send it a URL to an image
$myImage = new Timber\Image('http://google.com/logo.jpg');
```

---

### __toString
`__toString( )`

**returns:** `string` the src of the file



---

### alt
`alt( )`

**returns:** `string` alt text stored in WordPress

**Twig**
```twig
<img src="{{ image.src }}" alt="{{ image.alt }}" />
```
**HTML**
```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" alt="W3 Checker told me to add alt text, so I am" />
```

---

### aspect
`aspect( )`

**returns:** `\Timber\float` 

**Twig**
```twig
{% if post.thumbnail.aspect < 1 %}
    {# handle vertical image #}
    <img src="{{ post.thumbnail.src|resize(300, 500) }}" alt="A basketball player" />
{% else %}
	   <img src="{{ post.thumbnail.src|resize(500) }}" alt="A sumo wrestler" />
{% endif %}
```

---

### get_pathinfo
`get_pathinfo( )`

**returns:** `array` 

Get a PHP array with pathinfo() info from the file



---

### <strike>get_url</strike>
**DEPRECATED** since 0.21.9 use src() instead

`get_url( string $size="" )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` |  |




---

### height
`height( )`

**returns:** `int` 

**Twig**
```twig
<img src="{{ image.src }}" height="{{ image.height }}" />
```
**HTML**
```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" height="900" />
```

---

### img_sizes
`img_sizes( string $size="full" )`

**returns:** `bool/string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` | a size known to WordPress (like "medium") |


**Twig**
```twig
<h1>{{ post.title }}</h1>
<img src="{{ post.thumbnail.src }}" srcset="{{ post.thumbnail.srcset }}" sizes="{{ post.thumbnail.img_sizes }}" />
```
**HTML**
```html
<img src="http://example.org/wp-content/uploads/2018/10/pic.jpg" srcset="http://example.org/wp-content/uploads/2018/10/pic.jpg 1024w, http://example.org/wp-content/uploads/2018/10/pic-600x338.jpg 600w, http://example.org/wp-content/uploads/2018/10/pic-300x169.jpg 300w sizes="(max-width: 1024px) 100vw, 102" />
```

---

### link
`link( )`

**returns:** `void` 

Returns the link to an image attachment's Permalink page (NOT the link for the image itself!!)

**Twig**
```twig
<a href="{{ image.link }}"><img src="{{ image.src }} "/></a>
```
**HTML**
```html
<a href="http://example.org/my-cool-picture"><img src="http://example.org/wp-content/uploads/2015/whatever.jpg"/></a>
```

---

### parent
`parent( )`

**returns:** `bool/\Timber\TimberPost` 



---

### path
`path( )`

**returns:** `string` the /relative/path/to/the/file

**Twig**
```twig
<img src="{{ image.path }}" />
```
**HTML**
```html
<img src="/wp-content/uploads/2015/08/pic.jpg" />
```

---

### src
`src( string $size="full" )`

**returns:** `bool/string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` | a size known to WordPress (like "medium") |


**Twig**
```twig
<h1>{{ post.title }}</h1>
<img src="{{ post.thumbnail.src }}" />
```
**HTML**
```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" />
```

---

### srcset
`srcset( string $size="full" )`

**returns:** `bool/string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` | a size known to WordPress (like "medium") |


**Twig**
```twig
<h1>{{ post.title }}</h1>
<img src="{{ post.thumbnail.src }}" srcset="{{ post.thumbnail.srcset }}" />
```
**HTML**
```html
<img src="http://example.org/wp-content/uploads/2018/10/pic.jpg" srcset="http://example.org/wp-content/uploads/2018/10/pic.jpg 1024w, http://example.org/wp-content/uploads/2018/10/pic-600x338.jpg 600w, http://example.org/wp-content/uploads/2018/10/pic-300x169.jpg 300w" />
```

---

### <strike>url</strike>
**DEPRECATED** since 0.21.9 use src() instead

`url( string $size="" )`

**returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $size | `string` |  |




---

### width
`width( )`

**returns:** `int` 

**Twig**
```twig
<img src="{{ image.src }}" width="{{ image.width }}" />
```
**HTML**
```html
<img src="http://example.org/wp-content/uploads/2015/08/pic.jpg" width="1600" />
```

---

### wp_upload_dir
`wp_upload_dir( )`

**returns:** `void` 



---

### get_post_custom
`get_post_custom( mixed $iid )`

**returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $iid | `mixed` |  |




---




*This class extends \Timber\Post*

*This class implements \Timber\CoreInterface*

