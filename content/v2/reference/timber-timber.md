---
title: "Timber\\​Timber"
linktitle: "Timber"
is_reference: true
---

Main class called Timber for this plugin.

<!--more-->

**PHP**

```php
$posts = new Timber\PostQuery();
$posts = new Timber\PostQuery( 'post_type = article' );
$posts = new Timber\PostQuery( array(
    'post_type' => 'article',
    'category_name' => 'sports',
) );
$posts = new Timber\PostQuery( array( 23, 24, 35, 67 ), 'InkwellArticle' );

$context = Timber::context();
$context['posts'] = $posts;

Timber::render( 'index.twig', $context );
```

## Overview

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [compile()](#compile) | `bool` or `string` | Compile a Twig file.<br><br>*Returns:* The returned output. |
| [compile_string()](#compile_string) | `bool` or `string` | Compile a string. |
| [context()](#context) | `array` | Gets the global context.<br><br>*Returns:* An array of context variables that is used to pass into Twig templates through a render or compile function. |
| [context_global()](#context_global) | `array` | Gets the global context.<br><br>*Returns:* An array of global context variables. |
| [~~fetch~~()](#fetch) | `bool` or `string` | Fetch function.<br><br>*Returns:* The returned output. |
| [get_comment()](#get_comment) | `\Timber\Comment` or `null` | Get comment. |
| [get_comments()](#get_comments) | `mixed` | Get comments. |
| [~~get_context~~()](#get_context) | `array` | Get context. |
| [~~get_pagination~~()](#get_pagination) | `array` or `mixed` | Get pagination. |
| [~~get_post~~()](#get_post) | `\Timber\Post` or `bool` | Get a post by post ID or query (as a query string or an array of arguments).<br><br>*Returns:* Timber\Post object if a post was found, false if no post was found. |
| [get_post_by()](#get_post_by) | `\Timber\Post` or `bool` | Gets a post by title or slug.<br><br>*Returns:* A Timber post or `false` if no post could be found. If multiple posts with the same slug or title were found, it will select the post with the oldest date. |
| [~~get_posts~~()](#get_posts) | `array` or `bool` or `null` | Get posts. |
| [get_sidebar()](#get_sidebar) | `bool` or `string` | Get sidebar. |
| [get_sidebar_from_php()](#get_sidebar_from_php) | `string` | Get sidebar from PHP |
| [get_sites()](#get_sites) | `array` | Get sites. |
| [get_term()](#get_term) | `\Timber\Term` or `\WP_Error` or `null` | Get term. |
| [get_terms()](#get_terms) | `mixed` | Get terms. |
| [get_user()](#get_user) | `\Timber\User` or `bool` | Gets a single user. |
| [get_user_by()](#get_user_by) | `\Timber\User` or `null` | Gets a user by field. |
| [get_users()](#get_users) | `\Iterable` | Gets one or more users as an array.<br><br>*Returns:* An array of users objects. Will be empty if no users were found. |
| [get_widgets()](#get_widgets) | `string` | Get widgets. |
| [~~query_post~~()](#query_post) | `\Timber\Post` or `array` or `bool` or `null` | Query post. |
| [~~query_posts~~()](#query_posts) | `\Timber\PostCollection` | Query posts. |
| [render()](#render) | `bool` or `string` | Render function.<br><br>*Returns:* The echoed output. |
| [render_string()](#render_string) | `bool` or `string` | Render a string with Twig variables. |


## Class Methods

### ~~get\_post~~()

Get a post by post ID or query (as a query string or an array of arguments).

**DEPRECATED** since  since 2.0.0 Use `new Timber\Post()` instead.

`get_post( mixed $query = false, string|array $PostClass = Timber\Post )`

**Returns:** `\Timber\Post|bool` Timber\Post object if a post was found, false if no post was
found.

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` | Optional. Post ID or query (as query string or an array of arguments for WP_Query). If a query is provided, only the first post of the result will be returned. Default false. |
| $PostClass | `string` or `array` | Optional. Class to use to wrap the returned post object. Default 'Timber\Post'. |

---

### ~~get\_posts~~()

Get posts.

**DEPRECATED** since  since 2.0.0 Use `new Timber\PostQuery()` instead.

`get_posts( mixed $query = false, string|array $PostClass = Timber\Post, $return_collection = false )`

**Returns:** `array|bool|null` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` |  |
| $PostClass | `string` or `array` |  |

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

```
$post = Timber::get_post_by( 'slug', 'about-us' );
```
**PHP**

```php
$post = Timber::get_post_by( 'title', 'About us' );
```

---

### ~~query\_post~~()

Query post.

**DEPRECATED** since  since 2.0.0 Use `new Timber\Post()` instead.

`query_post( mixed $query = false, string $PostClass = Timber\Post )`

**Returns:** `\Timber\Post|array|bool|null` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` |  |
| $PostClass | `string` |  |

---

### ~~query\_posts~~()

Query posts.

**DEPRECATED** since  since 2.0.0 Use `new Timber\PostQuery()` instead.

`query_posts( mixed $query = false, string $PostClass = Timber\Post )`

**Returns:** `\Timber\PostCollection` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `mixed` |  |
| $PostClass | `string` |  |

---

### get\_terms()

Get terms.

`get_terms( string|array $args = null, array $maybe_args = array(), string $TermClass = Timber\Term )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $args | `string` or `array` |  |
| $maybe_args | `array` |  |
| $TermClass | `string` |  |

---

### get\_term()

Get term.

`get_term( int|\WP_Term|object $term, string $taxonomy = post_tag, $TermClass = Timber\Term )`

**Returns:** `\Timber\Term|\WP_Error|null` 

| Name | Type | Description |
| --- | --- | --- |
| $term | `int` or `\WP_Term` or `object` |  |
| $taxonomy | `string` |  |

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

**Returns:** `array` An array of context variables that is used to pass into Twig templates through
a render or compile function.

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

