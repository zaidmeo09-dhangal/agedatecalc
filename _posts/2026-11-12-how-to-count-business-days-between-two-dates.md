---
layout: post
title: "How to Count Business Days Between Two Dates"
slug: how-to-count-business-days-between-two-dates
date: '2026-11-12'
last_modified_at: 2026-11-13
status: Published
author: AgeDateCalc Team
category: How-To Guides
tags:
- business days calculator
- count business days
- NETWORKDAYS
primary_keyword: how to calculate business days between two dates
secondary_keywords:
- business days between two dates
- count workdays between dates
- NETWORKDAYS formula
meta_title: "How to Count Business Days Between Two Dates"
meta_description: "Count business days between two dates by removing weekends and US federal holidays. Three step method, 2027 holiday list, and a NETWORKDAYS example."
excerpt: "Count business days between two dates by removing weekends and US federal holidays. Three step method, 2027 holiday list, and a NETWORKDAYS example."
featured_image: /assets/images/how-to-count-business-days-between-two-dates.webp
image_alt: A tidy office desk with a laptop, planner and calendar for planning workdays
read_time: 7 min read
faqs_raw: 'What counts as a business day?

  A business day is a weekday, Monday to Friday, that is not a US federal holiday. Saturdays and Sundays never count. The 11 US federal holidays are also removed when the holidays option is on.

  ---

  Does NETWORKDAYS count the start and end dates?

  Yes. NETWORKDAYS counts both the start date and the end date when they are weekdays. That is one more than a count that starts the day after the start date, so check which convention your tool uses before you compare answers.

  ---

  How many business days are in November 2026?

  November 2026 has 21 weekdays. Thanksgiving falls on Thursday, November 26, 2026, so removing it leaves 20 business days.

  ---

  Do state holidays count as business days?

  Only if your count includes them. The federal list covers federal offices. State holidays, company holidays, and school closures are separate, so add your own list for those.

  ---

  What is the fastest way to count business days?

  Use our Business Days Calculator. Pick the two dates, keep the US federal holidays option on, and it counts workdays, shows the calendar days, and lists the holidays it subtracted.'
permalink: /blog/how-to-count-business-days-between-two-dates/
tool_url: /business-days-calculator/
tool_name: Business Days Calculator
---

<div class="prose" markdown="1">

A business day is a weekday, Monday to Friday, that is not a US federal holiday. This guide shows how to calculate business days between two dates: count the weekdays in the range, then subtract the federal holidays that fall on weekdays. That is the whole method. To skip the hand math, the [Business Days Calculator]({{ '/business-days-calculator/' | relative_url }}) counts them for you. The mistakes come from the details: whether the start date counts, which holidays fall on weekends, and what your spreadsheet counts. This guide works through all three.

## The three step method

**Step 1: Count the calendar days.** Subtract the start date from the end date. This is the raw span, weekends included.

**Step 2: Remove the weekends.** Count only Monday to Friday inside the range. A full week always contributes exactly 5 business days, so count the full weeks first, then the leftover days one by one.

**Step 3: Subtract the federal holidays.** Remove any of the 11 US federal holidays that fall on a weekday inside the range. A holiday that falls on a Saturday or Sunday is already removed by step 2, so do not subtract it twice.

That is it. If the range has no holidays, step 3 changes nothing. If it has one, the answer drops by one.

<img src="{{ '/assets/images/how-to-count-business-days-between-two-dates-planner.webp' | relative_url }}" alt="An open desk planner with a monthly calendar grid, a pen and sticky notes" width="1200" height="630" loading="lazy">

## Business days vs calendar days

The two counts answer different questions. Calendar days measure the full span. Business days measure the working time inside it. Here is the same two week range counted both ways:

| Count | What it includes | Jan 11 to Jan 22, 2027 |
|---|---|---|
| Calendar days | Every day from start to end | 12 |
| Weekdays | Monday to Friday only | 10 |
| Business days | Weekdays minus federal holidays | 9 |

January 11, 2027 is a Monday and January 22, 2027 is a Friday. The 12 calendar days hold 10 weekdays, and one of those weekdays is Martin Luther King Jr. Day on Monday, January 18, 2027. Removing it leaves 9 business days. For payroll, contracts, and delivery estimates, the 9 is the number that matters, not the 12.

## US federal holidays in 2027

These are the 11 federal holidays under 5 U.S.C. 6103, with the dates federal offices actually close. When a holiday falls on a weekend, the observed day moves: a Saturday holiday is observed on the Friday before, and a Sunday holiday is observed on the Monday after.

| Holiday | Observed date in 2027 | Weekday |
|---|---|---|
| New Year Day | January 1 | Friday |
| Birthday of Martin Luther King, Jr. | January 18 | Monday |
| Washington Birthday (Presidents Day) | February 15 | Monday |
| Memorial Day | May 31 | Monday |
| Juneteenth National Independence Day | June 18 (observed; June 19 is a Saturday) | Friday |
| Independence Day | July 5 (observed; July 4 is a Sunday) | Monday |
| Labor Day | September 6 | Monday |
| Columbus Day | October 11 | Monday |
| Veterans Day | November 11 | Thursday |
| Thanksgiving Day | November 25 | Thursday |
| Christmas Day | December 24 (observed; December 25 is a Saturday) | Friday |

One more date belongs on a 2027 planner even though it is not a 2027 holiday: New Year Day 2028 falls on a Saturday, so it is observed on Friday, December 31, 2027. State holidays and company holidays are not on this list. If your count must include them, add them yourself.

## Excel: the NETWORKDAYS formula

In Excel or Google Sheets, NETWORKDAYS does steps 2 and 3 in one formula. Put the start date in A2 and the end date in B2:

`=NETWORKDAYS(A2, B2)`

That counts weekdays only, both endpoints included. To subtract holidays, add a list of holiday dates as the third argument:

`=NETWORKDAYS(A2, B2, holidays)`

**Worked example:** start date Monday, January 11, 2027 in A2, end date Friday, January 22, 2027 in B2, and a holiday list holding January 18, 2027. The formula returns **9**, matching the hand count above: 10 weekdays minus Martin Luther King Jr. Day.

For a month total, point the formula at the first and last day of the month. November 2026 runs from November 1 to November 30, and `=NETWORKDAYS(DATE(2026,11,1), DATE(2026,11,30), DATE(2026,11,26))` returns **20**: 21 weekdays minus Thanksgiving on November 26, 2026.

Two things to know about NETWORKDAYS. First, it counts both the start date and the end date, so it gives one more than a count that starts the day after the start date. Our [Business Days Calculator]({{ '/business-days-calculator/' | relative_url }}) counts from the day after the start date by default, so for January 11 to January 22, 2027 it gives 8, and ticking the include box gives 9. Second, NETWORKDAYS ignores the holiday list unless the cells hold real dates, so check with `=ISNUMBER()` before you trust the answer.

Two related functions cover the cases NETWORKDAYS does not. `=NETWORKDAYS.INTL(A2, B2, 1, holidays)` counts business days with a custom weekend, where 1 means Saturday and Sunday off and 11 means Sunday only. For the January 11 to January 22, 2027 example above it also returns 9. `=WORKDAY(A2, 30, holidays)` returns the date 30 business days after the start date: with January 4, 2027 in A2, it returns February 17, 2027, skipping weekends and the January 18 and February 15 holidays.

## Common mistakes

- **Counting the start date twice or not at all.** Decide the convention first. NETWORKDAYS counts both endpoints. Our calculator counts from the day after the start date by default. Mixing the two gives an answer that is off by one.
- **Subtracting a weekend holiday twice.** Juneteenth 2027 falls on Saturday, June 19, and is observed Friday, June 18. Subtract Friday, June 18 once. Do not also subtract Saturday, June 19, because Saturdays never count anyway.
- **Forgetting that the observed day moves.** Independence Day 2027 is Sunday, July 4, but the day off is Monday, July 5. Counting July 4 as the holiday misses the real day off by one.
- **Using calendar days for a deadline.** A 10 day delivery promise starting Friday, January 8, 2027 lands on Monday, January 18 if you count calendar days, but that is Martin Luther King Jr. Day, so the first real delivery day is Tuesday, January 19. Count business days for promises, calendar days for spans.
- **Assuming every employer follows the federal list.** Banks, schools, and private companies set their own holiday schedules. The federal list is the standard default, not a guarantee about your office.

## When to count business days

Payroll cutoffs, contract deadlines, shipping estimates, and notice periods all run on business days. A 30 day notice period starting Monday, January 4, 2027 is not 30 calendar days: it is 30 business days, which lands weeks later once weekends and the January 18 holiday are removed. For a plain span, like how long ago something happened, use the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}) instead, or read our guide [How to Count Days Between Two Dates]({{ '/blog/how-to-count-days-between-dates/' | relative_url }}).

<img src="{{ '/assets/images/how-to-count-business-days-between-two-dates-planning.webp' | relative_url }}" alt="A laptop and paper documents on a desk during business planning" width="1200" height="630" loading="lazy">

For time zones, a deadline set in one zone can land on a different business day in another. Our [Time Zone Converter]({{ '/time-zone-converter/' | relative_url }}) checks the local date before you count.

## Related guides

- [How to Count Days Between Two Dates]({{ '/blog/how-to-count-days-between-dates/' | relative_url }})
- [How Many Days Are in a Year?]({{ '/blog/how-many-days-in-a-year/' | relative_url }})
- [What Is a Leap Year?]({{ '/blog/what-is-a-leap-year/' | relative_url }})

</div>
