---
title: "Timber\\​PostArrayObject"
linktitle: "PostArrayObject"
is_reference: true
---

## Overview

*This class extends `ArrayObject`*  
*This class implements `Timber\PostCollectionInterface`, `JsonSerializable`*  

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[__construct()](#__construct)</span> | <span class="method-type"></span> | <span class="method-description">Takes an arbitrary array of WP_Posts to wrap and (lazily) translate to Timber\Post instances.</span> |

</div>


## Class Methods

### \_\_construct()

Takes an arbitrary array of WP_Posts to wrap and (lazily) translate to
Timber\Post instances.

`__construct( array $posts )`

| Name | Type | Description |
| --- | --- | --- |
| $posts | `\WP_Post[]` | an array of WP_Post objects |

---

