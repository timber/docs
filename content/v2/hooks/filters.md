---
title: "Filter Hooks"
is_reference: true
---

## timber/meta/transform\_value

Filters whether to transform a meta value.

If the filter returns `true`, all meta value will be transformed to Timber/standard PHP objects if possible.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $transform_value | `bool` |  |

**PHP**

```php
// Transforms all meta value.
add_filter( 'timber/meta/transform_value', '__return_true' );
```

## timber/{$object\_type}/pre\_meta

Filters object meta data before it is fetched from the database.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $object_meta | `string` | The field value. Default null. Passing a non-null value will skip fetching the value from the database and will use the value from the filter instead. |
| $post_id | `int` | The post ID. |
| $field_name | `string` | The name of the meta field to get the value for. |
| $object | `object` | The Timber object. |
| $args | `array` | An array of arguments. |

**PHP**

```php
// Disable fetching meta values.
add_filter( 'timber/post/pre_meta', '__return_false' );

// Add your own meta data.
add_filter( 'timber/post/pre_meta', function( $post_meta, $post_id, $post ) {
    $post_meta = array_merge( $post_meta, [
        'custom_data_1' => 73,
        'custom_data_2' => 274,
    ] );

    return $post_meta;
}, 10, 3 );
```

## timber\_{$object\_type}\_get\_meta\_field\_pre

Filters the value for a post meta field before it is fetched from the database.

**DEPRECATED** since 2.0.0, use `timber/{object_type}/pre_meta`

## timber/{$object\_type}/meta

Filters the value for a post meta field.

This filter is used by the ACF Integration.

**see** [Timber\Post::meta()](/docs/reference/timber-post/#meta)

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $post_meta | `string` | The field value. |
| $post_id | `int` | The post ID. |
| $field_name | `string` | The name of the meta field to get the value for. |
| $post | `\Timber\Post` | The post object. |
| $args | `array` | An array of arguments. |

**PHP**

```php
add_filter( 'timber/post/meta', function( $post_meta, $post_id, $field_name, $post ) {
    if ( 'event' === $post->post_type ) {
        // Do something special.
        $post_meta['foo'] = $post_meta['foo'] . ' bar';
    }

    return $post_meta;
}, 10, 4 );
```

## timber/term/meta/field

Filters the value for a term meta field.

**DEPRECATED** since 2.0.0, use `timber/term/meta`

## timber\_{$object\_type}\_get\_meta\_field

Filters the value for an object meta field.

**DEPRECATED** since 2.0.0, use `timber/{object_type}/meta`

## timber\_{$object\_type}\_get\_meta

Filters object meta data fetched from the database.

**DEPRECATED** since 2.0.0, use `timber/{object_type}/meta`

## timber/post/classmap

Filters the class(es) used for different post types.

Read more about this in the documentation for [Post Class Maps](https://timber.github.io/docs/v2/guides/class-maps/#the-post-class-map).

The default Post Class Map will contain class names for posts, pages that map to
`Timber\Post` and a callback that will map attachments to `Timber\Attachment` and
attachments that are images to `Timber\Image`.

Make sure to merge in your additional classes instead of overwriting the whole Class Map.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $classmap | `array` | The post class(es) to use. An associative array where the key is the post type and the value the name of the class to use for this post type or a callback that determines the class to use. |

```
use Book;
use Page;

add_filter( 'timber/post/classmap', function( $classmap ) {
    $custom_classmap = [
        'page' => Page::class,
        'book' => Book::class,
    ];

    return array_merge( $classmap, $custom_classmap );
} );
```

## timber/user/classmap

Filters the name of the PHP class used to instantiate `Timber\User` objects.

The User Class Map receives the default `Timber\User` class and a `WP_User` object. You
should be able to decide which class to use based on that user object.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The name of the class. Default `Timber\User`. |
| $user | `\WP_User` | The `WP_User` object that is used as the base for the `Timber\User` object. |

**PHP**

```php
use Administrator;
use Editor;

add_filter( 'timber/user/classmap', function( $class, \WP_User $user ) {
    if ( in_array( 'editor', $user->roles, true ) ) {
        return Editor::class;
    } elseif ( in_array( 'author', $user->roles, true ) ) {
        return Author::class;
    }

    return $class;
}, 10, 2 );
```

## timber/transient/slug

Filters the transient slug.

This might be useful if you are using a multilingual solution.

**since** 0.22.6 

| Name | Type | Description |
| --- | --- | --- |
| $slug | `string` | The slug for the transient. |

## timber/transient/force\_transients

Filters …

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $force | `bool` |  |

## timber\_force\_transients

Filters …

**DEPRECATED** since 2.0.0, use `timber/transient/force_transients`

## timber/transient/force\_transient\_{$slug}

Filters …

Here is a description about the filter.
`$slug` The transient slug.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $force | `bool` |  |

## timber\_force\_transient\_{$slug}

Filters …

**DEPRECATED** since 2.0.0, use `timber/transient/force_transient_{$slug}`

## timber/helper/wp\_title\_separator

Filters the separator used for the page title.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $separator | `string` | The separator to use. Default `' '`. |

## timber\_wp\_title\_seperator

Filters the separator used for the page title.

**DEPRECATED** since 2.0.0, use `timber/helper/wp_title_separator`

## timber/image/src

Filters the src URL for a `Timber\Image`.

**see** [Timber\Image::src()](/docs/reference/timber-image/#src)

**since** 0.21.7 

| Name | Type | Description |
| --- | --- | --- |
| $src | `string` | The image src. |
| $id | `int` | The image ID. |

## timber\_image\_src

Filters the src URL for a `Timber\Image`.

**DEPRECATED** since 2.0.0, use `timber/image/src`

## timber/sideload\_image/subdir

Filters to directory that should be used for sideloaded images.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $subdir | `string` | The subdir name to use for sideloaded images. Return an empty string or a falsey value in order to not use a subfolder. Default `external`. |

**PHP**

```php
// Change the subdirectory used for sideloaded images.
add_filter( 'timber/sideload_image/subdir', function( $subdir ) {
    return 'sideloaded';
} );

// Disable subdirectory used for sideloaded images.
add_filter( 'timber/sideload_image/subdir', '__return_false' );
```

## timber/image/new\_url

Filters the URL for the resized version of a `Timber\Image`.

You’ll probably need to use this in combination with `timber/image/new_path`.

**since** 1.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $new_url | `string` | The URL to the resized version of an image. |

## timber/image/new\_path

Filters the destination path for the resized version of a `Timber\Image`.

A possible use case for this would be to store all images generated by Timber in a
separate directory. You’ll probably need to use this in combination with
`timber/image/new_url`.

**since** 1.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $destination_path | `string` | Full path to the destination of a resized image. |

## timber/cache/mode

Filters the cache mode.

You can read more about Caching in the
[Performance/Caching]({{<relref "performance.md" >}}) guide.

**since** 0.20.10 

| Name | Type | Description |
| --- | --- | --- |
| $cache_mode | `string` | The cache mode. Can be one of the following: `Timber\Loader::CACHE_NONE`, `Timber\Loader::CACHE_OBJECT`, `Timber\Loader::CACHE_TRANSIENT`, `Timber\Loader::CACHE_SITE_TRANSIENT`, `Timber\Loader::CACHE_USE_DEFAULT`. Default `Timber\Loader::CACHE_TRANSIENT`. |

## timber\_cache\_mode

Filters the cache mode.

**DEPRECATED** since 2.0.0, use `timber/cache/mode`

## timber/loader/render\_data

Filters …

**since** 0.20.10 

| Name | Type | Description |
| --- | --- | --- |
| $data | `array` |  |
| $file | `string` |  |

## timber\_loader\_render\_data

Filters …

**DEPRECATED** since 2.0.0, use `timber/loader/render_data`

## timber/output

Filters …

**since** 0.20.10 

| Name | Type | Description |
| --- | --- | --- |
| $output | `string` |  |
| $data | `array` |  |
| $file | `string` |  |

## timber\_output

Filters …

**DEPRECATED** since 2.0.0, use `timber/output`

## timber/loader/paths

Filters the template paths used by the Loader.

**DEPRECATED** since 2.0.0, use `timber/locations`

**since** 0.20.10 

| Name | Type | Description |
| --- | --- | --- |
| $paths | `array` |  |

## timber/loader/loader

Filters …

**link** <https://github.com/timber/timber/pull/1254>

**since** 1.1.11 

| Name | Type | Description |
| --- | --- | --- |
| $paths | `array` |  |

## timber/twig/environment/options

Filters the environment options that are used when creating a Twig Environment instance.

By default, Timber sets the following values:

- `'debug' => WP_DEBUG`
- `'autoescape' => false`
- `'cache' => false`

**link** <https://twig.symfony.com/doc/2.x/api.html#environment-options>

**since** 1.9.5 

| Name | Type | Description |
| --- | --- | --- |
| $environment_options | `array` | An array of Twig environment options. |

**PHP**

```php
add_filter( 'timber/twig/environment/options', 'update_twig_environment_options' );

/**
 * Updates Twig environment options.
 *
 * @link https://twig.symfony.com/doc/2.x/api.html#environment-options
 *
 * @param array $options An array of environment options.
 *
 * @return array
 */
function update_twig_environment_options( $options ) {
    $options['cache']       = true;
    $options['auto_reload'] = true;

    return $options;
}
```

## timber/cache/location

Filters the cache location used for Twig.

**DEPRECATED** since 2.0.0 

Allows you to set a new cache location for Twig. If the folder doesn’t exist yet, it
will be created automatically.

**since** 0.20.10 

| Name | Type | Description |
| --- | --- | --- |
| $twig_cache_loc | `string` | Full path to the cache location. Default `/cache/twig` in the Timber root folder. |

## timber/loader/twig

Filters …

**since** 0.20.10 

| Name | Type | Description |
| --- | --- | --- |
| $twig | `\Twig\Environment` | The Twig environment you can add functionality to. |

## timber/twig

Filters the Twig environment used in the global context.

You can use this filter if you want to add additional functionality to Twig, like global
variables, filters or functions.

**since** 0.21.9 

| Name | Type | Description |
| --- | --- | --- |
| $twig | `\Twig\Environment` | The Twig environment. |

**PHP**

```php
/**
 * Adds Twig functionality.
 *
 * @param \Twig\Environment $twig The Twig Environment to which you can add additional functionality.
 */
add_filter( 'timber/twig', function( $twig ) {
    // Make get_theme_file_uri() usable as {{ theme_file() }} in Twig.
    $twig->addFunction( new Twig\TwigFunction( 'theme_file', 'get_theme_file_uri' ) );

    return $twig;
} );
```

**Twig**

```twig
<a class="navbar-brand" href="{{ site.url }}">
    <img src="{{ theme_file( 'build/img/logo-example.svg' ) }}" alt="Logo {{ site.title }}">
</a>
```

## timber/cache/extension/lifetime

Filters the Twig environment used in the global context.

**DEPRECATED** since 2.0.0 

## timber/locations

Filters …

**since** 0.20.10 

| Name | Type | Description |
| --- | --- | --- |
| $locs | `array` |  |

## timber\_locations

Filters …

**DEPRECATED** since 2.0.0, use `timber/locations`

## timber/post/meta\_object\_field

Filters field object data from Advanced Custom Fields.

This filter is used by the ACF Integration.

**see** [Timber\Post::field_object()](/docs/reference/timber-post/#field_object)

**since** 1.6.0 

| Name | Type | Description |
| --- | --- | --- |
| $value | `array` | The field object array. |
| $post_id | `int` | The post ID. |
| $field_name | `string` | The ACF field name. |
| $post | `\Timber\Post` | The post object. |

## timber/post/authors

Filters authors for a post.

This filter is used by the CoAuthorsPlus integration.

**see** [Timber\Post::authors()](/docs/reference/timber-post/#authors)

**since** 1.1.4 

| Name | Type | Description |
| --- | --- | --- |
| $authors | `array` | An array of User objects. Default: User object for `post_author`. |
| $post | `\Timber\Post` | The post object. |

## timber/post/content/show\_password\_form\_for\_protected

Filters whether the password form should be shown for password protected posts.

This filter runs only when you call `{{ post.content }}` for a password protected
post. When this filter returns `true`, a password form will be shown instead of the
post content. If you want to modify the form itself, you can use the
`timber/post/content/password_form` filter.

**since** 1.1.4 

| Name | Type | Description |
| --- | --- | --- |
| $show_pw | `bool` | Whether the password form should be shown. Default `false`. |

**PHP**

```php
// Always show password form for password protected posts.
add_filter( 'timber/post/content/show_password_form_for_protected', '__return_true' );
```

## timber/post/content/password\_form

Filters the password form output.

As an alternative to this filter, you could also use WordPress’s `the_password_form` filter.
The difference to this filter is, that you’ll also have the post object available as a second
parameter, in case you need that.

**since** 1.1.4 

| Name | Type | Description |
| --- | --- | --- |
| $form | `string` | Form output. Default WordPress password form output generated by `get_the_password_form()`. |
| $post | `\Timber\Post` | The post object. |

**PHP**

```php
// Modify the password form.
add_filter( 'timber/post/content/password_form', function( $form, $post ) {
    return Timber::compile( 'assets/password-form.twig', array( 'post' => $post ) );
}, 10, 2 );
```

## timber/post/excerpt/defaults

Filters the default options used for post excerpts.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $defaults | `array` | An array of default options. You can see which options you can use  when you look at the `$options` parameter for [PostExcerpt::__construct()](https://timber.github.io/docs/v2/reference/timber-postexcerpt/#__construct). |

**PHP**

```php
add_filter( 'timber/post/excerpt/defaults', function( $defaults ) {
    // Only add a read more link if the post content isn’t longer than the excerpt.
    $defaults['always_add_read_more'] = false;

    // Set a default character limit.
    $defaults['words'] = 240;

    return $defaults;
} );
```

## timber/post/excerpt/read\_more\_class

Filters the CSS class used for excerpt links.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The CSS class to use for the excerpt link. Default `read-more`. |

**PHP**

```php
// Change the CSS class for excerpt links.
add_filter( 'timber/post/excerpt/read_more_class', function( $class ) {
    return 'read-more__link';
} );
```

## timber/post/preview/read\_more\_class

Filters the CSS class used for excerpt links.

**DEPRECATED** since 2.0.0 

**since** 1.0.4 

## timber/post/excerpt/read\_more\_link

Filters the link used for a read more text in an excerpt.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $link | `string` | The HTML link. |
| $post | `\Timber\Post` | Post instance. |

## timber/post/get\_preview/read\_more\_link

Filters the link used for a read more text in an excerpt.

**DEPRECATED** since 2.0.0 

**since** 1.1.3 

## timber/site/update\_option

Filters a value before it is updated in the site options.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $value | `mixed` | The new value. |
| $key | `string` | The option key. |
| $site_id | `int` | The site ID. |
| $site | `\Timber\Site` | The site object. |

## timber\_site\_set\_meta

Filters a value before it is updated in the site options.

**DEPRECATED** since 2.0.0, use `timber/site/update_option`

**since** 0.20.0 

## timber/term/link

Filters the link to the term archive page.

**see** [Timber\Term::link()](/docs/reference/timber-term/#link)

**since** 0.21.9 

| Name | Type | Description |
| --- | --- | --- |
| $link | `string` | The link. |
| $term | `\Timber\Term` | The term object. |

## timber\_term\_link

Filters the link to the term archive page.

**DEPRECATED** since 0.21.9, use `timber/term/link`

## timber/term/path

Filters the relative link (path) to a term archive page.

**see** [Timber\Term::path()](/docs/reference/timber-term/#path)

**since** 0.21.9 

| Name | Type | Description |
| --- | --- | --- |
| $rel | `string` | The relative link. |
| $term | `\Timber\Term` | The term object. |

## timber\_term\_path

Filters the relative link (path) to a term archive page.

**DEPRECATED** since 2.0.0, use `timber/term/path`

## timber\_term\_set\_meta

Filters term meta value that is going to be updated.

**DEPRECATED** since 2.0.0 with no replacement

## timber/term/meta/set

Filters term meta value that is going to be updated.

**DEPRECATED** since 2.0.0, with no replacement

This filter is used by the ACF Integration.

## timber/trim\_words/allowed\_tags

Filters allowed tags for `trim_words()` helper.

The `trim_words()` helper strips all HTML tags from a text it trims, except for a list of
allowed tags. Instead of passing the allowed tags every time you use `trim_words()` (or `{{ text|truncate }}`
in Twig), you can use this filter to set the allowed tags.

**see** [Timber\TextHelper::trim_words()](/docs/reference/timber-texthelper/#trim_words)

**since** 0.21.9 

| Name | Type | Description |
| --- | --- | --- |
| $allowed_tags | `string` | Allowed tags, separated by one whitespace. Default `p a span b i br blockquote`. |

## timber/integrations

Filters the integrations that should be initialized by Timber.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $integrations | `array` | An array of PHP class names. Default: array of integrations that Timber initializes by default. |

## timber/context

Filters the global Timber context.

By using this filter, you can add custom data to the global Timber context, which
means that this data will be available on every page that is initialized with
`Timber::context()`.

Be aware that data will be cached as soon as you call `Timber::context()` for the
first time. That’s why you should add this filter before you call
`Timber::context()`.

**see** [Timber\Timber::context()](/docs/reference/timber-timber/#context)

**since** 0.21.7 

| Name | Type | Description |
| --- | --- | --- |
| $context | `array` | The global context. |

**PHP**

```php
add_filter( 'timber/context', function( $context ) {
    // Example: A custom value
    $context['custom_site_value'] = 'Hooray!';

    // Example: Add a menu to the global context.
    $context['menu'] = new \Timber\Menu( 'primary-menu' );

    // Example: Add all ACF options to global context.
    $context['options'] = get_fields( 'options' );

    return $context;
} );
```
**Twig**

```twig
<h1>{{ custom_site_value|e }}</h1>

{% for item in menu.items %}
    {# Display menu item #}
{% endfor %}

<footer>
    {% if options.footer_text is not empty %}
        {{ options.footer_text|e }}
    {% endif %}
</footer>
```

## timber\_context

Filters the global Timber context.

**DEPRECATED** since 2.0.0, use `timber/context`

## timber/render/file

Filters the Twig template that should be rendered.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $file | `string` | The chosen Twig template name to render. |

## timber\_render\_file

Filters the Twig file that should be rendered.

**DEPRECATED** since 2.0.0, use `timber/render/file`

## timber/compile/file

Filters the Twig template that should be compiled.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $file | `string` | The chosen Twig template name to compile. |

## timber\_compile\_file

Filters the Twig template that should be compiled.

**DEPRECATED** since 2.0.0 

## timber/render/data

Filters the data that should be passed for rendering a Twig template.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $data | `array` | The data that is used to render the Twig template. |
| $file | `string` | The name of the Twig template to render. |

## timber\_render\_data

Filters the data that should be passed for rendering a Twig template.

**DEPRECATED** since 2.0.0 

## timber/compile/data

Filters the data that should be passed for compiling a Twig template.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $data | `array` | The data that is used to compile the Twig template. |
| $file | `string` | The name of the Twig template to compile. |

## timber\_compile\_data

Filters the data that should be passed for compiling a Twig template.

**DEPRECATED** since 2.0.0, use `timber/compile/data`

## timber/compile/result

Filters the compiled result before it is returned in `Timber::compile()`.

It adds the posibility to filter the output ready for render.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $output | `string` |  |

## timber\_compile\_result

Filters the compiled result before it is returned.

**DEPRECATED** since 2.0.0 use timber/compile/result

**see** [Timber\Timber::fetch()](/docs/reference/timber-timber/#fetch)

**since** 0.16.7 

| Name | Type | Description |
| --- | --- | --- |
| $output | `string` | The compiled output. |

## timber/twig/functions

Filters the functions that are added to Twig.

The `$functions` array is an associative array with the filter name as a key and an
arguments array as the value. In the arguments array, you pass the function to call with
a `callable` entry.

This is an alternative filter that you can use instead of adding your function in the
`timber/twig` filter.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $functions | `array` |  |

**PHP**

```php
add_filter( 'timber/twig/functions', function( $functions ) {
    // Add your own function.
    $functions['url_to_domain'] = [
        'callable' => 'url_to_domain',
    ];

    // Replace a function.
    $functions['get_image'] = [
        'callable' => 'custom_image_get',
    ];

    // Remove a function.
    unset( $functions['bloginfo'] );

    return $functions;
} );
```

## timber/twig/filters

Filters the filters that are added to Twig.

The `$filters` array is an associative array with the filter name as a key and an
arguments array as the value. In the arguments array, you pass the function to call with
a `callable` entry.

This is an alternative filter that you can use instead of adding your filter in the
`timber/twig` filter.

**since** 2.0.0 

| Name | Type | Description |
| --- | --- | --- |
| $filters | `array` |  |

**PHP**

```php
add_filter( 'timber/twig/default_filters', function( $filters ) {
    // Add your own filter.
    $filters['price'] = [
        'callable' => 'format_price',
    ];

    // Replace a filter.
    $filters['list'] = [
        'callable' => 'custom_list_filter',
    ];

    // Remove a filter.
    unset( $filters['list'] );

    return $filters;
} );
```

## timber/url\_helper/url\_to\_file\_system/path

Filters the path of a parsed URL.

This filter is used by the WPML integration.

**see** [Timber\URLHelper::url_to_file_system()](/docs/reference/timber-urlhelper/#url_to_file_system)

**since** 1.3.2 

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` |  |

## timber/URLHelper/url\_to\_file\_system/path

Filters the path of a parsed URL.

**DEPRECATED** since 2.0.0, use `timber/url_helper/url_to_file_system/path`

## timber/url\_helper/file\_system\_to\_url

Filters the home URL …

This filter is used by the WPML integration.

**see** [Timber\URLHelper::file_system_to_url()](/docs/reference/timber-urlhelper/#file_system_to_url)

**since** 1.3.2 

| Name | Type | Description |
| --- | --- | --- |
| $home | `string` | The home URL. |

## timber/URLHelper/file\_system\_to\_url

Filters the home URL …

**DEPRECATED** since 2.0.0, use `timber/url_helper/file_system_to_url`

## timber/url\_helper/get\_content\_subdir/home\_url

Filters the home URL that is used to get the path relative to the content directory.

**since** 1.3.2 

| Name | Type | Description |
| --- | --- | --- |
| $home_url | `string` | The URL to use as the base for getting the content subdirectory. Default value of `home_url()`. |

## timber/URLHelper/get\_content\_subdir/home\_url

Filters the home URL that is used to get the path relative to the content directory.

**DEPRECATED** since 2.0.0, use `timber/url_helper/get_content_subdir/home_url`

## timber/user/name

Filters the name of a user.

**since** 1.1.4 

| Name | Type | Description |
| --- | --- | --- |
| $name | `string` | The name of the user. Default `display_name`. |
| $user | `\Timber\User` | The user object. |

