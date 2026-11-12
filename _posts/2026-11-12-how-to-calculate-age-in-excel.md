---
layout: post
title: "How to Calculate Age in Excel: DATEDIF Formula"
slug: how-to-calculate-age-in-excel
date: '2026-11-12'
last_modified_at: 2026-11-12
status: Published
author: AgeDateCalc Team
category: How-To Guides
tags:
- calculate age in Excel
- DATEDIF formula
- Excel age formula
primary_keyword: how to calculate age in excel
secondary_keywords:
- DATEDIF age formula
- Excel age in years months days
- age from date of birth Excel
meta_title: "How to Calculate Age in Excel: DATEDIF Formula"
meta_description: "Calculate age in Excel with DATEDIF. Full formula for years, months and days, three worked examples, and the errors that break it."
excerpt: "Calculate age in Excel with DATEDIF. Full formula for years, months and days, three worked examples, and the errors that break it."
featured_image: /assets/images/agedatecalc-og.webp
image_alt: AgeDateCalc free date and time tools, calculate age in Excel guide
read_time: 7 min read
faqs_raw: 'What is the formula to calculate age in Excel?

  Put the date of birth in A2 and the end date in B2, then use =DATEDIF(A2, B2, "Y") for complete years. For the full breakdown in years, months, and days, combine DATEDIF with EDATE as shown in this guide, because Microsoft warns against the MD unit.

  ---

  Why does DATEDIF not appear when I type it?

  DATEDIF is a compatibility function kept for older Lotus 1-2-3 workbooks. Excel supports it, but it does not appear in autocomplete or the Insert Function dialog, so type the full name by hand.

  ---

  Why do I get #VALUE! from DATEDIF?

  The birth date cell usually holds text, not a real date. Test it with =ISNUMBER(A2). If it returns FALSE, convert the text to a date with DATEVALUE or by typing it in a format Excel recognizes, such as 6/15/1990.

  ---

  Can I use DATEDIF in Google Sheets?

  Yes. Google Sheets supports DATEDIF with the same units, and unlike Excel it lists the function in its help. The formulas in this guide work in both Excel and Google Sheets.

  ---

  What is the fastest way to calculate an age?

  Use our Age Calculator. Enter the date of birth and it gives the exact age, total days lived, the weekday born, and the next birthday countdown, with no formulas to type.'
permalink: /blog/how-to-calculate-age-in-excel/
tool_url: /age-calculator/
tool_name: Age Calculator
---

<div class="prose" markdown="1">

This guide shows how to calculate age in Excel with the DATEDIF function, with three worked examples you can copy. Put the date of birth in cell A2 and the end date in cell B2, then use this formula:

`=DATEDIF(A2, B2, "Y") & " years, " & DATEDIF(A2, B2, "YM") & " months, " & (B2 - EDATE(A2, DATEDIF(A2, B2, "Y") * 12 + DATEDIF(A2, B2, "YM"))) & " days"`

That is the full answer in one line. The rest of this guide explains each piece, works through three examples with the answers checked, and covers the errors that break it. If you only need whole years, the short version is `=DATEDIF(A2, TODAY(), "Y")`, which ticks up on the birthday itself.

## How DATEDIF works

DATEDIF measures the gap between a start date and an end date and returns it in the unit you ask for. The syntax is `=DATEDIF(start_date, end_date, unit)`, and the units are:

| Unit | What it returns |
|---|---|
| "Y" | Complete years in the period |
| "M" | Complete months in the period |
| "D" | Total days in the period |
| "YM" | Complete months after the complete years are removed |
| "YD" | Days after the complete years are removed |
| "MD" | Days after the complete months are removed, do not use, see below |

DATEDIF counts only complete intervals, so it rounds down. Someone born June 15, 1990 is 36 on October 19, 2026, not 37, because the 37th birthday has not arrived yet. Replace B2 with `TODAY()` and the age updates itself every day, because `TODAY()` is volatile and recalculates with the workbook.

One warning before the examples: Microsoft warns against the "MD" unit. Its own documentation says "MD" can return a negative number, a zero, or an inaccurate result, and it recommends against using it. That is why the formula at the top does not use "MD" at all. The days part uses `B2 - EDATE(...)` instead: EDATE moves the birth date forward by the completed years and months, and subtracting that date from the end date leaves the remaining days. Every example below is checked against that method.

## Worked example 1: a full age

Birth date June 15, 1990 in A2. End date October 19, 2026 in B2.

- `=DATEDIF(A2, B2, "Y")` returns **36**, the complete years.
- `=DATEDIF(A2, B2, "YM")` returns **4**, the complete months after those years.
- `=B2 - EDATE(A2, 36 * 12 + 4)` returns **4**, the remaining days. EDATE moves June 15, 1990 forward 436 months to October 15, 2026, and October 19 minus October 15 is 4.

The full formula returns **36 years, 4 months, 4 days**. As a check, `=B2 - A2` gives **13,275** total days, which matches the same span counted day by day. June 15, 1990 was a Friday, which our [Age Calculator]({{ '/age-calculator/' | relative_url }}) also shows.

## Worked example 2: age on a specific date

DATEDIF also answers age on a chosen date, not just today. Birth date March 10, 1985 in A2. Target date January 1, 2027 in B2.

- `=DATEDIF(A2, B2, "Y")` returns **41**.
- `=DATEDIF(A2, B2, "YM")` returns **9**.
- `=B2 - EDATE(A2, 41 * 12 + 9)` returns **22**. EDATE moves March 10, 1985 forward 501 months to December 10, 2026, and January 1, 2027 minus December 10, 2026 is 22 days.

The answer is **41 years, 9 months, 22 days** on January 1, 2027, or **15,272** total days by `=B2 - A2`. Use a fixed date in B2 whenever the answer must stay the same, for example on a form or a record. Use `TODAY()` in B2 only when you want the age to keep updating. For the manual method behind these numbers, read our guide [How to Calculate Your Exact Age]({{ '/blog/how-to-calculate-age/' | relative_url }}).

## Worked example 3: a younger age

Birth date September 5, 2010 in A2. End date November 12, 2026 in B2.

- `=DATEDIF(A2, B2, "Y")` returns **16**.
- `=DATEDIF(A2, B2, "YM")` returns **2**.
- `=B2 - EDATE(A2, 16 * 12 + 2)` returns **7**. EDATE moves September 5, 2010 forward 194 months to November 5, 2026, and November 12 minus November 5 is 7.

The answer is **16 years, 2 months, 7 days**, or **5,912** total days. The same three formulas handle any birth date, so copy the pattern and change only the two date cells.

## Age in whole years only

Most forms ask for whole years, and for that you need one function call:

`=DATEDIF(A2, TODAY(), "Y")`

With June 15, 1990 in A2 and today as November 12, 2026, it returns **36**. It stays 36 until June 15, 2027, when it ticks up to 37. Do not use `=YEAR(TODAY()) - YEAR(A2)` for this. That subtraction ignores whether the birthday has happened yet this year, so it reads one year too high for anyone whose birthday is still ahead.

## Common errors and how to fix them

| Error | Cause | Fix |
|---|---|---|
| #VALUE! | The birth date cell holds text, not a real date | Test with `=ISNUMBER(A2)`. If it returns FALSE, convert the text with `DATEVALUE`, or retype the date as 6/15/1990 |
| #NUM! | The start date is later than the end date | Swap the two cells, or check that the birth date is in A2 and the later date is in B2 |
| #NAME? | A typo in the function name | DATEDIF has no autocomplete, so check the spelling letter by letter. `DATEIF` and `DATEDIFF` are not Excel functions |
| Wrong days, sometimes negative | The "MD" unit | Do not use "MD". Use the EDATE method from the formula at the top of this guide |
| Wrong year for old dates | The 1900 leap year bug | Excel intentionally treats February 29, 1900 as a real date for old compatibility reasons, so dates before March 1, 1900 are unreliable in spreadsheets. Use years only for those, or use a tool built for historical dates |
| Age never updates | A fixed date in B2 | That is by design. Put `TODAY()` in B2 if you want the age to update daily |

Two more traps: dates typed as 15/6/1990 in a US locale file are read as text or as the wrong month, because Excel expects month first, and a birth date stored with a time attached can shift the day count by one if the time crosses midnight. Strip times with `INT()` when you only need the date.

## When to use the tool instead

A spreadsheet is right when the ages live in a list, for example a roster of employees or students, and you need every row at once. A calculator is faster for a one-off age. Our [Age Calculator]({{ '/age-calculator/' | relative_url }}) also gives the total days lived, the weekday you were born, and the days until your next birthday, with a shareable link and no formulas to type. For the gap between any two dates, use the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}).

## Related guides

- [How to Calculate Your Exact Age]({{ '/blog/how-to-calculate-age/' | relative_url }})
- [How to Count Days Between Two Dates]({{ '/blog/how-to-count-days-between-dates/' | relative_url }})
- [What Is a Leap Year?]({{ '/blog/what-is-a-leap-year/' | relative_url }})

</div>
