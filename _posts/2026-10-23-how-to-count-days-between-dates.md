---
layout: post
title: How to Count Days Between Two Dates (Manual Method)
description: Learn the manual method for counting days between dates, when to include the end date, and the common mistakes that throw counts off by one day.
permalink: /how-to-count-days-between-dates/
category: How-To Guides
tool_url: /date-difference-calculator/
tool_name: Date Difference Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Count Days Between Two Dates (Manual Method)",
    "author": { "@type": "Organization", "name": "AgeDateCalc" }
  }
---

<div class="prose" markdown="1">

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

**Calendar example:** January 1 to January 5. Exclusive counting gives **4 days** (the 2nd, 3rd, 4th, and 5th). Inclusive counting, with both endpoints, gives **5 days**. The difference is always exactly one.

## Where the off-by-one bites hardest

- **Hotel nights:** checking in January 1 and checking out January 5 means 4 nights, not 5. Hotels count exclusive of the checkout day.
- **Project billing:** a contractor billing "January 1 through January 5" might mean 5 billable days to the client. Agree on the convention in writing before the work starts.
- **Free trials:** a "7-day trial" starting Monday usually ends Sunday at midnight, which is 7 exclusive days. Counting from the wrong endpoint is how trials "end a day early."
- **Countdowns:** "5 days until Friday" said on a Sunday is exclusive counting. Said on Monday morning, some people mean 4.

When the count matters, state the convention out loud: "4 nights" or "5 days inclusive." It takes five seconds and prevents most disputes.

## Business days: skipping weekends

Deadlines usually mean business days, Monday through Friday, excluding public holidays. The manual shortcut: a full Monday-to-Friday week always contributes exactly 5 business days. For longer spans, count complete weeks and multiply by 5, then handle the leftover days one by one.

**Example:** Monday, March 2 to Friday, March 13, 2026. The calendar span is 11 days, but the business-day count is 10: five days in the first week (March 2 to 6) and five in the second (March 9 to 13).

Public holidays vary by country and are the usual reason business-day counts still surprise people. When a deadline is contractual, list the holidays or name the exact date instead of a day count.

## A month-boundary example

Crossing from one month into the next is where hand counting usually breaks, because the month lengths change mid-count.

**Example:** January 30 to February 2, 2026. January has 31 days, so after the 30th only the 31st remains: 1 day. February contributes the 1st and the 2nd: 2 days. Total: **3 days**.

The same range in a leap year behaves differently: February 27 to March 2, 2024. February 2024 has 29 days, so the 28th and 29th remain: 2 days. March contributes 2. Total: **4 days**. One leap day, one extra day in the answer. This is why the method insists on real month lengths instead of averages.

## Leap years in the range

Check whether February 29 falls between your dates. In the example above, 2026 is not a leap year, so February contributed 28 days. For a range spanning 2024, February would contribute 29.

## The fast way

Manual counting works, but month lengths and leap years make it error-prone. Our [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}) gives the exact answer instantly, broken into days, weeks, and years/months/days, and can also add or subtract days from any date.

## Related guides

- [What Is a Leap Year?]({{ '/what-is-a-leap-year/' | relative_url }})
- [How Many Days Are in a Year?]({{ '/how-many-days-in-a-year/' | relative_url }})

</div>
