---
layout: post
title: How to Calculate Your Exact Age (Manual Method)
description: Learn how to calculate your exact age by hand. Step-by-step method with a worked example, plus how leap years and month lengths affect the result.
permalink: /how-to-calculate-age/
category: How-To Guides
tool_url: /age-calculator/
tool_name: Age Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Calculate Your Exact Age (Manual Method)",
    "author": { "@type": "Organization", "name": "AgeDateCalc" }
  }
---

<div class="prose" markdown="1">

Your exact age is the time between your date of birth and today, expressed in years, months, and days. Here is the manual method in three steps.

## Why manual age math is error-prone

Months are not equal, birthdays do not always fall on convenient days, and leap years quietly add days. That is why hand calculations go wrong: people subtract the years and stop, forget to check whether this year's birthday has passed, or divide by 30.44 and call the result exact. The three-step method below avoids all of that because it works with real calendar months instead of averages. Walk through it once to understand it, then let a calculator handle the repetition.

## Step 1: Count full years

Subtract your birth year from the current year. Then check whether your birthday has already happened this year. If it has not, subtract one more year.

**Example:** born June 15, 2000, today is October 18, 2026. 2026 minus 2000 is 26. The birthday (June 15) already passed this year, so the answer stays 26 years.

## Step 2: Count remaining months

Compare the current month with your birth month. If today's day-of-month is before your birth day, subtract one month.

Continuing the example: October minus June is 4 months. The 18th is after the 15th, so no adjustment. Result so far: 26 years, 4 months.

## Step 3: Count remaining days

Subtract your birth day from today's day. If the result is negative, borrow the number of days in the previous month.

Example: 18 minus 15 is 3 days. Final answer: **26 years, 4 months, 3 days**.

## Worked example 2: when the birthday has not happened yet

Take someone born November 25, 1990, with today as October 18, 2026.

**Years:** 2026 minus 1990 is 36, but the birthday (November 25) has not happened yet this year, so subtract one: **35 years**.

**Months:** October minus November is negative, so add 12 to get 11. Today's day (the 18th) is before the birth day (the 25th), so subtract one more: **10 months**.

**Days:** 18 minus 25 is negative, so borrow September's 30 days: 18 + 30 - 25 = **23 days**.

Final answer: **35 years, 10 months, 23 days**. Notice how this example uses every adjustment in the method: the birthday check and the day borrow. Skip either one and you are off by a full year or a full month.

## How leap years affect the math

Leap years add February 29, which shifts day counts but not the year/month logic above, because the method borrows actual month lengths. If you were born on February 29, most systems count your birthday on March 1 in non-leap years.

## Your age in other units

Years, months, and days are the friendliest format, but sometimes you need the raw total. Using the first example (June 15, 2000 to October 18, 2026):

- **Total days:** 9,621
- **Total weeks:** 1,374 (plus 3 days)
- **Total hours:** 230,904

The day count includes 6 leap days: February 29 of 2004, 2008, 2012, 2016, 2020, and 2024. February 29, 2000 does not count because it fell before the birth date. This is exactly where manual math gets tedious and where our [Age Calculator]({{ '/age-calculator/' | relative_url }}) earns its keep: it sums real calendar days, leap days included, in a fraction of a second.

## Common mistakes

- **Forgetting the birthday check:** if your birthday is later this year, you are one year younger than simple subtraction suggests.
- **Averaging month lengths:** using 30.44 days per month gives approximations, not exact calendar age.
- **Ignoring the day borrow:** when today's day is smaller than your birth day, you must borrow from the previous month.

## Edge cases worth knowing

- **Born today:** the answer is 0 years, 0 months, 0 days. Simple, but a surprising number of people still ask.
- **Future birth date:** if the date of birth is after today, the result is meaningless. Any trustworthy calculator rejects it instead of showing a negative age.
- **February 29 birthdays:** as noted above, most systems roll the birthday to March 1 in non-leap years, which keeps the year count correct.
- **Time of day:** calendar age ignores the hour you were born. Someone born at 11 PM is the same calendar age all day on their birthday.

## The fast way

Doing this by hand is good practice once, but tedious every time. Our [Age Calculator]({{ '/age-calculator/' | relative_url }}) does the full calendar math instantly, and also shows total days lived, the weekday you were born, and your next birthday countdown.

## Related guides

- [What Is a Leap Year?]({{ '/what-is-a-leap-year/' | relative_url }})
- [How to Count Days Between Two Dates]({{ '/how-to-count-days-between-dates/' | relative_url }})
- [How Many Days Are in a Year?]({{ '/how-many-days-in-a-year/' | relative_url }})

</div>
