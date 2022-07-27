---
title: "Timber\\​Menu"
linktitle: "Menu"
is_reference: true
---

## Overview

*This class extends `Timber\CoreEntity`*  
  

### Properties

<div class="table-properties">

| Name | Type | Description |
| --- | --- | --- |
| <span class="property-name">$depth</span> | <span class="property-type">`int`</span> | <span class="property-description">The depth of the menu we are rendering</span> |
| <span class="property-name">$items</span> | <span class="property-type">`array` or `null`</span> | <span class="property-description">Array of `Timber\Menu` objects you can to iterate through.</span> |
| <span class="property-name">$id</span> | <span class="property-type">`int`</span> | <span class="property-description">The ID of the menu, corresponding to the wp_terms table.</span> |
| <span class="property-name">$ID</span> | <span class="property-type">`int`</span> | <span class="property-description">The ID of the menu, corresponding to the wp_terms table.</span> |
| <span class="property-name">$term_id</span> | <span class="property-type">`int`</span> | <span class="property-description">The ID of the menu, corresponding to the wp_terms table.</span> |
| <span class="property-name">$name</span> | <span class="property-type">`string`</span> | <span class="property-description">The name of the menu (ex: `Main Navigation`).</span> |
| <span class="property-name">$title</span> | <span class="property-type">`string`</span> | <span class="property-description">The name of the menu (ex: `Main Navigation`).</span> |
| <span class="property-name">$args</span> | <span class="property-type">`object`</span> | <span class="property-description">An object of menu args.</span> |
| <span class="property-name">$raw_args</span> | <span class="property-type">`array`</span> | <span class="property-description">The unfiltered args sent forward via the user in the __construct</span> |
| <span class="property-name">$theme_location</span> | <span class="property-type">`string`</span> | <span class="property-description">The theme location of the menu, if available.</span> |

</div>

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__construct()](#__construct)</span> | <span class="method-type"></span> | <span class="method-description">Initialize a menu.</span> |
| <span class="method-name">[find_parent_item_in_menu()](#find_parent_item_in_menu)</span> | <span class="method-type">`\Timber\MenuItem` or `null`</span> | <span class="method-description">Find a parent menu item in a set of menu items.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> A menu item. False if no parent was found.</span></span> |
| <span class="method-name">[~~get_field~~()](#get_field)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Gets a menu meta value.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The meta field value.</span></span> |
| <span class="method-name">[get_items()](#get_items)</span> | <span class="method-type">`array`</span> | <span class="method-description">Get menu items.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array of `Timber\MenuItem` objects. Empty array if no items could be found.</span></span> |

</div>


## Class Methods

### \_\_construct()

Initialize a menu.

`__construct( ?\WP_Term $term, array $args )`

| Name | Type | Description |
| --- | --- | --- |
| $slug | `int` or `string` | A menu slug, the term ID of the menu, the full name from the admin menu, the slug of the registered location or nothing. Passing nothing is good if you only have one menu. Timber will grab what it finds. |
| $args | `array` | Optional. Right now, only the `depth` is supported which says how many levels of hierarchy should be included in the menu. Default `0`, which is all levels. |

---

### find\_parent\_item\_in\_menu()

Find a parent menu item in a set of menu items.

`find_parent_item_in_menu( array $menu_items, int $parent_id )`

**Returns:** `\Timber\MenuItem|null` A menu item. False if no parent was found.

| Name | Type | Description |
| --- | --- | --- |
| $menu_items | `array` | An array of menu items. |
| $parent_id | `int` | The parent ID to look for. |

---

### ~~get\_field~~()

Gets a menu meta value.

**DEPRECATED** since 2.0.0, use `{{ menu.meta('field_name') }}` instead.

**see** [Timber\Menu::meta()](../timber-menu/#meta)

`get_field( string $field_name = null )`

**Returns:** `mixed` The meta field value.

| Name | Type | Description |
| --- | --- | --- |
| $field_name | `string` | The field name for which you want to get the value. |

---

### get\_items()

Get menu items.

Instead of using this function, you can use the `$items` property directly to get the items
for a menu.

**Returns:** `array` Array of `Timber\MenuItem` objects. Empty array if no items could be found.

**Twig**

```twig
{% for item in menu.get_items %}
    <a href="{{ item.link }}">{{ item.title }}</a>
{% endfor %}
```

---

