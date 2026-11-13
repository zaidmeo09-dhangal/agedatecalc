---
layout: default
meta_title: "Week Number Calculator: What Week Is It?"
description: Find the ISO week number of any date, with the week Monday to Sunday range and the day of the year. See what week it is now, free, no sign-up.
permalink: /week-number-calculator/
breadcrumb: Week Number Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Week Number Calculator | AgeDateCalc",
        "url": "https://agedatecalc.com/week-number-calculator/",
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
            "name": "What week is it now?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the date. Counted from Friday, November 13, 2026, this is ISO week 46 of 2026, running Monday, November 9 to Sunday, November 15, 2026. Enter any date above to find its week number."
            }
          },
          {
            "@type": "Question",
            "name": "How many weeks are in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2026 has 53 ISO weeks. A year has 53 ISO weeks when it starts on a Thursday, and January 1, 2026 is a Thursday. The last week of 2026, week 53, runs Monday, December 28, 2026 to Sunday, January 3, 2027."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find the week number of a date?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pick the date above and the calculator finds the Thursday of that week, then counts Thursdays from the first Thursday of the year. Example: February 29, 2028 is a Tuesday in ISO week 9 of 2028, running Monday, February 28 to Sunday, March 5, 2028."
            }
          },
          {
            "@type": "Question",
            "name": "What is the first week of the year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ISO week 1 is the week with the first Thursday of the year, and January 4 always falls in week 1. That is why late December dates can belong to the next year: December 29, 2025 is a Monday in ISO week 1 of 2026."
            }
          }
        ]
      }
    ]
  }
related_posts:
  - /blog/how-many-days-in-a-year/
  - /blog/how-to-count-days-between-dates/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
      <a href="{{ '/tools/' | relative_url }}">Tools</a> <span>/</span>
      <span>{{ page.breadcrumb }}</span>
    </nav>
    <h1>Week Number <span class="accent">Calculator</span></h1>
    <p class="lead">Find the ISO week number of any date, with the week's Monday to Sunday range, the day of the year, and the weeks left in the year.</p>
    <div class="calc-card">
      <div class="field">
        <label for="wn-date">Date</label>
        <input type="date" id="wn-date">
      </div>
      <button class="btn btn-primary btn-block" id="wn-btn" type="button">Find Week Number</button>
      <div id="wn-result"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">The date defaults to today, so the answer on load is the current week number. Weeks use the ISO 8601 system: weeks start on Monday, and week 1 is the week with the first Thursday of the year.</p>
      <p class="result-note"><button type="button" class="btn btn-outline btn-sm" id="wn-share-btn">Copy share link</button> <span id="wn-share-msg" style="font-size:.85rem"></span></p>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated November 2026.</p>

## How ISO week numbers work

The ISO week system counts weeks from Monday to Sunday, and week 1 is the week that contains the first Thursday of the year. January 4 always falls in week 1, because the first Thursday can be no later than January 7 and no earlier than January 1. The week number of a date is found by taking the Thursday of its week and counting Thursdays from the first Thursday of the year.

That Thursday rule is why the year of a week can differ from the year of the date. December 29, 2025 is a Monday, but its Thursday is January 1, 2026, so it belongs to ISO week 1 of 2026, not to a week 53 of 2025. The same thing happens at the end of 2026: December 31, 2026 is a Thursday in week 53 of 2026, and the week runs to Sunday, January 3, 2027.

## Worked examples

| Date | Weekday | ISO week | Week runs | Day of year |
|---|---|---|---|---|
| November 13, 2026 | Friday | Week 46 of 2026 | Monday, November 9 to Sunday, November 15, 2026 | Day 317 of 365 |
| January 1, 2026 | Thursday | Week 1 of 2026 | Monday, December 29, 2025 to Sunday, January 4, 2026 | Day 1 of 365 |
| December 31, 2026 | Thursday | Week 53 of 2026 | Monday, December 28, 2026 to Sunday, January 3, 2027 | Day 365 of 365 |
| December 29, 2025 | Monday | Week 1 of 2026 | Monday, December 29, 2025 to Sunday, January 4, 2026 | Day 363 of 365 |
| February 29, 2028 | Tuesday | Week 9 of 2028 | Monday, February 28 to Sunday, March 5, 2028 | Day 60 of 366 |

## How many weeks are in 2026?

2026 has 53 ISO weeks. A year gets a 53rd week when it starts on a Thursday, and January 1, 2026 is a Thursday. The extra week sits at the end of the year: week 53 runs Monday, December 28, 2026 to Sunday, January 3, 2027. Most years have 52 ISO weeks. Counted from November 13, 2026, which is week 46, there are 8 weeks left in 2026 including the current week.

## Where week numbers get used

- **Work planning:** sprints, releases, and payroll periods are often named by week number, like "week 46", instead of by date.
- **School terms:** term dates and exam weeks are published as week numbers in many US school and college calendars.
- **Project deadlines:** "deliver in week 48" is unambiguous once everyone agrees weeks start on Monday.
- **Payroll and timesheets:** weekly pay periods run Monday to Sunday in most US workplaces, and the week number labels the period.
- **Travel and events:** conferences and tours are scheduled by week number months ahead, and the date range follows from it.

To count the days between two dates instead of finding a week number, use the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}). To find what date falls a number of days from today, use the [Days From Today Calculator]({{ '/days-from-today-calculator/' | relative_url }}).

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>What week is it now?</summary>
<p>It depends on the date. Counted from Friday, November 13, 2026, this is ISO week 46 of 2026, running Monday, November 9 to Sunday, November 15, 2026. Enter any date above to find its week number.</p>
</details>
<details>
<summary>How many weeks are in 2026?</summary>
<p>2026 has 53 ISO weeks. A year has 53 ISO weeks when it starts on a Thursday, and January 1, 2026 is a Thursday. The last week of 2026, week 53, runs Monday, December 28, 2026 to Sunday, January 3, 2027.</p>
</details>
<details>
<summary>How do I find the week number of a date?</summary>
<p>Pick the date above and the calculator finds the Thursday of that week, then counts Thursdays from the first Thursday of the year. Example: February 29, 2028 is a Tuesday in ISO week 9 of 2028, running Monday, February 28 to Sunday, March 5, 2028.</p>
</details>
<details>
<summary>What is the first week of the year?</summary>
<p>ISO week 1 is the week with the first Thursday of the year, and January 4 always falls in week 1. That is why late December dates can belong to the next year: December 29, 2025 is a Monday in ISO week 1 of 2026.</p>
</details>
</div>

<div class="wrap">
<h2>Related tools</h2>
<div class="tools-grid tools-grid-4">
  <a class="tool-card" href="{{ '/date-difference-calculator/' | relative_url }}">
    <div class="tool-icon">📅</div>
    <h3>Date Difference Calculator</h3>
    <p>Days, weeks, months between any two dates.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/days-from-today-calculator/' | relative_url }}">
    <div class="tool-icon">➕</div>
    <h3>Days From Today Calculator</h3>
    <p>Add or subtract days, weeks, months, or years from any date.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/business-days-calculator/' | relative_url }}">
    <div class="tool-icon">💼</div>
    <h3>Business Days Calculator</h3>
    <p>Count workdays between two dates.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/age-calculator/' | relative_url }}">
    <div class="tool-icon">🎂</div>
    <h3>Age Calculator</h3>
    <p>Your exact age in years, months, and days.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
</div>
</div>

<script>
(function(){
  "use strict";
  var DAY = 86400000;

  function fmtDate(d){
    return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  function isoWeek(d){
    var date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    var day = (date.getUTCDay() + 6) % 7;
    date.setUTCDate(date.getUTCDate() - day + 3);
    var year = date.getUTCFullYear();
    var jan4 = new Date(Date.UTC(year, 0, 4));
    var jan4day = (jan4.getUTCDay() + 6) % 7;
    var w1 = new Date(jan4);
    w1.setUTCDate(jan4.getUTCDate() - jan4day + 3);
    return { year: year, week: 1 + Math.round((date - w1) / 604800000) };
  }
  function mondayOf(d){
    var x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var day = (x.getDay() + 6) % 7;
    x.setDate(x.getDate() - day);
    return x;
  }
  function weeksInYear(y){
    return isoWeek(new Date(y, 11, 28)).week;
  }

  function run(){
    var out = document.getElementById("wn-result");
    var v = document.getElementById("wn-date").value;
    if(!v){ out.innerHTML = '<p class="result-note">Please pick a date.</p>'; return; }
    var d = new Date(v + "T00:00:00");
    if(isNaN(d.getTime())){ out.innerHTML = '<p class="result-note">Please enter a valid date.</p>'; return; }
    var iso = isoWeek(d);
    var mon = mondayOf(d);
    var sun = new Date(mon); sun.setDate(sun.getDate() + 6);
    var start = new Date(d.getFullYear(), 0, 0);
    var doy = Math.floor((d - start) / DAY);
    var yearLen = (d.getFullYear() % 4 === 0 && (d.getFullYear() % 100 !== 0 || d.getFullYear() % 400 === 0)) ? 366 : 365;
    var totalWeeks = weeksInYear(iso.year);
    var weeksLeft = totalWeeks - iso.week + 1;
    out.innerHTML =
      '<div class="result-grid">' +
      '<div class="result-box"><span class="num">Week ' + iso.week + '</span><span class="lbl">of ' + iso.year + '</span></div>' +
      '<div class="result-box"><span class="num">' + doy + '</span><span class="lbl">Day of ' + d.getFullYear() + ' (of ' + yearLen + ')</span></div>' +
      '<div class="result-box"><span class="num">' + weeksLeft + '</span><span class="lbl">Weeks left in ' + iso.year + '</span></div>' +
      '</div>' +
      '<p class="result-note"><strong>' + fmtDate(d) + '</strong> is in ISO week <strong>' + iso.week + ' of ' + iso.year + '</strong>, running <strong>' + fmtDate(mon) + '</strong> to <strong>' + fmtDate(sun) + '</strong>.</p>';
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("date", v);
      window.history.replaceState(null, "", u.toString());
    }catch(e){}
  }

  document.getElementById("wn-btn").addEventListener("click", run);
  document.getElementById("wn-share-btn").addEventListener("click", function(){
    var msg = document.getElementById("wn-share-msg");
    function done(t){ if(msg){ msg.textContent = t; } }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(window.location.href).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
    }else{ done("Copy this page URL to share."); }
  });

  try{
    var dateInput = document.getElementById("wn-date");
    var now = new Date();
    var todayStr = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
    dateInput.value = todayStr;
    var qp = new URLSearchParams(window.location.search);
    var qd = qp.get("date");
    var dateRe = /^\d{4}-\d{2}-\d{2}$/;
    if(qd && dateRe.test(qd)){ dateInput.value = qd; }
    run();
  }catch(e2){}
})();
</script>

{% include related-guides.html %}
