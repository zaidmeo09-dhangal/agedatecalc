---
layout: default
meta_title: "Days From Today Calculator: Add or Subtract Days"
description: Find the date 7, 15, 30 or any number of days from today, or count back to a past date. Add days, weeks, months or years with month-end clamping. Free, no sign-up.
permalink: /days-from-today-calculator/
breadcrumb: Days From Today Calculator
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Days From Today Calculator | AgeDateCalc",
        "url": "https://agedatecalc.com/days-from-today-calculator/",
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
            "name": "What is 28 days from today?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "28 days after today. Counted from Friday, November 13, 2026, 28 days from today is Friday, December 11, 2026. Enter today as the start date, 28 as the number, days as the unit, and from now as the direction."
            }
          },
          {
            "@type": "Question",
            "name": "How do I calculate 30 days from today?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pick today as the start date, enter 30, choose days, and pick from now. 30 days from November 13, 2026 is Sunday, December 13, 2026. The same steps work for any number: change 30 to 7, 15, 60, or 90 and the result updates."
            }
          },
          {
            "@type": "Question",
            "name": "What date is 2 weeks from today?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "2 weeks from today is 14 days after today. Counted from Friday, November 13, 2026, 2 weeks from today is Friday, November 27, 2026. Use the 2 weeks from today quick pick above, or enter 14 days from now."
            }
          },
          {
            "@type": "Question",
            "name": "How many days ago was 2020?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It depends on the date in 2020. January 1, 2020 was 2,508 days before November 13, 2026. To find the days since any date in 2020, enter that date and today in the Date Difference Calculator, or count back from today with ago mode here."
            }
          },
          {
            "@type": "Question",
            "name": "Can I subtract days to find a past date?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Choose ago as the direction and the calculator counts back. 30 days ago from November 13, 2026 is Wednesday, October 14, 2026, and 120 days ago is Thursday, July 16, 2026. Weeks, months, and years work the same way in ago mode."
            }
          }
        ]
      }
    ]
  }
related_posts:
  - /blog/how-to-count-days-between-dates/
  - /blog/how-many-days-in-a-year/
  - /blog/how-to-count-business-days-between-two-dates/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="{{ '/' | relative_url }}">Home</a> <span>/</span>
      <a href="{{ '/tools/' | relative_url }}">Tools</a> <span>/</span>
      <span>{{ page.breadcrumb }}</span>
    </nav>
    <h1>Days From Today <span class="accent">Calculator</span></h1>
    <p class="lead">Add or subtract days, weeks, months, or years from any date. Find what date is 7 days from today, 2 weeks from today, or 30 days ago, in one click.</p>
    <div class="calc-card">
      <div class="field">
        <label for="dft-start">Start date</label>
        <input type="date" id="dft-start">
      </div>
      <div class="field">
        <label for="dft-num">Number</label>
        <input type="number" id="dft-num" placeholder="e.g. 7" min="0" max="10000">
      </div>
      <div class="field">
        <label for="dft-unit">Unit</label>
        <select id="dft-unit">
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
      </div>
      <div class="field">
        <label for="dft-dir">Direction</label>
        <select id="dft-dir">
          <option value="from">From now (future)</option>
          <option value="ago">Ago (past)</option>
        </select>
      </div>
      <button class="btn btn-primary btn-block" id="dft-btn" type="button">Calculate Date</button>
      <div id="dft-result"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">The start date defaults to today. Month ends clamp to the last day of the target month, and leap years are handled automatically.</p>
      <p class="result-note"><button type="button" class="btn btn-outline btn-sm" id="dft-share-btn">Copy share link</button> <span id="dft-share-msg" style="font-size:.85rem"></span></p>
      <hr style="border:0;border-top:1px solid var(--border);margin:24px 0">
      <h2 style="font-size:1.15rem;margin-bottom:12px">Quick picks from today</h2>
      <p class="result-note">Tap one to fill the calculator and get the answer instantly.</p>
      <div id="dft-picks" style="display:flex;flex-wrap:wrap;gap:8px">
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="7" data-u="days" data-d="from">7 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="15" data-u="days" data-d="from">15 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="2" data-u="weeks" data-d="from">2 weeks from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="35" data-u="days" data-d="from">35 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="25" data-u="days" data-d="from">25 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="22" data-u="days" data-d="from">22 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="28" data-u="days" data-d="from">28 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="29" data-u="days" data-d="from">29 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="11" data-u="days" data-d="from">11 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="17" data-u="days" data-d="from">17 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="6" data-u="days" data-d="from">6 days from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="4" data-u="months" data-d="from">4 months from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="30" data-u="days" data-d="ago">30 days ago from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="60" data-u="days" data-d="ago">60 days before today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="120" data-u="days" data-d="ago">120 days ago</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="100" data-u="days" data-d="ago">100 days back from today</button>
        <button type="button" class="btn btn-outline btn-sm dft-pick" data-n="33" data-u="months" data-d="ago">33 months ago from today</button>
      </div>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated November 2026.</p>

## How this calculator works

Pick a start date, enter a number, choose a unit, and pick a direction. From now counts forward, ago counts back. The start date defaults to today, so the quick picks answer the exact question in one tap.

- **Days:** plain calendar days added or subtracted, one at a time.
- **Weeks:** 7 days per week, so 2 weeks is 14 days.
- **Months:** calendar months, with the day clamped to the last day of the target month when the month is shorter. 4 months from October 31 is February 28, not March 3.
- **Years:** 12 calendar months at a time. February 29, 2028 plus 1 year is February 28, 2029, because 2029 is not a leap year.

## Worked examples from today

Counted from Friday, November 13, 2026:

| Question | Answer |
|---|---|
| 7 days from today | Friday, November 20, 2026 |
| 15 days from today | Saturday, November 28, 2026 |
| 2 weeks from today | Friday, November 27, 2026 |
| 35 days from today | Friday, December 18, 2026 |
| 25 days from today | Tuesday, December 8, 2026 |
| 22 days from today | Saturday, December 5, 2026 |
| 28 days from today | Friday, December 11, 2026 |
| 29 days from today | Saturday, December 12, 2026 |
| 11 days from today | Tuesday, November 24, 2026 |
| 17 days from today | Monday, November 30, 2026 |
| 6 days from today | Thursday, November 19, 2026 |
| 4 months from today | Saturday, March 13, 2027 |
| 30 days ago from today | Wednesday, October 14, 2026 |
| 60 days before today | Monday, September 14, 2026 |
| 120 days ago | Thursday, July 16, 2026 |
| 100 days back from today | Wednesday, August 5, 2026 |
| 33 months ago from today | Tuesday, February 13, 2024 |

## Month ends and leap years

Adding months is the only case where the answer needs a rule. Months have different lengths, so adding months to the 31st can land on a date that does not exist. This calculator clamps to the last day of the target month: 4 months from October 31, 2026 is February 28, 2027, and January 31 plus 1 month is February 28 in a common year, or February 29 in a leap year.

Leap years work the same way. February 29, 2028 plus 1 year is February 28, 2029, because 2029 has no February 29. Adding 4 years from February 29, 2028 lands exactly on February 29, 2032.

## Where "days from today" gets used

- **Deadlines:** "in 7 days", "in 30 days", or "in 2 weeks" on a contract means a calendar date, and this tool gives it instantly.
- **Travel:** a 14-day trip starting today ends 2 weeks from today. Count back from a return flight the same way.
- **Trials and subscriptions:** a 30-day free trial started today ends 30 days from today. Set the reminder a few days earlier.
- **Payroll and notice periods:** a 60-day notice or a 90-day probation period lands on a fixed date. Ago mode answers "what date was 60 days before today?" for backdated paperwork.
- **Anniversaries and milestones:** 100 days back from today or 33 months ago from today are the round numbers people search for when marking a start date.

To measure the gap between two fixed dates instead of counting from today, use the [Date Difference Calculator]({{ '/date-difference-calculator/' | relative_url }}). To count only workdays, use the [Business Days Calculator]({{ '/business-days-calculator/' | relative_url }}).

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>What is 28 days from today?</summary>
<p>28 days after today. Counted from Friday, November 13, 2026, 28 days from today is Friday, December 11, 2026. Enter today as the start date, 28 as the number, days as the unit, and from now as the direction.</p>
</details>
<details>
<summary>How do I calculate 30 days from today?</summary>
<p>Pick today as the start date, enter 30, choose days, and pick from now. 30 days from November 13, 2026 is Sunday, December 13, 2026. The same steps work for any number: change 30 to 7, 15, 60, or 90 and the result updates.</p>
</details>
<details>
<summary>What date is 2 weeks from today?</summary>
<p>2 weeks from today is 14 days after today. Counted from Friday, November 13, 2026, 2 weeks from today is Friday, November 27, 2026. Use the 2 weeks from today quick pick above, or enter 14 days from now.</p>
</details>
<details>
<summary>How many days ago was 2020?</summary>
<p>It depends on the date in 2020. January 1, 2020 was 2,508 days before November 13, 2026. To find the days since any date in 2020, enter that date and today in the <a href="/date-difference-calculator/">Date Difference Calculator</a>, or count back from today with ago mode here.</p>
</details>
<details>
<summary>Can I subtract days to find a past date?</summary>
<p>Yes. Choose ago as the direction and the calculator counts back. 30 days ago from November 13, 2026 is Wednesday, October 14, 2026, and 120 days ago is Thursday, July 16, 2026. Weeks, months, and years work the same way in ago mode.</p>
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
  var DAY = 86400000;

  function fmtDate(d){
    return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }
  function addMonths(d, n){
    var y = d.getFullYear(), m = d.getMonth() + n;
    var ny = y + Math.floor(m / 12), nm = ((m % 12) + 12) % 12;
    var last = new Date(ny, nm + 1, 0).getDate();
    return new Date(ny, nm, Math.min(d.getDate(), last));
  }
  function addUnits(d, n, unit){
    if(unit === "weeks"){ return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n * 7); }
    if(unit === "months"){ return addMonths(d, n); }
    if(unit === "years"){ return addMonths(d, n * 12); }
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  }
  function unitLabel(n, unit){
    if(n === 1){ return unit === "days" ? "day" : unit.slice(0, -1); }
    return unit;
  }

  function run(){
    var out = document.getElementById("dft-result");
    var s = document.getElementById("dft-start").value;
    var nRaw = document.getElementById("dft-num").value;
    var n = parseInt(nRaw, 10);
    var unit = document.getElementById("dft-unit").value;
    var dir = document.getElementById("dft-dir").value;
    if(!s){ out.innerHTML = '<p class="result-note">Please pick a start date.</p>'; return; }
    var start = new Date(s + "T00:00:00");
    if(isNaN(start.getTime())){ out.innerHTML = '<p class="result-note">Please enter a valid start date.</p>'; return; }
    if(isNaN(n) || n < 0 || n > 10000){ out.innerHTML = '<p class="result-note">Please enter a number from 0 to 10000.</p>'; return; }
    var signed = dir === "ago" ? -n : n;
    var result = addUnits(start, signed, unit);
    var daysAway = Math.round((result - start) / DAY);
    var away = Math.abs(daysAway);
    var phrase = n + " " + unitLabel(n, unit) + (dir === "ago" ? " ago" : " from now");
    out.innerHTML =
      '<div class="result-grid">' +
      '<div class="result-box"><span class="num">' + fmtDate(result) + '</span><span class="lbl">' + phrase + '</span></div>' +
      '<div class="result-box"><span class="num">' + away.toLocaleString() + '</span><span class="lbl">' + (dir === "ago" ? "Days in the past" : "Days away") + '</span></div>' +
      '</div>' +
      '<p class="result-note">' + n + " " + unitLabel(n, unit) + (dir === "ago" ? " before " : " after ") + "<strong>" + fmtDate(start) + "</strong> is <strong>" + fmtDate(result) + "</strong>.</p>";
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("start", s);
      u.searchParams.set("n", String(n));
      u.searchParams.set("unit", unit);
      u.searchParams.set("dir", dir);
      window.history.replaceState(null, "", u.toString());
    }catch(e){}
  }

  document.getElementById("dft-btn").addEventListener("click", run);
  document.querySelectorAll(".dft-pick").forEach(function(btn){
    btn.addEventListener("click", function(){
      document.getElementById("dft-num").value = btn.getAttribute("data-n");
      document.getElementById("dft-unit").value = btn.getAttribute("data-u");
      document.getElementById("dft-dir").value = btn.getAttribute("data-d");
      run();
    });
  });
  document.getElementById("dft-share-btn").addEventListener("click", function(){
    var msg = document.getElementById("dft-share-msg");
    function done(t){ if(msg){ msg.textContent = t; } }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(window.location.href).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
    }else{ done("Copy this page URL to share."); }
  });

  try{
    var startInput = document.getElementById("dft-start");
    var now = new Date();
    var todayStr = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
    startInput.value = todayStr;
    var qp = new URLSearchParams(window.location.search);
    var qs = qp.get("start"), qn = qp.get("n"), qu = qp.get("unit"), qd = qp.get("dir");
    var dateRe = /^\d{4}-\d{2}-\d{2}$/;
    if(qs && dateRe.test(qs)){ startInput.value = qs; }
    if(qn && /^\d+$/.test(qn) && parseInt(qn, 10) <= 10000){ document.getElementById("dft-num").value = qn; }
    if(qu && ["days", "weeks", "months", "years"].indexOf(qu) !== -1){ document.getElementById("dft-unit").value = qu; }
    if(qd && ["from", "ago"].indexOf(qd) !== -1){ document.getElementById("dft-dir").value = qd; }
    if(qn){ run(); }
  }catch(e2){}
})();
</script>

{% include related-guides.html %}
