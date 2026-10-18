---
layout: default
title: Date Difference Calculator - Days Between Two Dates
description: Count the exact days, weeks, months, and years between any two dates, or add and subtract days from a date. Free date duration calculator, no sign-up.
permalink: /date-difference-calculator/
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Date Difference Calculator | AgeDateCalc",
        "url": "https://agedatecalc.com/date-difference-calculator/",
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
            "name": "How do you count days between two dates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Subtract the earlier date from the later date. The result is the number of full 24-hour days between them. This calculator also breaks the gap into weeks, months, and years."
            }
          },
          {
            "@type": "Question",
            "name": "Is the end date included in the count?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By default the count is exclusive of the end date, which is the standard convention. Add one day if you need an inclusive count."
            }
          },
          {
            "@type": "Question",
            "name": "Can I add days to a date?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Use the add/subtract mode below: pick a start date, enter a number of days, and get the resulting date."
            }
          }
        ]
      }
    ]
  }
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <h1>Date Difference <span class="accent">Calculator</span></h1>
    <p class="lead">Find the exact time between any two dates, or add and subtract days from a date.</p>
    <div class="calc-card">
      <div class="field">
        <label for="dd-start">Start date</label>
        <input type="date" id="dd-start">
      </div>
      <div class="field">
        <label for="dd-end">End date</label>
        <input type="date" id="dd-end">
      </div>
      <button class="btn btn-primary btn-block" id="dd-btn" type="button">Calculate Difference</button>
      <div id="dd-result"></div>
      <hr style="border:0;border-top:1px solid var(--border);margin:24px 0">
      <h2 style="font-size:1.15rem;margin-bottom:12px">Add or subtract days</h2>
      <div class="field">
        <label for="dd-base">Start from</label>
        <input type="date" id="dd-base">
      </div>
      <div class="field">
        <label for="dd-days">Days (use a negative number to subtract)</label>
        <input type="number" id="dd-days" placeholder="e.g. 90 or -30">
      </div>
      <button class="btn btn-outline btn-block" id="dd-add-btn" type="button">Calculate New Date</button>
      <div id="dd-add-result"></div>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated October 2026.</p>

## How to use this calculator

**Date difference mode:** pick a start date and an end date, then click Calculate Difference. You get the gap in days, weeks, months, and years.

**Add/subtract mode:** pick a starting date, enter how many days to add (or a negative number to subtract), and get the resulting date. Handy for questions like "what date is 90 days from today?"

## How the counting works

The calculator subtracts the earlier date from the later one and reports full 24-hour days between them. The count is exclusive of the end date, which is the standard convention used by most date tools. If you need an inclusive count (counting both the start and end day), add one to the result.

**Worked example:** from January 1, 2026 to October 18, 2026 is 290 days, which is 41 weeks and 3 days.

## Inclusive vs exclusive: the one-day trap

The calculator counts exclusive of the end date: January 1 to January 2 is 1 day. This is the standard convention in most date tools.

When does it bite? Whenever you count calendar days touched rather than gaps:

- A hotel stay from Friday to Sunday is 2 nights but touches 3 calendar days.
- A "7-day challenge" starting Monday ends Sunday: the gap is 6 days, but the challenge covers 7.
- A plan for "5 working days starting Monday" means Monday through Friday inclusive.

Rule of thumb: if you are measuring a gap, use the result as is. If you are counting days you will be somewhere or doing something, add 1.

## Add and subtract mode, explained

The second mode answers "what date is X days from here?" Enter a positive number to go forward, a negative number to go back:

- 90 days from October 18, 2026 is January 16, 2027 (a Saturday).
- 30 days from October 18, 2026 is November 17, 2026.
- 45 days before October 18, 2026 is September 3, 2026.

This is the mode people reach for with searches like "90 days from today" or "30 days from today". Month and year boundaries, including leap years, are handled automatically.

## Where day counts actually get used

- **Project deadlines:** a contract signed October 18 with "delivery in 45 days" lands on December 2, 2026. Checking that in the calculator takes ten seconds and prevents an embarrassing miss.
- **Anniversaries:** days since a wedding, a company founding, or any milestone. Round numbers like 100 days or 1,000 days make good excuses to celebrate.
- **Pregnancy:** the standard estimate is 280 days (40 weeks) from the first day of the last period. Counted from January 1, 2026, that gives an estimated due date of October 8, 2026.
- **Trials and subscriptions:** a 90-day free trial started October 18, 2026 runs out on January 16, 2027. Set a reminder a few days earlier, not on the day.
- **Travel gaps:** days between an outbound and a return flight, or between connecting trips when planning visas.

## Off-by-one traps to avoid

- **Counting the start day twice** when chaining two periods back to back.
- **Forgetting month lengths:** "one month from January 31" is not a fixed number of days. The calculator resolves it against the real calendar.
- **Leap years:** any period crossing February 2024 includes a 29th that 2025 and 2026 do not have.
- **Times in different zones:** this tool counts whole calendar days. If your dates come with times in different time zones, convert them first with the [Time Zone Converter]({{ '/time-zone-converter/' | relative_url }}), then count the days.

## US federal holidays 2026 and 2027

Business-day math lives or dies on the holiday list. These are the US federal holidays under 5 U.S.C. 6103. When a holiday falls on a weekend, federal offices observe it on the nearest weekday (Friday for Saturday, Monday for Sunday), which is the date most US employers actually close.

### 2026 federal holidays

| Holiday | Date | Observed |
|---|---|---|
| New Year's Day | Thursday, January 1 | Jan 1 |
| Martin Luther King Jr. Day | Monday, January 19 | Jan 19 |
| Presidents' Day | Monday, February 16 | Feb 16 |
| Memorial Day | Monday, May 25 | May 25 |
| Juneteenth | Friday, June 19 | Jun 19 |
| Independence Day | Saturday, July 4 | Friday, July 3 |
| Labor Day | Monday, September 7 | Sep 7 |
| Columbus Day | Monday, October 12 | Oct 12 |
| Veterans Day | Wednesday, November 11 | Nov 11 |
| Thanksgiving | Thursday, November 26 | Nov 26 |
| Christmas Day | Friday, December 25 | Dec 25 |

### 2027 federal holidays

| Holiday | Date | Observed |
|---|---|---|
| New Year's Day | Friday, January 1 | Jan 1 |
| Martin Luther King Jr. Day | Monday, January 18 | Jan 18 |
| Presidents' Day | Monday, February 15 | Feb 15 |
| Memorial Day | Monday, May 31 | May 31 |
| Juneteenth | Saturday, June 19 | Friday, June 18 |
| Independence Day | Sunday, July 4 | Monday, July 5 |
| Labor Day | Monday, September 6 | Sep 6 |
| Columbus Day | Monday, October 11 | Oct 11 |
| Veterans Day | Thursday, November 11 | Nov 11 |
| Thanksgiving | Thursday, November 25 | Nov 25 |
| Christmas Day | Saturday, December 25 | Friday, December 24 |

**Business days shortcut:** count the weekdays in your range with the calculator, then subtract the observed holidays that fall inside it. Example: a project running Monday, November 23 to Friday, December 4, 2026 spans 10 weekdays, minus Thanksgiving (Nov 26), giving 9 business days.

**Sources:** holiday dates and observed-date rules follow the US Office of Personnel Management (OPM.gov) federal holiday schedule and 5 U.S.C. 6103.

## Frequently asked questions

### How do you count days between two dates?

Subtract the earlier date from the later date. This calculator also breaks the gap into weeks, months, and years for easy reading.

### Is the end date included in the count?

By default, no. The count is exclusive of the end date. Add one day if you need both endpoints counted.

### Can I add days to a date?

Yes, use the add/subtract section. Enter a positive number to go forward or a negative number to go back.

</div>

<h2 style="margin-top:8px">Related tools</h2>
<div class="tools-grid">
  <a class="tool-card" href="{{ '/age-calculator/' | relative_url }}">
    <div class="tool-icon">🎂</div>
    <h3>Age Calculator</h3>
    <p>Your exact age in years, months, and days.</p>
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
  <a class="tool-card" href="{{ '/time-zone-converter/' | relative_url }}">
    <div class="tool-icon">🌍</div>
    <h3>Time Zone Converter</h3>
    <p>Convert times across world time zones.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
</div>

<script>
(function(){
  "use strict";
  var DAY = 86400000;

  function fmtDate(d){
    return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }

  document.getElementById("dd-btn").addEventListener("click", function(){
    var out = document.getElementById("dd-result");
    var s = document.getElementById("dd-start").value;
    var e = document.getElementById("dd-end").value;
    if(!s || !e){ out.innerHTML = '<p class="result-note">Please pick both dates.</p>'; return; }
    var d1 = new Date(s + "T00:00:00"), d2 = new Date(e + "T00:00:00");
    if(isNaN(d1) || isNaN(d2)){ out.innerHTML = '<p class="result-note">Please enter valid dates.</p>'; return; }
    if(d2 < d1){ var t = d1; d1 = d2; d2 = t; }

    var days = Math.round((d2 - d1) / DAY);
    var weeks = Math.floor(days / 7), remDays = days % 7;

    var y = d2.getFullYear() - d1.getFullYear();
    var mo = d2.getMonth() - d1.getMonth();
    var dd = d2.getDate() - d1.getDate();
    if(dd < 0){ mo -= 1; dd += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate(); }
    if(mo < 0){ y -= 1; mo += 12; }

    out.innerHTML =
      '<div class="result-grid">' +
      '<div class="result-box"><span class="num">' + days.toLocaleString() + '</span><span class="lbl">Days</span></div>' +
      '<div class="result-box"><span class="num">' + weeks + 'w ' + remDays + 'd</span><span class="lbl">Weeks</span></div>' +
      '<div class="result-box"><span class="num">' + y + 'y ' + mo + 'm ' + dd + 'd</span><span class="lbl">Years / months / days</span></div>' +
      '</div>' +
      '<p class="result-note">From <strong>' + fmtDate(d1) + '</strong> to <strong>' + fmtDate(d2) + '</strong>.</p>' +
      '<p class="result-note"><button type="button" class="btn btn-outline btn-sm" id="dd-share-btn">Copy share link</button> <span id="dd-share-msg" style="font-size:.85rem"></span></p>';
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("from", s); u.searchParams.set("to", e);
      u.searchParams.delete("base"); u.searchParams.delete("days");
      window.history.replaceState(null, "", u.toString());
    }catch(e2){}
    var dshare = document.getElementById("dd-share-btn");
    if(dshare){
      dshare.addEventListener("click", function(){
        var msg = document.getElementById("dd-share-msg");
        function done(t){ if(msg){ msg.textContent = t; } }
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(window.location.href).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
        }else{ done("Copy this page URL to share."); }
      });
    }
  });

  document.getElementById("dd-add-btn").addEventListener("click", function(){
    var out = document.getElementById("dd-add-result");
    var b = document.getElementById("dd-base").value;
    var n = parseInt(document.getElementById("dd-days").value, 10);
    if(!b || isNaN(n)){ out.innerHTML = '<p class="result-note">Please pick a date and enter a number of days.</p>'; return; }
    var d = new Date(b + "T00:00:00");
    if(isNaN(d)){ out.innerHTML = '<p class="result-note">Please enter a valid date.</p>'; return; }
    d.setDate(d.getDate() + n);
    out.innerHTML = '<p class="result-note">Result: <strong>' + fmtDate(d) + '</strong></p>';
    try{
      var u2 = new URL(window.location.href);
      u2.searchParams.set("base", b); u2.searchParams.set("days", String(n));
      u2.searchParams.delete("from"); u2.searchParams.delete("to");
      window.history.replaceState(null, "", u2.toString());
    }catch(e3){}
  });

  try{
    var qp = new URLSearchParams(window.location.search);
    var qfrom = qp.get("from"), qto = qp.get("to");
    var qbase = qp.get("base"), qdays = qp.get("days");
    var dateRe = /^\d{4}-\d{2}-\d{2}$/;
    if(qfrom && qto && dateRe.test(qfrom) && dateRe.test(qto)){
      document.getElementById("dd-start").value = qfrom;
      document.getElementById("dd-end").value = qto;
      document.getElementById("dd-btn").click();
    }else if(qbase && qdays && dateRe.test(qbase) && /^-?\d+$/.test(qdays)){
      document.getElementById("dd-base").value = qbase;
      document.getElementById("dd-days").value = qdays;
      document.getElementById("dd-add-btn").click();
    }
  }catch(e4){}
})();
</script>
