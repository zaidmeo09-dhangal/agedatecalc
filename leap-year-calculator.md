---
layout: default
meta_title: "Leap Year Calculator: Check Any Year"
description: Check if any year is a leap year and list leap years in a range. See the three rules, the next leap year, and February 29 dates. Free, no sign-up.
permalink: /leap-year-calculator/
breadcrumb: Leap Year Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Leap Year Calculator | AgeDateCalc",
        "url": "https://agedatecalc.com/leap-year-calculator/",
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
            "name": "Is 2028 a leap year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. 2028 is divisible by 4 and is not a century year, so February 2028 has 29 days. February 29, 2028 falls on a Tuesday. The next leap year after 2028 is 2032."
            }
          },
          {
            "@type": "Question",
            "name": "What are the three leap year rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rule 1: a year divisible by 4 is a leap year. Rule 2: a century year, divisible by 100, is not a leap year. Rule 3: a century year divisible by 400 is a leap year after all. That is why 2000 was a leap year but 1900 was not, and 2100 will not be."
            }
          },
          {
            "@type": "Question",
            "name": "Was the year 2000 a leap year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Although 2000 is a century year, it is divisible by 400, so the third rule applies and February 2000 had 29 days. The century years 1900 and 2100 fail that test and are not leap years."
            }
          },
          {
            "@type": "Question",
            "name": "Why do we have leap years?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Earth takes about 365.2422 days to orbit the sun, roughly a quarter day more than the 365 days on the calendar. Adding February 29 every four years absorbs that extra time and keeps the calendar from drifting away from the seasons. Without leap years, the calendar would drift by about one day every four years."
            }
          },
          {
            "@type": "Question",
            "name": "What birthday do February 29 babies celebrate in non-leap years?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They celebrate on February 28 or March 1, depending on local custom and law. The legal date varies by jurisdiction, so check local rules for official documents. Our Age Calculator counts February 29 birthdays on March 1 in non-leap years."
            }
          }
        ]
      }
    ]
  }
related_posts:
  - /blog/what-is-a-leap-year/
  - /blog/how-many-days-in-a-year/
  - /blog/how-to-calculate-age/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
      <a href="{{ '/tools/' | relative_url }}">Tools</a> <span>/</span>
      <span>{{ page.breadcrumb }}</span>
    </nav>
    <h1>Leap Year <span class="accent">Calculator</span></h1>
    <p class="lead">Check whether any year is a leap year, and list every leap year in a range. The next leap year is 2028, with February 29 falling on a Tuesday.</p>
    <div class="calc-card">
      <div class="field">
        <label for="ly-year">Check a year</label>
        <input type="number" id="ly-year" placeholder="e.g. 2028" min="1" max="9999">
      </div>
      <button class="btn btn-primary btn-block" id="ly-check-btn" type="button">Check This Year</button>
      <div id="ly-check-result"></div>
      <hr style="border:0;border-top:1px solid var(--border);margin:24px 0">
      <h2 style="font-size:1.15rem;margin-bottom:12px">List leap years in a range</h2>
      <div class="field">
        <label for="ly-from">From year</label>
        <input type="number" id="ly-from" placeholder="e.g. 2024" min="1" max="9999">
      </div>
      <div class="field">
        <label for="ly-to">To year</label>
        <input type="number" id="ly-to" placeholder="e.g. 2040" min="1" max="9999">
      </div>
      <button class="btn btn-outline btn-block" id="ly-list-btn" type="button">List Leap Years</button>
      <div id="ly-list-result"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">Ranges are limited to 200 years so the list stays readable.</p>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated November 2026.</p>

## The three leap year rules

A leap year is a year with 366 days instead of 365, with February 29 added. Three rules decide it:

| Rule | Test | Result |
|---|---|---|
| 1 | Year divisible by 4 | Leap year |
| 2 | Year divisible by 100 (a century year) | Not a leap year |
| 3 | Century year also divisible by 400 | Leap year after all |

Rule 3 is the one people forget. It is why 2000 was a leap year but 1900 was not, and why 2100 will not be. The Gregorian calendar produces 97 leap years in every 400-year cycle.

## Worked example: 2024 to 2032

Apply the rules year by year. 2024 is divisible by 4, so it is a leap year. 2025, 2026, and 2027 are not divisible by 4. 2028 is divisible by 4 and is not a century year, so it is a leap year. 2029, 2030, and 2031 are not divisible by 4. 2032 is divisible by 4, so it is a leap year. The leap years from 2024 to 2032 are **2024, 2028, and 2032**.

The next leap year is **2028**. February 29, 2028 falls on a Tuesday, and the leap year after that is 2032.

## The century test: 1900 vs 2000 vs 2100

| Year | Divisible by 4 | Divisible by 100 | Divisible by 400 | Leap year? |
|---|---|---|---|---|
| 1900 | Yes | Yes | No | No |
| 2000 | Yes | Yes | Yes | Yes |
| 2100 | Yes | Yes | No | No |
| 2024 | Yes | No | No | Yes |
| 2028 | Yes | No | No | Yes |

## Why leap years exist

Earth takes about 365.2422 days (the tropical year) to orbit the sun, roughly a quarter day more than the 365 days on the calendar. Adding February 29 every four years absorbs that extra time and keeps the calendar from drifting away from the seasons. Without leap years, the calendar would drift by about one day every four years, and after a few centuries summer would fall in what the calendar calls winter.

The Gregorian calendar, introduced in 1582, refined the older Julian rule by adding the century exception. That correction is what keeps the calendar accurate to about one day in 3,300 years.

## Leap years and your age

Leap days matter for exact date math. A period crossing February 2024 includes a 29th that 2025 and 2026 do not have, so day counts across leap years are one day longer. If you were born on February 29, your birthday is counted on March 1 in non-leap years, the most common legal convention. To find your exact age including leap days, use the [Age Calculator]({{ '/age-calculator/' | relative_url }}), and to measure the gap between any two dates, use the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}).

For the full story behind the rules, including the history from Julius Caesar to Pope Gregory XIII, see [what is a leap year]({{ '/blog/what-is-a-leap-year/' | relative_url }}).

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>Is 2028 a leap year?</summary>
<p>Yes. 2028 is divisible by 4 and is not a century year, so February 2028 has 29 days. February 29, 2028 falls on a Tuesday. The next leap year after 2028 is 2032.</p>
</details>
<details>
<summary>What are the three leap year rules?</summary>
<p>Rule 1: a year divisible by 4 is a leap year. Rule 2: a century year, divisible by 100, is not a leap year. Rule 3: a century year divisible by 400 is a leap year after all. That is why 2000 was a leap year but 1900 was not, and 2100 will not be.</p>
</details>
<details>
<summary>Was the year 2000 a leap year?</summary>
<p>Yes. Although 2000 is a century year, it is divisible by 400, so the third rule applies and February 2000 had 29 days. The century years 1900 and 2100 fail that test and are not leap years.</p>
</details>
<details>
<summary>Why do we have leap years?</summary>
<p>Earth takes about 365.2422 days to orbit the sun, roughly a quarter day more than the 365 days on the calendar. Adding February 29 every four years absorbs that extra time and keeps the calendar from drifting away from the seasons. Without leap years, the calendar would drift by about one day every four years.</p>
</details>
<details>
<summary>What birthday do February 29 babies celebrate in non-leap years?</summary>
<p>They celebrate on February 28 or March 1, depending on local custom and law. The legal date varies by jurisdiction, so check local rules for official documents. Our Age Calculator counts February 29 birthdays on March 1 in non-leap years.</p>
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
  <a class="tool-card" href="{{ '/birthday-countdown/' | relative_url }}">
    <div class="tool-icon">🎉</div>
    <h3>Birthday Countdown</h3>
    <p>Days, hours, minutes and seconds until your next birthday.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
</div>
</div>

<script>
(function(){
  "use strict";
  function isLeap(y){ return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); }
  function ruleText(y){
    if(y % 400 === 0){ return "divisible by 400, so Rule 3 applies"; }
    if(y % 100 === 0){ return "a century year not divisible by 400, so Rule 2 applies"; }
    if(y % 4 === 0){ return "divisible by 4 and not a century year, so Rule 1 applies"; }
    return "not divisible by 4, so no rule makes it a leap year";
  }
  function nextLeap(fromYear){
    var y = fromYear;
    while(!isLeap(y)){ y += 1; }
    return y;
  }
  function feb29Weekday(y){
    return new Date(y, 1, 29).toLocaleDateString("en-US", { weekday: "long" });
  }

  document.getElementById("ly-check-btn").addEventListener("click", function(){
    var out = document.getElementById("ly-check-result");
    var y = parseInt(document.getElementById("ly-year").value, 10);
    if(isNaN(y) || y < 1 || y > 9999){ out.innerHTML = '<p class="result-note">Please enter a year from 1 to 9999.</p>'; return; }
    var leap = isLeap(y);
    var next = leap ? y : nextLeap(y + 1);
    var extra = "";
    if(leap){
      extra = '<p class="result-note">February 29, ' + y + ' falls on a <strong>' + feb29Weekday(y) + '</strong>. The next leap year after ' + y + ' is <strong>' + nextLeap(y + 1) + '</strong>.</p>';
    } else {
      extra = '<p class="result-note">The next leap year is <strong>' + next + '</strong>. February 29, ' + next + ' falls on a <strong>' + feb29Weekday(next) + '</strong>.</p>';
    }
    out.innerHTML =
      '<div class="result-grid">' +
      '<div class="result-box"><span class="num">' + (leap ? "Yes" : "No") + '</span><span class="lbl">' + y + (leap ? " is a leap year" : " is not a leap year") + '</span></div>' +
      '<div class="result-box"><span class="num">' + (leap ? 366 : 365) + '</span><span class="lbl">Days in ' + y + '</span></div>' +
      '</div>' +
      '<p class="result-note"><strong>' + y + '</strong> is ' + ruleText(y) + '.</p>' + extra;
  });

  document.getElementById("ly-list-btn").addEventListener("click", function(){
    var out = document.getElementById("ly-list-result");
    var a = parseInt(document.getElementById("ly-from").value, 10);
    var b = parseInt(document.getElementById("ly-to").value, 10);
    if(isNaN(a) || isNaN(b) || a < 1 || b < 1 || a > 9999 || b > 9999){
      out.innerHTML = '<p class="result-note">Please enter two years from 1 to 9999.</p>'; return;
    }
    if(b < a){ var t = a; a = b; b = t; }
    if(b - a > 200){ out.innerHTML = '<p class="result-note">Please keep the range to 200 years or less.</p>'; return; }
    var list = [];
    for(var y = a; y <= b; y++){ if(isLeap(y)){ list.push(y); } }
    if(!list.length){
      out.innerHTML = '<p class="result-note">No leap years between <strong>' + a + '</strong> and <strong>' + b + '</strong>. The next leap year is <strong>' + nextLeap(b + 1) + '</strong>.</p>';
      return;
    }
    out.innerHTML =
      '<p class="result-note"><strong>' + list.length + ' leap year' + (list.length === 1 ? '' : 's') + '</strong> between ' + a + ' and ' + b + ': <strong>' + list.join(", ") + '</strong>.</p>' +
      '<p class="result-note">The next leap year after ' + b + ' is <strong>' + nextLeap(b + 1) + '</strong>.</p>';
  });
})();
</script>

{% include related-guides.html %}
