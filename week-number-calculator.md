---
layout: default
last_modified_at: 2026-11-22
meta_title: "Week Number Calculator: What Week Is It Now?"
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
              "text": "It depends on the date. Counted from Sunday, November 22, 2026, this is ISO week 47 of 2026, running Monday, November 16 to Sunday, November 22, 2026. Enter any date above to find its week number."
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
          },
          {
            "@type": "Question",
            "name": "What is the difference between ISO week and US week numbers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ISO weeks start on Monday, and week 1 is the week with the first Thursday of the year. US weeks start on Sunday, and week 1 is the week containing January 1. The same date can differ: December 29, 2025 is ISO week 1 of 2026 but US week 53 of 2025."
            }
          },
          {
            "@type": "Question",
            "name": "What week number is December 31, 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "December 31, 2026 is a Thursday in ISO week 53 of 2026, running Monday, December 28, 2026 to Sunday, January 3, 2027. It is the last day of the year."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get the ISO week number in Excel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use =ISOWEEKNUM(A1) with the date in cell A1, or =WEEKNUM(A1,21). Both give the ISO week number, and both work in Excel 2013 and later and in Google Sheets. Use =WEEKNUM(A1,1) for the US Sunday-start count instead."
            }
          },
          {
            "@type": "Question",
            "name": "How many ISO weeks are in 2027?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2027 has 52 ISO weeks. A year gets a 53rd ISO week when it starts on a Thursday, or is a leap year starting on a Wednesday, and January 1, 2027 is a Friday in a common year, so 2027 has 52."
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
| November 22, 2026 | Sunday | Week 47 of 2026 | Monday, November 16 to Sunday, November 22, 2026 | Day 326 of 365 |
| January 1, 2026 | Thursday | Week 1 of 2026 | Monday, December 29, 2025 to Sunday, January 4, 2026 | Day 1 of 365 |
| December 31, 2026 | Thursday | Week 53 of 2026 | Monday, December 28, 2026 to Sunday, January 3, 2027 | Day 365 of 365 |
| December 29, 2025 | Monday | Week 1 of 2026 | Monday, December 29, 2025 to Sunday, January 4, 2026 | Day 363 of 365 |
| February 29, 2028 | Tuesday | Week 9 of 2028 | Monday, February 28 to Sunday, March 5, 2028 | Day 60 of 366 |

## How many weeks are in 2026?

2026 has 53 ISO weeks. A year gets a 53rd week when it starts on a Thursday, and January 1, 2026 is a Thursday. The extra week sits at the end of the year: week 53 runs Monday, December 28, 2026 to Sunday, January 3, 2027. Most years have 52 ISO weeks. Counted from November 22, 2026, which is week 47, there are 7 weeks left in 2026 including the current week. A year with 53 weeks still has 365 days. See [how many days are in a year]({{ '/blog/how-many-days-in-a-year/' | relative_url }}) for the full count. For the day count to New Year, see [how many days until New Year 2027]({{ '/blog/how-many-days-until-new-year/' | relative_url }}).

## Where week numbers get used

- **Work planning:** sprints, releases, and payroll periods are often named by week number, like "week 46", instead of by date.
- **School terms:** term dates and exam weeks are published as week numbers in many US school and college calendars.
- **Project deadlines:** "deliver in week 48" is unambiguous once everyone agrees weeks start on Monday.
- **Payroll and timesheets:** weekly pay periods run Monday to Sunday in most US workplaces, and the week number labels the period.
- **Travel and events:** conferences and tours are scheduled by week number months ahead, and the date range follows from it.

To count the days between two dates instead of finding a week number, use the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}). To find what date falls a number of days from today, use the [Days From Today Calculator]({{ '/days-from-today-calculator/' | relative_url }}). A leap year shifts the week count. Check whether a year is a leap year with the [Leap Year Calculator]({{ '/leap-year-calculator/' | relative_url }}).

## Week numbers in 2026

2026 has 53 ISO weeks. The first week starts on Monday, December 29, 2025, and the last week ends on Sunday, January 3, 2027. As of November 22, 2026, we are in week 47.

| Week | Monday | Sunday |
|---|---|---|
| 1 | December 29, 2025 | January 4, 2026 |
| 2 | January 5, 2026 | January 11, 2026 |
| 3 | January 12, 2026 | January 18, 2026 |
| 4 | January 19, 2026 | January 25, 2026 |
| 5 | January 26, 2026 | February 1, 2026 |
| 6 | February 2, 2026 | February 8, 2026 |
| 7 | February 9, 2026 | February 15, 2026 |
| 8 | February 16, 2026 | February 22, 2026 |
| 9 | February 23, 2026 | March 1, 2026 |
| 10 | March 2, 2026 | March 8, 2026 |
| 11 | March 9, 2026 | March 15, 2026 |
| 12 | March 16, 2026 | March 22, 2026 |
| 13 | March 23, 2026 | March 29, 2026 |
| 14 | March 30, 2026 | April 5, 2026 |
| 15 | April 6, 2026 | April 12, 2026 |
| 16 | April 13, 2026 | April 19, 2026 |
| 17 | April 20, 2026 | April 26, 2026 |
| 18 | April 27, 2026 | May 3, 2026 |
| 19 | May 4, 2026 | May 10, 2026 |
| 20 | May 11, 2026 | May 17, 2026 |
| 21 | May 18, 2026 | May 24, 2026 |
| 22 | May 25, 2026 | May 31, 2026 |
| 23 | June 1, 2026 | June 7, 2026 |
| 24 | June 8, 2026 | June 14, 2026 |
| 25 | June 15, 2026 | June 21, 2026 |
| 26 | June 22, 2026 | June 28, 2026 |
| 27 | June 29, 2026 | July 5, 2026 |
| 28 | July 6, 2026 | July 12, 2026 |
| 29 | July 13, 2026 | July 19, 2026 |
| 30 | July 20, 2026 | July 26, 2026 |
| 31 | July 27, 2026 | August 2, 2026 |
| 32 | August 3, 2026 | August 9, 2026 |
| 33 | August 10, 2026 | August 16, 2026 |
| 34 | August 17, 2026 | August 23, 2026 |
| 35 | August 24, 2026 | August 30, 2026 |
| 36 | August 31, 2026 | September 6, 2026 |
| 37 | September 7, 2026 | September 13, 2026 |
| 38 | September 14, 2026 | September 20, 2026 |
| 39 | September 21, 2026 | September 27, 2026 |
| 40 | September 28, 2026 | October 4, 2026 |
| 41 | October 5, 2026 | October 11, 2026 |
| 42 | October 12, 2026 | October 18, 2026 |
| 43 | October 19, 2026 | October 25, 2026 |
| 44 | October 26, 2026 | November 1, 2026 |
| 45 | November 2, 2026 | November 8, 2026 |
| 46 | November 9, 2026 | November 15, 2026 |
| 47 | November 16, 2026 | November 22, 2026 |
| 48 | November 23, 2026 | November 29, 2026 |
| 49 | November 30, 2026 | December 6, 2026 |
| 50 | December 7, 2026 | December 13, 2026 |
| 51 | December 14, 2026 | December 20, 2026 |
| 52 | December 21, 2026 | December 27, 2026 |
| 53 | December 28, 2026 | January 3, 2027 |

To find the week number of any date, including dates in other years, enter it in the calculator above. To find what date falls a number of days from today, use the [Days From Today Calculator]({{ '/days-from-today-calculator/' | relative_url }}).

## ISO week numbers vs US week numbers

The ISO system and the US system count weeks differently, and the same date can get a different week number in each:

| | ISO week numbers | US week numbers |
|---|---|---|
| Week starts on | Monday | Sunday |
| Week 1 is | The week with the first Thursday of the year | The week containing January 1 |
| Weeks always have | 7 days, and belong to one year | Can be short at the start and end of the year |

The two counts agree most of the year, but they split around New Year. December 29, 2025 is a Monday in ISO week 1 of 2026, because its Thursday falls on January 1, 2026. Under the US Sunday-start count, the same date is in week 53 of 2025. At the other end of 2026 the same thing happens in reverse: the first days of January 2027 belong to ISO week 53 of 2026, while the US count moves them into 2027.

## How to get the week number in Excel and Google Sheets

With the date in cell A1:

`=ISOWEEKNUM(A1)`

That returns the ISO week number, and it works in Excel 2013 and later and in Google Sheets. The same result comes from `=WEEKNUM(A1,21)`, which uses the ISO system. For the US Sunday-start count, use `=WEEKNUM(A1)` or `=WEEKNUM(A1,1)`, which counts the week containing January 1 as week 1. `=WEEKNUM(A1,2)` starts weeks on Monday but still counts week 1 from January 1, so it is not the ISO week: for March 9, 2012 it gives week 11, while ISOWEEKNUM gives week 10. To get the current week automatically, use =ISOWEEKNUM(TODAY()) for ISO, or =WEEKNUM(TODAY(),1) for the US count. To count only workdays in a week, use the [Business Days Calculator]({{ '/business-days-calculator/' | relative_url }}).

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>What week is it now?</summary>
<p>It depends on the date. Counted from Sunday, November 22, 2026, this is ISO week 47 of 2026, running Monday, November 16 to Sunday, November 22, 2026. Enter any date above to find its week number.</p>
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
<details>
<summary>What is the difference between ISO week and US week numbers?</summary>
<p>ISO weeks start on Monday, and week 1 is the week with the first Thursday of the year. US weeks start on Sunday, and week 1 is the week containing January 1. The same date can differ: December 29, 2025 is ISO week 1 of 2026 but US week 53 of 2025.</p>
</details>
<details>
<summary>What week number is December 31, 2026?</summary>
<p>December 31, 2026 is a Thursday in ISO week 53 of 2026, running Monday, December 28, 2026 to Sunday, January 3, 2027. It is the last day of the year.</p>
</details>
<details>
<summary>How do I get the ISO week number in Excel?</summary>
<p>Use =ISOWEEKNUM(A1) with the date in cell A1, or =WEEKNUM(A1,21). Both give the ISO week number, and both work in Excel 2013 and later and in Google Sheets. Use =WEEKNUM(A1,1) for the US Sunday-start count instead.</p>
</details>
<details>
<summary>How many ISO weeks are in 2027?</summary>
<p>2027 has 52 ISO weeks. A year gets a 53rd ISO week when it starts on a Thursday, or is a leap year starting on a Wednesday, and January 1, 2027 is a Friday in a common year, so 2027 has 52.</p>
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
