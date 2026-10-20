---
layout: default
title: Age Calculator Between Two Dates - Date Difference Tool
description: Find the age between two dates in years, months, and days. Count exact days, weeks, and months between any two dates, or add days to a date. Free.
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
            "name": "How do I calculate age between two dates in years, months, and days?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Count full years from the earlier date first, then full months, then leftover days. If the day of the month would go negative, borrow days from the previous month's actual length. Example: August 22, 1985 to May 15, 1990 is 4 years, 8 months, 23 days."
            }
          },
          {
            "@type": "Question",
            "name": "Is the end date included in the count?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The end date is counted but the start date is not. This is the standard exclusive convention: March 1 to March 2 is 1 day. If you need both days counted, add 1 to the result. The two answers always differ by exactly one day."
            }
          },
          {
            "@type": "Question",
            "name": "Why do two date calculators give different answers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Two causes explain nearly every disagreement. First, the counting basis: some tools count the start day and some do not, which shifts every answer by exactly one. Second, the time zone: a days-until count can differ by a full day depending on where the tool thinks today is."
            }
          },
          {
            "@type": "Question",
            "name": "How are February 29 birthdays handled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In non-leap years this calculator counts a February 29 birthday on March 1. A leap year is any year divisible by 4, except century years, which must also be divisible by 400. So 2024 and 2000 were leap years, but 1900 was not and 2100 will not be."
            }
          },
          {
            "@type": "Question",
            "name": "Is an age gap calculator the same as an age difference calculator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Age gap and age difference mean the same thing: the time between two people's birth dates. This calculator also works for any two calendar dates, so you can find someone's age on a specific day or measure the time between two events."
            }
          },
          {
            "@type": "Question",
            "name": "How do I find out who is older and by how much?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enter both birth dates in any order. The person born on the earlier date is older, and the result shows exactly how much older in years, months, and days. For example, January 1, 1985 and June 15, 1990 give a gap of 5 years, 5 months, and 14 days."
            }
          },
          {
            "@type": "Question",
            "name": "How do I add days or months to a date?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Switch to add/subtract mode, pick a start date, and enter the days to add or subtract. Months follow calendar logic in most tools: adding one month to January 31 lands at the end of February, not in March."
            }
          },
          {
            "@type": "Question",
            "name": "Does my time zone change the result?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. This calculator works on calendar days only, so the result is identical everywhere in the world. Time zones only matter when a specific time of day is involved. If another tool shows a different answer, its time zone or counting basis is the likely cause."
            }
          }
        ]
      }
    ]
  }
related_posts:
  - /blog/how-to-count-days-between-dates/
  - /blog/how-many-days-in-a-year/
  - /blog/what-is-a-leap-year/
  - /blog/how-to-calculate-age/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <h1>Date Difference <span class="accent">Calculator</span></h1>
    <p class="lead">An age calculator between two dates: find the exact years, months, and days between any two dates, or count total days, weeks, and months.</p>
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
      <p class="result-note" style="font-size:.82rem;margin-top:12px">Counts the end date, not the start date. Uses calendar days only, so time zones never affect the result.</p>
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

## Age calculator between two dates: what does it mean?

The age between two dates is the exact calendar time from the earlier date to the later one, expressed in years, months, and days. The same gap can also be read as total days, weeks, or business days. Use it for age gaps between two people, someone's age on a specific day, tenure, or the time between any two events.

## How to use this calculator

**Date difference mode:** pick a start date and an end date, then click Calculate Difference. As an age calculator between two dates, it shows the gap in years, months, and days, plus total days and weeks.

**Add/subtract mode:** pick a starting date, enter how many days to add (or a negative number to subtract), and get the resulting date. Handy for questions like "what date is 90 days from today?"

## How the calculator counts years, months, and days

The tool uses the borrowing method, the same one taught for manual age math:

1. Count full years from the earlier date first.
2. Then count full months from where the years stopped.
3. Then count the leftover days.
4. If the day of the month would go negative, borrow days from the previous month's actual length (28, 29, 30, or 31, never an average).

It never uses approximations like 365.25 days per year, so month ends and leap years come out exact. For the full manual method, see our guide on [how to count days between two dates]({{ '/blog/how-to-count-days-between-dates/' | relative_url }}).

## Worked example: August 22, 1985 to May 15, 1990

Four years from August 22, 1985 reach August 22, 1989. Eight more months reach April 22, 1990. Then 23 days reach May 15, 1990. The answer is **4 years, 8 months, 23 days**, or 1,727 days in total.

More verified examples:

| Earlier date | Later date | Years, months, days | Total days |
|---|---|---|---|
| January 15, 1990 | October 19, 2026 | 36 years, 9 months, 4 days | 13,426 |
| February 29, 2000 | February 29, 2024 | 24 years exactly | 8,766 |
| December 25, 2019 | July 4, 2026 | 6 years, 6 months, 9 days | 2,383 |
| January 1, 2026 | December 31, 2026 | 11 months, 30 days | 364 |
| January 1, 1985 | June 15, 1990 | 5 years, 5 months, 14 days | 1,991 |

## Inclusive vs exclusive: the one-day trap

This calculator counts exclusive of the start date: January 1 to January 2 is 1 day, and the same date twice is 0 days. This is the standard convention in spreadsheets and most date tools, and it matches how US federal courts count time periods. Federal Rule of Civil Procedure 6(a)(1) directs courts to "exclude the day of the event that triggers the period" and "count every day, including intermediate Saturdays, Sundays, and legal holidays" ([uscode.house.gov](https://uscode.house.gov/view.xhtml?path=&req=granuleid%3AUSC-1999-title28a-node79-node85-rule6&f=&fq=&num=0&hl=false&edition=1999)).

When does it bite? Whenever you count calendar days touched rather than gaps:

- A hotel stay from Friday to Sunday is 2 nights but touches 3 calendar days.
- A "7-day challenge" starting Monday ends Sunday: the gap is 6 days, but the challenge covers 7.
- A plan for "5 working days starting Monday" means Monday through Friday inclusive.

Rule of thumb: measuring a gap, use the result as is. Counting days you will be somewhere or doing something, add 1.

## Why two calculators can show different answers

Nearly every disagreement comes down to two causes:

1. **Counting basis.** Some tools count the start day, some do not. That shifts every answer by exactly one day, nothing more.
2. **Time zone of "today."** If it is 9 PM Tuesday in New York, it is already Wednesday in London. A "days until" count can differ by a full day depending on where the tool thinks today is.

Before trusting any number, check both. This page states its basis directly under the tool, and because it counts whole calendar days, time zones cannot move its answers.

## Edge cases the calculator handles

- **Leap years:** fully included in day counts. A leap year is any year divisible by 4, except century years, which must also be divisible by 400. So 2024 and 2000 were leap years, but 1900 was not and 2100 will not be. Learn more in [what is a leap year]({{ '/blog/what-is-a-leap-year/' | relative_url }}).
- **February 29 birthdays:** counted on March 1 in non-leap years, the most common legal convention.
- **Month ends:** January 31 to March 1 resolves against the real calendar, not a fixed 30-day month.
- **Same date twice:** returns 0 days, 0 weeks, 0 years.
- **Reversed dates:** entering the later date first still gives the correct gap.
- **Spreadsheet warning:** Microsoft Excel intentionally treats 1900 as a leap year (it was not) for compatibility with Lotus 1-2-3, so day counts from spreadsheets can be off by one for dates between January 1, 1900 and March 1, 1900. A dedicated calculator does not have this bug.

## Add and subtract mode, explained

The second mode answers "what date is X days from here?" Enter a positive number to go forward, a negative number to go back:

- 90 days from October 18, 2026 is January 16, 2027 (a Saturday).
- 30 days from October 18, 2026 is November 17, 2026.
- 45 days before October 18, 2026 is September 3, 2026.

This is the mode people reach for with searches like "90 days from today" or "30 days from today." Month and year boundaries, including leap years, are handled automatically.

## Where day counts actually get used

- **Age gaps:** the age difference between two people, or anyone's age on a specific date like a wedding or retirement day. For age from birth to today, the [Age Calculator]({{ '/age-calculator/' | relative_url }}) is faster.
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

</div>

<div class="faq">
<details>
<summary>How do I calculate age between two dates in years, months, and days?</summary>
<p>Count full years from the earlier date first, then full months, then leftover days. If the day of the month would go negative, borrow days from the previous month's actual length. Example: August 22, 1985 to May 15, 1990. Four years reach August 22, 1989, eight more months reach April 22, 1990, and 23 days reach May 15, 1990. The answer is 4 years, 8 months, 23 days.</p>
</details>
<details>
<summary>Is the end date included in the count?</summary>
<p>Yes, the end date is counted but the start date is not. This is the standard exclusive convention used by spreadsheets and most date tools: March 1 to March 2 is 1 day. If your situation needs both days counted, for example a hotel stay priced per day or a period described as "from the 11th to the 25th inclusive," add 1 to the result. The two answers always differ by exactly one day.</p>
</details>
<details>
<summary>Why do two date calculators give different answers?</summary>
<p>Two causes explain nearly every disagreement. First, the counting basis: some tools count the start day and some do not, which shifts every answer by exactly one. Second, the time zone: if it is 9 PM Tuesday in New York it is already Wednesday in London, so a "days until" count can differ by a full day depending on where the tool thinks "today" is. Check both before trusting a number.</p>
</details>
<details>
<summary>How are February 29 birthdays handled?</summary>
<p>In non-leap years this calculator counts a February 29 birthday on March 1, which is the most common legal convention. Leap years are fully included in day counts: a leap year is any year divisible by 4, except century years, which must also be divisible by 400. So 2024 and 2000 were leap years, but 1900 was not and 2100 will not be.</p>
</details>
<details>
<summary>Is an age gap calculator the same as an age difference calculator?</summary>
<p>Yes. Age gap and age difference mean the same thing: the time between two people's birth dates. This calculator also works for any two calendar dates, so you can use it to find someone's age on a specific day or to measure the time between two events.</p>
</details>
<details>
<summary>How do I find out who is older and by how much?</summary>
<p>Enter both birth dates in any order. The person born on the earlier date is older, and the result shows exactly how much older in years, months, and days. For example, birth dates of January 1, 1985 and June 15, 1990 give a gap of 5 years, 5 months, and 14 days.</p>
</details>
<details>
<summary>How do I add days or months to a date?</summary>
<p>Switch to add/subtract mode, pick a start date, and enter the days to add or subtract. Months follow calendar logic in most tools: adding one month to January 31 lands at the end of February, not in March.</p>
</details>
<details>
<summary>Does my time zone change the result?</summary>
<p>No. This calculator works on calendar days only, so the result is identical everywhere in the world. Time zones only matter when a specific time of day is involved, such as a countdown that flips to the next day at midnight. If another tool shows a different answer for the same dates, its time zone or its counting basis is the likely cause.</p>
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

{% include related-guides.html %}
