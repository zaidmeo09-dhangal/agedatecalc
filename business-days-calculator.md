---
layout: default
meta_title: "Business Days Calculator: Count Workdays"
description: Count business days between two dates, excluding weekends and US federal holidays. See calendar days and the holidays subtracted. Free, no sign-up.
permalink: /business-days-calculator/
breadcrumb: Business Days Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Business Days Calculator | AgeDateCalc",
        "url": "https://agedatecalc.com/business-days-calculator/",
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
            "name": "What counts as a business day?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A business day is a weekday, Monday to Friday, that is not a US federal holiday. Saturdays and Sundays never count. When the federal holidays option is on, the 11 US federal holidays are also removed, using their observed dates when a holiday falls on a weekend."
            }
          },
          {
            "@type": "Question",
            "name": "Is the start date counted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By default, no. The count starts the day after the start date and includes the end date, the same convention as our Date Difference Calculator. Tick the 'Include the end date' box to count both dates. For example, Monday January 5 to Friday January 9, 2026 gives 4 business days by default and 5 with the box ticked."
            }
          },
          {
            "@type": "Question",
            "name": "Which holidays are subtracted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 11 US federal holidays under 5 U.S.C. 6103: New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas Day. When a holiday falls on a Saturday it is observed on Friday, and when it falls on a Sunday it is observed on Monday. State holidays are not included."
            }
          },
          {
            "@type": "Question",
            "name": "How do I count business days in Excel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use NETWORKDAYS. Put the start date in A2 and the end date in B2, then use =NETWORKDAYS(A2, B2) for weekdays only, or =NETWORKDAYS(A2, B2, holidays) with a list of holiday dates to subtract them too. Note that NETWORKDAYS counts both the start and end dates, so it gives one more than this calculator's default count."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my count one day different from another tool?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two causes explain nearly every disagreement. First, the counting basis: some tools count the start date and some do not, which shifts every answer by exactly one. Second, the holiday list: some tools subtract only weekends, some subtract US federal holidays, and some use a different country's holidays. Check both before trusting a number."
            }
          },
          {
            "@type": "Question",
            "name": "How many work days have I worked this year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Set the start date to January 1 of this year and the end date to today. This days worked calculator counts the weekdays in between and subtracts US federal holidays when the option is on. Counted from January 1, 2026 to November 13, 2026, the answer is 218 business days with holidays excluded, or 226 weekdays without the holiday subtraction."
            }
          }
        ]
      }
    ]
  }
related_posts:
  - /blog/how-to-count-days-between-dates/
  - /blog/how-many-days-in-a-year/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
      <a href="{{ '/tools/' | relative_url }}">Tools</a> <span>/</span>
      <span>{{ page.breadcrumb }}</span>
    </nav>
    <h1>Business Days <span class="accent">Calculator</span></h1>
    <p class="lead">Count the workdays between two dates, with weekends and US federal holidays removed. See calendar days, weekend days, and exactly which holidays were subtracted.</p>
    <div class="calc-card">
      <div class="field">
        <label for="bd-start">Start date</label>
        <input type="date" id="bd-start">
      </div>
      <div class="field">
        <label for="bd-end">End date</label>
        <input type="date" id="bd-end">
      </div>
      <div class="field">
        <label style="display:flex;align-items:center;gap:8px;font-weight:400"><input type="checkbox" id="bd-include-end" style="width:auto"> Include the end date in the count</label>
      </div>
      <div class="field">
        <label style="display:flex;align-items:center;gap:8px;font-weight:400"><input type="checkbox" id="bd-holidays" checked style="width:auto"> Exclude US federal holidays</label>
      </div>
      <button class="btn btn-primary btn-block" id="bd-btn" type="button">Count Business Days</button>
      <div id="bd-result"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">By default, counts the end date, not the start date. Tick "Include the end date" to count both dates. Holidays use the observed dates from the tables below.</p>
      <p class="result-note"><button type="button" class="btn btn-outline btn-sm" id="bd-share-btn">Copy share link</button> <span id="bd-share-msg" style="font-size:.85rem"></span></p>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated November 2026.</p>

## What counts as a business day?

A business day is a weekday, Monday to Friday, that is not a US federal holiday. Saturdays and Sundays never count, and when the holidays option is on, the 11 federal holidays are removed too, using their observed dates when a holiday falls on a weekend. State holidays are not included, because they vary by state.

## How to use this calculator

Pick a start date and an end date, then click Count Business Days. The result shows business days, total calendar days, weekend days in the range, and the exact holidays subtracted, with names and dates. If you only want weekdays without the holiday subtraction, untick "Exclude US federal holidays".

## How the count works

The tool walks the calendar one day at a time from the day after the start date through the end date:

1. Skip Saturdays and Sundays.
2. Skip any day on the US federal holiday list, when the holidays option is on.
3. Count every remaining day.

The counting basis is the same as the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}): the end date is counted, the start date is not. Tick "Include the end date" to count both dates. That is the one-day difference that causes most disagreements between tools.

## A days worked calculator

If you searched for a days worked calculator, this tool is it. Pick January 1 as the start date and today as the end date, and the business days result is the number of work days you have worked this year, with weekends and US federal holidays removed. To answer how many work days have i worked this year, counted from January 1, 2026 to November 13, 2026, the answer is 218 business days with holidays excluded, or 226 weekdays without the holiday subtraction. Untick the holidays box if your employer does not observe federal holidays, and tick "Include the end date" if you want to count the first day of the year as a worked day too.

## Worked example: Monday, January 5 to Friday, January 16, 2026

January 5, 2026 is a Monday and January 16, 2026 is a Friday. The range covers 11 calendar days. Counting the weekdays after the start date gives Tuesday January 6 through Friday January 16, which is 9 weekdays. No federal holiday falls in that range, so the answer is **9 business days**.

A second example with holidays: Monday, December 21, 2026 to Friday, January 1, 2027 covers 11 calendar days. The weekdays after the start date are 9, but Christmas Day (Friday, December 25) and New Year's Day (Friday, January 1) are both federal holidays, so the answer is **7 business days**.

## The one-day trap: include the end date or not

The same dates give different answers depending on the basis, and the difference is always exactly one day:

| Range | Default (end date counted) | Both dates counted |
|---|---|---|
| Monday, January 5 to Friday, January 9, 2026 | 4 business days | 5 business days |
| Monday, January 5 to Friday, January 16, 2026 | 9 business days | 10 business days |
| Monday, November 23 to Friday, December 4, 2026 | 8 business days (Thanksgiving removed) | 9 business days |

Rule of thumb: measuring a gap between two dates, use the default. Counting the days you will actually work, including the first day, tick the box.

## US federal holidays 2026 and 2027

These are the 11 US federal holidays under 5 U.S.C. 6103. When a holiday falls on a weekend, federal offices observe it on the nearest weekday (Friday for Saturday, Monday for Sunday), and that observed date is the one this calculator subtracts. Holiday dates follow the US Office of Personnel Management (OPM.gov) federal holiday schedule.

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

## Where business day counts get used

- **Project deadlines:** a contract signed Monday with "delivery in 10 business days" lands two working weeks later, not 10 calendar days later. Counting it by hand invites an off-by-one miss.
- **Payroll and HR:** notice periods, probation, and leave are usually counted in business days. A 30-day notice starting on a Friday is not the same as 30 business days.
- **Shipping and delivery:** "5 to 7 business days" excludes weekends and holidays, so an order placed before Thanksgiving arrives later than one placed in a normal week.
- **Contracts and filings:** US federal courts count time periods under Federal Rule of Civil Procedure 6(a)(1), which excludes the triggering day and counts intermediate Saturdays, Sundays, and legal holidays ([Legal Information Institute](https://www.law.cornell.edu/rules/frcp/rule_6)). Business day math is different, so check which rule your document uses.
- **School and leave planning:** counting school days in a term, or workdays left before a holiday break.

## Business days in Excel

For a spreadsheet, use NETWORKDAYS. Put the start date in A2 and the end date in B2:

`=NETWORKDAYS(A2, B2)` counts weekdays only, and `=NETWORKDAYS(A2, B2, holidays)` subtracts a list of holiday dates as well. Note that NETWORKDAYS counts both the start and end dates, so it gives one more than this calculator's default count. For the same result, use `=NETWORKDAYS(A2, B2, holidays) - 1`.

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>What counts as a business day?</summary>
<p>A business day is a weekday, Monday to Friday, that is not a US federal holiday. Saturdays and Sundays never count. When the federal holidays option is on, the 11 US federal holidays are also removed, using their observed dates when a holiday falls on a weekend.</p>
</details>
<details>
<summary>Is the start date counted?</summary>
<p>By default, no. The count starts the day after the start date and includes the end date, the same convention as our Date Difference Calculator. Tick the 'Include the end date' box to count both dates. For example, Monday January 5 to Friday January 9, 2026 gives 4 business days by default and 5 with the box ticked.</p>
</details>
<details>
<summary>Which holidays are subtracted?</summary>
<p>The 11 US federal holidays under 5 U.S.C. 6103: New Year's Day, Martin Luther King Jr. Day, Presidents' Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas Day. When a holiday falls on a Saturday it is observed on Friday, and when it falls on a Sunday it is observed on Monday. State holidays are not included.</p>
</details>
<details>
<summary>How do I count business days in Excel?</summary>
<p>Use NETWORKDAYS. Put the start date in A2 and the end date in B2, then use =NETWORKDAYS(A2, B2) for weekdays only, or =NETWORKDAYS(A2, B2, holidays) with a list of holiday dates to subtract them too. Note that NETWORKDAYS counts both the start and end dates, so it gives one more than this calculator's default count.</p>
</details>
<details>
<summary>How many work days have I worked this year?</summary>
<p>Set the start date to January 1 of this year and the end date to today. This days worked calculator counts the weekdays in between and subtracts US federal holidays when the option is on. Counted from January 1, 2026 to November 13, 2026, the answer is 218 business days with holidays excluded, or 226 weekdays without the holiday subtraction.</p>
</details>
<details>
<summary>Why is my count one day different from another tool?</summary>
<p>Two causes explain nearly every disagreement. First, the counting basis: some tools count the start date and some do not, which shifts every answer by exactly one. Second, the holiday list: some tools subtract only weekends, some subtract US federal holidays, and some use a different country's holidays. Check both before trusting a number.</p>
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
  <a class="tool-card" href="{{ '/time-zone-converter/' | relative_url }}">
    <div class="tool-icon">🌍</div>
    <h3>Time Zone Converter</h3>
    <p>Convert times across world time zones.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
</div>
</div>

<script>
(function(){
  "use strict";
  var DAY = 86400000;

  function nthWeekday(year, month, weekday, n){
    var d = new Date(year, month, 1);
    var delta = (weekday - d.getDay() + 7) % 7;
    return new Date(year, month, 1 + delta + 7 * (n - 1));
  }
  function lastWeekday(year, month, weekday){
    var d = new Date(year, month + 1, 0);
    var delta = (d.getDay() - weekday + 7) % 7;
    return new Date(year, month, d.getDate() - delta);
  }
  function observed(d){
    var wd = d.getDay();
    if(wd === 6){ return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1); }
    if(wd === 0){ return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1); }
    return d;
  }
  function fedHolidays(year){
    var list = [];
    function add(name, d){ list.push({ name: name, date: observed(d) }); }
    add("New Year's Day", new Date(year, 0, 1));
    add("Martin Luther King Jr. Day", nthWeekday(year, 0, 1, 3));
    add("Presidents' Day", nthWeekday(year, 1, 1, 3));
    add("Memorial Day", lastWeekday(year, 4, 1));
    add("Juneteenth", new Date(year, 5, 19));
    add("Independence Day", new Date(year, 6, 4));
    add("Labor Day", nthWeekday(year, 8, 1, 1));
    add("Columbus Day", nthWeekday(year, 9, 1, 2));
    add("Veterans Day", new Date(year, 10, 11));
    add("Thanksgiving", nthWeekday(year, 10, 4, 4));
    add("Christmas Day", new Date(year, 11, 25));
    return list;
  }
  function holidayMap(y1, y2){
    var map = {};
    for(var y = y1; y <= y2; y++){
      fedHolidays(y).forEach(function(h){
        map[h.date.toDateString()] = h.name;
      });
    }
    return map;
  }
  function fmtDate(d){
    return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  function fmtShort(d){
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  function run(){
    var out = document.getElementById("bd-result");
    var s = document.getElementById("bd-start").value;
    var e = document.getElementById("bd-end").value;
    if(!s || !e){ out.innerHTML = '<p class="result-note">Please pick both dates.</p>'; return; }
    var d1 = new Date(s + "T00:00:00"), d2 = new Date(e + "T00:00:00");
    if(isNaN(d1) || isNaN(d2)){ out.innerHTML = '<p class="result-note">Please enter valid dates.</p>'; return; }
    if(d2 < d1){ var t = d1; d1 = d2; d2 = t; }
    var inc = document.getElementById("bd-include-end").checked;
    var exclHol = document.getElementById("bd-holidays").checked;
    var hols = holidayMap(d1.getFullYear() - 1, d2.getFullYear() + 1);
    var calDays = Math.round((d2 - d1) / DAY);
    var business = 0, weekend = 0, holCount = 0, holList = [];
    var cur = new Date(d1);
    if(!inc){ cur.setDate(cur.getDate() + 1); }
    while(cur <= d2){
      var wd = cur.getDay();
      if(wd === 0 || wd === 6){ weekend += 1; }
      else if(exclHol && hols[cur.toDateString()]){
        holCount += 1;
        holList.push({ name: hols[cur.toDateString()], date: new Date(cur) });
      }
      else { business += 1; }
      cur.setDate(cur.getDate() + 1);
    }
    var holHtml = "";
    if(exclHol){
      if(holList.length){
        holHtml = '<p class="result-note">Holidays subtracted: <strong>' + holList.map(function(h){ return h.name + " (" + fmtShort(h.date) + ")"; }).join(", ") + '</strong>.</p>';
      } else {
        holHtml = '<p class="result-note">No US federal holidays fall in this range.</p>';
      }
    } else {
      holHtml = '<p class="result-note">US federal holidays were not subtracted (option off).</p>';
    }
    out.innerHTML =
      '<div class="result-grid">' +
      '<div class="result-box"><span class="num">' + business.toLocaleString() + '</span><span class="lbl">Business days</span></div>' +
      '<div class="result-box"><span class="num">' + calDays.toLocaleString() + '</span><span class="lbl">Calendar days</span></div>' +
      '<div class="result-box"><span class="num">' + weekend.toLocaleString() + '</span><span class="lbl">Weekend days</span></div>' +
      '<div class="result-box"><span class="num">' + holCount.toLocaleString() + '</span><span class="lbl">Holidays subtracted</span></div>' +
      '</div>' +
      '<p class="result-note">From <strong>' + fmtDate(d1) + '</strong> to <strong>' + fmtDate(d2) + '</strong>' + (inc ? ' (both dates counted)' : '') + '.</p>' +
      holHtml;
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("from", s); u.searchParams.set("to", e);
      if(inc){ u.searchParams.set("inc", "1"); } else { u.searchParams.delete("inc"); }
      if(!exclHol){ u.searchParams.set("nohol", "1"); } else { u.searchParams.delete("nohol"); }
      window.history.replaceState(null, "", u.toString());
    }catch(e2){}
  }

  document.getElementById("bd-btn").addEventListener("click", run);
  document.getElementById("bd-share-btn").addEventListener("click", function(){
    var msg = document.getElementById("bd-share-msg");
    function done(t){ if(msg){ msg.textContent = t; } }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(window.location.href).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
    }else{ done("Copy this page URL to share."); }
  });

  try{
    var qp = new URLSearchParams(window.location.search);
    var qfrom = qp.get("from"), qto = qp.get("to");
    var dateRe = /^\d{4}-\d{2}-\d{2}$/;
    if(qfrom && qto && dateRe.test(qfrom) && dateRe.test(qto)){
      document.getElementById("bd-start").value = qfrom;
      document.getElementById("bd-end").value = qto;
      if(qp.get("inc") === "1"){ document.getElementById("bd-include-end").checked = true; }
      if(qp.get("nohol") === "1"){ document.getElementById("bd-holidays").checked = false; }
      run();
    }
  }catch(e3){}
})();
</script>

{% include related-guides.html %}
