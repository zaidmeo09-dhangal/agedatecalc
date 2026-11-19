---
layout: default
meta_title: "Time Duration Calculator: Hours Between Two Times"
description: Find the time duration between two times in hours, minutes and seconds. Add or subtract time, handle overnight spans. Free, no sign-up.
permalink: /time-duration-calculator/
breadcrumb: Time Duration Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Time Duration Calculator | AgeDateCalc",
        "url": "https://agedatecalc.com/time-duration-calculator/",
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
            "name": "How do I calculate the time duration between two times?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the start time and the end time. 9:00 AM to 5:00 PM is 8 hours. If the end time is earlier than the start time, the calculator counts it as the next day."
            }
          },
          {
            "@type": "Question",
            "name": "What is the time duration from 10 PM to 6 AM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "8 hours. 10:00 PM to 6:00 AM the next day is 8 hours, counted overnight."
            }
          },
          {
            "@type": "Question",
            "name": "How do I add time durations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Add the hours and the minutes separately, then carry every 60 minutes into an hour. 4 hours 15 minutes plus 3 hours 45 minutes is 8 hours, because 15 plus 45 is 60 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate time duration in Excel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Put the start time in A1 and the end time in B1, then use =(B1-A1)*24 for the total in decimal hours. For an h:mm display use =TEXT(B1-A1,\"[h]:mm\"), which keeps hours past 24."
            }
          },
          {
            "@type": "Question",
            "name": "What is the duration between 8:30 AM and 12:45 PM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "4 hours 15 minutes, or 255 minutes, or 4.25 hours."
            }
          },
          {
            "@type": "Question",
            "name": "Does the calculator handle overnight spans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If the end time is earlier than the start time, it counts as the next day and says so in the result. 11:45 PM to 12:15 AM is 30 minutes."
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate a datetime difference?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter the date and time for both points. November 19, 2026 9:00 AM to November 21, 2026 5:30 PM is 2 days 8 hours 30 minutes, which is 56.5 hours or 3,390 minutes."
            }
          }
        ]
      }
    ]
  }
related_posts:
  - /blog/how-to-count-days-between-dates/
  - /blog/am-pm-vs-24-hour-clock/
  - /blog/when-does-daylight-saving-time-end/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
      <a href="{{ '/tools/' | relative_url }}">Tools</a> <span>/</span>
      <span>{{ page.breadcrumb }}</span>
    </nav>
    <h1>Time Duration <span class="accent">Calculator</span></h1>
    <p class="lead">Find the time between two times in hours, minutes and seconds. Measure a shift, a flight, or a meeting, including overnight spans.</p>
    <div class="calc-card">
      <div class="field">
        <label for="tdc-start">Start date and time</label>
        <input type="datetime-local" id="tdc-start">
      </div>
      <div class="field">
        <label for="tdc-end">End date and time</label>
        <input type="datetime-local" id="tdc-end">
      </div>
      <button class="btn btn-primary btn-block" id="tdc-btn" type="button">Calculate Duration</button>
      <div id="tdc-result"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">If the end time is earlier than the start time, it counts as the next day, and the result says so. Seconds are included when the times have them.</p>
      <p class="result-note"><button type="button" class="btn btn-outline btn-sm" id="tdc-share-btn">Copy share link</button> <span id="tdc-share-msg" style="font-size:.85rem"></span></p>
      <hr style="border:0;border-top:1px solid var(--border);margin:24px 0">
      <h2 style="font-size:1.15rem;margin-bottom:12px">Quick picks</h2>
      <p class="result-note">Tap one to fill the calculator and get the answer instantly.</p>
      <div id="tdc-picks" style="display:flex;flex-wrap:wrap;gap:8px">
        <button type="button" class="btn btn-outline btn-sm tdc-pick" data-sh="09:00" data-eh="17:00" data-overnight="0">9 AM to 5 PM</button>
        <button type="button" class="btn btn-outline btn-sm tdc-pick" data-sh="22:00" data-eh="06:00" data-overnight="1">10 PM to 6 AM</button>
        <button type="button" class="btn btn-outline btn-sm tdc-pick" data-sh="08:30" data-eh="12:45" data-overnight="0">8:30 AM to 12:45 PM</button>
        <button type="button" class="btn btn-outline btn-sm tdc-pick" data-sh="07:00" data-eh="15:30" data-overnight="0">7 AM to 3:30 PM</button>
      </div>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated November 2026.</p>

## How this calculator works

Enter a start date and time and an end date and time. The calculator subtracts the start from the end and shows the duration in days, hours, minutes and seconds, plus the totals in hours, minutes and seconds.

- **Same day:** 9:00 AM to 5:00 PM is 8 hours.
- **Overnight:** if the end time is earlier than the start time, it counts as the next day. 10:00 PM to 6:00 AM is 8 hours, not a negative number.
- **Across days:** pick different dates and the result includes full days. November 19, 2026 9:00 AM to November 21, 2026 5:30 PM is 2 days 8 hours 30 minutes.
- **Totals:** the same duration is also shown as total hours with decimals, total minutes and total seconds, for payroll and billing.

## Worked examples

| Start to end | Duration |
|---|---|
| 9:00 AM to 5:00 PM | 8 hours |
| 10:00 PM to 6:00 AM next day | 8 hours |
| 8:30 AM to 12:45 PM | 4 hours 15 minutes |
| 7:00 AM to 3:30 PM | 8 hours 30 minutes |
| 11:45 PM to 12:15 AM next day | 30 minutes |
| Nov 19, 2026 9:00 AM to Nov 21, 2026 5:30 PM | 2 days 8 hours 30 minutes |

The long example is 56.5 hours in total, or 3,390 minutes, or 203,400 seconds. The 8:30 AM to 12:45 PM example is 4.25 hours, or 255 minutes, or 15,300 seconds.

## Overnight spans

A duration that crosses midnight is the case most calculators get wrong. This one counts the end as the next day whenever it is earlier than the start, and says so in the result.

- **Night shift:** 10:00 PM to 6:00 AM is 8 hours.
- **Short hop past midnight:** 11:45 PM to 12:15 AM is 30 minutes.
- **Two nights:** pick the end date two days after the start date and the full days are included in the result.
- **Time zones:** this calculator measures clock time, not time zones. To move a time from one zone to another, use the [Time Zone Converter]({{ '/time-zone-converter/' | relative_url }}).

## Calculate a datetime difference

This tool takes a date and a time for both points, so it also answers datetime differences. Enter the start datetime and the end datetime and the result covers the full span: November 19, 2026 9:00 AM to November 21, 2026 5:30 PM is 2 days 8 hours 30 minutes, which is 56.5 hours or 3,390 minutes. For a gap between two dates with no times, the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}) gives the answer in years, months and days.

## Adding time durations

To add two durations, add the hours and the minutes separately, then carry every 60 minutes into an hour.

- 4 hours 15 minutes plus 3 hours 45 minutes is 8 hours, because 15 plus 45 is 60 minutes.
- 8 hours 30 minutes a day for 5 days is 42 hours 30 minutes, because 8.5 times 5 is 42.5 hours.
- 45 minutes plus 30 minutes is 1 hour 15 minutes.

To time a task live instead of adding up fixed times, use the [Stopwatch]({{ '/stopwatch/' | relative_url }}). To count only workdays between two dates, use the [Business Days Calculator]({{ '/business-days-calculator/' | relative_url }}).

## Time duration in Excel

Put the start time in cell A1 and the end time in cell B1.

`=B1-A1`

Format the result as time to see h:mm. For the total in decimal hours, use:

`=(B1-A1)*24`

For a display that keeps hours past 24, use:

`=TEXT(B1-A1,"[h]:mm")`

The square brackets around h stop Excel from resetting the hour count after 24 hours. The same formulas work in Google Sheets. If the end time is on the next day, put the full date and time in both cells, not just the time, or the result goes negative.

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>How do I calculate the time duration between two times?</summary>
<p>Enter the start time and the end time. 9:00 AM to 5:00 PM is 8 hours. If the end time is earlier than the start time, the calculator counts it as the next day.</p>
</details>
<details>
<summary>What is the time duration from 10 PM to 6 AM?</summary>
<p>8 hours. 10:00 PM to 6:00 AM the next day is 8 hours, counted overnight.</p>
</details>
<details>
<summary>How do I add time durations?</summary>
<p>Add the hours and the minutes separately, then carry every 60 minutes into an hour. 4 hours 15 minutes plus 3 hours 45 minutes is 8 hours, because 15 plus 45 is 60 minutes.</p>
</details>
<details>
<summary>How do I calculate time duration in Excel?</summary>
<p>Put the start time in A1 and the end time in B1, then use =(B1-A1)*24 for the total in decimal hours. For an h:mm display use =TEXT(B1-A1,"[h]:mm"), which keeps hours past 24.</p>
</details>
<details>
<summary>What is the duration between 8:30 AM and 12:45 PM?</summary>
<p>4 hours 15 minutes, or 255 minutes, or 4.25 hours.</p>
</details>
<details>
<summary>Does the calculator handle overnight spans?</summary>
<p>Yes. If the end time is earlier than the start time, it counts as the next day and says so in the result. 11:45 PM to 12:15 AM is 30 minutes.</p>
</details>
<details>
<summary>How do I calculate a datetime difference?</summary>
<p>Enter the date and time for both points. November 19, 2026 9:00 AM to November 21, 2026 5:30 PM is 2 days 8 hours 30 minutes, which is 56.5 hours or 3,390 minutes.</p>
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
  <a class="tool-card" href="{{ '/stopwatch/' | relative_url }}">
    <div class="tool-icon">⏱️</div>
    <h3>Stopwatch</h3>
    <p>Time anything live, with laps.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/time-zone-converter/' | relative_url }}">
    <div class="tool-icon">🌍</div>
    <h3>Time Zone Converter</h3>
    <p>Convert any time to another time zone.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
  <a class="tool-card" href="{{ '/business-days-calculator/' | relative_url }}">
    <div class="tool-icon">💼</div>
    <h3>Business Days Calculator</h3>
    <p>Count workdays between two dates.</p>
    <span class="go">Use tool &rarr;</span>
  </a>
</div>
</div>

<script>
(function(){
  "use strict";

  function fmtDT(d){
    return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) + ", " + d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }
  function plural(n, word){
    return n + " " + word + (n === 1 ? "" : "s");
  }
  function fmtDuration(totalSeconds){
    var days = Math.floor(totalSeconds / 86400);
    var rem = totalSeconds % 86400;
    var hours = Math.floor(rem / 3600);
    rem = rem % 3600;
    var mins = Math.floor(rem / 60);
    var secs = rem % 60;
    var parts = [];
    if(days > 0){ parts.push(plural(days, "day")); }
    if(hours > 0){ parts.push(plural(hours, "hour")); }
    if(mins > 0){ parts.push(plural(mins, "minute")); }
    if(secs > 0){ parts.push(plural(secs, "second")); }
    if(parts.length === 0){ return "0 seconds"; }
    return parts.join(" ");
  }

  function run(){
    var out = document.getElementById("tdc-result");
    var sRaw = document.getElementById("tdc-start").value;
    var eRaw = document.getElementById("tdc-end").value;
    if(!sRaw || !eRaw){ out.innerHTML = '<p class="result-note">Please pick a start and an end date and time.</p>'; return; }
    var start = new Date(sRaw);
    var end = new Date(eRaw);
    if(isNaN(start.getTime()) || isNaN(end.getTime())){ out.innerHTML = '<p class="result-note">Please enter valid dates and times.</p>'; return; }
    var overnight = false;
    if(end <= start){
      end = new Date(end.getTime() + 86400000);
      overnight = true;
    }
    var totalSeconds = Math.round((end - start) / 1000);
    var totalHours = totalSeconds / 3600;
    var totalMinutes = totalSeconds / 60;
    var dur = fmtDuration(totalSeconds);
    var note = overnight ? '<p class="result-note">End time was earlier than the start time, so it counts as the next day.</p>' : "";
    out.innerHTML =
      '<div class="result-grid">' +
      '<div class="result-box"><span class="num">' + dur + '</span><span class="lbl">Duration</span></div>' +
      '<div class="result-box"><span class="num">' + totalHours.toLocaleString(undefined, { maximumFractionDigits: 2 }) + '</span><span class="lbl">Total hours</span></div>' +
      '<div class="result-box"><span class="num">' + Math.round(totalMinutes).toLocaleString() + '</span><span class="lbl">Total minutes</span></div>' +
      '</div>' +
      '<p class="result-note">From <strong>' + fmtDT(start) + '</strong> to <strong>' + fmtDT(end) + '</strong> is <strong>' + dur + '</strong> (' + totalSeconds.toLocaleString() + ' seconds).</p>' + note;
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("start", sRaw);
      u.searchParams.set("end", eRaw);
      window.history.replaceState(null, "", u.toString());
    }catch(e){}
  }

  function todayStr(offsetDays){
    var d = new Date();
    d.setDate(d.getDate() + (offsetDays || 0));
    var p = function(n){ return String(n).padStart(2, "0"); };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
  }

  document.getElementById("tdc-btn").addEventListener("click", run);
  document.querySelectorAll(".tdc-pick").forEach(function(btn){
    btn.addEventListener("click", function(){
      var sh = btn.getAttribute("data-sh");
      var eh = btn.getAttribute("data-eh");
      var over = btn.getAttribute("data-overnight") === "1";
      document.getElementById("tdc-start").value = todayStr(0) + "T" + sh;
      document.getElementById("tdc-end").value = todayStr(over ? 1 : 0) + "T" + eh;
      run();
    });
  });
  document.getElementById("tdc-share-btn").addEventListener("click", function(){
    var msg = document.getElementById("tdc-share-msg");
    function done(t){ if(msg){ msg.textContent = t; } }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(window.location.href).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
    }else{ done("Copy this page URL to share."); }
  });

  try{
    var startInput = document.getElementById("tdc-start");
    var endInput = document.getElementById("tdc-end");
    startInput.value = todayStr(0) + "T09:00";
    endInput.value = todayStr(0) + "T17:00";
    var qp = new URLSearchParams(window.location.search);
    var qs = qp.get("start"), qe = qp.get("end");
    var dtRe = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/;
    if(qs && dtRe.test(qs)){ startInput.value = qs; }
    if(qe && dtRe.test(qe)){ endInput.value = qe; }
    if(qs || qe){ run(); }
  }catch(e2){}
})();
</script>

{% include related-guides.html %}
