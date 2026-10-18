---
layout: default
title: Online Stopwatch with Lap Times - Free
description: A clean, free online stopwatch with lap times. Time workouts, study sessions, races, and experiments with start, pause, reset, and lap recording. No sign-up.
permalink: /stopwatch/
schema: |
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

<div class="prose">

## How to use the stopwatch

1. Click **Start** to begin timing.
2. Click **Lap** to record a split without stopping the clock. Each lap lists its own time and the running total.
3. Click **Start** again to pause, and **Reset** to clear everything and start over.

## Tips for better timing

- **Workouts:** record a lap per set or per kilometer to spot your pace drifting.
- **Study sessions:** time focused blocks and compare them day to day.
- **Cooking and experiments:** lap each stage so you know exactly how long each step took.

## Frequently asked questions

### How do I record a lap time?

Press Lap while the stopwatch is running. Each lap shows its split time and the total elapsed time.

### Is this stopwatch accurate?

It uses your device clock with centisecond precision, accurate enough for training, studying, and casual races. For professional athletics, use certified equipment.

### Does it work if I switch tabs?

Yes. Elapsed time is tracked from the start moment, so no time is lost when the tab is in the background.

## Related tools

- [Countdown Timer](/countdown-timer/): count down to a future moment
- [Date Difference Calculator](/date-difference-calculator/): days between dates
- [Time Zone Converter](/time-zone-converter/): convert times across zones

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
