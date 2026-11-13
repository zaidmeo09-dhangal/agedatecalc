---
layout: post
title: How to Count Days Between Two Dates (Manual Method)
slug: how-to-count-days-between-dates
date: '2026-10-23'
last_modified_at: 2026-11-13
status: Published
author: AgeDateCalc Team
category: How-To Guides
tags:
- days between dates
- date difference
- business days
primary_keyword: how to count days between two dates
secondary_keywords:
- days between two dates calculator
- inclusive vs exclusive counting
meta_title: How to Count Days Between Two Dates - Guide
meta_description: Learn the manual method for counting days between dates, when to include the end date, and the common mistakes that throw counts off by one day.
excerpt: Learn the manual method for counting days between dates, when to include the end date, and the common mistakes that throw counts off by one day.
featured_image: /assets/images/how-to-count-days-between-dates.webp
image_alt: A desk with two calendar pages side by side and a hand marking a date with a pen, counting the days between two dates
read_time: 6 min read
faqs_raw: 'Should I count the end date when counting days between dates?

  By default, no. Most tools and conventions count the days between the two dates without including the end date, so January 1 to January 2 is 1 day. If you need both endpoints included, as with some billing or booking situations, add 1 to the result.

  ---

  How many days are there between January 1 and December 31, 2026?

  There are 364 days between January 1, 2026 and December 31, 2026 using the standard exclusive convention. That is one day short of a full year because 2026 is a common year of 365 days and the count stops one day before January 1, 2027.

  ---

  How do I count business days between two dates?

  Count only Monday through Friday and skip weekends, then subtract any public holidays that fall inside the range. Every complete week contributes exactly 5 business days, so count full weeks first and then handle the remaining days one by one.

  ---

  Does February 29 count as a day between two dates?

  Yes. Day counts use real calendar days, so if February 29 falls inside your range it adds one day. A range that crosses February in a leap year is one day longer than the same range in a common year.

  ---

  Why is my day count off by one?

  Almost always because of the inclusive versus exclusive convention. If you counted both the start and end dates, your result is exactly one higher than the standard count, which excludes the end date. Deciding the convention before you count prevents the discrepancy.'
permalink: /blog/how-to-count-days-between-dates/
tool_url: /date-difference-calculator/
tool_name: Date Difference Calculator
---

<div class="prose" markdown="1">

Subtract the start date from the end date; the answer excludes the end date unless you add 1. Counting days between dates by hand is straightforward once you know that convention. If you want the answer without the hand math, the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}) gives it instantly. Here is the method.

## The basic method

1. Write down both dates.
2. Count the remaining days in the start month after the start date.
3. Add the full months in between, using each month's actual length.
4. Add the days in the final month up to the end date.
5. Account for February 29 if a leap day falls inside the range.

**Worked example:** January 10 to March 5, 2026. January has 31 days, so 21 remain after the 10th. February 2026 has 28 days. March contributes 5. Total: 21 + 28 + 5 = 54 days.

<img src="{{ '/assets/images/how-to-count-days-between-dates-counting.webp' | relative_url }}" alt="Counting days on fingers with small calendar squares above each fingertip" width="1200" height="630" loading="lazy">

## Inclusive vs exclusive: the off-by-one trap

Most tools count **exclusive** of the end date: January 1 to January 2 is 1 day. If you need both endpoints counted (common for booking nights or project billing), add 1 to the result. Always confirm which convention your situation needs, because this single choice causes most "my count is off by one" complaints.

**Calendar example:** January 1 to January 5. Exclusive counting gives **4 days** (the 2nd, 3rd, 4th, and 5th). Inclusive counting, with both endpoints, gives **5 days**. The difference is always exactly one.

## Where the off-by-one bites hardest

- **Hotel nights:** checking in January 1 and checking out January 5 means 4 nights, not 5. Hotels count exclusive of the checkout day.
- **Project billing:** a contractor billing "January 1 through January 5" might mean 5 billable days to the client. Agree on the convention in writing before the work starts.
- **Free trials:** a "7-day trial" starting Monday usually ends Sunday at midnight, which is 7 exclusive days. Counting from the wrong endpoint is how trials "end a day early."
- **Countdowns:** "5 days until Friday" said on a Sunday is exclusive counting. Said on Monday morning, some people mean 4.

When the count matters, state the convention out loud: "4 nights" or "5 days inclusive." It takes five seconds and prevents most disputes.

<img src="{{ '/assets/images/how-to-count-days-between-dates-business.webp' | relative_url }}" alt="A bright office desk with an open weekly planner showing the five weekdays, a laptop and a coffee cup" width="1200" height="630" loading="lazy">

## Business days: skipping weekends

Deadlines usually mean business days, Monday through Friday, excluding [public holidays](https://www.opm.gov/policy-data-oversight/pay-leave/federal-holidays/). The manual shortcut: a full Monday-to-Friday week always contributes exactly 5 business days. For longer spans, count complete weeks and multiply by 5, then handle the leftover days one by one.

**Example:** Monday, March 2 to Friday, March 13, 2026. The calendar span is 11 days, but the business-day count is 10: five days in the first week (March 2 to 6) and five in the second (March 9 to 13).

Public holidays vary by country and are the usual reason business-day counts still surprise people. When a deadline is contractual, list the holidays or name the exact date instead of a day count. For the full method, with the 2027 US federal holiday list and a worked example, read [How to Count Business Days Between Two Dates]({{ '/blog/how-to-count-business-days-between-two-dates/' | relative_url }}).

## Count days in Excel or Google Sheets

Put the start date in A2 and the end date in B2:

- `=B2-A2` gives the days between the two dates, using the same exclusive convention as this guide.
- `=B2-A2+1` counts both endpoints, for billing or booking situations.
- `=NETWORKDAYS(A2, B2)` counts business days, skipping Saturdays and Sundays. Add a holiday list as a third argument, `=NETWORKDAYS(A2, B2, holidays)`, to skip public holidays too.
- `=DATEDIF(A2, B2, "d")` gives the same day count as `=B2-A2`.

Note that NETWORKDAYS counts both the start and end dates, so it is one more than the exclusive count when both are weekdays. For the March 2 to March 13, 2026 example above, NETWORKDAYS gives 10, matching the business-day count.

## A month-boundary example

Crossing from one month into the next is where hand counting usually breaks, because the month lengths change mid-count.

**Example:** January 30 to February 2, 2026. January has 31 days, so after the 30th only the 31st remains: 1 day. February contributes the 1st and the 2nd: 2 days. Total: **3 days**.

The same range in a leap year behaves differently: February 27 to March 2, 2024. February 2024 has 29 days, so the 28th and 29th remain: 2 days. March contributes 2. Total: **4 days**. One leap day, one extra day in the answer. This is why the method insists on real month lengths instead of averages.

## Leap years in the range

Check whether February 29 falls between your dates. In the example above, 2026 is not a leap year, so February contributed 28 days. For a range spanning 2024, February would contribute 29.

## Four edge cases to know

- **Month-end rollover:** one month after January 31 is February 28 in a common year (February 29 in a leap year), not March 3. Adding a month means landing on the same day number in the next month, or the last day of that month when the day does not exist.
- **The DST caveat:** a 24-hour span across a clock change is not 24 hours. From noon on Saturday, March 13, 2027 to noon on Sunday, March 14, 2027 is 23 hours, because the clocks spring forward. From noon on Saturday, November 6, 2027 to noon on Sunday, November 7, 2027 is 25 hours, because the clocks fall back. Day counts ignore this, but hour counts do not.
- **ISO weeks:** a year has 52 ISO weeks, except years that start on a Thursday, like 2026, which have 53. The extra week matters when you count weeks instead of days: 2026 has 53 ISO weeks, 2027 has 52.
- **Same date and reversed dates:** the same date twice is 0 days. If the end date comes before the start date, the answer is negative: December 20 to December 25, 2026 is 5 days, but December 25 to December 20 is minus 5 days. Swap the dates if you need a positive count.

## Worked examples

Three longer ranges, counted with the exclusive convention described above:

| Start date | End date | Days between |
|---|---|---|
| January 1, 2026 | December 31, 2026 | 364 |
| December 25, 2019 | July 4, 2026 | 2,383 |
| February 29, 2000 | February 29, 2024 | 8,766 |

The last row is a useful sanity check: 24 years at 365 days each is 8,760, and the range contains 6 leap days (2004, 2008, 2012, 2016, 2020, and 2024), which brings the total to 8,766.

## The fast way

Manual counting works, but month lengths and leap years make it error-prone. Our [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}) gives the exact answer instantly, broken into days, weeks, business days, and years/months/days, and the [Days From Today Calculator]({{ '/days-from-today-calculator/' | relative_url }}) adds or subtracts days from any date. For workdays only, with US federal holidays removed, use the [Business Days Calculator]({{ '/business-days-calculator/' | relative_url }}).

## Related guides

- [What Is a Leap Year?]({{ '/blog/what-is-a-leap-year/' | relative_url }})
- [How Many Days Are in a Year?]({{ '/blog/how-many-days-in-a-year/' | relative_url }})
- [How to Count Business Days Between Two Dates]({{ '/blog/how-to-count-business-days-between-two-dates/' | relative_url }})

</div>
