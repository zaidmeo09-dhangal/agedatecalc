---
layout: default
title: Time Zone Converter - Convert Time Between Zones
description: Convert any time between world time zones instantly. Enter a time, pick the source and target zones, and see the converted result. Free, no sign-up.
permalink: /time-zone-converter/
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Time Zone Converter | AgeDateCalc",
        "url": "https://agedatecalc.com/time-zone-converter/",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "publisher": {
          "@type": "Organization",
          "name": "AgeDateCalc"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
                    "@type": "Question",
                    "name": "How many hours ahead is EST compared to PST?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "EST (UTC-5) is 3 hours ahead of PST (UTC-8). The gap stays at 3 hours year-round because both zones start and end daylight saving on the same dates."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Does the time difference change during daylight saving time?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Between US zones, no. Eastern and Pacific switch clocks on the same federally mandated dates, so the 3-hour gap never moves."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What about Arizona and Hawaii, which skip daylight saving?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Arizona stays on MST (UTC-7) all year and Hawaii on HST (UTC-10) all year. Phoenix matches Los Angeles in summer but runs one hour ahead in winter."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How do I convert time zones manually?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Use UTC as a pivot: convert to UTC first, then apply the target zone's offset."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What happens during a daylight saving transition weekend?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "In spring the 2:00 AM hour does not exist; in fall the 1:00 AM hour happens twice."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How do I handle recurring meetings across daylight saving changes?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Modern calendars store recurring meetings in UTC and adjust automatically, but verify in the week after each transition."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What is the difference between UTC and GMT?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "UTC is the atomic-clock standard. GMT is now simply the name of the UK winter time zone at UTC+0."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Why was my New York to London meeting off by an hour this week?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Europe and the US end daylight saving in different weeks. From October 26 to 31, 2026 the gap is 4 hours instead of 5."
                    }
          }
  ]
      }
    ]
  }
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <h1>Time Zone <span class="accent">Converter</span></h1>
    <p class="lead">This time zone converter instantly converts any time between world time zones. Never miss a meeting across borders again.</p>
    <div class="calc-card">
      <div class="field">
        <label for="tz-datetime">Date and time <span style="font-weight:400;color:var(--muted)">(in the From time zone)</span></label>
        <input type="datetime-local" id="tz-datetime">
      </div>
      <div class="field">
        <label for="tz-from">From time zone</label>
        <select id="tz-from"></select>
      </div>
      <div class="field">
        <label for="tz-to">To time zone</label>
        <select id="tz-to"></select>
      </div>
      <button class="btn btn-primary btn-block" id="tz-btn" type="button">Convert Time</button>
      <div id="tz-result"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">Uses your browser's built-in time zone data (the IANA database), so daylight saving is always handled correctly.</p>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated October 2026.</p>

## How do I convert a time between zones?

Pick the source time zone and the time, pick the target zone, and the converter applies each zone's current UTC offset, including daylight saving. For example, 2:00 PM in New York in January becomes 11:00 AM the same day in Los Angeles, a 3-hour difference that never changes between US zones.

## How to use the converter

1. Enter the date and time you want to convert.
2. Choose the time zone that time is currently in.
3. Choose the target time zone and click **Convert Time**.
4. Copy the share link to send the exact conversion to anyone. The link reopens this time zone converter with your conversion ready.

## How to convert time zones by hand

Use UTC as a pivot. First convert your time to UTC by reversing your zone's offset, then apply the target zone's offset.

Worked example with this time zone converter's logic: 2:00 PM in California in January (PST, UTC-8) to Berlin. Add 8 hours to reach 10:00 PM UTC, then add 1 hour for Berlin (CET, UTC+1). The answer is 11:00 PM the same day. Going through UTC avoids the sign errors of direct subtraction.

## US time zones at a glance

| Zone | Standard | Daylight | DST observed |
|---|---|---|---|
| Eastern (New York) | EST, UTC-5 | EDT, UTC-4 | Yes |
| Central (Chicago) | CST, UTC-6 | CDT, UTC-5 | Yes |
| Mountain (Denver) | MST, UTC-7 | MDT, UTC-6 | Yes |
| Pacific (Los Angeles) | PST, UTC-8 | PDT, UTC-7 | Yes |
| Arizona (Phoenix) | MST, UTC-7 | MST, UTC-7 | No |
| Hawaii (Honolulu) | HST, UTC-10 | HST, UTC-10 | No |
| London | GMT, UTC+0 | BST, UTC+1 | Yes |

Phoenix stays on MST (UTC-7) year-round, so it matches Los Angeles in summer but runs one hour ahead in winter. Hawaii stays on HST (UTC-10) all year.

## The tricky week: when the US and Europe disagree

Europe and the US end daylight saving in different weeks, and the gap between them shifts for a few days twice a year. In fall 2026, Europe fell back on October 25 while the US falls back on November 1. From October 26 to 31, New York to London is 4 hours instead of the usual 5, and Los Angeles to Berlin is 8 hours instead of 9.

This mismatch is the most common cause of transatlantic scheduling errors. If a meeting feels off by an hour in late October or late March, check which side has switched.

## Best meeting hours across US time zones

The shared work window between coasts is **9:00 AM to 2:00 PM Pacific**, which is **12:00 PM to 5:00 PM Eastern**. Schedule inside it and nobody suffers.

| Pacific | Eastern | Verdict |
|---|---|---|
| 9:00 AM | 12:00 PM | Good for everyone |
| 11:00 AM | 2:00 PM | Ideal overlap |
| 2:00 PM | 5:00 PM | Fine, end of East Coast day |
| 3:00 PM | 6:00 PM | Too late for the East Coast |

And never schedule 8:00 AM Eastern unless it is an emergency: that is 5:00 AM in Los Angeles.

## Daylight saving time in the US, the legal version

US daylight saving is federal law. The Uniform Time Act of 1966 (15 U.S.C. 260a) requires clocks to spring forward at 2:00 AM on the second Sunday of March and fall back at 2:00 AM on the first Sunday of November. States may only exempt themselves to observe permanent standard time, which is what Arizona (except the Navajo Nation) and Hawaii do.

In 2026, DST runs March 8 to November 1. In 2027, it runs March 14 to November 7. For the full schedule and which states skip it, see our guide on [when daylight saving time ends in 2026]({{ '/blog/when-does-daylight-saving-time-end-2026/' | relative_url }}).

## Why time zone conversions go wrong

Three causes cover almost every bad time zone converter result:

1. **Wrong abbreviation displayed.** Many sites show "PST" during daylight months when they mean PDT. The 3-hour math still holds, but the label confuses.
2. **DST mismatch weeks.** The US and Europe switch on different dates, shifting transatlantic gaps by an hour for a few days.
3. **Fixed-offset mental math.** Memorizing "New York is 5 hours behind London" breaks during the weeks above. Always convert through the actual date.

## What noon in New York means around the world

| City | January | July | Daylight saving? |
|---|---|---|---|
| Los Angeles | 9:00 AM | 9:00 AM | Yes, same dates as NY |
| Chicago | 11:00 AM | 11:00 AM | Yes, same dates as NY |
| Denver | 10:00 AM | 10:00 AM | Yes, same dates as NY |
| London | 5:00 PM | 5:00 PM | Yes, different weeks |
| Phoenix | 10:00 AM | 9:00 AM | No |

Note how Phoenix shifts relative to New York between seasons while Los Angeles does not: that is the no-DST effect in action.

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>How many hours ahead is EST compared to PST?</summary>
<p>EST (UTC-5) is 3 hours ahead of PST (UTC-8). When it is 12:00 PM in New York, it is 9:00 AM in Los Angeles. The gap stays at 3 hours year-round because both zones start and end daylight saving time on the same dates, shifting together to EDT (UTC-4) and PDT (UTC-7).</p>
</details>
<details>
<summary>Does the time difference change during daylight saving time?</summary>
<p>Between US zones, no. Eastern and Pacific time switch clocks on the same federally mandated dates (second Sunday of March, first Sunday of November), so the 3-hour gap never moves. The zone names change (EST becomes EDT, PST becomes PDT) but the math does not. Differences only shift against places that switch on different dates, like Europe.</p>
</details>
<details>
<summary>What about Arizona and Hawaii, which skip daylight saving?</summary>
<p>Arizona (except the Navajo Nation) stays on Mountain Standard Time (UTC-7) all year, and Hawaii stays on HST (UTC-10) all year, as federal law allows. That means Phoenix matches Los Angeles in summer (both effectively UTC-7) but runs one hour ahead of it in winter. Always confirm the local time for participants in these states.</p>
</details>
<details>
<summary>How do I convert time zones manually?</summary>
<p>Use UTC as a pivot. First convert your time to UTC by reversing your zone's offset (for UTC-5, add 5 hours). Then apply the target zone's offset (for UTC+1, add 1 hour). Example: 2:00 PM in California in January (PST, UTC-8) becomes 10:00 PM UTC, then 11:00 PM in Berlin (CET, UTC+1). Going through UTC avoids the sign errors of direct subtraction.</p>
</details>
<details>
<summary>What happens during a daylight saving transition weekend?</summary>
<p>In spring, clocks jump from 2:00 AM to 3:00 AM, so that hour does not exist. In fall, clocks fall back from 2:00 AM to 1:00 AM, so that hour happens twice. Conversions for times inside those windows are ambiguous, and most calendar tools resolve them automatically. If you schedule manually, avoid the 1:00-3:00 AM window on transition Sundays.</p>
</details>
<details>
<summary>How do I handle recurring meetings across daylight saving changes?</summary>
<p>Modern calendars (Google Calendar, Outlook) store recurring meetings in UTC and redisplay them in each participant's local zone, so they adjust automatically. Still, verify the meeting time in the week after each transition, especially if times were entered manually or through a third-party scheduler, because the US and Europe change clocks in different weeks.</p>
</details>
<details>
<summary>What is the difference between UTC and GMT?</summary>
<p>UTC (Coordinated Universal Time) is the atomic-clock standard the whole world measures against, maintained from labs including NIST in Boulder, Colorado. GMT (Greenwich Mean Time) is now simply the name of the UK winter time zone at UTC+0. For everyday conversions the two are interchangeable; the distinction only matters at sub-second precision.</p>
</details>
<details>
<summary>Why was my New York to London meeting off by an hour this week?</summary>
<p>Because Europe and the US end daylight saving in different weeks. Europe fell back on October 25, 2026 while the US falls back on November 1, so from October 26 to 31 the New York-London gap is 4 hours instead of the usual 5. This mismatch happens twice a year (spring and fall) and is the most common cause of transatlantic scheduling errors.</p>
</details>
</div>

<div class="wrap">
<h2>Related tools</h2>
<div class="tools-grid tools-grid-4">
  <a class="tool-card" href="{{ '/age-calculator/' | relative_url }}">
    <div class="tool-icon">🎂</div>
    <h3>Age Calculator</h3>
    <p>Your exact age in years, months, and days.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/date-difference-calculator/' | relative_url }}">
    <div class="tool-icon">📅</div>
    <h3>Date Difference Calculator</h3>
    <p>Days, weeks, months between any two dates.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/countdown-timer/' | relative_url }}">
    <div class="tool-icon">⏳</div>
    <h3>Countdown Timer</h3>
    <p>Live countdown to any future date and time.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/stopwatch/' | relative_url }}">
    <div class="tool-icon">⏱️</div>
    <h3>Stopwatch</h3>
    <p>Online stopwatch with lap times.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
</div>
</div>

<script>
(function(){
  "use strict";
  var zones = [
    ["UTC", "UTC"],
    ["New York (EST/EDT)", "America/New_York"],
    ["Chicago (CST/CDT)", "America/Chicago"],
    ["Denver (MST/MDT)", "America/Denver"],
    ["Los Angeles (PST/PDT)", "America/Los_Angeles"],
    ["Phoenix (MST, no DST)", "America/Phoenix"],
    ["Toronto (EST/EDT)", "America/Toronto"],
    ["Sao Paulo (BRT)", "America/Sao_Paulo"],
    ["London (GMT/BST)", "Europe/London"],
    ["Paris (CET/CEST)", "Europe/Paris"],
    ["Berlin (CET/CEST)", "Europe/Berlin"],
    ["Moscow (MSK)", "Europe/Moscow"],
    ["Dubai (GST)", "Asia/Dubai"],
    ["Mumbai (IST)", "Asia/Kolkata"],
    ["Singapore (SGT)", "Asia/Singapore"],
    ["Tokyo (JST)", "Asia/Tokyo"],
    ["Sydney (AEDT/AEST)", "Australia/Sydney"]
  ];

  var fromSel = document.getElementById("tz-from");
  var toSel = document.getElementById("tz-to");
  zones.forEach(function(z, i){
    var o1 = document.createElement("option"); o1.value = z[1]; o1.textContent = z[0]; fromSel.appendChild(o1);
    var o2 = document.createElement("option"); o2.value = z[1]; o2.textContent = z[0]; toSel.appendChild(o2);
  });
  fromSel.selectedIndex = 1; // New York default
  toSel.selectedIndex = 8; // London default

  // Pre-fill with current local time
  (function(){
    var n = new Date(); n.setMinutes(n.getMinutes() - n.getTimezoneOffset());
    document.getElementById("tz-datetime").value = n.toISOString().slice(0, 16);
  })();

  function convertInZone(date, tz){
    return date.toLocaleString("en-US", {
      timeZone: tz, weekday: "long", year: "numeric", month: "long",
      day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true
    });
  }

  /* Offset of a zone (minutes) at a given instant, via Intl */
  function zoneOffsetMinutes(tz, date){
    var dtf = new Intl.DateTimeFormat("en-US", {
      timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
    });
    var parts = {};
    dtf.formatToParts(date).forEach(function(p){ parts[p.type] = p.value; });
    var asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, (+parts.hour) % 24, +parts.minute, +parts.second);
    return (asUtc - date.getTime()) / 60000;
  }

  /* Interpret wall-clock components as being IN the given zone -> UTC instant */
  function wallInZoneToUtc(y, mo, d, h, mi, tz){
    var guess = Date.UTC(y, mo - 1, d, h, mi);
    var off = zoneOffsetMinutes(tz, new Date(guess));
    var utc = guess - off * 60000;
    /* second pass for DST-edge correctness */
    var off2 = zoneOffsetMinutes(tz, new Date(utc));
    if(off2 !== off){ utc = guess - off2 * 60000; }
    return new Date(utc);
  }

  document.getElementById("tz-btn").addEventListener("click", function(){
    var out = document.getElementById("tz-result");
    var val = document.getElementById("tz-datetime").value;
    if(!val){ out.innerHTML = '<p class="result-note">Please pick a date and time.</p>'; return; }
    var m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(val);
    if(!m){ out.innerHTML = '<p class="result-note">Please enter a valid date and time.</p>'; return; }
    var from = fromSel.value, to = toSel.value;
    var fromName = fromSel.options[fromSel.selectedIndex].text;
    var toName = toSel.options[toSel.selectedIndex].text;
    /* The entered time is in the FROM zone, not the device zone */
    var d = wallInZoneToUtc(+m[1], +m[2], +m[3], +m[4], +m[5], from);
    if(isNaN(d.getTime())){ out.innerHTML = '<p class="result-note">Please enter a valid date and time.</p>'; return; }
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("from", from); u.searchParams.set("to", to);
      if(val){ u.searchParams.set("at", val); }
      window.history.replaceState(null, "", u.toString());
    }catch(e){}
    out.innerHTML =
      '<div class="result-box" style="margin-top:16px;text-align:left">' +
      '<p style="margin-bottom:8px"><strong>' + convertInZone(d, from) + '</strong><br><span style="color:var(--muted);font-size:.9rem">' + fromName + '</span></p>' +
      '<p style="font-size:1.4rem;text-align:center;margin:4px 0">↓</p>' +
      '<p><strong>' + convertInZone(d, to) + '</strong><br><span style="color:var(--muted);font-size:.9rem">' + toName + '</span></p>' +
      '</div>' +
      '<p class="result-note" style="margin-top:12px"><button type="button" class="btn btn-outline btn-sm" id="tz-share-btn">Copy share link</button> <span id="tz-share-msg" style="font-size:.85rem"></span></p>';
    var tzShare = document.getElementById("tz-share-btn");
    if(tzShare){
      tzShare.addEventListener("click", function(){
        var msg = document.getElementById("tz-share-msg");
        function done(t){ if(msg){ msg.textContent = t; } }
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(window.location.href).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
        }else{ done("Copy this page URL to share."); }
      });
    }
  });

  try{
    var qsp = new URLSearchParams(window.location.search);
    var qfrom = qsp.get("from"), qto = qsp.get("to"), qat = qsp.get("at");
    var validZones = zones.map(function(z){ return z[1]; });
    if(qfrom && validZones.indexOf(qfrom) !== -1){ fromSel.value = qfrom; }
    if(qto && validZones.indexOf(qto) !== -1){ toSel.value = qto; }
    if(qat && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(qat)){ document.getElementById("tz-datetime").value = qat; }
    if(qfrom || qto){ document.getElementById("tz-btn").click(); }
  }catch(e2){}
})();
</script>
