---
layout: default
title: Age Calculator - Exact Age in Years, Months and Days
description: Calculate your exact age from your date of birth. See your age in years, months, days, total days lived, the weekday you were born, and countdown to your next birthday. Free, no sign-up.
permalink: /age-calculator/
schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is exact age calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Exact age is calculated by comparing your date of birth with today's date. Years are counted first, then remaining months, then remaining days, while accounting for leap years and months of different lengths."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I was born on February 29?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you were born on February 29, this calculator counts your birthday on March 1 in non-leap years, which is the most common convention."
        }
      },
      {
        "@type": "Question",
        "name": "Is my date of birth stored anywhere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The calculation happens entirely in your browser. Your date of birth is never sent to a server or stored."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my age differ across websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some calculators ignore leap years or count only completed years. This calculator uses full calendar math, so small differences of a day can appear against simpler tools."
        }
      }
    ]
  }
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <h1>Age <span class="accent">Calculator</span></h1>
    <p class="lead">Enter your date of birth to get your exact age in years, months, and days, plus total days lived and your next birthday countdown.</p>
    <div class="calc-card">
      <div class="field">
        <label for="tool-dob">Date of birth</label>
        <input type="date" id="tool-dob">
      </div>
      <button class="btn btn-primary btn-block" id="tool-calc-btn" type="button">Calculate My Age</button>
      <div id="tool-age-result"></div>
    </div>
  </div>
</section>

<div class="prose">

## How to use the Age Calculator

1. Pick your date of birth using the date picker above.
2. Click **Calculate My Age**.
3. Read your exact age, total days lived, the weekday you were born on, and how many days remain until your next birthday.

## How exact age is calculated

The calculator compares your birth date with today's date in three passes. First it counts full years, then the remaining full months, then the remaining days. Leap years and months with 28, 29, 30, or 31 days are all handled by real calendar math, not averages.

**Worked example:** someone born on June 15, 2000, checking on October 18, 2026, is 26 years, 4 months, and 3 days old. They have lived 9,621 days and were born on a Thursday.

## Born on February 29?

Leap day birthdays are handled with the most common convention: in non-leap years, your birthday is counted on March 1. Your total days lived remain exact regardless.

## Frequently asked questions

### How is exact age calculated?

By comparing your date of birth with today's date: full years first, then remaining months, then remaining days, with leap years and varying month lengths accounted for.

### What happens if I was born on February 29?

Your birthday is counted on March 1 in non-leap years. Your total days lived stay exact.

### Is my date of birth stored anywhere?

No. Everything runs in your browser. Nothing is sent to a server or saved.

### Why does my age differ across websites?

Simpler calculators ignore leap years or round months. This tool uses full calendar math, so a day of difference against basic tools is normal.

## Related tools

- [Date Difference Calculator](/date-difference-calculator/): count days between any two dates
- [Countdown Timer](/countdown-timer/): track time until an upcoming event
- [Time Zone Converter](/time-zone-converter/): convert times across the world

</div>

<script>
(function(){
  "use strict";
  function isLeap(y){ return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); }
  function bday(dob, year){
    var m = dob.getMonth(), d = dob.getDate();
    if(m === 1 && d === 29 && !isLeap(year)){ m = 2; d = 1; }
    return new Date(year, m, d);
  }
  function run(){
    var input = document.getElementById("tool-dob");
    var out = document.getElementById("tool-age-result");
    if(!input.value){ out.innerHTML = '<p class="result-note">Please pick your date of birth first.</p>'; return; }
    var dob = new Date(input.value + "T00:00:00");
    var now = new Date();
    if(isNaN(dob.getTime()) || dob > now){ out.innerHTML = '<p class="result-note">Please enter a valid date of birth in the past.</p>'; return; }

    var y = now.getFullYear() - dob.getFullYear();
    var mo = now.getMonth() - dob.getMonth();
    var d = now.getDate() - dob.getDate();
    if(d < 0){ mo -= 1; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if(mo < 0){ y -= 1; mo += 12; }

    var totalDays = Math.floor((now - dob) / 86400000);
    var totalMonths = y * 12 + mo;
    var totalWeeks = Math.floor(totalDays / 7);
    var weekday = dob.toLocaleDateString("en-US", { weekday: "long" });
    var next = bday(dob, now.getFullYear());
    if(next <= now){ next = bday(dob, now.getFullYear() + 1); }
    var daysTo = Math.ceil((next - now) / 86400000);
    var nextStr = next.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    out.innerHTML =
      '<div class="result-grid">' +
      '<div class="result-box"><span class="num">' + y + 'y ' + mo + 'm ' + d + 'd</span><span class="lbl">Exact age</span></div>' +
      '<div class="result-box"><span class="num">' + totalDays.toLocaleString() + '</span><span class="lbl">Total days lived</span></div>' +
      '<div class="result-box"><span class="num">' + totalMonths.toLocaleString() + '</span><span class="lbl">Total months</span></div>' +
      '<div class="result-box"><span class="num">' + totalWeeks.toLocaleString() + '</span><span class="lbl">Total weeks</span></div>' +
      '<div class="result-box"><span class="num">' + weekday + '</span><span class="lbl">Day you were born</span></div>' +
      '<div class="result-box"><span class="num">' + daysTo + '</span><span class="lbl">Days to next birthday</span></div>' +
      '</div>' +
      '<p class="result-note">Your next birthday is on <strong>' + nextStr + '</strong>.</p>';
  }
  document.getElementById("tool-calc-btn").addEventListener("click", run);
})();
</script>
