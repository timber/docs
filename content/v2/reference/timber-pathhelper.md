---
title: "Timber\\​PathHelper"
linktitle: "PathHelper"
is_reference: true
---

Useful methods for working with file paths.

<!--more-->

## Overview

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [basename()](#basename) | `string` | Returns trailing name component of path. |
| [pathinfo()](#pathinfo) | `mixed` | Returns information about a file path. |


## Class Methods

### pathinfo()

Returns information about a file path.

Unicode-friendly version of PHP’s pathinfo() function.

**link** <https://www.php.net/manual/en/function.pathinfo.php>

**since** 1.11.1 

`pathinfo( string $path, int $options = PATHINFO_DIRNAME | PATHINFO_BASENAME | PATHINFO_EXTENSION | PATHINFO_FILENAME )`

**Returns:** `mixed` 

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` | The path to be parsed. |
| $options | `int` | The path part to extract. One of `PATHINFO_DIRNAME`, `PATHINFO_BASENAME`, `PATHINFO_EXTENSION` or `PATHINFO_FILENAME`. If not specified, returns all available elements. |

---

### basename()

Returns trailing name component of path.

Unicode-friendly version of the PHP basename() function.

**link** <https://www.php.net/manual/en/function.basename.php>

**since** 1.11.1 

`basename( string $path, string $suffix = '' )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $path | `string` | The path. |
| $suffix | `string` | Optional. If the name component ends in suffix, this part will also be cut off. |

---

