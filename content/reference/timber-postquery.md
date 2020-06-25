---
title: "Timber\\PostQuery"
menu:
  main:
    parent: "reference"
---

A PostQuery allows a user to query for a Collection of WordPress Posts.
PostCollections are used directly in Twig templates to iterate through and retrieve
meta information about the collection of posts

<!--more-->



## Overview

### Properties

| Name | Type | Description |
| --- | --- | --- |
found_posts | `int` | The amount of posts found in the query. |

---

## Class Methods

### __construct
`__construct( bool/mixed $query=false, string $post_class="\Timber\Post" )`

**returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $query | `bool/mixed` |  |
| $post_class | `string` |  |




---

### pagination
`pagination( array $prefs=array() )`

**returns:** `\Timber\Timber\Pagination` object

Set pagination for the collection. Optionally could be used to get pagination with custom preferences.

| Name | Type | Description |
| --- | --- | --- |
| $prefs | `array` |  |




---

### get_query
`get_query( )`

**returns:** `mixed` the query the user orignally passed to the pagination object



---




*This class extends \Timber\PostCollection*

*This class implements \IteratorAggregate, \Traversable, \ArrayAccess, \Serializable, \Countable*

