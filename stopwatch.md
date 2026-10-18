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
            "name": "How do I record a lap time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start the stopwatch, then click Lap whenever you want to record a split. Each lap shows its own time and the total elapsed time."
            }
          },
          {
            "@type": "Question",
            "name": "Is this stopwatch accurate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It measures with centisecond precision using your device clock, which is accurate enough for workouts, study timing, and casual races."
            }
          },
          {
            "@type": "Question",
            "name": "Does it work if I switch tabs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The stopwatch tracks elapsed time from the start moment, so switching tabs does not lose time, though the display updates when you return."
            }
          }
        ]
      }
    ]
  }
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
    </div>
  </div>
</section>

<div class="prose" markdown="1">

<p class="result-note" style="font-size:.85rem">Guide updated October 2026.</p>

## How to use the stopwatch

1. Click **Start** to begin timing.
2. Click **Lap** to record a split without stopping the clock. Each lap lists its own time and the running total.
3. Click **Start** again to pause, and **Reset** to clear everything and start over.

## Lap vs split: what each number means

Each lap shows two numbers, and they answer different questions:

- **Lap time** answers "how long did that segment take?" It is the time since you last pressed Lap (or since Start, for the first lap).
- **Total time** answers "how much time has passed overall?" It is the running total at the moment you pressed Lap.

Example: you press Lap at 1:30, then again at 3:00. Lap 1 shows 1:30 with a total of 1:30. Lap 2 shows a lap time of 1:30 with a total of 3:00. Runners watch lap times for pace; coaches watch totals for race position.

## Where a stopwatch earns its keep

- **Running and cycling:** lap every kilometer or mile. When lap times start climbing, your pace is drifting, and you see it in numbers instead of just feeling it.
- **Cooking:** lap each stage (sear, simmer, rest) so you know exactly how long each step took, and can repeat the good version next time.
- **Pomodoro productivity:** 25-minute focus blocks with 5-minute breaks. Time four blocks, then take a longer break. Comparing block counts day to day shows whether you are actually focusing more.
- **Studying:** time focused sessions and compare them across the week. Shorter, consistent sessions usually beat one giant cram.
- **Classroom and lab work:** timing experiments where each phase needs a logged duration.
- **Games and puzzles:** speedcubing, speedrunning, or timing how fast the kids can tidy a room.

## Accuracy: what to expect

The display shows centiseconds (hundredths of a second), driven by your device's own clock. That is plenty for training, studying, cooking, and casual races.

Two honest limits:

- **It is not certified equipment.** Professional athletics uses dedicated timing systems. Do not settle a photo finish with a phone stopwatch.
- **Your reaction time is inside the measurement.** Pressing Start and Stop by hand adds roughly 0.15 to 0.3 seconds of human delay at each end. For comparing your own laps against each other this cancels out, which is why lap-to-lap comparison is the most reliable use.

Switching tabs or locking the screen loses no time: elapsed time is computed from start timestamps, not from counting ticks while you watch.

**Sources:** timing accuracy discussion follows the principles in NIST Special Publication 960-12 (time and frequency measurement). Browser timers are software clocks, not atomic references.

## Tips for cleaner timing

- **Lap early and often.** Extra laps cost nothing and you can ignore the ones you do not need. A lap you forgot to record is the real loss.
- **Reset between sessions.** Yesterday's workout laps will only confuse today's timing.
- **For intervals, watch the line, not the phone.** If you are coaching, press Lap exactly as the runner crosses, not a second later when you look down.
- **Keep the device still and the screen awake** during critical timing, so a notification or auto-lock does not cover the display at the wrong moment.
- **Calibrate once against a known interval.** Time a 60-second video or a microwave minute. If the stopwatch reads 60.00, you know your device clock is honest, and every future session inherits that trust.

## Frequently asked questions

</div>

<div class="faq">
<details>
<summary>How do I record a lap time?</summary>
<p>Press Lap while the stopwatch is running. Each lap shows its split time and the total elapsed time.</p>
</details>
<details>
<summary>Is this stopwatch accurate?</summary>
<p>It uses your device clock with centisecond precision, accurate enough for training, studying, and casual races. For professional athletics, use certified equipment.</p>
</details>
<details>
<summary>Does it work if I switch tabs?</summary>
<p>Yes. Elapsed time is tracked from the start moment, so no time is lost when the tab is in the background.</p>
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
