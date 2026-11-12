---
layout: default
meta_title: "Birthday Countdown: Days Until Your Birthday"
description: Count down to your next birthday in days, hours, minutes and seconds. See the weekday of your next birthday and the age you will turn. Free, no sign-up.
permalink: /birthday-countdown/
breadcrumb: Birthday Countdown
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Birthday Countdown | AgeDateCalc",
        "url": "https://agedatecalc.com/birthday-countdown/",
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
            "name": "How many days are there until my next birthday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter your date of birth above and the countdown shows the exact days, hours, minutes, and seconds until your next birthday. For example, someone born on June 15, 1990 has their next birthday on Tuesday, June 15, 2027, turning 37."
            }
          },
          {
            "@type": "Question",
            "name": "What weekday will my next birthday fall on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The result shows the weekday of your next birthday. Birthdays move forward one weekday each year, or two weekdays after a leap year, because 365 days is 52 weeks plus one day. That is why the same date is rarely on the same weekday two years in a row."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I was born on February 29?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In non-leap years your birthday is counted on March 1, the most common legal convention. In leap years it falls on February 29 itself. The next February 29 is in 2028, which falls on a Tuesday."
            }
          },
          {
            "@type": "Question",
            "name": "Does the countdown use my time zone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The countdown runs on your own local time, so it flips to zero at midnight where you are. If you share the link with someone in another time zone, their countdown may differ by a few hours, because midnight arrives at a different moment for them."
            }
          },
          {
            "@type": "Question",
            "name": "How is this different from the Age Calculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Age Calculator tells you how old you are right now, in years, months, and days, plus total days lived. The Birthday Countdown tells you how long until your next birthday, ticking live in days, hours, minutes, and seconds, and the age you will turn. Use the Age Calculator for your current age and this page for the wait."
            }
          }
        ]
      }
    ]
  }
related_posts:
  - /blog/how-to-calculate-age/
  - /blog/what-is-a-leap-year/
  - /blog/how-to-count-days-between-dates/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
      <a href="{{ '/tools/' | relative_url }}">Tools</a> <span>/</span>
      <span>{{ page.breadcrumb }}</span>
    </nav>
    <h1>Birthday <span class="accent">Countdown</span></h1>
    <p class="lead">How long until your next birthday? Enter your date of birth and watch the days, hours, minutes, and seconds tick down, live.</p>
    <div class="calc-card">
      <div class="field">
        <label for="bc-dob">Your date of birth</label>
        <input type="date" id="bc-dob">
      </div>
      <button class="btn btn-primary btn-block" id="bc-btn" type="button">Start My Countdown</button>
      <div id="bc-result"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">Your date of birth never leaves your browser. The countdown runs on your local time.</p>
      <p class="result-note"><button type="button" class="btn btn-outline btn-sm" id="bc-share-btn">Copy share link</button> <span id="bc-share-msg" style="font-size:.85rem"></span></p>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated November 2026.</p>

## How the birthday countdown works

Your next birthday is the next occurrence of your birth month and day. The countdown measures the time from right now until midnight at the start of that day, in your local time, and updates every second.

1. Enter your date of birth.
2. The tool finds your next birthday: this year if it has not happened yet, next year if it has.
3. The countdown ticks down in days, hours, minutes, and seconds until midnight on that day.

## Worked example: born June 15, 1990

Take someone born on June 15, 1990. Their next birthday after November 12, 2026 is Tuesday, June 15, 2027, which is 215 days later, and they turn 37. The weekday moves because 365 days is 52 weeks plus one day, so a birthday lands one weekday later each year, or two weekdays later after a leap year.

## What weekday will your birthday be?

Birthdays move forward one weekday each year, or two weekdays after a leap year. That is why the same date is rarely on the same weekday two years in a row, and why a birthday that falls on a weekend one year is usually on a weekday the next. If you want a birthday on a Saturday, this countdown tells you which year to watch for.

## February 29 birthdays

If you were born on February 29, your birthday only exists in leap years. In non-leap years this countdown counts to March 1, the most common legal convention, and the same one our [Age Calculator]({{ '/age-calculator/' | relative_url }}) uses. The next February 29 is in 2028, which falls on a Tuesday. To check any year, use the [Leap Year Calculator]({{ '/leap-year-calculator/' | relative_url }}).

## Planning around your birthday

- **Parties:** a birthday on a Friday or Saturday is the easiest to celebrate. Check the weekday first, then pick the nearest weekend if it lands midweek.
- **Milestones:** 18, 21, 30, 40, 50, 65, and 100 are the birthdays people plan around. The countdown shows the age you will turn, so milestone years are obvious.
- **Gifts and cards:** the countdown in days is the number to beat. Order in time, and remember shipping takes business days, not calendar days, so check the [Business Days Calculator]({{ '/business-days-calculator/' | relative_url }}) for delivery windows.
- **Half birthdays:** six months after a birthday is the half birthday, a fun date for children. Add six months to your last birthday with the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}).

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>How many days are there until my next birthday?</summary>
<p>Enter your date of birth above and the countdown shows the exact days, hours, minutes, and seconds until your next birthday. For example, someone born on June 15, 1990 has their next birthday on Tuesday, June 15, 2027, turning 37.</p>
</details>
<details>
<summary>What weekday will my next birthday fall on?</summary>
<p>The result shows the weekday of your next birthday. Birthdays move forward one weekday each year, or two weekdays after a leap year, because 365 days is 52 weeks plus one day. That is why the same date is rarely on the same weekday two years in a row.</p>
</details>
<details>
<summary>What happens if I was born on February 29?</summary>
<p>In non-leap years your birthday is counted on March 1, the most common legal convention. In leap years it falls on February 29 itself. The next February 29 is in 2028, which falls on a Tuesday.</p>
</details>
<details>
<summary>Does the countdown use my time zone?</summary>
<p>Yes. The countdown runs on your own local time, so it flips to zero at midnight where you are. If you share the link with someone in another time zone, their countdown may differ by a few hours, because midnight arrives at a different moment for them.</p>
</details>
<details>
<summary>How is this different from the Age Calculator?</summary>
<p>The Age Calculator tells you how old you are right now, in years, months, and days, plus total days lived. The Birthday Countdown tells you how long until your next birthday, ticking live in days, hours, minutes, and seconds, and the age you will turn. Use the Age Calculator for your current age and this page for the wait.</p>
</details>
</div>

<div class="wrap">
<h2>Related tools</h2>
<div class="tools-grid tools-grid-4">
  <a class="tool-card" href="{{ '/countdown-timer/' | relative_url }}">
    <div class="tool-icon">⏳</div>
    <h3>Countdown Timer</h3>
    <p>Live countdown to any future date and time.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
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
  <a class="tool-card" href="{{ '/leap-year-calculator/' | relative_url }}">
    <div class="tool-icon">📆</div>
    <h3>Leap Year Calculator</h3>
    <p>Check any year and list leap years in a range.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
</div>
</div>

<script>
(function(){
  "use strict";
  var timer = null;
  function isLeap(y){ return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); }
  function pad(n){ return (n < 10 ? "0" : "") + n; }
  function birthdayInYear(dob, year){
    var m = dob.getMonth(), d = dob.getDate();
    if(m === 1 && d === 29 && !isLeap(year)){ m = 2; d = 1; }
    return new Date(year, m, d, 0, 0, 0, 0);
  }
  function fmtDate(d){
    return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  function render(target, dob, ageTurns){
    var out = document.getElementById("bc-result");
    var diff = target - new Date();
    if(diff <= 0){
      out.innerHTML = '<p class="result-note"><strong>Happy birthday!</strong> Your birthday is today, and you turn <strong>' + ageTurns + '</strong>.</p>';
      if(timer){ clearInterval(timer); timer = null; }
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor(diff % 86400000 / 3600000);
    var m = Math.floor(diff % 3600000 / 60000);
    var s = Math.floor(diff % 60000 / 1000);
    var now2 = new Date();
    var todayOnly = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate(), 0, 0, 0, 0);
    var totalDays = Math.round((target - todayOnly) / 86400000);
    out.innerHTML =
      '<p class="result-note" style="text-align:center">Your next birthday is <strong>' + fmtDate(target) + '</strong>. You will turn <strong>' + ageTurns + '</strong>.</p>' +
      '<div class="countdown-grid">' +
      '<div class="result-box"><span class="num">' + d + '</span><span class="lbl">Days</span></div>' +
      '<div class="result-box"><span class="num">' + pad(h) + '</span><span class="lbl">Hours</span></div>' +
      '<div class="result-box"><span class="num">' + pad(m) + '</span><span class="lbl">Minutes</span></div>' +
      '<div class="result-box"><span class="num">' + pad(s) + '</span><span class="lbl">Seconds</span></div>' +
      '</div>' +
      '<p class="result-note" style="text-align:center">That is <strong>' + totalDays + ' days</strong> away.</p>';
  }

  document.getElementById("bc-btn").addEventListener("click", function(){
    var out = document.getElementById("bc-result");
    var val = document.getElementById("bc-dob").value;
    if(!val){ out.innerHTML = '<p class="result-note">Please pick your date of birth first.</p>'; return; }
    var dob = new Date(val + "T00:00:00");
    if(isNaN(dob.getTime())){ out.innerHTML = '<p class="result-note">Please enter a valid date of birth.</p>'; return; }
    var now = new Date();
    if(dob > now){ out.innerHTML = '<p class="result-note">Please enter a date of birth in the past.</p>'; return; }
    var target = birthdayInYear(dob, now.getFullYear());
    if(target < new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)){
      target = birthdayInYear(dob, now.getFullYear() + 1);
    }
    var ageTurns = target.getFullYear() - dob.getFullYear();
    if(timer){ clearInterval(timer); }
    render(target, dob, ageTurns);
    timer = setInterval(function(){ render(target, dob, ageTurns); }, 1000);
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("dob", val);
      window.history.replaceState(null, "", u.toString());
    }catch(e){}
  });
  document.getElementById("bc-share-btn").addEventListener("click", function(){
    var msg = document.getElementById("bc-share-msg");
    function done(t){ if(msg){ msg.textContent = t; } }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(window.location.href).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
    }else{ done("Copy this page URL to share."); }
  });

  try{
    var qp = new URLSearchParams(window.location.search);
    var qdob = qp.get("dob");
    if(qdob && /^\d{4}-\d{2}-\d{2}$/.test(qdob)){
      var di = document.getElementById("bc-dob");
      di.value = qdob;
      var test = new Date(qdob + "T00:00:00");
      if(!isNaN(test.getTime()) && test <= new Date()){ document.getElementById("bc-btn").click(); }
    }
  }catch(e2){}
})();
</script>

{% include related-guides.html %}
