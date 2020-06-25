---
title: "Timber\\​Menu"
linktitle: "Menu"
is_reference: true
---

## Overview

*This class extends `Timber\Term`*  
  

### Properties

| Name | Type | Description |
| --- | --- | --- |
| $depth | `int` | The depth of the menu we are rendering |
| $items | `array` or `null` | Array of `Timber\Menu` objects you can to iterate through. |
| $id | `int` | The ID of the menu, corresponding to the wp_terms table. |
| $ID | `int` | The ID of the menu, corresponding to the wp_terms table. |
| $term_id | `int` | The ID of the menu, corresponding to the wp_terms table. |
| $name | `string` | The name of the menu (ex: `Main Navigation`). |
| $title | `string` | The name of the menu (ex: `Main Navigation`). |
| $options | `array` | An array of menu options. |
| $raw_options | `array` | The unfiltered options sent forward via the user in the __construct |
| $theme_location | `string` | The theme location of the menu, if available. |

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [__construct()](#__construct) |  | Initialize a menu. |
| [find_parent_item_in_menu()](#find_parent_item_in_menu) | `\Timber\MenuItem` or `bool` | Find a parent menu item in a set of menu items.<br><br>*Returns:* A menu item. False if no parent was found. |
| [get_items()](#get_items) | `array` | Get menu items.<br><br>*Returns:* Array of `Timber\MenuItem` objects. Empty array if no items could be found. |


## Class Methods

### \_\_construct()

Initialize a menu.

`__construct( int|string $slug = '', array $options = array() )`

| Name | Type | Description |
| --- | --- | --- |
| $slug | `int` or `string` | A menu slug, the term ID of the menu, the full name from the admin menu, the slug of the registered location or nothing. Passing nothing is good if you only have one menu. Timber will grab what it finds. |
| $options | `array` | Optional. An array of options. Right now, only the `depth` is supported which says how many levels of hierarchy should be included in the menu. Default `0`, which is all levels. |

---

### find\_parent\_item\_in\_menu()

Find a parent menu item in a set of menu items.

`find_parent_item_in_menu( array $menu_items, int $parent_id )`

**Returns:** `\Timber\MenuItem|bool` A menu item. False if no parent was found.

| Name | Type | Description |
| --- | --- | --- |
| $menu_items | `array` | An array of menu items. |
| $parent_id | `int` | The parent ID to look for. |

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

