---
title: "Timber\\​DateTimeHelper"
linktitle: "DateTimeHelper"
is_reference: true
---

Helper class to work with dates and times.

<!--more-->

## Overview

### Methods

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| [wp_date()](#wp_date) | `bool` or `string` | Wrapper for wp_date(). |


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

