---
layout: default
title: Age Calculator - Exact Age in Years, Months and Days
description: Calculate your exact age in years, months, and days. See total days lived, weekday born, and next birthday countdown. Free, no sign-up.
permalink: /age-calculator/
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Age Calculator | AgeDateCalc",
        "url": "https://agedatecalc.com/age-calculator/",
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
                    "name": "How is exact age calculated?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Subtract the birth date from the target date using calendar math: full years first, then full months, then leftover days. If the day of the month would go negative, borrow days from the previous month's actual length. Example: born June 15, 1990, measured October 19, 2026. That is 36 years, 4 months, and 4 days, or 13,275 days in total."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Can I find my age on a specific past or future date?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes. Enter your birth date and change the target date from today to any date you choose. The same borrowing math applies; only the reference date changes."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Which day of the week was I born on?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "The calculator shows the weekday of your birth date automatically. For example, June 15, 1990 was a Friday."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Why do two age calculators show different ages?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Three causes explain nearly every disagreement. First, month-end handling. Second, February 29 birthdays. Third, time-zone effects near midnight when a tool uses timestamps instead of calendar dates."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What happens if I was born on February 29?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Your age still increases every year, not every four years. In non-leap years this calculator counts your birthday on March 1, the most common legal convention. Example: born February 29, 2012, you are still 12 on February 28, 2025, turning 13 on March 1."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Why does subtracting birth years give the wrong age?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Because it ignores whether the birthday has happened yet this year. If this year's birthday has not arrived yet, subtract one from the year difference."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Is my date of birth stored anywhere?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "No. The calculation runs entirely in your browser. Your birth date is never sent to a server, saved in a database, or used for anything except producing your result on the page."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How do I calculate age by hand in years, months, and days?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Write the target date above the birth date as year, month, day. Subtract day from day, borrowing the previous month's actual days if negative. Subtract month from month, borrowing 12 months if negative. Subtract year from year."
                    }
          }
]
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
      <p class="result-note" style="font-size:.82rem;margin-top:12px">Calendar dates only. No time-zone effects. Your birth date never leaves your browser.</p>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated October 2026.</p>

## What is your exact age?

Your exact age is the time from your date of birth to today, counted in full years, then full months, then leftover days. It is more precise than subtracting birth years, because it accounts for whether your birthday has happened yet this year, plus leap years and varying month lengths.

## How to use the Age Calculator

1. Pick your date of birth using the date picker above.
2. Click **Calculate My Age**.
3. Read your exact age, total days lived, the weekday you were born on, and how many days remain until your next birthday.

Want to save or share the result? Use the Copy share link button to get a link that reopens your exact calculation.

## How the calculator counts your age

The tool uses the borrowing method, the same one taught for manual age math:

1. Count full years from the birth date first.
2. Then count full months from where the years stopped.
3. Then count the leftover days.
4. If the day of the month would go negative, borrow days from the previous month's actual length (28, 29, 30, or 31, never an average).

No approximations like 365.25 days per year, so month ends and leap years come out exact. For the full manual method with harder cases, see our guide on [how to calculate your exact age]({{ '/how-to-calculate-age/' | relative_url }}).

## Worked example, step by step

Born **June 15, 1990**, measured **October 19, 2026**:

1. 36 full years reach June 15, 2026.
2. 4 full months reach October 15, 2026.
3. 4 leftover days reach October 19, 2026.

The answer is **36 years, 4 months, 4 days**, or **13,275 days** in total. June 15, 1990 was a Friday.

Notice the borrow in action if we measured one day earlier, on October 14: the day subtraction (14 minus 15) goes negative, so we borrow September's 30 days, giving 3 months and 29 days instead.

## Born on February 29?

Leap day birthdays are handled with the most common convention: in non-leap years, your birthday is counted on March 1. Your total days lived remain exact regardless.

Example: born February 29, 2012, you are still 12 on February 28, 2025, and turn 13 on March 1. A leap year is any year divisible by 4, except century years, which must also be divisible by 400. Learn more in [what is a leap year]({{ '/what-is-a-leap-year/' | relative_url }}).

## Why age calculators sometimes disagree

Three causes explain nearly every disagreement:

1. **Month-end handling.** January 31 to February 28 is counted as one month by some tools and 28 days by others.
2. **February 29 birthdays.** Some tools advance the birthday on February 28 in non-leap years, others on March 1.
3. **Time-zone effects near midnight.** Tools that use timestamps instead of calendar dates can flip the result by a day around midnight. This calculator uses calendar dates only, so time zones cannot move its answers.

## Your age and US retirement milestones

Your birth date also determines your Social Security timeline. Under current law ([SSA.gov](https://www.ssa.gov/benefits/retirement/planner/ageincrease.html)):

| Birth year | Full retirement age |
|---|---|
| 1943-1954 | 66 |
| 1955-1959 | 66 and 2-10 months (graduated) |
| 1960 or later | 67 |

Key ages: **62** is the earliest you can claim (with a permanent reduction), **67** is full retirement age for anyone born in 1960 or later, and **70** is the maximum benefit age, with benefits growing about 8 percent per year past full retirement age. Born in 1990? Your full retirement age is 67, landing in 2057.

## US legal age milestones at a glance

| Age | Milestone |
|---|---|
| 16 | Driving age in most states |
| 18 | Legal majority, voting age |
| 21 | Alcohol purchase age |
| 62 | Earliest Social Security claiming age |
| 65 | Medicare eligibility |
| 67 | Full Social Security retirement age (born 1960+) |
| 70 | Maximum Social Security benefit age |

## Calculate age in Excel or Google Sheets

For a spreadsheet, the DATEDIF function does the same borrowing math:

`=DATEDIF(birth_date, TODAY(), "Y") & " years, " & DATEDIF(birth_date, TODAY(), "YM") & " months, " & DATEDIF(birth_date, TODAY(), "MD") & " days"`

Replace birth_date with the cell holding the date of birth. Note that Excel intentionally treats 1900 as a leap year for old compatibility reasons, so avoid dates before March 1, 1900 in spreadsheets.

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>How is exact age calculated?</summary>
<p>Subtract the birth date from the target date using calendar math: full years first, then full months, then leftover days. If the day of the month would go negative, borrow days from the previous month's actual length. Example: born June 15, 1990, measured October 19, 2026. That is 36 years, 4 months, and 4 days, or 13,275 days in total.</p>
</details>
<details>
<summary>Can I find my age on a specific past or future date?</summary>
<p>Yes. Enter your birth date and change the target date from today to any date you choose. This answers questions like "how old will I be on June 1, 2030?" or "how old was I when I graduated?" The same borrowing math applies; only the reference date changes. For the gap between any two dates, the <a href="/agedatecalc/date-difference-calculator/">Date Difference Calculator</a> is the faster tool.</p>
</details>
<details>
<summary>Which day of the week was I born on?</summary>
<p>The calculator shows the weekday of your birth date automatically. For example, June 15, 1990 was a Friday. The weekday comes from the proleptic Gregorian calendar, the same system your phone's calendar app uses, so it matches any standard calendar.</p>
</details>
<details>
<summary>Why do two age calculators show different ages?</summary>
<p>Three causes explain nearly every disagreement. First, month-end handling: January 31 to February 28 is counted as one month by some tools and 28 days by others. Second, February 29 birthdays, which some tools advance on February 28 and others on March 1. Third, time-zone effects near midnight when a tool uses timestamps instead of calendar dates.</p>
</details>
<details>
<summary>What happens if I was born on February 29?</summary>
<p>Your age still increases every year, not every four years. In non-leap years this calculator counts your birthday on March 1, the most common legal convention (some regions use February 28, so check local rules for official documents). Example: born February 29, 2012, you are still 12 on February 28, 2025, turning 13 on March 1.</p>
</details>
<details>
<summary>Why does subtracting birth years give the wrong age?</summary>
<p>Because it ignores whether the birthday has happened yet this year. Someone born in October 1990 asking in March 2026 gets 36 by subtraction but is actually 35. Always check the month and day: if this year's birthday has not arrived yet, subtract one from the year difference.</p>
</details>
<details>
<summary>Is my date of birth stored anywhere?</summary>
<p>No. The calculation runs entirely in your browser. Your birth date is never sent to a server, saved in a database, or used for anything except producing your result on the page. Closing the tab erases it.</p>
</details>
<details>
<summary>How do I calculate age by hand in years, months, and days?</summary>
<p>Write the target date above the birth date as year, month, day. Subtract day from day, borrowing the previous month's actual days if negative. Subtract month from month, borrowing 12 months if negative. Subtract year from year. Example: October 19, 2026 minus June 15, 1990 gives 36 years, 4 months, 4 days. Our <a href="/agedatecalc/how-to-calculate-age/">step-by-step guide</a> walks through harder cases like month ends.</p>
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
      '<p class="result-note">Your next birthday is on <strong>' + nextStr + '</strong>.</p>' +
      '<p class="result-note"><button type="button" class="btn btn-outline btn-sm" id="age-share-btn">Copy share link</button> <span id="age-share-msg" style="font-size:.85rem"></span></p>';
    try{
      var u = new URL(window.location.href);
      u.searchParams.set("dob", input.value);
      window.history.replaceState(null, "", u.toString());
    }catch(e){}
    var shareBtn = document.getElementById("age-share-btn");
    if(shareBtn){
      shareBtn.addEventListener("click", function(){
        var link = window.location.href;
        var msg = document.getElementById("age-share-msg");
        function done(t){ if(msg){ msg.textContent = t; } }
        if(navigator.clipboard && navigator.clipboard.writeText){
          navigator.clipboard.writeText(link).then(function(){ done("Link copied!"); }, function(){ done("Copy failed, copy the URL manually."); });
        }else{ done("Copy this page URL to share."); }
      });
    }
  }
  document.getElementById("tool-calc-btn").addEventListener("click", function(){ run(); });
  try{
    var qp = new URLSearchParams(window.location.search);
    var qdob = qp.get("dob");
    if(qdob && /^\d{4}-\d{2}-\d{2}$/.test(qdob)){
      var di = document.getElementById("tool-dob");
      di.value = qdob;
      var test = new Date(qdob + "T00:00:00");
      if(!isNaN(test.getTime()) && test <= new Date()){ run(); }
    }
  }catch(e){}
})();
</script>
