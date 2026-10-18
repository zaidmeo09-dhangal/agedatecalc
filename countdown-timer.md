---
layout: default
title: Countdown Timer - Online Countdown to Any Date
description: Set any future date and time to start a live online countdown. See days, hours, minutes, and seconds remaining until birthdays, exams, holidays, and launches. Free, no sign-up.
permalink: /countdown-timer/
schema: |
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I start a countdown?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pick the target date and time, give your countdown a name if you like, and click Start Countdown. The timer ticks live in days, hours, minutes, and seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Does the countdown keep running if I close the tab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The countdown is calculated from your target date each time the page loads, so reopening the page shows the correct remaining time. It does not send alerts while closed."
        }
      },
      {
        "@type": "Question",
        "name": "Can I count down to a past date?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timer needs a future date. If the date has already passed, it will tell you the moment has arrived instead of showing negative time."
        }
      }
    ]
  }
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <h1>Countdown <span class="accent">Timer</span></h1>
    <p class="lead">Pick a future date and watch the time tick down, live. Perfect for birthdays, exams, holidays, and launches.</p>
    <div class="calc-card">
      <div class="field">
        <label for="cd-name">Event name (optional)</label>
        <input type="text" id="cd-name" placeholder="e.g. My birthday">
      </div>
      <div class="field">
        <label for="cd-target">Target date and time</label>
        <input type="datetime-local" id="cd-target">
      </div>
      <button class="btn btn-primary btn-block" id="cd-btn" type="button">Start Countdown</button>
      <div id="cd-result" style="margin-top:20px"></div>
    </div>
  </div>
</section>

<div class="prose">

## How to use the Countdown Timer

1. Enter your event name (optional, it just makes the display nicer).
2. Pick the target date and time.
3. Click **Start Countdown**. The timer updates every second with days, hours, minutes, and seconds remaining.

Tip: if you leave and come back, the page recalculates from your target date, so the remaining time is always correct.

## Ideas for countdowns

- **Birthdays and anniversaries:** build excitement as the big day approaches.
- **Exams and deadlines:** keep study pressure visible and real.
- **Holidays and vacations:** watch the days melt away.
- **Product launches:** share the moment with your audience.

## Frequently asked questions

### How do I start a countdown?

Pick the target date and time and click Start Countdown. The display ticks live.

### Does the countdown keep running if I close the tab?

The remaining time is recalculated from your target date whenever the page loads, so it is always correct when you return. It does not send notifications while closed.

### Can I count down to a past date?

No, the timer needs a future date. For a date that already passed, it shows that the moment has arrived.

## Related tools

- [Date Difference Calculator](/date-difference-calculator/): how many days until any date
- [Age Calculator](/age-calculator/): your exact age and next birthday countdown
- [Stopwatch](/stopwatch/): time things happening right now

</div>

<script>
(function(){
  "use strict";
  var timer = null;

  function pad(n){ return (n < 10 ? "0" : "") + n; }

  function render(target, name){
    var out = document.getElementById("cd-result");
    var diff = target - new Date();
    if(diff <= 0){
      out.innerHTML = '<p class="result-note"><strong>' + (name || "The moment") + ' has arrived.</strong></p>';
      clearInterval(timer); timer = null;
      return;
    }
    var d = Math.floor(diff / 86400000);
    var h = Math.floor(diff % 86400000 / 3600000);
    var m = Math.floor(diff % 3600000 / 60000);
    var s = Math.floor(diff % 60000 / 1000);
    out.innerHTML =
      (name ? '<p class="result-note" style="text-align:center"><strong>' + name + '</strong></p>' : '') +
      '<div class="result-grid" style="grid-template-columns:repeat(4,1fr)">' +
      '<div class="result-box"><span class="num">' + d + '</span><span class="lbl">Days</span></div>' +
      '<div class="result-box"><span class="num">' + pad(h) + '</span><span class="lbl">Hours</span></div>' +
      '<div class="result-box"><span class="num">' + pad(m) + '</span><span class="lbl">Minutes</span></div>' +
      '<div class="result-box"><span class="num">' + pad(s) + '</span><span class="lbl">Seconds</span></div>' +
      '</div>';
  }

  document.getElementById("cd-btn").addEventListener("click", function(){
    var val = document.getElementById("cd-target").value;
    var name = document.getElementById("cd-name").value.trim().replace(/</g, "&lt;");
    var out = document.getElementById("cd-result");
    if(!val){ out.innerHTML = '<p class="result-note">Please pick a target date and time.</p>'; return; }
    var target = new Date(val);
    if(isNaN(target.getTime())){ out.innerHTML = '<p class="result-note">Please enter a valid date and time.</p>'; return; }
    if(target <= new Date()){ out.innerHTML = '<p class="result-note">Please pick a date in the future.</p>'; return; }
    if(timer){ clearInterval(timer); }
    render(target, name);
    timer = setInterval(function(){ render(target, name); }, 1000);
  });
})();
</script>
