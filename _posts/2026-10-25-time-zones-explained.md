---
layout: post
title: Time Zones Explained - UTC, GMT, and Daylight Saving
slug: time-zones-explained
date: '2026-10-25'
last_modified_at: 2026-11-13
status: Published
author: AgeDateCalc Team
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
meta_title: Time Zones Explained - UTC, GMT and DST Guide
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

  Hawaii skips daylight saving because it sits near the equator, where daylight hours barely change across the year. Arizona skips it for a different reason: extreme summer heat. An extra hour of evening sunlight would mean more air conditioning use, not less, so Arizona stays on Mountain Standard Time (UTC-7) year round, except the Navajo Nation, which does observe DST.'
permalink: /blog/time-zones-explained/
tool_url: /time-zone-converter/
tool_name: Time Zone Converter
---

<div class="prose" markdown="1">

The world is divided into 24 main time zones, each roughly 15 degrees of longitude wide. As Earth rotates, different regions face the sun at different times, so noon in New York is morning in Los Angeles and evening in London.

## UTC: the global reference

**UTC (Coordinated Universal Time)** is the standard every time zone is measured against. Zones are written as offsets: UTC-5 (New York in winter), UTC+0 (London in winter), UTC+9 (Tokyo).

<img src="{{ '/assets/images/time-zones-explained-meridian.webp' | relative_url }}" alt="A globe with the glowing prime meridian line passing through an observatory and clock tower" width="1200" height="630" loading="lazy">

## How offsets work: a worked example

Converting between zones is just addition and subtraction through UTC.

**Example:** it is 3:00 PM in Los Angeles (UTC-8) in January. What time is it in New York?

1. Convert Los Angeles to UTC: 15:00 plus 8 hours = **11:00 PM UTC**.
2. Convert UTC to New York: in January, New York is on standard time (UTC-5), so 23:00 minus 5 hours = **6:00 PM**.

So 3 PM in Los Angeles is 6 PM the same day in New York. In July the answer shifts with daylight saving: Los Angeles moves to UTC-7 and New York to UTC-4, so the same 3 PM in Los Angeles becomes 6 PM in New York again, three hours apart either way. Same cities, different offsets, which is exactly why fixed offset tables go stale. To skip the hand math, the [Time Zone Converter]({{ '/time-zone-converter/' | relative_url }}) does the UTC steps for you.

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

Hawaii never changes its clocks. Arizona stays on Mountain Standard Time all year because of extreme summer heat, not because of its latitude: an extra hour of evening sun would mean more air conditioning use. The Navajo Nation in the northeast of the state is the exception and does observe daylight saving. So in summer, Arizona matches Pacific Daylight Time even though it never springs forward itself.

## Not every offset is a whole hour

The textbook model has 24 zones, but the real world has 38 distinct UTC offsets, because half-hour and 45-minute offsets exist alongside the whole-hour ones:

| Place | Offset | Note |
|---|---|---|
| India | UTC+5:30 | Whole country, one zone |
| Nepal | UTC+5:45 | One of only two 45-minute offsets in standard use |
| Iran | UTC+3:30 | No daylight saving |
| Chatham Islands, New Zealand | UTC+12:45 | UTC+13:45 in daylight time |
| Newfoundland, Canada | UTC-3:30 | UTC-2:30 in daylight time |
| Myanmar | UTC+6:30 | Whole country, one zone |

## One country, one clock? Not always

- **China** uses a single time zone, UTC+8, across the whole country, even though it spans five geographic zones. Solar noon in western China can fall well into the afternoon by the clock.
- **Spain** sits on the Greenwich meridian but uses Central European Time (UTC+1), so Madrid clocks run about an hour ahead of the sun.
- **Russia** spans 11 time zones, the most of any country, from Kaliningrad (UTC+2) to Kamchatka (UTC+12).

In summer, the UK switches to BST, British Summer Time (UTC+1). And when you build anything with time zones, use IANA identifiers like America/New_York or Europe/London, not fixed offsets: the identifier carries the DST rules and history, while a fixed offset goes stale twice a year.

## A short history, and why abbreviations repeat

Standard time is younger than the railways. Before the 1800s every town kept its own local solar time. In 1847 the Great Western Railway in Britain adopted one railway time across its network, and in 1883 the US railroads set four standard zones, which the public adopted within days. The International Meridian Conference of 1884 then fixed Greenwich as the prime meridian and the basis for the world time zone system.

One warning from that history: zone abbreviations repeat. CST means Central Standard Time in the US (UTC-6), China Standard Time (UTC+8), and Cuba Standard Time (UTC-5). EST is used in the US and in Australia for different offsets. Always pair an abbreviation with the place, or use the IANA identifier, and never trust a bare three-letter code.

## Daylight saving time (DST)

Many regions shift clocks forward one hour in summer to extend evening daylight, then back in winter. This means a zone's offset can change during the year: New York is UTC-5 in winter and UTC-4 in summer. Not every country observes DST, which is why conversions need [a current database](https://www.iana.org/time-zones), not just a fixed offset table.

## Daylight saving: the dates that matter

Daylight saving moves clocks forward one hour in spring and back in autumn. Two schedules cover most of the world:

- **United States:** starts the second Sunday of March, ends the first Sunday of November. In 2026, that is March 8 to November 1.
- **European Union and UK:** starts the last Sunday of March, ends the last Sunday of October. In 2026, that is March 29 to October 25.

Notice the gaps: for about three weeks each spring and one week each autumn, the US and Europe are out of sync relative to their winter difference. A standing 3 PM London / 10 AM New York meeting quietly becomes 3 PM / 11 AM during those windows. This is the single most common cause of "the meeting time changed and nobody told me."

For the full 2027 dates, the states that skip the change, and what to do before the clocks move, read [When Does Daylight Saving Time Start in 2027?]({{ '/blog/when-does-daylight-saving-time-start-2027/' | relative_url }}) and [When Does Daylight Saving Time End in 2027?]({{ '/blog/when-does-daylight-saving-time-end/' | relative_url }}).

Many tropical countries skip DST entirely, since daylight hours barely change near the equator, and some countries have abolished it after trying it. Never assume a zone observes DST; check the current rules.

<img src="{{ '/assets/images/time-zones-explained-date-line.webp' | relative_url }}" alt="A Pacific map with the zigzag international date line and two islands, one in daylight and one at night" width="1200" height="630" loading="lazy">

## The international date line

Offsets explain the hour; the date line explains the day. The International Date Line runs roughly along 180 degrees longitude through the Pacific. Cross it westbound and you gain a calendar day; cross it eastbound and you lose one.

In practice, a Monday morning flight from Tokyo to Los Angeles can land on Sunday morning, "before" it left. The line zigzags around island nations to keep each one on a single side: Samoa once skipped an entire Friday (December 30, 2011) to move west of the line and align with its trading partners.

For scheduling, the rule is simple: whenever a conversion crosses the Pacific, confirm the **date**, not just the time. Tuesday 9 AM in Sydney can easily be Monday in San Francisco.

## Practical conversion tips

1. **Always name the zone, not just the time.** "3 PM" is meaningless globally; "3 PM in New York (UTC-5 in winter, UTC-4 in summer)" is exact.
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
