---
title: "Timber\\​Timber"
linktitle: "Timber"
is_reference: true
---

Main class called Timber for this plugin.

<!--more-->

**PHP**

```php
// Get default posts on an archive page
$posts = Timber::get_posts();

// Query for some posts
$posts = Timber::get_posts( [
    'post_type' => 'article',
    'category_name' => 'sports',
] );

$context = Timber::context();
$context['posts'] = $posts;

Timber::render( 'index.twig', $context );
```

## Overview

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[compile()](#compile)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Compile a Twig file.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The returned output.</span></span> |
| <span class="method-name">[compile_string()](#compile_string)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Compile a string.</span> |
| <span class="method-name">[context()](#context)</span> | <span class="method-type">`array`</span> | <span class="method-description">Gets the global context.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> An array of context variables that is used to pass into Twig templates through a render or compile function.</span></span> |
| <span class="method-name">[context_global()](#context_global)</span> | <span class="method-type">`array`</span> | <span class="method-description">Gets the global context.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> An array of global context variables.</span></span> |
| <span class="method-name">[~~fetch~~()](#fetch)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Fetch function.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The returned output.</span></span> |
| <span class="method-name">[get_attachment()](#get_attachment)</span> | <span class="method-type">`\Timber\Attachment` or `bool`</span> | <span class="method-description">Behaves just like Timber::get_post(), except that it returns false if it finds a Post that is not an Attachment. Honors Class Maps and falsifies return value *after* Class Map for the found Post has been resolved.</span> |
| <span class="method-name">[get_attachment_by()](#get_attachment_by)</span> | <span class="method-type">`\Timber\Attachment` or `bool`</span> | <span class="method-description">Gets an attachment by its URL or absolute file path.</span> |
| <span class="method-name">[get_comment()](#get_comment)</span> | <span class="method-type">`\Timber\Comment` or `null`</span> | <span class="method-description">Get comment.</span> |
| <span class="method-name">[get_comments()](#get_comments)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Get comments.</span> |
| <span class="method-name">[~~get_context~~()](#get_context)</span> | <span class="method-type">`array`</span> | <span class="method-description">Get context.</span> |
| <span class="method-name">[get_image()](#get_image)</span> | <span class="method-type">`\Timber\Image` or `bool`</span> | <span class="method-description">Behaves just like Timber::get_post(), except that it returns false if it finds a Post that is not an Image. Honors Class Maps and falsifies return value *after* Class Map for the found Post has been resolved.</span> |
| <span class="method-name">[get_menu()](#get_menu)</span> | <span class="method-type">`\Timber\Menu` or `bool`</span> | <span class="method-description">Gets a nav menu object.</span> |
| <span class="method-name">[~~get_pagination~~()](#get_pagination)</span> | <span class="method-type">`array` or `mixed`</span> | <span class="method-description">Get pagination.</span> |
| <span class="method-name">[get_post()](#get_post)</span> | <span class="method-type">`\Timber\Post` or `bool`</span> | <span class="method-description">Get a Timber Post from a post ID, WP_Post object, a WP_Query object, or an associative array of arguments for WP_Query::__construct().<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Timber\Post object if a post was found, false if no post was found.</span></span> |
| <span class="method-name">[get_post_by()](#get_post_by)</span> | <span class="method-type">`\Timber\Post` or `bool`</span> | <span class="method-description">Gets a post by title or slug.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A Timber post or `false` if no post could be found. If multiple posts with the same slug or title were found, it will select the post with the oldest date.</span></span> |
| <span class="method-name">[get_posts()](#get_posts)</span> | <span class="method-type">`array` or `bool` or `null`</span> | <span class="method-description">Get posts.</span> |
| <span class="method-name">[get_sidebar()](#get_sidebar)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Get sidebar.</span> |
| <span class="method-name">[get_sidebar_from_php()](#get_sidebar_from_php)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get sidebar from PHP</span> |
| <span class="method-name">[get_sites()](#get_sites)</span> | <span class="method-type">`array`</span> | <span class="method-description">Get sites.</span> |
| <span class="method-name">[get_term()](#get_term)</span> | <span class="method-type">`\Timber\Term` or `bool`</span> | <span class="method-description">Get term.</span> |
| <span class="method-name">[get_terms()](#get_terms)</span> | <span class="method-type">`iterable`</span> | <span class="method-description">Get terms.</span> |
| <span class="method-name">[get_user()](#get_user)</span> | <span class="method-type">`\Timber\User` or `bool`</span> | <span class="method-description">Gets a single user.</span> |
| <span class="method-name">[get_user_by()](#get_user_by)</span> | <span class="method-type">`\Timber\User` or `null`</span> | <span class="method-description">Gets a user by field.</span> |
| <span class="method-name">[get_users()](#get_users)</span> | <span class="method-type">`\Iterable`</span> | <span class="method-description">Gets one or more users as an array.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> An array of users objects. Will be empty if no users were found.</span></span> |
| <span class="method-name">[get_widgets()](#get_widgets)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get widgets.</span> |
| <span class="method-name">[~~query_post~~()](#query_post)</span> | <span class="method-type">`\Timber\Post` or `array` or `bool` or `null`</span> | <span class="method-description">Query post.</span> |
| <span class="method-name">[~~query_posts~~()](#query_posts)</span> | <span class="method-type">`\Timber\PostCollection`</span> | <span class="method-description">Query posts.</span> |
| <span class="method-name">[render()](#render)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Render function.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The echoed output.</span></span> |
| <span class="method-name">[render_string()](#render_string)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Render a string with Twig variables.</span> |

</div>


## Class Methods

### get\_post()

Get a Timber Post from a post ID, WP_Post object, a WP_Query object, or an associative
array of arguments for WP_Query::__construct().

By default, Timber will use the `Timber\Post` class to create a new post object. To control
which class is instantiated for your Post object, use [Class Maps](https://timber.github.io/docs/v2/guides/class-maps/)

**see** https://developer.wordpress.org/reference/classes/wp_query/__construct/

`get_post( mixed $query = false, array $options = [] )`

**Returns:** `\Timber\Post|bool` Timber\Post object if a post was found, false if no post was
found.

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` | Optional. Post ID or query (as an array of arguments for WP_Query). If a query is provided, only the first post of the result will be returned. Default false. |
| $options | `array` | Optional associative array of options. Defaults to an empty array. |

**PHP**

```php
// Using a post ID.
$post = Timber::get_post( 75 );

// Using a WP_Post object.
$wp_post = get_post( 123 );
$post    = Timber::get_post( $wp_post );

// Using a WP_Query argument array
$post = Timber::get_post( [
  'post_type' => 'page',
] );

// Use currently queried post. Same as using get_the_ID() as a parameter.
$post = Timber::get_post();

// From an associative array with an `ID` key. For ACF compatibility. Using this
// approach directly is not recommended. If you can, configure the return type of your
// ACF field to just the ID.
$post = Timber::get_post( get_field('associated_post_array') ); // Just OK.
$post = Timber::get_post( get_field('associated_post_id') ); // Better!
```

---

### get\_attachment()

Behaves just like Timber::get_post(), except that it returns false if it
finds a Post that is not an Attachment. Honors Class Maps and falsifies return
value *after* Class Map for the found Post has been resolved.

**see** [Timber\Timber::get_post()](../timber-timber/#get_post)

`get_attachment( mixed $query = false, array $options = [] )`

**Returns:** `\Timber\Attachment|bool` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` | query or post identifier |
| $options | `array` | options to ::get_post() |

---

### get\_image()

Behaves just like Timber::get_post(), except that it returns false if it
finds a Post that is not an Image. Honors Class Maps and falsifies return
value *after* Class Map for the found Post has been resolved.

**see** [Timber\Timber::get_post()](../timber-timber/#get_post)

`get_image( mixed $query = false, array $options = [] )`

**Returns:** `\Timber\Image|bool` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` | query or post identifier |
| $options | `array` | options to ::get_post() |

---

### get\_posts()

Get posts.

`get_posts( mixed $query = false, array $options = [] )`

**Returns:** `array|bool|null` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` |  |
| $options | `array` |  |

---

### get\_post\_by()

Gets a post by title or slug.

**since** 2.0.0 

`get_post_by( string $type, string $search_value, array $args = array() )`

**Returns:** `\Timber\Post|bool` A Timber post or `false` if no post could be found. If multiple
posts with the same slug or title were found, it will select the
post with the oldest date.

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | The type to look for. One of `slug` or `title`. |
| $search_value | `string` | The post slug or post title to search for. When searching for `title`, this parameter doesn’t need to be case-sensitive, because the `=` comparison is used in MySQL. |
| $args | `array` | Optional. An array of arguments to configure what is returned.<br><br><ul><li>**$post_type**<br>`string` or `array` Optional. What WordPress post type to limit the results to. Defaults to 'any'</li><li>**$order_by**<br>`string` Optional. The field to sort by. Defaults to 'post_date'</li><li>**$order**<br>`string` Optional. The sort to apply. Defaults to ASC</li></ul> |

**PHP**

```php
// By slug
$post = Timber::get_post_by( 'slug', 'about-us' );

// By title
$post = Timber::get_post_by( 'title', 'About us' );
```

---

### ~~query\_post~~()

Query post.

**DEPRECATED** since  since 2.0.0 Use `Timber::get_post()` instead.

`query_post( mixed $query = false, array $options = [] )`

**Returns:** `\Timber\Post|array|bool|null` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` |  |
| $options | `array` |  |

---

### ~~query\_posts~~()

Query posts.

**DEPRECATED** since  since 2.0.0 Use `Timber::get_posts()` instead.

`query_posts( mixed $query = false, array $options = [] )`

**Returns:** `\Timber\PostCollection` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` |  |
| $options | `array` |  |

---

### get\_attachment\_by()

Gets an attachment by its URL or absolute file path.

Honors the `timber/post/image_extensions` filter, returning a Timber\Image if the found
attachment is identified as an image. Also honors Class Maps.

**since** 2.0.0 

`get_attachment_by( string $field_or_ident, string $ident = '' )`

**Returns:** `\Timber\Attachment|bool` 

| Name | Type | Description |
| --- | --- | --- |
| $field_or_ident | `string` | Can be "url", "path", an attachment URL, or the absolute path of an attachment file. If "url" or "path" is given, a second arg is required. |
| $ident | `string` | Optional. An attachment URL or absolute path. Default empty string. |

**PHP**

```php
// Get attachment by URL.
$attachment = Timber::get_attachment_by( 'url', 'https://example.com/uploads/2020/09/cat.gif' );

// Get attachment by filepath.
$attachment = Timber::get_attachment_by( 'path', '/path/to/wp-content/uploads/2020/09/cat.gif' );

// Try to handle either case.
$mystery_string = some_function();
$attachment     = Timber::get_attachment_by( $mystery_string );
```

---

### get\_terms()

Get terms.

**see** https://developer.wordpress.org/reference/classes/wp_term_query/__construct/

`get_terms( string|array $args = null, array $options = [] )`

**Returns:** `iterable` 

| Name | Type | Description |
| --- | --- | --- |
| $args | `string` or `array` | a string or array identifying the taxonomy or `WP_Term_Query` args. Numeric strings are treated as term IDs; non-numeric strings are treated as taxonomy names. Numeric arrays are treated as a list a of term identifiers; associative arrays are treated as args to `WP_Term_Query::__construct()` and accepts any valid parameters to that constructor. |
| $options | `array` | optional; none are currently supported. |

**PHP**

```php
// Get all tags.
$tags = Timber::get_terms('post_tag');
// Note that this is equivalent to:
$tags = Timber::get_terms( 'tag' );
$tags = Timber::get_terms( 'tags' );

// Get all categories.
$cats = Timber::get_terms('category');

// Get all terms in a custom taxonomy.
$cats = Timber::get_terms('my_taxonomy');

// Perform a custom Term query.
$cats = Timber::get_terms([
  'taxonomy' => 'my_taxonomy',
  'orderby'  => 'slug',
  'order'    => 'DESC',
]);
```

---

### get\_term()

Get term.

`get_term( int|\WP_Term $term = null )`

**Returns:** `\Timber\Term|bool` 

| Name | Type | Description |
| --- | --- | --- |
| $term | `int` or `\WP_Term` | a WP_Term or term_id |

**PHP**

```php
// Get a Term.
$tag = Timber::get_term(123);
```

---

### get\_users()

Gets one or more users as an array.

By default, Timber will use the `Timber\User` class to create a your post objects. To
control which class is used for your post objects, use [Class Maps]().

**since** 2.0.0 

`get_users( array $query = [], array $options = [] )`

**Returns:** `\Iterable` An array of users objects. Will be empty if no users were found.

| Name | Type | Description |
| --- | --- | --- |
| $query | `array` | Optional. A WordPress-style query or an array of user IDs. Use an array in the same way you would use the `$args` parameter in [WP_User_Query](https://developer.wordpress.org/reference/classes/wp_user_query/). See [WP_User_Query::prepare_query()](https://developer.wordpress.org/reference/classes/WP_User_Query/prepare_query/) for a list of all available parameters. Passing an empty parameter will return an empty array. Default empty array `[]`. |
| $options | `array` | Optional. An array of options. None are currently supported. This parameter exists to prevent future breaking changes. Default empty array `[]`. |

**PHP**

```php
// Get users with on an array of user IDs.
$users = Timber::get_users( [ 24, 81, 325 ] );

// Get all users that only have a subscriber role.
$subscribers = Timber::get_users( [
    'role' => 'subscriber',
] );

// Get all users that have published posts.
$post_authors = Timber::get_users( [
    'has_published_posts' => [ 'post' ],
] );
```

---

### get\_user()

Gets a single user.

By default, Timber will use the `Timber\User` class to create a your post objects. To
control which class is used for your post objects, use [Class Maps]().

**since** 2.0.0 

`get_user( int|\WP_User $user = null )`

**Returns:** `\Timber\User|bool` 

| Name | Type | Description |
| --- | --- | --- |
| $user | `int` or `\WP_User` | A WP_User object or a WordPress user ID. Defaults to the ID of the currently logged-in user. |

**PHP**

```php
$current_user = Timber::get_user();

// Get user by ID.
$user = Timber::get_user( $user_id );

// Convert a WP_User object to a Timber\User object.
$user = Timber::get_user( $wp_user_object );

// Check if a user is logged in.

$user = Timber::get_user();

if ( $user ) {
    // Yay, user is logged in.
}
```

---

### get\_user\_by()

Gets a user by field.

This function works like
[`get_user_by()`](https://developer.wordpress.org/reference/functions/get_user_by/), but
returns a `Timber\User` object.

**since** 2.0.0 

`get_user_by( string $field, int|string $value )`

**Returns:** `\Timber\User|null` 

| Name | Type | Description |
| --- | --- | --- |
| $field | `string` | The name of the field to retrieve the user with. One of: `id`, `ID`, `slug`, `email` or `login`. |
| $value | `int` or `string` | The value to search for by `$field`. |

**PHP**

```php
// Get a user by email.
$user = Timber::get_user_by( 'email', 'user@example.com' );

// Get a user by login.
$user = Timber::get_user_by( 'login', 'keanu-reeves' );
```

---

### get\_menu()

Gets a nav menu object.

**since** 2.0.0 

`get_menu( int|string $ident = null, array $options = [] )`

**Returns:** `\Timber\Menu|bool` 

| Name | Type | Description |
| --- | --- | --- |
| $ident | `int` or `string` | A menu identifier: a term_id, slug, menu name, or menu location name |
| $options | `array` | An associative array of options. Currently only one option is supported: - `depth`: How deep down the tree of menu items to query. Useful if you only want   the first N levels of items in the menu. |

**PHP**

```php
// Get a menu by location
$menu = Timber::get_menu( 'primary-menu' );

// Get a menu by slug
$menu = Timber::get_menu( 'my-menu' );

// Get a menu by name
$menu = Timber::get_menu( 'Main Menu' );

// Get a menu by ID (term_id)
$menu = Timber::get_menu( 123 );
```

---

### get\_comments()

Get comments.

`get_comments( array $query = [], array $options = [] )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `array` |  |
| $options | `array` | optional; none are currently supported |

---

### get\_comment()

Get comment.

`get_comment( int|\WP_Comment $comment )`

**Returns:** `\Timber\Comment|null` 

| Name | Type | Description |
| --- | --- | --- |
| $comment | `int` or `\WP_Comment` |  |

---

### get\_sites()

Get sites.

`get_sites( array|bool $blog_ids = false )`

**Returns:** `array` 

| Name | Type | Description |
| --- | --- | --- |
| $blog_ids | `array` or `bool` |  |

---

### ~~get\_context~~()

Get context.

**DEPRECATED** since 2.0.0, use `Timber::context()` instead.

**Returns:** `array` 

---

### context()

Gets the global context.

The context always contains the global context with the following variables:

- `site` – An instance of `Timber\Site`.
- `request` - An instance of `Timber\Request`.
- `theme` - An instance of `Timber\Theme`.
- `user` - An instance of `Timber\User`.
- `http_host` - The HTTP host.
- `wp_title` - Title retrieved for the currently displayed page, retrieved through
`wp_title()`.
- `body_class` - The body class retrieved through `get_body_class()`.

The global context will be cached, which means that you can call this function again without
losing performance.

Additionally to that, the context will contain template contexts depending on which template
is being displayed. For archive templates, a `posts` variable will be present that will
contain a collection of `Timber\Post` objects for the default query. For singular templates,
a `post` variable will be present that that contains a `Timber\Post` object of the `$post`
global.

**since** 2.0.0 

`context( array $extra = [] )`

**Returns:** `array` An array of context variables that is used to pass into Twig templates through
a render or compile function.

| Name | Type | Description |
| --- | --- | --- |
| $extra | `array` | any extra data to merge in. Overrides whatever is already there for this call only. In other words, the underlying context data is immutable and unaffected by passing this param. |

---

### context\_global()

Gets the global context.

This function is used by `Timber::context()` to get the global context. Usually, you don’t
call this function directly, except when you need the global context in a partial view.

The global context will be cached, which means that you can call this function again without
losing performance.

**since** 2.0.0 

**Returns:** `array` An array of global context variables.

**PHP**

```php
add_shortcode( 'global_address', function() {
    return Timber::compile(
        'global_address.twig',
        Timber::context_global()
    );
} );
```

---

### compile()

Compile a Twig file.

Passes data to a Twig file and returns the output.
If the template file doesn't exist it will throw a warning when WP_DEBUG is enabled.

`compile( array|string $filenames, array $data = array(), bool|int $expires = false, string $cache_mode = \Timber\Loader::CACHE_USE_DEFAULT, bool $via_render = false )`

**Returns:** `bool|string` The returned output.

| Name | Type | Description |
| --- | --- | --- |
| $filenames | `array` or `string` | Name of the Twig file to render. If this is an array of files, Timber will render the first file that exists. |
| $data | `array` | Optional. An array of data to use in Twig template. |
| $expires | `bool` or `int` | Optional. In seconds. Use false to disable cache altogether. When passed an array, the first value is used for non-logged in visitors, the second for users. Default false. |
| $cache_mode | `string` | Optional. Any of the cache mode constants defined in Timber\Loader. |
| $via_render | `bool` | Optional. Whether to apply optional render or compile filters. Default false. |

**PHP**

```php
$data = array(
    'firstname' => 'Jane',
    'lastname' => 'Doe',
    'email' => 'jane.doe@example.org',
);

$team_member = Timber::compile( 'team-member.twig', $data );
```

---

### compile\_string()

Compile a string.

`compile_string( string $string, array $data = array() )`

**Returns:** `bool|string` 

| Name | Type | Description |
| --- | --- | --- |
| $string | `string` | A string with Twig variables. |
| $data | `array` | Optional. An array of data to use in Twig template. |

**PHP**

```php
$data = array(
    'username' => 'Jane Doe',
);

$welcome = Timber::compile_string( 'Hi {{ username }}, I’m a string with a custom Twig variable', $data );
```

---

### ~~fetch~~()

Fetch function.

**DEPRECATED** since 2.0.0 use Timber::compile()

`fetch( array|string $filenames, array $data = array(), bool|int $expires = false, string $cache_mode = \Timber\Loader::CACHE_USE_DEFAULT )`

**Returns:** `bool|string` The returned output.

| Name | Type | Description |
| --- | --- | --- |
| $filenames | `array` or `string` | Name of the Twig file to render. If this is an array of files, Timber will render the first file that exists. |
| $data | `array` | Optional. An array of data to use in Twig template. |
| $expires | `bool` or `int` | Optional. In seconds. Use false to disable cache altogether. When passed an array, the first value is used for non-logged in visitors, the second for users. Default false. |
| $cache_mode | `string` | Optional. Any of the cache mode constants defined in Timber\Loader. |

---

### render()

Render function.

Passes data to a Twig file and echoes the output.

`render( array|string $filenames, array $data = array(), bool|int $expires = false, string $cache_mode = \Timber\Loader::CACHE_USE_DEFAULT )`

**Returns:** `bool|string` The echoed output.

| Name | Type | Description |
| --- | --- | --- |
| $filenames | `array` or `string` | Name of the Twig file to render. If this is an array of files, Timber will render the first file that exists. |
| $data | `array` | Optional. An array of data to use in Twig template. |
| $expires | `bool` or `int` | Optional. In seconds. Use false to disable cache altogether. When passed an array, the first value is used for non-logged in visitors, the second for users. Default false. |
| $cache_mode | `string` | Optional. Any of the cache mode constants defined in Timber\Loader. |

**PHP**

```php
$context = Timber::context();

Timber::render( 'index.twig', $context );
```

---

### render\_string()

Render a string with Twig variables.

`render_string( string $string, array $data = array() )`

**Returns:** `bool|string` 

| Name | Type | Description |
| --- | --- | --- |
| $string | `string` | A string with Twig variables. |
| $data | `array` | An array of data to use in Twig template. |

**PHP**

```php
$data = array(
    'username' => 'Jane Doe',
);

Timber::render_string( 'Hi {{ username }}, I’m a string with a custom Twig variable', $data );
```

---

### get\_sidebar()

Get sidebar.

`get_sidebar( string $sidebar = sidebar.php, array $data = array() )`

**Returns:** `bool|string` 

| Name | Type | Description |
| --- | --- | --- |
| $sidebar | `string` |  |
| $data | `array` |  |

---

### get\_sidebar\_from\_php()

Get sidebar from PHP

`get_sidebar_from_php( string $sidebar = '', array $data )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $sidebar | `string` |  |
| $data | `array` |  |

---

### get\_widgets()

Get widgets.

`get_widgets( int|string $widget_id )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $widget_id | `int` or `string` | Optional. Index, name or ID of dynamic sidebar. Default 1. |

---

### ~~get\_pagination~~()

Get pagination.

**DEPRECATED** since 2.0.0 

**link** <https://timber.github.io/docs/guides/pagination/>

`get_pagination( array $prefs = array() )`

**Returns:** `array|mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $prefs | `array` | an array of preference data. |

---

