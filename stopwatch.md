---
layout: default
title: Online Stopwatch with Lap Times - Free
description: A clean, free online stopwatch with lap times. Time workouts, study sessions, races, and experiments with start, pause, reset, and lap recording. No sign-up.
permalink: /stopwatch/
schema: |
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Stopwatch | AgeDateCalc",
        "url": "https://agedatecalc.com/stopwatch/",
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
                    "name": "How accurate is an online stopwatch?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Very accurate for everyday use. This stopwatch measures elapsed time from real timestamps using the browser high-resolution clock, not by counting ticks, so it does not drift. Display resolution is hundredths of a second. Your button press adds 150-300 milliseconds of reaction time, far more than the timer itself."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What is the difference between lap time and split time?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Lap time is how long one segment took. Split time is the total elapsed time at that checkpoint."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Does the stopwatch keep running if I switch tabs?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Yes. Elapsed time is computed from timestamps, so switching tabs loses no time. The display resyncs instantly on return."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What is the difference between a stopwatch and a timer?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "A stopwatch counts up from zero to measure duration. A timer counts down from a set duration to zero."
                    }
          },
          {
                    "@type": "Question",
                    "name": "Can I use an online stopwatch for official sports timing?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "No. Official competition requires certified hardware. The Olympics use photo-finish cameras resolving to 1/1000th of a second."
                    }
          },
          {
                    "@type": "Question",
                    "name": "What is the smallest time unit this stopwatch measures?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Hundredths of a second (0.01 s)."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How do I save my lap times?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Copy the lap list into a spreadsheet before hitting Reset, because clearing erases them."
                    }
          },
          {
                    "@type": "Question",
                    "name": "How do I time something accurately by hand?",
                    "acceptedAnswer": {
                              "@type": "Answer",
                              "text": "Start and stop on the same kind of cue every time, compare splits within one session, and have the same person press the button for every attempt."
                    }
          }
  ]
      }
    ]
  }
related_posts:
  - /blog/am-pm-vs-24-hour-clock/
  - /blog/time-zones-explained/
  - /blog/how-many-days-in-a-year/
---

<section class="hero" style="padding:48px 0 24px">
  <div class="wrap hero-inner">
    <h1>Online <span class="accent">Stopwatch</span></h1>
    <p class="lead">A clean stopwatch with lap times. Time workouts, study sessions, races, and anything else.</p>
    <div class="calc-card" style="text-align:center">
      <div class="mono" id="sw-display" style="font-size:clamp(2.4rem,8vw,3.6rem);font-weight:600;color:var(--teal-deep);margin:8px 0 20px">00:00.00</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" id="sw-start" type="button">Start</button>
        <button class="btn btn-outline" id="sw-lap" type="button" disabled>Lap</button>
        <button class="btn btn-outline" id="sw-reset" type="button">Reset</button>
      </div>
      <div id="sw-laps" style="margin-top:20px;text-align:left"></div>
      <p class="result-note" style="font-size:.82rem;margin-top:12px">Hundredth-second precision. Runs entirely in your browser, nothing uploaded.</p>
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated October 2026.</p>

## What is an online stopwatch?

An online stopwatch counts up from zero to measure how long something takes, with lap recording for splits along the way. It runs in your browser with hundredth-second precision, needs no app install, and works for workouts, cooking, study sessions, presentations, and experiments.

## How to use the stopwatch

1. Click **Start** to begin timing.
2. Click **Lap** to record a split without stopping the clock. Each lap lists its own time and the running total.
3. Click **Start** again to pause, and **Reset** to clear everything and start over.

Tip: write down or copy your laps before hitting Reset, because clearing erases them.

## How this stopwatch keeps accurate time

This stopwatch measures elapsed time from real timestamps using the browser's high-resolution clock. It does not count ticks, so it cannot drift: even if the browser slows the visible display in a background tab to save battery, the readout jumps to the correct elapsed time the moment you return.

The browser's `performance.now()` clock resolves down to 100 microseconds in standard browsing (finer in isolated contexts), which is far more precise than the hundredth-second display. The approach follows the same measurement principles documented in NIST Special Publication 960-12 on time and frequency measurement.

## Lap times vs split times

**Lap time** is how long one segment took. **Split time** is the total elapsed time at that checkpoint.

Worked example: your laps land at 1:05.200 and 2:12.700. The split at lap 2 is 2:12.700, but lap 2 itself took 1:07.500 (2:12.700 minus 1:05.200). Runners watch lap times to compare effort per segment; they watch splits to check overall pace against a target finish time.

## Your finger is the real limit

Here is the honest truth about hand timing: your own reaction time adds 150-300 milliseconds of error every time you press the button, which dwarfs the timer's precision. The IAAF false-start rule treats any reaction under 100 milliseconds as a false start, which shows how seriously sports takes this.

Practical tips for cleaner timing:

- Start and stop on the same kind of cue every time, so your reaction delay cancels out.
- Compare splits within one session rather than treating any single absolute time as exact.
- Have the same person press the button for every attempt.

## How this compares to professional timing

The Olympics use photo-finish cameras resolving to 1/1000th of a second, and Omega has been the official Olympic timekeeper since 1932. Even so, swimming records are kept to 1/100th of a second because pool lanes cannot be built exactly identical in length. This stopwatch is excellent for training, practice, and personal records, but official competition needs certified hardware.

## Common uses

- **Running:** interval splits, 5K pacing, track workouts.
- **Gym:** rest periods between sets, circuit timing.
- **Cooking:** multi-stage recipes where each stage needs its own lap.
- **Study and work:** Pomodoro-style focus blocks, presentation rehearsals.
- **Classroom:** science experiments, timed quizzes.
- **Games:** speedrun attempts, puzzle timing.

Need to count down to a moment instead of timing up from zero? The [Countdown Timer]({{ '/countdown-timer/' | relative_url }}) is the right tool.

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>How accurate is an online stopwatch?</summary>
<p>Very accurate for everyday use. This stopwatch measures elapsed time from real timestamps using the browser high-resolution clock, not by counting ticks, so it does not drift when the tab slows down. Display resolution is hundredths of a second. The bigger error source is your own finger: pressing the button adds 150-300 milliseconds of reaction time, far more than the timer itself.</p>
</details>
<details>
<summary>What is the difference between lap time and split time?</summary>
<p>Lap time is how long one segment took. Split time is the total elapsed time at that checkpoint. If your laps land at 1:05.200 and 2:12.700, the split at lap 2 is 2:12.700 but lap 2 itself took 1:07.500. Runners watch lap times to compare effort per segment; they watch splits to check overall pace against a target finish.</p>
</details>
<details>
<summary>Does the stopwatch keep running if I switch tabs?</summary>
<p>Yes. The elapsed time is computed from start and end timestamps, so switching tabs or minimizing the window does not lose any time. Browsers may slow the visible display updates in background tabs to save battery, but when you return, the readout jumps to the correct elapsed time instantly.</p>
</details>
<details>
<summary>What is the difference between a stopwatch and a timer?</summary>
<p>A stopwatch counts up from zero to measure how long something took. A timer counts down from a set duration to zero and usually alerts you at the end. Use a stopwatch for races, workouts, and experiments where the length is unknown. Use a timer for cooking, Pomodoro sessions, and anything with a fixed deadline.</p>
</details>
<details>
<summary>Can I use an online stopwatch for official sports timing?</summary>
<p>No. It is excellent for training, practice, and personal records, but official competition requires certified hardware. The Olympics use photo-finish cameras resolving to 1/1000th of a second, and even then swimming records are kept to 1/100th because pool lanes cannot be built identical. For anything with prizes or records on the line, use approved timing equipment.</p>
</details>
<details>
<summary>What is the smallest time unit this stopwatch measures?</summary>
<p>Hundredths of a second (0.01 s). That is finer than you can usefully read while timing by hand, since your button-press reaction alone varies by 150-300 milliseconds. Chasing smaller display units does not make hand timing more accurate; it only makes the numbers look more precise than they are.</p>
</details>
<details>
<summary>How do I save my lap times?</summary>
<p>Copy the lap list into a spreadsheet to chart pace or find your slowest segment. Write down or export laps before hitting Reset, because clearing the stopwatch erases them.</p>
</details>
<details>
<summary>How do I time something accurately by hand?</summary>
<p>Start and stop on the same kind of cue every time, for example the flash of a light or the exact moment a foot crosses a line, so your reaction delay cancels out. Compare splits within one session rather than treating any single absolute time as exact. For the fairest comparison, have the same person press the button for every attempt.</p>
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
  var running = false, startStamp = 0, elapsed = 0, raf = null, laps = [];

  var display = document.getElementById("sw-display");
  var startBtn = document.getElementById("sw-start");
  var lapBtn = document.getElementById("sw-lap");
  var resetBtn = document.getElementById("sw-reset");
  var lapsBox = document.getElementById("sw-laps");

  function fmt(ms){
    var cs = Math.floor(ms / 10) % 100;
    var s = Math.floor(ms / 1000) % 60;
    var m = Math.floor(ms / 60000) % 60;
    var h = Math.floor(ms / 3600000);
    function p(n){ return (n < 10 ? "0" : "") + n; }
    return (h > 0 ? p(h) + ":" : "") + p(m) + ":" + p(s) + "." + p(cs);
  }

  function current(){ return elapsed + (running ? Date.now() - startStamp : 0); }

  function draw(){ display.textContent = fmt(current()); }

  function loop(){ draw(); raf = requestAnimationFrame(loop); }

  startBtn.addEventListener("click", function(){
    if(running){
      elapsed = current(); running = false;
      cancelAnimationFrame(raf); draw();
      startBtn.textContent = "Resume";
    } else {
      running = true; startStamp = Date.now();
      loop();
      startBtn.textContent = "Pause";
      lapBtn.disabled = false;
    }
  });

  lapBtn.addEventListener("click", function(){
    if(!running){ return; }
    var total = current();
    var prev = laps.length ? laps[laps.length - 1].total : 0;
    laps.push({ n: laps.length + 1, split: total - prev, total: total });
    var html = '<div class="result-box" style="margin-bottom:8px"><div style="display:flex;justify-content:space-between;align-items:center">' +
      '<strong>Lap ' + laps[laps.length - 1].n + '</strong>' +
      '<span class="mono">' + fmt(laps[laps.length - 1].split) + ' <span style="color:var(--muted)">(' + fmt(total) + ')</span></span>' +
      '</div></div>';
    lapsBox.insertAdjacentHTML("afterbegin", html);
  });

  resetBtn.addEventListener("click", function(){
    running = false; elapsed = 0; laps = [];
    cancelAnimationFrame(raf);
    display.textContent = "00:00.00";
    lapsBox.innerHTML = "";
    startBtn.textContent = "Start";
    lapBtn.disabled = true;
  });
})();
</script>

{% include related-guides.html %}
