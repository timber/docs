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
| <span class="method-name">[time_ago()](#time_ago)</span> | <span class="method-type">`string`</span> | <span class="method-description">Returns the difference between two times in a human readable format.</span> |
| <span class="method-name">[wp_date()](#wp_date)</span> | <span class="method-type">`false` or `string`</span> | <span class="method-description">Wrapper for wp_date().</span> |

</div>


## Class Methods

### wp\_date()

Wrapper for wp_date().

**since** 2.0.0

`wp_date( null|string|false $format = null, string|int|\DateTimeInterface $date = null, null|\DateTimeZone $timezone = null )`

**Returns:** `false|string` 

| Name | Type | Description |
| --- | --- | --- |
| $format | `null` or `string` or `false` | Optional. PHP date format. Will use the `date_format` option as a default. |
| $date | `string` or `int` or `\DateTimeInterface` | A date. |
| $timezone | `null` or `\DateTimeZone` | Optional. Timezone to output result in. Defaults to timezone from site settings. |

---

### time\_ago()

Returns the difference between two times in a human readable format.

Differentiates between past and future dates.

**see** human_time_diff()

`time_ago( int|string $from, int|string $to = null, string $format_past = null, string $format_future = null )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $from | `int` or `string` | Base date as a timestamp or a date string. |
| $to | `int` or `string` | Optional. Date to calculate difference to as a timestamp or a date string. Default current time. |
| $format_past | `string` | Optional. String to use for past dates. To be used with `sprintf()`. Default `%s ago`. |
| $format_future | `string` | Optional. String to use for future dates. To be used with `sprintf()`. Default `%s from now`. |

**Twig**

```twig
{{ post.date('U')|time_ago }}
{{ post.date('Y-m-d H:i:s')|time_ago }}
{{ post.date(constant('DATE_ATOM'))|time_ago }}
```

---

