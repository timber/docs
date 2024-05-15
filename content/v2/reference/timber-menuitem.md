---
title: "Timber\\​MenuItem"
linktitle: "MenuItem"
is_reference: true
---

## Overview

*This class extends `Timber\CoreEntity`*  
*This class implements `Stringable`*  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$children</span> | <span class="property-type">`array`</span> | <span class="property-description">Array of children of a menu item. Empty if there are no child menu items.</span> |
| <span class="property-name">$classes</span> | <span class="property-type">`array`</span> | <span class="property-description">Array of class names.</span> |
| <span class="property-name">$current</span> | <span class="property-type">`bool`</span> | <span class="property-description">Whether the menu item links to the currently displayed page.</span> |
| <span class="property-name">$current_item_parent</span> | <span class="property-type">`bool`</span> | <span class="property-description">Whether the menu item refers to the parent item of the currently displayed page.</span> |
| <span class="property-name">$current_item_ancestor</span> | <span class="property-type">`bool`</span> | <span class="property-description">Whether the menu item refers to an ancestor (including direct parent) of the currently displayed page.</span> |
| <span class="property-name">$object_id</span> | <span class="property-type">`int` or `null`</span> | <span class="property-description">Linked object ID.</span> |
| <span class="property-name">$object</span> | <span class="property-type">`string`</span> | <span class="property-description">The underlying menu object type. E.g. a post type name, a taxonomy name or 'custom'.</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__toString()](#__toString)</span> | <span class="method-type">`string`</span> | <span class="method-description">Magic method to get the label for the menu item.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The label for the menu item.</span></span> |
| <span class="method-name">[add_child()](#add_child)</span> | <span class="method-type"></span> | <span class="method-description">Add a new `Timber\MenuItem` object as a child of this menu item.</span> |
| <span class="method-name">[can_edit()](#can_edit)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks whether the current user can edit the menu item.</span> |
| <span class="method-name">[children()](#children)</span> | <span class="method-type">`array` or `bool`</span> | <span class="method-description">Get the child menu items of a `Timber\MenuItem`.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array of children of a menu item. Empty if there are no child menu items.</span></span> |
| <span class="method-name">[~~external~~()](#external)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks to see if the menu item is an external link.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Whether the link is external or not.</span></span> |
| <span class="method-name">[~~get_field~~()](#get_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a menu item meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[is_external()](#is_external)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Checks to see if the menu item is an external link.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Whether the link is external or not.</span></span> |
| <span class="method-name">[link()](#link)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the full link to a menu item.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A full URL, like `https://mysite.com/thing/`.</span></span> |
| <span class="method-name">[master_object()](#master_object)</span> | <span class="method-type">`mixed` or `null`</span> | <span class="method-description">Allows dev to access the "master object" (ex: post, page, category, post type object) the menu item represents<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Whatever object (Timber\Post, Timber\Term, etc.) the menu item represents.</span></span> |
| <span class="method-name">[menu()](#menu)</span> | <span class="method-type">`\Timber\Menu`</span> | <span class="method-description">Timber Menu.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The `Menu` object the menu item is associated with.</span></span> |
| <span class="method-name">[name()](#name)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the label for the menu item.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The label for the menu item.</span></span> |
| <span class="method-name">[path()](#path)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the relative path of the menu item’s link.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The path of a URL, like `/foo`.</span></span> |
| <span class="method-name">[slug()](#slug)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the slug for the menu item.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The URL-safe slug of the menu item.</span></span> |
| <span class="method-name">[title()](#title)</span> | <span class="method-type">`string`</span> | <span class="method-description">Get the public label for the menu item.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The public label, like "Foo".</span></span> |

</div>


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

Allows dev to access the "master object" (ex: post, page, category, post type object) the menu item represents

**Returns:** `mixed|null` Whatever object (Timber\Post, Timber\Term, etc.) the menu item represents.

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
<a href="{{ item.link }}" {{ item.is_external ? 'target="_blank"' }}>
```

In combination with `is_target_blank()`:

**Twig**

```twig
<a href="{{ item.link }}" {{ item.is_external or item.is_target_blank ? 'target="_blank"' }}>
```

---

### menu()

Timber Menu.

**since** 1.12.0

**Returns:** `\Timber\Menu` The `Menu` object the menu item is associated with.

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

**Returns:** `string` A full URL, like `https://mysite.com/thing/`.

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

### can\_edit()

Checks whether the current user can edit the menu item.

**since** 2.0.0

**Returns:** `bool` 

---

