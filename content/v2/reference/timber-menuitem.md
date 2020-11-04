---
title: "Timber\\​MenuItem"
linktitle: "MenuItem"
is_reference: true
---

## Overview

*This class extends `Timber\Core`*  
*This class implements `Timber\CoreInterface`, `Timber\MetaInterface`*  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $children | `array` | Array of children of a menu item. Empty if there are no child menu items. |
| $has_child_class | `bool` | Whether the menu item has a `menu-item-has-children` CSS class. |
| $classes | `array` | Array of class names. |
| $current | `bool` | Whether the menu item links to the currently displayed page. |
| $current_item_parent | `bool` | Whether the menu item refers to the parent item of the currently displayed page. |
| $current_item_ancestor | `bool` | Whether the menu item refers to an ancestor (including direct parent) of the currently displayed page. |
| $object_id | `int` or `null` | Linked object ID. |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__toString()](#__toString) | `string` | Magic method to get the label for the menu item.<br><br>*Returns:* The label for the menu item. |
| [add_child()](#add_child) |  | Add a new `Timber\MenuItem` object as a child of this menu item. |
| [children()](#children) | `array` or `bool` | Get the child menu items of a `Timber\MenuItem`.<br><br>*Returns:* Array of children of a menu item. Empty if there are no child menu items. |
| [~~external~~()](#external) | `bool` | Checks to see if the menu item is an external link.<br><br>*Returns:* Whether the link is external or not. |
| [~~get_field~~()](#get_field) | `mixed` | Gets a menu item meta value.<br><br>*Returns:* The meta field value. |
| [is_external()](#is_external) | `bool` | Checks to see if the menu item is an external link.<br><br>*Returns:* Whether the link is external or not. |
| [link()](#link) | `string` | Get the full link to a menu item.<br><br>*Returns:* A full URL, like `http://mysite.com/thing/`. |
| [master_object()](#master_object) | `mixed` | Allows dev to access the "master object" (ex: post or page) the menu item represents<br><br>*Returns:* Whatever object (Timber\Post, Timber\Term, etc.) the menu item represents. |
| [menu()](#menu) | `\Timber\Menu` | Timber Menu.<br><br>*Returns:* The `Timber\Menu` object the menu item is associated with. |
| [meta()](#meta) | `mixed` | Get a meta value of the menu item.<br><br>*Returns:* Whatever value is stored in the database. Null if no value could be found. |
| [name()](#name) | `string` | Get the label for the menu item.<br><br>*Returns:* The label for the menu item. |
| [path()](#path) | `string` | Get the relative path of the menu item’s link.<br><br>*Returns:* The path of a URL, like `/foo`. |
| [raw_meta()](#raw_meta) | `null` or `mixed` | Gets a menu item’s meta value directly from the database.<br><br>*Returns:* The meta field value. Null if no value could be found. |
| [slug()](#slug) | `string` | Get the slug for the menu item.<br><br>*Returns:* The URL-safe slug of the menu item. |
| [title()](#title) | `string` | Get the public label for the menu item.<br><br>*Returns:* The public label, like "Foo". |
| [type()](#type) | `string` | Get the type of the menu item.<br><br>*Returns:* The type of the menu item. |


## Class Methods

### name()

Get the label for the menu item.

**Returns:** `string` The label for the menu item.

---

### \_\_toString()

Magic method to get the label for the menu item.

**see** [Timber\MenuItem::name()](../timber-menuitem/#name)

**Returns:** `string` The label for the menu item.

**Twig**

```twig
<a href="{{ item.link }}">{{ item }}</a>
```

---

### slug()

Get the slug for the menu item.

**Returns:** `string` The URL-safe slug of the menu item.

**Twig**

```twig
<ul>
    {% for item in menu.items %}
        <li class="{{ item.slug }}">
            <a href="{{ item.link }}">{{ item.name }}</a>
         </li>
    {% endfor %}
</ul>
```

---

### master\_object()

Allows dev to access the "master object" (ex: post or page) the menu item represents

**Returns:** `mixed` Whatever object (Timber\Post, Timber\Term, etc.) the menu item represents.

**Twig**

```twig
<div>
    {% for item in menu.items %}
        <a href="{{ item.link }}"><img src="{{ item.master_object.thumbnail }}" /></a>
    {% endfor %}
</div>
```

---

### add\_child()

Add a new `Timber\MenuItem` object as a child of this menu item.

`add_child( \Timber\MenuItem $item )`

| Name | Type | Description |
| --- | --- | --- |
| $item | `\Timber\MenuItem` | The menu item to add. |

---

### is\_external()

Checks to see if the menu item is an external link.

If your site is `example.org`, then `google.com/whatever` is an external link. This is
helpful when you want to style external links differently or create rules for the target of a
link.

**Returns:** `bool` Whether the link is external or not.

**Twig**

```twig
<a href="{{ item.link }}" target="{{ item.is_external ? '_blank' : '_self' }}">
```

Or when you only want to add a target attribute if it is really needed:

**Twig**

```twig
<a href="{{ item.link }}" {{ item.is_external ? 'target="_blank"' }}">
```

In combination with `is_target_blank()`:

**Twig**

```twig
<a href="{{ item.link }}" {{ item.is_external or item.is_target_blank ? 'target="_blank"' }}>
```

---

### type()

Get the type of the menu item.

Depending on what is the menu item links to. Can be `post_type` for posts, pages and custom
posts, `post_type_archive` for post type archive pages, `taxonomy` for terms or `custom` for
custom links.

**since** 1.0.4 

**Returns:** `string` The type of the menu item.

---

### menu()

Timber Menu.

**since** 1.12.0 

**Returns:** `\Timber\Menu` The `Timber\Menu` object the menu item is associated with.

---

### meta()

Get a meta value of the menu item.

Plugins like Advanced Custom Fields allow you to set custom fields for menu items.
With this method you can retrieve the value of these.

`meta( string $field_name = '', array $args = array() )`

**Returns:** `mixed` Whatever value is stored in the database. Null if no value could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | Optional. The field name for which you want to get the value. If no field name is provided, this function will fetch values for all custom fields. Default empty string. |
| $args | `array` | An array of arguments for getting the meta value. Third-party integrations can use this argument to make their API arguments available in Timber. Default empty. |

**Twig**

```twig
<a class="icon-{{ item.meta('icon') }}" href="{{ item.link }}">{{ item.title }}</a>
```

---

### raw\_meta()

Gets a menu item’s meta value directly from the database.

Returns a raw meta value for a menu item that’s saved in the post meta database table. Be
aware that the value can still be filtered by plugins.

**since** 2.0.0 

`raw_meta( string $field_name = '' )`

**Returns:** `null|mixed` The meta field value. Null if no value could be found.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### ~~get\_field~~()

Gets a menu item meta value.

**DEPRECATED** since 2.0.0, use `{{ item.meta('field_name') }}` instead.

**see** [Timber\MenuItem::meta()](../timber-menuitem/#meta)

`get_field( string $field_name = null )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### children()

Get the child menu items of a `Timber\MenuItem`.

**Returns:** `array|bool` Array of children of a menu item. Empty if there are no child menu items.

**Twig**

```twig
{% for child in item.children %}
    <li class="nav-drop-item">
        <a href="{{ child.link }}">{{ child.title }}</a>
    </li>
{% endfor %}
```

---

### ~~external~~()

Checks to see if the menu item is an external link.

**DEPRECATED** since 2.0.0, use `{{ item.is_external }}`

**see** [Timber\MenuItem::is_external()](../timber-menuitem/#is_external)

**Returns:** `bool` Whether the link is external or not.

---

### link()

Get the full link to a menu item.

**Returns:** `string` A full URL, like `http://mysite.com/thing/`.

**Twig**

```twig
{% for item in menu.items %}
    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{% endfor %}
```

---

### path()

Get the relative path of the menu item’s link.

**Returns:** `string` The path of a URL, like `/foo`.

**Twig**

```twig
{% for item in menu.items %}
    <li><a href="{{ item.path }}">{{ item.title }}</a></li>
{% endfor %}
```

---

### title()

Get the public label for the menu item.

**Returns:** `string` The public label, like "Foo".

**Twig**

```twig
{% for item in menu.items %}
    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{% endfor %}
```

---

