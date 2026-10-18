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
            "name": "How do I convert time between zones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the time, choose the zone it is in, choose the zone you want, and click Convert. The tool handles daylight saving automatically."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between UTC and GMT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For everyday use they show the same time. GMT is a time zone, while UTC is the precise time standard the world coordinates by."
            }
          },
          {
            "@type": "Question",
            "name": "Does it handle daylight saving time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Conversions use your browser's built-in time zone database, which includes current daylight saving rules."
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
    <p class="lead">Convert any time between world time zones. Never miss a meeting across borders again.</p>
    <div class="calc-card">
      <div class="field">
        <label for="tz-datetime">Date and time</label>
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
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated October 2026.</p>

## How to use the converter

1. Enter the date and time you want to convert.
2. Choose the time zone that time is currently in.
3. Choose the target time zone and click **Convert Time**.

Daylight saving is handled automatically using your browser's time zone database.

## UTC vs GMT, quickly

For everyday purposes, UTC and GMT show the same clock time. GMT is a time zone (used in the UK in winter), while UTC is the global time standard everything else is measured against. Time zones are usually written as offsets like UTC+5 or UTC-4.

## How offsets and daylight saving work

The world runs on offsets from UTC. UTC+5 means five hours ahead of the UTC baseline; UTC-4 means four hours behind it.

Daylight saving complicates the picture: many Northern Hemisphere zones jump forward one hour in summer (roughly March to October) and fall back in winter. Southern Hemisphere zones do the reverse (roughly October to April). Plenty of zones never change at all: Phoenix, Arizona (UTC-7) skips daylight saving entirely, which is exactly why it makes a good reference point.

The converter uses your browser's built-in time zone database, so the correct rules for any date, past or future, are applied automatically. You never have to look up when DST starts.

## The DST scheduling trap: a real example

Here is the trap that catches teams every year. New York and London are normally 5 hours apart. But the US starts daylight saving on March 8, 2026, while the UK follows on March 29, 2026. In the three weeks between, the gap shrinks to 4 hours.

So a standing meeting at 3:00 PM London time is 10:00 AM in New York most of the year, but 11:00 AM in New York from March 8 to March 29, 2026. If nobody recalculates, someone misses the call. Recheck recurring cross-zone meetings twice a year, around each DST switch.

## Best practices for scheduling across zones

- **Name the zone, not just the time.** "3 PM" is meaningless across zones. "3 PM London time" works.
- **Put the recipient's local time first** in the invite, with yours in parentheses.
- **Write UTC for international groups.** "14:00 UTC" cannot be misread the way "2 PM EST" can (and EST vs EDT is itself a DST trap).
- **Confirm the date, not just the time.** A 9:00 PM meeting in New York is already the next day in London. Date mix-ups cause more missed meetings than hour mix-ups.
- **For recurring meetings, expect a twice-yearly shift** and announce it, rather than letting half the team show up an hour off.
- **When in doubt, send a calendar invite.** It carries the time zone with it and renders in each recipient's local time, which beats even the clearest written time.

## What noon in New York means around the world

| City | January | July | Daylight saving? |
|---|---|---|---|
| Los Angeles | 9:00 AM | 9:00 AM | Yes |
| Chicago | 11:00 AM | 11:00 AM | Yes |
| London | 5:00 PM | 5:00 PM | Yes |
| Phoenix | 10:00 AM | 9:00 AM | No |

Notice how Phoenix slides by an hour between seasons while the others stay fixed relative to New York. That is daylight saving at work: most of the US moves together, and the zones that skip it drift.

## Quick mental-math shortcut

For a rough conversion without the tool: add New York's offset to reach UTC, then apply the target offset. 3:00 PM in New York in winter (EST, UTC-5) is 8:00 PM UTC (15 plus 5). London in July is UTC+1, so that is 9:00 PM London time. It works for any pair of zones once you know both offsets, but for exact answers, especially near DST switches, use the converter above.

## Frequently asked questions

### How do I convert time between zones?

Enter the time, pick the source zone and the target zone, then convert. The math and daylight saving rules are applied for you.

### What is the difference between UTC and GMT?

In daily use, none on the clock. GMT is a zone, UTC is the standard behind all zones.

### Does it handle daylight saving time?

Yes. Conversions use the built-in time zone database in your browser, which includes daylight saving rules.

</div>

<h2 style="margin-top:8px">Related tools</h2>
<div class="tools-grid">
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

  document.getElementById("tz-btn").addEventListener("click", function(){
    var out = document.getElementById("tz-result");
    var val = document.getElementById("tz-datetime").value;
    if(!val){ out.innerHTML = '<p class="result-note">Please pick a date and time.</p>'; return; }
    var d = new Date(val);
    if(isNaN(d.getTime())){ out.innerHTML = '<p class="result-note">Please enter a valid date and time.</p>'; return; }
    var from = fromSel.value, to = toSel.value;
    var fromName = fromSel.options[fromSel.selectedIndex].text;
    var toName = toSel.options[toSel.selectedIndex].text;
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
