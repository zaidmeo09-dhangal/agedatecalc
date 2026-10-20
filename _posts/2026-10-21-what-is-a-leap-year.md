---
layout: post
title: What Is a Leap Year? Simple Rules Explained
description: Why does February sometimes have 29 days? Learn the three leap year rules, why leap years exist, and how they affect age and date calculations.
permalink: /blog/what-is-a-leap-year/
category: Date Guides
tool_url: /age-calculator/
tool_name: Age Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is a Leap Year? Simple Rules Explained",
    "author": { "@type": "Organization", "name": "AgeDateCalc" }
  }
---

<div class="prose" markdown="1">

A leap year is a year with 366 days instead of 365. The extra day, February 29, keeps our calendar aligned with Earth's orbit around the sun.

## Why leap years exist

Earth takes about 365.25 days to orbit the sun, not exactly 365. Without correction, the calendar would drift by about one day every four years. After a century, seasons would slide by nearly a month. Adding one day every four years absorbs most of that drift.

## The three leap year rules

A year is a leap year if **any** of these apply in order:

1. **Divisible by 4:** the year is a leap year (2024, 2028).
2. **Except centuries:** years divisible by 100 are NOT leap years (1900 was not, 2100 will not be).
3. **Except 400s:** years divisible by 400 ARE leap years anyway (2000 was, 2400 will be).

So 2024 was a leap year, 2026 is not, and 2000 was one despite being a century year.

## The century test: 1900 vs 2000

These two years are the classic proof that the rules must be applied in order.

**1900:** divisible by 4, so rule 1 says leap year. But 1900 is divisible by 100, so rule 2 cancels that. It is not divisible by 400, so rule 3 does not save it. **1900 was not a leap year.** Anyone who lived through February 1900 saw only 28 days.

**2000:** divisible by 4, divisible by 100, and divisible by 400. Rule 3 overrides rule 2. **2000 was a leap year**, with a February 29.

The next century year, 2100, will fail the same test 1900 failed: divisible by 100 but not by 400, so there will be no February 29 in 2100.

## What the drift looks like in numbers

Three calendar designs, three drift speeds:

- **No leap years at all:** the calendar would lose about a quarter day per year, slipping a full day every four years. After a single lifetime, the seasons would be off by nearly three weeks.
- **A leap year every four years (the old Julian system):** the average year becomes 365.25 days, very close to the real 365.2422. The leftover error is about one day every 128 years. Small, but by 1582 it had piled up to 10 days, which is why the Gregorian reform skipped straight from October 4 to October 15 that year.
- **The Gregorian system we use now:** the century rules tune the average year to 365.2425 days. The remaining drift is roughly one day every 3,000 years. For any human purpose, the calendar is now stable.

## Why it matters for calculations

Leap years change day counts between dates. Anyone calculating exact age, contract durations, or interest over multi-year spans must account for February 29. Our [Age Calculator]({{ '/age-calculator/' | relative_url }}) and [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}) handle leap years automatically with real calendar math.

## Leap day birthdays

People born on February 29 celebrate on February 28 or March 1 in non-leap years, depending on local custom. March 1 is the most common convention and the one our calculator uses.

## Leap seconds are not leap years

A leap second is a single extra second added to UTC now and then to keep atomic clocks in step with Earth's slightly irregular rotation. Since 1972, 27 leap seconds have been added, the most recent on December 31, 2016. They have nothing to do with February 29, they do not affect birthdays or anniversaries, and they are scheduled to be phased out by 2035. If you ever see "leap second" in a time article, it belongs to a different story.

## Recent and upcoming leap years

- **Recent:** 2016, 2020, 2024
- **Upcoming:** 2028, 2032, 2036
- **Skipped century ahead:** 2100 will not be a leap year

Over each 400-year cycle, the Gregorian rules produce exactly 97 leap years, which is what holds the average year at 365.2425 days.

## Related guides

- [How to Calculate Your Exact Age]({{ '/how-to-calculate-age/' | relative_url }})
- [How Many Days Are in a Year?]({{ '/how-many-days-in-a-year/' | relative_url }})

## Sources

- timeanddate.com: [leap year rules and list of leap years](https://www.timeanddate.com/date/leapyear.html)

</div>
