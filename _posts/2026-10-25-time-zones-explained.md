---
layout: post
title: Time Zones Explained - UTC, GMT, and Daylight Saving
slug: time-zones-explained
date: '2026-10-25'
status: Published
author: Zaid
category: Time Guides
tags:
- time zones
- UTC
- GMT
- daylight saving
primary_keyword: time zones explained
secondary_keywords:
- UTC offsets
- international date line
meta_title: Time Zones Explained - UTC, GMT, and Daylight Saving
meta_description: What are time zones, how do UTC and GMT differ, and what is daylight saving? A plain-language guide with practical conversion tips.
excerpt: What are time zones, how do UTC and GMT differ, and what is daylight saving? A plain-language guide with practical conversion tips.
featured_image: /assets/images/time-zones-explained.webp
image_alt: A world map divided into vertical time zone bands, with clocks showing different local times in New York, London, and Tokyo
read_time: 6 min read
faqs_raw: 'How many time zones are there in the world?

  The world is divided into 24 main time zones, each roughly 15 degrees of longitude wide. Some regions use half-hour or 45-minute offsets, so the number of distinct local times is higher than 24.

  ---

  What is the difference between GMT and UTC?

  On a clock they read the same. GMT is a time zone used in the UK during winter, while UTC is the precise scientific standard that all time zones are measured against.

  ---

  How many time zones does the United States have?

  The 50 states span six main time zones: Eastern, Central, Mountain, Pacific, Alaska, and Hawaii. Most states also observe daylight saving time, so their offsets change twice a year.

  ---

  What does UTC-5 mean?

  UTC-5 means a place is five hours behind Coordinated Universal Time. New York uses UTC-5 on standard time in winter and UTC-4 on daylight time in summer.

  ---

  Why do some places not observe daylight saving time?

  Daylight saving offers little benefit near the equator, where daylight hours barely change across the year. Arizona and Hawaii stay on standard time all year for this reason.'
permalink: /blog/time-zones-explained/
tool_url: /time-zone-converter/
tool_name: Time Zone Converter
schema: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Article\",\n  \"headline\": \"Time Zones Explained - UTC, GMT, and Daylight Saving\",\n  \"author\": { \"@type\": \"Organization\", \"name\": \"AgeDateCalc\" }\n}"
---

<div class="prose" markdown="1">

The world is divided into 24 main time zones, each roughly 15 degrees of longitude wide. As Earth rotates, different regions face the sun at different times, so noon in New York is morning in Los Angeles and evening in London.

## UTC: the global reference

**UTC (Coordinated Universal Time)** is the standard every time zone is measured against. Zones are written as offsets: UTC-5 (New York in winter), UTC+0 (London in winter), UTC+9 (Tokyo).

![A globe with the glowing prime meridian line passing through an observatory and clock tower]({{ '/assets/images/time-zones-explained-meridian.webp' | relative_url }})

## How offsets work: a worked example

Converting between zones is just addition and subtraction through UTC.

**Example:** it is 3:00 PM in Los Angeles (UTC-8) in January. What time is it in New York?

1. Convert Los Angeles to UTC: 15:00 plus 8 hours = **11:00 PM UTC**.
2. Convert UTC to New York: in January, New York is on standard time (UTC-5), so 23:00 minus 5 hours = **6:00 PM**.

So 3 PM in Los Angeles is 6 PM the same day in New York. In July the answer shifts with daylight saving: Los Angeles moves to UTC-7 and New York to UTC-4, so the same 3 PM in Los Angeles becomes 6 PM in New York again, three hours apart either way. Same cities, different offsets, which is exactly why fixed offset tables go stale.

## GMT vs UTC

In everyday use they read the same on the clock. The difference: GMT is a time zone used in the UK during winter, while UTC is [the precise scientific standard](https://www.nist.gov/pml/time-and-frequency-division) behind all zones. For scheduling, treat them as interchangeable.

## US time zones and their offsets

The 50 states span [six main time zones](https://www.timeanddate.com/time/zone/usa). Each one shifts one hour earlier than the zone to its east, and most move forward one hour during daylight saving time.

| Time zone | Standard time | Daylight time |
|---|---|---|
| Eastern | EST (UTC-5) | EDT (UTC-4) |
| Central | CST (UTC-6) | CDT (UTC-5) |
| Mountain | MST (UTC-7) | MDT (UTC-6) |
| Pacific | PST (UTC-8) | PDT (UTC-7) |
| Alaska | AKST (UTC-9) | AKDT (UTC-8) |
| Hawaii | HST (UTC-10) | None (no daylight saving) |

Hawaii never changes its clocks, and Arizona stays on Mountain Standard Time all year (the Navajo Nation in the northeast of the state is the exception). So in summer, Arizona matches Pacific Daylight Time even though it never springs forward itself.

## Daylight saving time (DST)

Many regions shift clocks forward one hour in summer to extend evening daylight, then back in winter. This means a zone's offset can change during the year: New York is UTC-5 in winter and UTC-4 in summer. Not every country observes DST, which is why conversions need [a current database](https://www.iana.org/time-zones), not just a fixed offset table.

## Daylight saving: the dates that matter

Daylight saving moves clocks forward one hour in spring and back in autumn. Two schedules cover most of the world:

- **United States:** starts the second Sunday of March, ends the first Sunday of November. In 2026, that is March 8 to November 1.
- **European Union and UK:** starts the last Sunday of March, ends the last Sunday of October. In 2026, that is March 29 to October 25.

Notice the gaps: for about three weeks each spring and one week each autumn, the US and Europe are out of sync relative to their winter difference. A standing 3 PM London / 10 AM New York meeting quietly becomes 3 PM / 11 AM during those windows. This is the single most common cause of "the meeting time changed and nobody told me."

Many tropical countries skip DST entirely, since daylight hours barely change near the equator, and some countries have abolished it after trying it. Never assume a zone observes DST; check the current rules.

![A Pacific map with the zigzag international date line and two islands, one in daylight and one at night]({{ '/assets/images/time-zones-explained-date-line.webp' | relative_url }})

## The international date line

Offsets explain the hour; the date line explains the day. The International Date Line runs roughly along 180 degrees longitude through the Pacific. Cross it westbound and you gain a calendar day; cross it eastbound and you lose one.

In practice, a Monday morning flight from Tokyo to Los Angeles can land on Sunday morning, "before" it left. The line zigzags around island nations to keep each one on a single side: Samoa once skipped an entire Friday (December 30, 2011) to move west of the line and align with its trading partners.

For scheduling, the rule is simple: whenever a conversion crosses the Pacific, confirm the **date**, not just the time. Tuesday 9 AM in Sydney can easily be Monday in San Francisco.

## Practical conversion tips

1. **Always name the zone, not just the time.** "3 PM" is meaningless globally; "3 PM EST" is exact.
2. **Watch the date line.** Converting across the Pacific can land you on a different calendar day.
3. **Recheck near DST changes.** Meetings scheduled across a DST transition weekend often shift by an hour.
4. **Use a converter.** Our [Time Zone Converter]({{ '/time-zone-converter/' | relative_url }}) applies current DST rules automatically.
5. **Put the time zone in the invite title.** "Team sync, 3 PM EST / 8 PM GMT" survives forwarding and screenshots. A bare "3 PM" does not.
6. **Schedule in UTC when the group is large.** One reference time plus a converter link beats five separate conversions in a chat thread.
7. **Send calendar invites, not chat messages.** Calendar files carry time zone data, so the invite lands at the right local hour on every device automatically.
8. **Confirm the day for far-apart zones.** Anything spanning more than about 8 hours of offset can flip the calendar date. A one-line "that is Tuesday your time, right?" prevents the classic miss.

## Related guides

- [AM/PM vs 24-Hour Clock]({{ '/blog/am-pm-vs-24-hour-clock/' | relative_url }})
- [Countdown Timer]({{ '/countdown-timer/' | relative_url }}): track events across zones

</div>
