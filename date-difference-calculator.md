---
layout: default
title: Date Difference Calculator - Days Between Two Dates
description: Count the exact days, weeks, months, and years between any two dates, or add and subtract days from a date. Free date duration calculator, no sign-up.
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

<div class="prose" markdown="1">

## How to use this calculator

**Date difference mode:** pick a start date and an end date, then click Calculate Difference. You get the gap in days, weeks, months, and years.

**Add/subtract mode:** pick a starting date, enter how many days to add (or a negative number to subtract), and get the resulting date. Handy for questions like "what date is 90 days from today?"

## How the counting works

The calculator subtracts the earlier date from the later one and reports full 24-hour days between them. The count is exclusive of the end date, which is the standard convention used by most date tools. If you need an inclusive count (counting both the start and end day), add one to the result.

**Worked example:** from January 1, 2026 to October 18, 2026 is 290 days, which is 41 weeks and 3 days.

## Inclusive vs exclusive: the one-day trap

The calculator counts exclusive of the end date: January 1 to January 2 is 1 day. This is the standard convention in most date tools.

When does it bite? Whenever you count calendar days touched rather than gaps:

- A hotel stay from Friday to Sunday is 2 nights but touches 3 calendar days.
- A "7-day challenge" starting Monday ends Sunday: the gap is 6 days, but the challenge covers 7.
- A plan for "5 working days starting Monday" means Monday through Friday inclusive.

Rule of thumb: if you are measuring a gap, use the result as is. If you are counting days you will be somewhere or doing something, add 1.

## Add and subtract mode, explained

The second mode answers "what date is X days from here?" Enter a positive number to go forward, a negative number to go back:

- 90 days from October 18, 2026 is January 16, 2027 (a Saturday).
- 30 days from October 18, 2026 is November 17, 2026.
- 45 days before October 18, 2026 is September 3, 2026.

This is the mode people reach for with searches like "90 days from today" or "30 days from today". Month and year boundaries, including leap years, are handled automatically.

## Where day counts actually get used

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

## Frequently asked questions

### How do you count days between two dates?

Subtract the earlier date from the later date. This calculator also breaks the gap into weeks, months, and years for easy reading.

### Is the end date included in the count?

By default, no. The count is exclusive of the end date. Add one day if you need both endpoints counted.

### Can I add days to a date?

Yes, use the add/subtract section. Enter a positive number to go forward or a negative number to go back.

## Related tools

- [Age Calculator]({{ '/age-calculator/' | relative_url }}): your exact age from your date of birth
- [Countdown Timer]({{ '/countdown-timer/' | relative_url }}): live countdown to any future date
- [Time Zone Converter]({{ '/time-zone-converter/' | relative_url }}): convert times across the world

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
