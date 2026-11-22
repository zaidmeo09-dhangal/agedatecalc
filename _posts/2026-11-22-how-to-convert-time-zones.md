---
layout: post
title: "How to Convert Time Zones: UTC Method and Examples"
slug: how-to-convert-time-zones
date: '2026-11-22'
last_modified_at: 2026-11-22
status: Published
author: AgeDateCalc Team
category: Time Guides
tags:
- how to convert time zones
- time zone conversion
- convert time zones
- UTC method
primary_keyword: how to convert time zones
secondary_keywords:
- time zone converter
- convert time to UTC
- time zone offset
- daylight saving time zones
meta_title: "How to Convert Time Zones: UTC Method and Examples"
meta_description: "Convert any time to UTC first, then add the destination offset. Worked examples for New York, London, Los Angeles and Berlin, plus the DST traps."
excerpt: "Convert any time to UTC first, then add the destination offset. Worked examples for New York, London, Los Angeles and Berlin, plus the DST traps."
featured_image: /assets/images/how-to-convert-time-zones.webp
image_alt: Four wall clocks showing the time in London, New York, Tokyo and Moscow
read_time: 5 min read
faqs_raw: 'What is the formula to convert time zones?

  Target time equals source time minus the source offset plus the destination offset. Convert the source time to UTC first, then add the destination offset.

  ---

  Do I add or subtract when converting time zones?

  Subtract the source offset to reach UTC, then add the destination offset. If the destination is ahead of UTC, the local time goes up; if it is behind UTC, the local time goes down.

  ---

  Why do some time zones use half-hour offsets?

  Because a few places set their clocks 30 or 45 minutes off the whole hour. Newfoundland is UTC-3:30, India is UTC+5:30 and Nepal is UTC+5:45, so whole-hour math gives the wrong answer there.

  ---

  What does the date line do to a conversion?

  It changes the date as well as the time. A time late in the day on one side of the line is already the next day on the other side, so always check the date, not just the clock time.

  ---

  How do I convert a time zone for a past or future date?

  Look up the offset that applied on that exact date, because daylight saving moves offsets twice a year. The IANA time zone database holds the full history of every offset change.'
permalink: /blog/how-to-convert-time-zones/
tool_url: /time-zone-converter/
tool_name: Time Zone Converter
---

<div class="prose" markdown="1">

To convert a time zone, convert the source time to UTC first, then add the destination offset: target time equals source time minus the source offset plus the destination offset. UTC is the reference every time zone is measured from, so going through UTC removes the guesswork about direction. Check any conversion yourself on our [Time Zone Converter]({{ '/time-zone-converter/' | relative_url }}), which handles daylight saving and the date change for you.

## The UTC method in 2 steps

Step 1: take the source time and subtract the source offset to get UTC. A place at UTC-5 is 5 hours behind UTC, so subtracting a negative offset adds 5 hours. Step 2: take that UTC time and add the destination offset. UTC+0 stays the same, UTC-8 loses 8 hours, and UTC+5:30 gains 5 hours and 30 minutes.

Do not skip UTC and count straight from one city to the other. That works only when you already know the gap, and the gap changes twice a year with daylight saving. Of the methods to convert time zones that guides use, the UTC method never depends on remembering a gap.

## Worked example 1: New York to London, winter

Friday, January 15, 2027, 3:00 PM in New York is 8:00 PM the same day in London. New York is on Eastern Standard Time in January, UTC-5, so 3:00 PM minus UTC-5 is 8:00 PM UTC. London is on Greenwich Mean Time, UTC+0, so that is 8:00 PM in London. The gap is 5 hours and the date does not change.

## Worked example 2: Los Angeles to Berlin

Friday, January 15, 2027, 2:00 PM in Los Angeles is 11:00 PM the same day in Berlin. Los Angeles is on Pacific Standard Time in January, UTC-8, so 2:00 PM minus UTC-8 is 10:00 PM UTC. Berlin is on Central European Time in January, UTC+1, so that is 11:00 PM in Berlin. The gap is 9 hours, and the date still does not change.

## Worked example 3: New York to London in the March gap

Saturday, March 20, 2027, 3:00 PM in New York is 7:00 PM the same day in London. Not 8:00 PM. The gap is 4 hours, not 5. The US starts daylight saving on Sunday, March 14, 2027, the second Sunday in March, and the UK and EU on Sunday, March 28, the last Sunday in March. Between those dates New York is on Eastern Daylight Time, UTC-4, while London is still on Greenwich Mean Time, UTC+0.

This two week window catches people every year: the same 3:00 PM meeting arrives at 8:00 PM in February, 7:00 PM in mid-March, then 8:00 PM again after March 28. Check the offset on the exact date, never the gap you used last month.

## The DST trap

Daylight saving moves offsets twice a year, so the gap between two cities is not fixed. The US switches on the second Sunday in March and the first Sunday in November; the UK and the EU on the last Sunday in March and the last Sunday in October. In 2027 the US is on daylight saving from March 14 to November 7, and the UK and EU from March 28 to October 31.

That mismatch creates two windows a year when the gap drops from 5 hours to 4: two weeks in spring, March 14 to March 28, 2027, and one week in autumn, October 31 to November 7, 2027. Always state the date with the time, and write the UTC offset next to it, for example 3:00 PM EDT (UTC-4). Our [When Does Daylight Saving Time End](/blog/when-does-daylight-saving-time-end/) post has the US end dates, and our [When Does Daylight Saving Time Start in 2027](/blog/when-does-daylight-saving-time-start-2027/) post has the spring start.

## Half-hour and 45-minute offsets

Not every time zone sits on a whole hour. Newfoundland is UTC-3:30, India is UTC+5:30 and Nepal is UTC+5:45, so whole-hour math fails in all three. At 12:00 PM UTC it is 8:30 AM in Newfoundland, 5:30 PM in India and 5:45 PM in Nepal.

The UTC method handles these zones the same way, because the offset is just a number you add. If a place sits on a half hour, trust the offset, not the hour.

## The date-line trap

Crossing the International Date Line changes the date as well as the time. Monday, July 20, 2026, 3:00 PM in Honolulu is Tuesday, July 21, 2026, 1:00 PM in Auckland. The clock times look close, 3:00 PM and 1:00 PM, but the real gap is 22 hours, and the two cities are on different days.

Honolulu is UTC-10 and Auckland is on New Zealand Standard Time in July, UTC+12. So 3:00 PM Monday minus UTC-10 equals 1:00 AM Tuesday UTC, plus UTC+12 equals 1:00 PM Tuesday in Auckland. After every conversion, check the date, not just the time: landing on the wrong day is worse than landing an hour off. If the date did move, the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}) counts the exact days between the two dates.

## Abbreviations that lie

Time zone abbreviations look precise and are not. New York is EST in January and EDT in July, and the offset changes with the letters, from UTC-5 to UTC-4. CST means Central Standard Time in the US, China Standard Time in China, and Cuba Standard Time in Cuba. IST means India, Irish and Israel Standard Time, so 3:00 PM IST could be three different moments.

Write the UTC offset every time, for example 3:00 PM EST (UTC-5) or 3:00 PM IST (UTC+5:30). The offset is the only part of the label that cannot be read two ways. Our [Time Zones Explained](/blog/time-zones-explained/) post lists the main abbreviations and their offsets.

## Scheduling meetings across time zones

Pick the date first, then convert everyone to UTC, then send the invite from a calendar app. The date matters because daylight saving can move the gap before the meeting happens. In January, when all three are on standard time, the window that suits New York, London and Los Angeles is 9:00 AM to 12:00 PM in New York, 2:00 PM to 5:00 PM in London and 6:00 AM to 9:00 AM in Los Angeles.

Send the invite from a calendar app, not a message, so each person sees the time in their own zone and the app moves it if daylight saving changes. Put the UTC time in the message too, for example 2:00 PM UTC. And keep the [AM/PM vs 24-Hour Clock](/blog/am-pm-vs-24-hour-clock/) difference in mind: 2:00 PM is 14:00, and a 12-hour clock with no AM or PM is a missed meeting.

## Offset table: US, UK, Canada and EU

| Place | Standard time | Daylight saving time |
|---|---|---|
| New York | EST, UTC-5 | EDT, UTC-4 |
| Chicago | CST, UTC-6 | CDT, UTC-5 |
| Denver | MST, UTC-7 | MDT, UTC-6 |
| Los Angeles | PST, UTC-8 | PDT, UTC-7 |
| Toronto | EST, UTC-5 | EDT, UTC-4 |
| London | GMT, UTC+0 | BST, UTC+1 |
| Paris | CET, UTC+1 | CEST, UTC+2 |
| Berlin | CET, UTC+1 | CEST, UTC+2 |

Standard time is winter; daylight saving is summer.

## FAQ

### What is the formula to convert time zones?

Target time equals source time minus the source offset plus the destination offset. Convert the source time to UTC first, then add the destination offset.

### Do I add or subtract when converting time zones?

Subtract the source offset to reach UTC, then add the destination offset. If the destination is ahead of UTC, the local time goes up; if it is behind UTC, the local time goes down.

### Why do some time zones use half-hour offsets?

Because a few places set their clocks 30 or 45 minutes off the whole hour. Newfoundland is UTC-3:30, India is UTC+5:30 and Nepal is UTC+5:45, so whole-hour math gives the wrong answer there.

### What does the date line do to a conversion?

It changes the date as well as the time. A time late in the day on one side of the line is already the next day on the other side, so always check the date, not just the clock time.

### How do I convert a time zone for a past or future date?

Look up the offset that applied on that exact date, because daylight saving moves offsets twice a year. The IANA time zone database holds the full history of every offset change.

Sources: [IANA Time Zone Database](https://www.iana.org/time-zones) and NIST.

</div>
