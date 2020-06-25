---
title: "Timber\\MenuItem"
menu:
  main:
    parent: "reference"
---



<!--more-->



## Overview

### Properties

| Name | Type | Description |
| --- | --- | --- |
children | `array` | Array of children of a menu item. Empty if there are no child menu items. |
has_child_class | `bool` | Whether the menu item has a `menu-item-has-children` CSS class. |
classes | `array` | Array of class names. |
current | `bool` | Whether the menu item links to the currently displayed page. |
current_item_parent | `bool` | Whether the menu item refers to the parent item of the currently displayed page. |
current_item_ancestor | `bool` | Whether the menu item refers to an ancestor (including direct parent) of the currently displayed page. |
### Methods

| Name | Type | Returns/Description |
| --- | --- | --- |
| [__toString](#__toString) | `string` | The label for the menu item. |
| [children](#children) | `array/bool` | Array of children of a menu item. Empty if there are no child menu items. |
| [is_external](#is_external) | `bool` | Whether the link is external or not. |
| [link](#link) | `string` | A full URL, like `http://mysite.com/thing/`. |
| [master_object](#master_object) | `mixed` | Whatever object (Timber\Post, Timber\Term, etc.) the menu item represents. |
| [menu](#menu) | `\Timber\Menu` | The `Timber\Menu` object the menu item is associated with. |
| [meta](#meta) | `mixed` | Whatever value is stored in the database. |
| [name](#name) | `string` | The label for the menu item. |
| [path](#path) | `string` | The path of a URL, like `/foo`. |
| [slug](#slug) | `string` | The URL-safe slug of the menu item. |
| [<strike>thumbnail</strike>](#thumbnail) | `\Timber\Image/null` | The featured image object. |
| [title](#title) | `string` | The public label, like "Foo". |
| [type](#type) | `string` | The type of the menu item. |

---

## Class Methods

### __toString
`__toString( )`

**returns:** `string` The label for the menu item.

Magic method to get the label for the menu item.

**Twig**
```twig
<a href="{{ item.link }}">{{ item }}</a>
```

---

### add_child
`add_child( \Timber\MenuItem $item )`

**returns:** `void` 

Add a new `Timber\MenuItem` object as a child of this menu item.

| Name | Type | Description |
| --- | --- | --- |
| $item | `\Timber\MenuItem` | The menu item to add. |




---

### add_class
`add_class( string $class_name )`

**returns:** `void` 

Add a CSS class the menu item should have.

| Name | Type | Description |
| --- | --- | --- |
| $class_name | `string` | CSS class name to be added. |




---

### children
`children( )`

**returns:** `array/bool` Array of children of a menu item. Empty if there are no child menu items.

Get the child menu items of a `Timber\MenuItem`.

**Twig**
```twig
{% for child in item.children %}
    <li class="nav-drop-item">
        <a href="{{ child.link }}">{{ child.title }}</a>
    </li>
{% endfor %}
```

---

### is_external
`is_external( )`

**returns:** `bool` Whether the link is external or not.

Checks to see if the menu item is an external link.

If your site is `example.org`, then `google.com/whatever` is an external link. This is
helpful when you want to create rules for the target of a link.

**Twig**
```twig
<a href="{{ item.link }}" target="{{ item.is_external ? '_blank' : '_self' }}">
```

---

### link
`link( )`

**returns:** `string` A full URL, like `http://mysite.com/thing/`.

Get the full link to a menu item.

**Twig**
```twig
{% for item in menu.items %}
    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{% endfor %}
```

---

### master_object
`master_object( )`

**returns:** `mixed` Whatever object (Timber\Post, Timber\Term, etc.) the menu item represents.

Allows dev to access the "master object" (ex: post or page) the menu item represents

**Twig**
```twig
<div>
    {% for item in menu.items %}
        <a href="{{ item.link }}"><img src="{{ item.master_object.thumbnail }}" /></a>
    {% endfor %}
</div>
```

---

### menu
`menu( )`

**returns:** `\Timber\Menu` The `Timber\Menu` object the menu item is associated with.

Timber Menu.



---

### meta
`meta( string $key )`

**returns:** `mixed` Whatever value is stored in the database.

Get a meta value of the menu item.

Plugins like Advanced Custom Fields allow you to set custom fields for menu items. With this
method you can retrieve the value of these.

| Name | Type | Description |
| --- | --- | --- |
| $key | `string` | The meta key to get the value for. |


**Twig**
```twig
<a class="icon-{{ item.meta('icon') }}" href="{{ item.link }}">{{ item.title }}</a>
```

---

### name
`name( )`

**returns:** `string` The label for the menu item.

Get the label for the menu item.



---

### path
`path( )`

**returns:** `string` The path of a URL, like `/foo`.

Get the relative path of the menu item’s link.

**Twig**
```twig
{% for item in menu.items %}
    <li><a href="{{ item.path }}">{{ item.title }}</a></li>
{% endfor %}
```

---

### slug
`slug( )`

**returns:** `string` The URL-safe slug of the menu item.

Get the slug for the menu item.

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

### <strike>thumbnail</strike>
**DEPRECATED** since 1.5.2 to be removed in v2.0

`thumbnail( )`

**returns:** `\Timber\Image/null` The featured image object.

Get the featured image of the post associated with the menu item.

**Twig**
```twig
{% for item in menu.items %}
    <li><a href="{{ item.link }}"><img src="{{ item.thumbnail }}"/></a></li>
{% endfor %}
```

---

### title
`title( )`

**returns:** `string` The public label, like "Foo".

Get the public label for the menu item.

**Twig**
```twig
{% for item in menu.items %}
    <li><a href="{{ item.link }}">{{ item.title }}</a></li>
{% endfor %}
```

---

### type
`type( )`

**returns:** `string` The type of the menu item.

Get the type of the menu item.

Depending on what is the menu item links to. Can be `post_type` for posts, pages and custom
posts, `post_type_archive` for post type archive pages, `taxonomy` for terms or `custom` for
custom links.



---




*This class extends \Timber\Core*

*This class implements \Timber\CoreInterface*

