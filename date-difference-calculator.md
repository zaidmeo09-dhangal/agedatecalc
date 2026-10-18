---
layout: default
title: Date Difference Calculator - Days Between Two Dates
description: Count the exact days, weeks, months, and years between any two dates, or add and subtract days from a date. Free date duration calculator, no sign-up.
permalink: /date-difference-calculator/
schema: |
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

<div class="prose">

## How to use this calculator

**Date difference mode:** pick a start date and an end date, then click Calculate Difference. You get the gap in days, weeks, months, and years.

**Add/subtract mode:** pick a starting date, enter how many days to add (or a negative number to subtract), and get the resulting date. Handy for questions like "what date is 90 days from today?"

## How the counting works

The calculator subtracts the earlier date from the later one and reports full 24-hour days between them. The count is exclusive of the end date, which is the standard convention used by most date tools. If you need an inclusive count (counting both the start and end day), add one to the result.

**Worked example:** from January 1, 2026 to October 18, 2026 is 290 days, which is 41 weeks and 3 days.

## Frequently asked questions

### How do you count days between two dates?

Subtract the earlier date from the later date. This calculator also breaks the gap into weeks, months, and years for easy reading.

### Is the end date included in the count?

By default, no. The count is exclusive of the end date. Add one day if you need both endpoints counted.

### Can I add days to a date?

Yes, use the add/subtract section. Enter a positive number to go forward or a negative number to go back.

## Related tools

- [Age Calculator](/age-calculator/): your exact age from your date of birth
- [Countdown Timer](/countdown-timer/): live countdown to any future date
- [Time Zone Converter](/time-zone-converter/): convert times across the world

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
      '<p class="result-note">From <strong>' + fmtDate(d1) + '</strong> to <strong>' + fmtDate(d2) + '</strong>.</p>';
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
  });
})();
</script>
