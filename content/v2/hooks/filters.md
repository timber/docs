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
| $object_meta | `string` or `null` | The field value. Default null. Passing a non-null value will skip fetching the value from the database and will use the value from the filter instead. |
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
| $post | `\CoreEntity` | The post object. |
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

## timber/comment/classmap

Filters the class(es) used for comments linked to different post types.

The default class is Timber\Comment. You can use this filter to provide your own comment class for specific post types.

Make sure to merge in your additional classes instead of overwriting the whole Class Map.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $classmap | `array` | The post class(es) to use. An associative array where the key is the post type and the value the name of the class to use for the comments of this post type or a callback that determines the class to use. |

```
use Book;

add_filter( 'timber/post/classmap', function( $classmap ) {
    $custom_classmap = [
        'book' => BookComment::class,
    ];

    return array_merge( $classmap, $custom_classmap );
} );
```

## timber/comment/class

Filters the comment class based on your custom criteria.

Maybe you want to set a custom class based upon the comment type?
This allows you to filter the PHP class, utilizing data from the WP_Comment object.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The class to use. |
| $comment | `\WP_Comment` | The comment object. |

```
add_filter( 'timber/comment/class', function( $class, $comment ) {
    if ( $comment->comment_type === 'pingback' ) {
        return PingBackComment::class;
    }
    return $class;
}, 10, 2 );
```

## timber/menu/classmap

Filters the class(es) used for different menus.

Read more about this in the documentation for [Menu Class Maps](https://timber.github.io/docs/v2/guides/class-maps/#the-menu-class-map).

The default Menu Class Map will contain class names for locations that map to `Timber\Menu`.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $classmap | `array` | The menu class(es) to use. An associative array where the key is the location and the value the name of the class to use for this menu or a callback that determines the class to use. |

```
add_filter( 'timber/menu/classmap', function( $classmap ) {
    $custom_classmap = [
        'primary'   => MenuPrimary::class,
        'secondary' => MenuSecondary::class,
    ];

    return array_merge( $classmap, $custom_classmap );
} );
```

## timber/menu/class

Filters the menu class based on your custom criteria.

Maybe the location is not appropriate in some cases. This filter will allow you to filter the class
on whatever data is available.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The class to use. |
| $term | `\WP_Term` | The menu term. |
| $args | `array` | The arguments passed to the menu. |

```
add_filter( 'timber/menu/class', function( $class, $term, $args ) {
    if ( $args['depth'] === 1 ) {
        return SingleLevelMenu::class;
    }

    return MultiLevelMenu::class;
}, 10, 3 );
```

## timber/menuitem/classmap

Filters the class(es) used for different menu items.

Read more about this in the documentation for [Menu Item Class Maps](https://timber.github.io/docs/v2/guides/class-maps/#the-menu-item-class-map).

The default Menu Item Class Map will contain class names for locations that map to `Timber\MenuItem`.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $classmap | `array` | The menu item class(es) to use. An associative array where the key is the location and the value the name of the class to use for this menu item or a callback that determines the class to use. |

```
add_filter( 'timber/menuitem/classmap', function( $classmap ) {
    $custom_classmap = [
        'primary'   => MenuItemFooter::class,
        'secondary' => MenuItemHeader::class,
    ];

    return array_merge( $classmap, $custom_classmap );
} );
```

## timber/menuitem/class

Filters the menu item class

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The class to use. |
| $item | `\WP_Post` | The menu item. |
| $menu | `\Menu` | The menu object. |

```
add_filter( 'timber/menuitem/class', function( $class, $item, $menu ) {
    if ( $item->post_parent ) {
        return SubMenuItem::class;
    }

    return MenuItem::class;
}, 10, 3 );
```

## timber/pages\_menu/class

Filters the class used for different menus.

Read more about this in the documentation for [Pages Menu Class filter](https://timber.github.io/docs/v2/guides/class-maps/#the-pages-menu-class-filter).

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The pages menu class to use. |
| $args | `array` | The arguments passed to `Timber::get_pages_menu()`. |

```
add_filter( 'timber/pages_menu/class', function( $class ) {
    return ExtendedPagesMenu::class;
} );
```

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

## timber/post/class

Filters the post class based on your custom criteria.

Maybe you want to set a custom class based upon how blocks are used?
This allows you to filter the PHP class, utilizing data from the WP_Post object.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The class to use. |
| $post | `\WP_Post` | The post object. |

```
add_filter( 'timber/post/class', function( $class, $post ) {
    if ( has_blocks($post) ) {
        return GutenbergPost::class;
    }

    return $class;
}, 10, 2 );
```

## timber/post/image\_extensions

Filters the list of image extensions that will be used to determine if an attachment is an image.

You can use this filter to add or remove image extensions to the list of extensions that will be
used to determine if an attachment is an image.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $extensions | `array` | An array of image extensions. |

## timber/term/classmap

Filters the class(es) used for terms of different taxonomies.

The default Term Class Map will contain class names mapped to the build-in post_tag and category taxonomies.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $classmap | `array` | The term class(es) to use. An associative array where the key is the taxonomy name and the value the name of the class to use for this taxonomy or a callback that determines the class to use. |

```
add_filter( 'timber/term/classmap', function( $classmap ) {
    $custom_classmap = [
        'expertise'   => ExpertiseTerm::class,
    ];

    return array_merge( $classmap, $custom_classmap );
} );
```

## timber/term/class

Filters the term class based on your custom criteria.

Maybe you want to set a custom class based upon a certain category?
This allows you to filter the PHP class, utilizing data from the WP_Term object.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $class | `string` | The class to use. |
| $term | `\WP_Term` | The term object. |

```
add_filter( 'timber/term/class', function( $class, $term ) {
    if ( get_term_meta($term->term_id, 'is_special_category', true) ) {
        return MyCustomTermClass::class;
    }

    return $class;
}, 10, 2 );
```

## timber/user/class

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

add_filter( 'timber/user/class', function( $class, \WP_User $user ) {
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

Filters whether to force a locked transients to be regenerated.

If a transient is locked, it means that another process is currently generating the data.
If you want to force the transient to be regenerated, during that process, you can set this
filter to true.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $force | `bool` | Whether to force a locked transient to be regenerated. |

## timber\_force\_transients

Filters whether to force a locked transients to be regenerated.

**DEPRECATED** since 2.0.0, use `timber/transient/force_transients`

If a transient is locked, it means that another process is currently generating the data.
If you want to force the transient to be regenerated, during that process, you can set this
filter to true.

## timber/transient/force\_transient\_{$slug}

Filters whether to force a specific locked transients to be regenerated.

If a transient is locked, it means that another process is currently generating the data.
If you want to force the transient to be regenerated during that process, you can set this value to true.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $force | `bool` | Whether to force a locked transient to be regenerated. |

**PHP**

```php

add_filter( 'timber/transient/force_transient_mycustumslug', function($force) {
    if(false == something_special_has_occurred()){
      return false;
    }

    return true;
}, 10 );
```

## timber\_force\_transient\_{$slug}

Filters whether to force a specific locked transients to be regenerated.

**DEPRECATED** since 2.0.0, use `timber/transient/force_transient_{$slug}`

If a transient is locked, it means that another process is currently generating the data.
If you want to force the transient to be regenerated, during that process, you can set this value to true.
`$slug` The transient slug.

| Name | Type | Description |
| --- | --- | --- |
| $force | `bool` | Whether to force a locked transient to be regenerated. |

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

## timber/sideload\_image/basename

Filters basename for sideloaded files.

**since** 2.1.0

| Name | Type | Description |
| --- | --- | --- |
| $basename | `string` | Current basename for the sideloaded file. |
| $path_parts | `array` | Array with path info for the sideloaded file. |

**PHP**

```php
// Change the basename used for sideloaded images.
add_filter( 'timber/sideload_image/basename', function ($basename, $path_parts) {
    return $path_parts['filename'] . '-' . substr($basename, 0, 6);
}, 10, 2)
```

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

## timber/image\_helper/pre\_analyze\_url

Filters whether to short-circuit the ImageHelper::analyze_url()
file path of a URL located in a theme directory.

Returning a non-null value from the filter will short-circuit
ImageHelper::analyze_url(), returning that value.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $info | `array<string,mixed>` or `null` | The URL components array to short-circuit with. Default null. |
| $url | `string` | The URL pointing to an image. |

## timber/image\_helper/analyze\_url

Filters the array of analyzed URL components.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $info | `array<string,mixed>` | The URL components. |
| $url | `string` | The URL pointing to an image. |

## timber/image\_helper/pre\_theme\_url\_to\_dir

Filters whether to short-circuit the ImageHelper::theme_url_to_dir()
file path of a URL located in a theme directory.

Returning a non-null value from the filter will short-circuit
ImageHelper::theme_url_to_dir(), returning that value.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` or `null` | Full path to short-circuit with. Default null. |
| $src | `string` | The URL to be converted. |

## timber/image\_helper/theme\_url\_to\_dir

Filters the raw file path of a URL located in a theme directory.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` | The resolved full path to $src. |
| $src | `string` | The URL that was converted. |

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

## timber/output/pre-cache

Filters $output before it is cached.

**since** 2.1.0

| Name | Type | Description |
| --- | --- | --- |
| $output | `string` |  |
| $data | `array` |  |
| $file | `string` |  |

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
 * \@param array $options An array of environment options.
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

## timber/cache/enable\_extension

Filters the cache extension activation.

Allows users to disable the cache extension and use their own

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $enable_cache_extension | `bool` | Whether to enable the cache extension. |

## timber/loader/twig

Filters …

**since** 0.20.10

| Name | Type | Description |
| --- | --- | --- |
| $twig | `\Environment` | The Twig environment you can add functionality to. |

## timber/twig

Filters the Twig environment used in the global context.

You can use this filter if you want to add additional functionality to Twig, like global
variables, filters or functions.

**since** 0.21.9

| Name | Type | Description |
| --- | --- | --- |
| $twig | `\Environment` | The Twig environment. |

**PHP**

```php
/**
 * Adds Twig functionality.
 *
 * \@param \Twig\Environment $twig The Twig Environment to which you can add additional functionality.
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

## timber/cache/transient\_key

Filters the transient key used for caching.

**since** 2.1.0

| Name | Type | Description |
| --- | --- | --- |
| $trans_key | `string` | The transient key. |
| $key | `string` | The cache key. |
| $group | `string` | The cache group. |
| $cache_mode | `string` | The cache mode. |

```
add_filter( 'timber/cache/transient_key', function( $trans_key, $key, $group, $cache_mode ) {
    return $trans_key . '_my_suffix';
}, 10, 4 );
```

## timber/cache/transient\_key

Filters the transient key used for caching.

**since** 2.1.0

| Name | Type | Description |
| --- | --- | --- |
| $trans_key | `string` | The transient key. |
| $key | `string` | The cache key. |
| $group | `string` | The cache group. |
| $cache_mode | `string` | The cache mode. |

```
add_filter( 'timber/cache/transient_key', function( $trans_key, $key, $group, $cache_mode ) {
    return $trans_key . '_my_suffix';
}, 10, 4 );
```

## timber/locations

Filters the filesystem paths to search for Twig templates.

**since** 0.20.10

| Name | Type | Description |
| --- | --- | --- |
| $locs | `array` | An array of filesystem paths to search for Twig templates. |

```
add_filter( 'timber/locations', function( $locs ) {
  $locs = \array_map(function ($loc) {
     \array_unshift($loc, \dirname(__DIR__) . '/my-custom-dir');
      return $loc;
  }, $locs);

    return $locs;
} );
```

## timber\_locations

Filters the filesystem paths to search for Twig templates.

**DEPRECATED** since 2.0.0, use `timber/locations`

## timber/menu/item\_objects

Filters the sorted list of menu item objects before creating the Menu object.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $item | `array` |  |
| $menu | `\WP_Term` |  |

```
add_filter( 'timber/menu/item_objects', function ( $items ) {
    return array_map(function ($item) {
        if ( is_object( $item ) && ! ( $item instanceof \WP_Post ) ) {
            return new \WP_Post( get_object_vars( $item ) );
        }

        return $item;
    }, $items);
} );
```

## timber/post/import\_data

Filters the imported post data.

Used internally for previews.

**see** Timber::init()

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $data | `array` | An array of post data to import. |
| $post | `\Post` | The Timber post instance. |

## timber/post/meta\_object\_field

Filters field object data from Advanced Custom Fields.

This filter is used by the ACF Integration.

**see** [Timber\Post::field_object()](/docs/reference/timber-post/#field_object)

**since** 1.6.0

| Name | Type | Description |
| --- | --- | --- |
| $value | `mixed` | The value. |
| $post_id | `int` or `null` | The post ID. |
| $field_name | `string` | The ACF field name. |
| $post | `\Post` | The post object. |

## timber/post/authors

Filters authors for a post.

This filter is used by the CoAuthorsPlus integration.

**see** [Timber\Post::authors()](/docs/reference/timber-post/#authors)

**since** 1.1.4

| Name | Type | Description |
| --- | --- | --- |
| $authors | `array` | An array of User objects. Default: User object for `post_author`. |
| $post | `\Post` | The post object. |

```
add_filter( 'timber/post/authors', function( $author, $post ) {
     foreach ($cauthors as $author) {
       // do something with $author
     }

    return $authors;
} );
```

## timber/post/children\_args

Filters the arguments for the query used to get the children of a post.

This filter is used by the `Timber\Post::children()` method. It allows you to modify the
arguments for the `get_children` function. This way you can change the query to get the
children of a post.

**see** [Timber\Post::children()](/docs/reference/timber-post/#children)

**since** 2.1.0

| Name | Type | Description |
| --- | --- | --- |
| $arguments | `array` | An array of arguments for the `get_children` function. |
| $post | `\Post` | The post object. |

```
add_filter( 'timber/post/children_args', function( $args, $post ) {

    if ( $post->post_type === 'custom_post_type' ) {
       $args['post_status'] = 'private';
    }

    return $args;
} );
```

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
| $post | `\Post` | The post object. |

**PHP**

```php
// Modify the password form.
add_filter( 'timber/post/content/password_form', function( $form, $post ) {
    return Timber::compile( 'assets/password-form.twig', array( 'post' => $post ) );
}, 10, 2 );
```

## timber/post/content/remove\_blocks

Filters whether the content produced by block editor blocks should be removed or not from the content.

If truthy then block whose content does not belong in the excerpt, will be removed.
This removal is done using WordPress Core `excerpt_remove_blocks` function.

**see** excerpt_remove_blocks() The WordPress Core function that will handle the block removal from the excerpt.

**since** 2.1.1

| Name | Type | Description |
| --- | --- | --- |
| $remove_blocks | `bool` | Whether blocks whose content should not be part of the excerpt should be removed or not from the excerpt. |

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
| $post | `\Post` | Post instance. |
| $linktext | `string` | The link text. |
| $read_more_class | `string` | The CSS class name. |

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
| $site | `\Site` | The site object. |

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
| $term | `\Term` | The term object. |

## timber\_term\_link

Filters the link to the term archive page.

**DEPRECATED** since 0.21.9, use `timber/term/link`

## timber/term/path

Filters the relative link (path) to a term archive page.

```
add_filter( 'timber/term/path', function( $rel, $term ) {
    if ( $term->slug === 'news' ) {
       return '/category/modified-url';
    }

    return $rel;
}, 10, 2 );
```

**see** [Timber\Term::path()](/docs/reference/timber-term/#path)

**since** 0.21.9

| Name | Type | Description |
| --- | --- | --- |
| $rel | `string` | The relative link. |
| $term | `\Term` | The term object. |

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
| $integrations | `\IntegrationInterface[]` | An array of PHP class names. Default: array of integrations that Timber initializes by default. |

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

It adds the possibility to filter the output ready for render.

**since** 2.0.0

| Name | Type | Description |
| --- | --- | --- |
| $output | `string` or `bool` | the compiled output. |

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

## timber/twig/escapers

Filters the escaping filters that are added to Twig.

The `$escaper_filters` array is an associative array with the filter name as a key and an
arguments array as the value. In the arguments array, you pass the function to call with
a `callable` entry.

**since** 2.1.0

| Name | Type | Description |
| --- | --- | --- |
| $escaper_filters | `array` |  |

**PHP**

```php
add_filter( 'timber/twig/escapers', function( $escaper_filters ) {
    // Add your own filter.
    $filters['esc_xml'] = [
        'callable' => 'esc_xml',
         'options' => [
            'is_safe' => ['html'],
         ],
    ];

    // Remove a filter.
    unset( $filters['esc_js'] );

    return $filters;
} );
```

## timber/url\_helper/url\_to\_file\_system/path

Filters the path of a parsed URL.

You can use this filter to alter the returned file system path.
This filter is used by the WPML integration.

**see** [Timber\URLHelper::url_to_file_system()](/docs/reference/timber-urlhelper/#url_to_file_system)

**since** 1.3.2

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` | The current translated path |

## timber/URLHelper/url\_to\_file\_system/path

Filters the path of a parsed URL.

**DEPRECATED** since 2.0.0, use `timber/url_helper/url_to_file_system/path`

## timber/url\_helper/file\_system\_to\_url

Filters the URL in URLHelper::file_system_to_url

You can use this filter to alter the returned URL.
This filter is used by the WPML integration.

**see** [Timber\URLHelper::file_system_to_url()](/docs/reference/timber-urlhelper/#file_system_to_url)

**since** 1.3.2

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | The current translated url |

## timber/URLHelper/file\_system\_to\_url

Filters the URL in URLHelper::file_system_to_url

**DEPRECATED** since 2.0.0, use `timber/url_helper/file_system_to_url`

You can use this filter to alter the returned URL.
This filter is used by the WPML integration.

| Name | Type | Description |
| --- | --- | --- |
| $url | `string` | The current url |

## timber/url\_helper/get\_content\_subdir/home\_url

Filters the home URL that is used to get the path relative to the content directory.

**since** 1.3.2

| Name | Type | Description |
| --- | --- | --- |
| $home_url | `string` | The URL to use as the base for getting the content subdirectory. Default value of `home_url()`. |

## timber/URLHelper/get\_content\_subdir/home\_url

Filters the home URL that is used to get the path relative to the content directory.

**DEPRECATED** since 2.0.0, use `timber/url_helper/get_content_subdir/home_url`

## timber/url/schemes-whitelist

Filters the schemes that are excluded for double slash removal.

If an url start with one of the schemes in the whitelist,
that scheme will be excluded from the double slash removal.

**since** 1.16.0

| Name | Type | Description |
| --- | --- | --- |
| $schemes_whitelist | `array` | the schemes that are excluded for double slash removal. |

## timber/user/name

Filters the name of a user.

**since** 1.1.4

| Name | Type | Description |
| --- | --- | --- |
| $name | `string` | The name of the user. Default `display_name`. |
| $user | `\User` | The user object. |

