---
layout: default
title: Time Zones Explained - UTC, GMT, and Daylight Saving
description: What are time zones, how do UTC and GMT differ, and what is daylight saving? A plain-language guide with practical conversion tips.
permalink: /time-zones-explained/
schema: |
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Time Zones Explained - UTC, GMT, and Daylight Saving",
    "author": { "@type": "Organization", "name": "AgeDateCalc" }
  }
---

<div class="prose">

<p class="meta">UTC, GMT, offsets, and daylight saving, in plain language.</p>

# Time Zones Explained

The world is divided into 24 main time zones, each roughly 15 degrees of longitude wide. As Earth rotates, different regions face the sun at different times, so noon in Karachi is morning in London and night in New York.

## UTC: the global reference

**UTC (Coordinated Universal Time)** is the standard every time zone is measured against. Zones are written as offsets: UTC+5 (Karachi), UTC+0 (London in winter), UTC-5 (New York in winter).

## GMT vs UTC

In everyday use they read the same on the clock. The difference: GMT is a time zone used in the UK during winter, while UTC is the precise scientific standard behind all zones. For scheduling, treat them as interchangeable.

## Daylight saving time (DST)

Many regions shift clocks forward one hour in summer to extend evening daylight, then back in winter. This means a zone's offset can change during the year: New York is UTC-5 in winter and UTC-4 in summer. Not every country observes DST, which is why conversions need a current database, not just a fixed offset table.

## Practical conversion tips

1. **Always name the zone, not just the time.** "3 PM" is meaningless globally; "3 PM PKT" is exact.
2. **Watch the date line.** Converting across the Pacific can land you on a different calendar day.
3. **Recheck near DST changes.** Meetings scheduled across a DST transition weekend often shift by an hour.
4. **Use a converter.** Our [Time Zone Converter](/time-zone-converter/) applies current DST rules automatically.

## Related guides

- [AM/PM vs 24-Hour Clock](/am-pm-vs-24-hour-clock/)
- [Countdown Timer](/countdown-timer/): track events across zones

</div>
