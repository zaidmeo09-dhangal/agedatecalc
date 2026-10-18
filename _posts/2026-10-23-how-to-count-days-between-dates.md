---
layout: default
title: How to Count Days Between Two Dates (Manual Method)
description: Learn the manual method for counting days between dates, when to include the end date, and the common mistakes that throw counts off by one day.
permalink: /how-to-count-days-between-dates/
schema: |
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Count Days Between Two Dates (Manual Method)",
    "author": { "@type": "Organization", "name": "AgeDateCalc" }
  }
---

<div class="prose">

<p class="meta">The manual counting method, inclusive vs exclusive counts, and off-by-one traps.</p>

# How to Count Days Between Two Dates

Counting days between dates by hand is straightforward once you know the convention. Here is the method.

## The basic method

1. Write down both dates.
2. Count the remaining days in the start month after the start date.
3. Add the full months in between, using each month's actual length.
4. Add the days in the final month up to the end date.
5. Account for February 29 if a leap day falls inside the range.

**Worked example:** January 10 to March 5, 2026. January has 31 days, so 21 remain after the 10th. February 2026 has 28 days. March contributes 5. Total: 21 + 28 + 5 = 54 days.

## Inclusive vs exclusive: the off-by-one trap

Most tools count **exclusive** of the end date: January 1 to January 2 is 1 day. If you need both endpoints counted (common for booking nights or project billing), add 1 to the result. Always confirm which convention your situation needs, because this single choice causes most "my count is off by one" complaints.

## Leap years in the range

Check whether February 29 falls between your dates. In the example above, 2026 is not a leap year, so February contributed 28 days. For a range spanning 2024, February would contribute 29.

## The fast way

Manual counting works, but month lengths and leap years make it error-prone. Our [Date Difference Calculator](/date-difference-calculator/) gives the exact answer instantly, broken into days, weeks, and years/months/days, and can also add or subtract days from any date.

## Related guides

- [What Is a Leap Year?](/what-is-a-leap-year/)
- [How Many Days Are in a Year?](/how-many-days-in-a-year/)

</div>
