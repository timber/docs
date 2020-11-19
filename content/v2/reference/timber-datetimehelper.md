---
title: "Timber\\​DateTimeHelper"
linktitle: "DateTimeHelper"
is_reference: true
---

Helper class to work with dates and times.

<!--more-->

## Overview

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[wp_date()](#wp_date)</span> | <span class="method-type">`bool` or `string`</span> | <span class="method-description">Wrapper for wp_date().</span> |

</div>


## Class Methods

### wp\_date()

Wrapper for wp_date().

**since** 2.0.0 

`wp_date( null|string|bool $format = null, string|int|\DateTimeInterface $date = null, null|\DateTimeZone $timezone = null )`

**Returns:** `bool|string` 

| Name | Type | Description |
| --- | --- | --- |
| $format | `null` or `string` or `bool` | Optional. PHP date format. Will use the `date_format` option as a default. |
| $date | `string` or `int` or `\DateTimeInterface` | A date. |
| $timezone | `null` or `\DateTimeZone` | Optional. Timezone to output result in. Defaults to timezone from site settings. |

---

