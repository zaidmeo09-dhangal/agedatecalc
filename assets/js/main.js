/* AgeDateCalc shared scripts: age calculator, world clocks, footer year */

(function(){
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Dark mode toggle ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  if(themeBtn){
    themeBtn.addEventListener("click", function(){
      var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try{ localStorage.setItem("agedatecalc-theme", next); }catch(e){}
    });
  }

  /* ---------- Age calculator ---------- */
  function isLeapYear(y){ return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); }

  function birthdayThisYear(dob, year){
    var m = dob.getMonth(), d = dob.getDate();
    if(m === 1 && d === 29 && !isLeapYear(year)){ d = 1; m = 2; } // Feb 29 -> Mar 1
    return new Date(year, m, d);
  }

  /* Shared date decomposition (same code in age-calculator.md, date-difference-calculator.md, assets/js/main.js).
     Whole years, then whole months, then leftover days, counted on calendar anchors.
     Adding months clamps to the last day of the target month, and a Feb 29
     anniversary falls on Mar 1 in non-leap years, so no component ever goes negative.
     (isLeapYear is defined above and reused here.) */
  function makeDate(y, m, d){ var dt = new Date(0); dt.setFullYear(y, m, d); dt.setHours(0, 0, 0, 0); return dt; }
  function daysInMonth(y, m){ return makeDate(y, m + 1, 0).getDate(); }
  function utcDayNumber(d){ return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000; }
  function addMonthsClamped(d, n){
    var total = d.getFullYear() * 12 + d.getMonth() + n;
    var y = Math.floor(total / 12), m = total - y * 12;
    return makeDate(y, m, Math.min(d.getDate(), daysInMonth(y, m)));
  }
  function anniversaryOf(from, year){
    var m = from.getMonth(), d = from.getDate();
    if(m === 1 && d === 29 && !isLeapYear(year)){ return makeDate(year, 2, 1); }
    return makeDate(year, m, Math.min(d, daysInMonth(year, m)));
  }
  function decomposeDates(from, to){
    /* from must be on or before to; returns { years, months, days }, all >= 0. */
    var y = 0;
    while(anniversaryOf(from, from.getFullYear() + y + 1) <= to){ y += 1; }
    var anchor = anniversaryOf(from, from.getFullYear() + y);
    var mo = 0;
    while(mo < 11 && addMonthsClamped(anchor, mo + 1) <= to){ mo += 1; }
    anchor = addMonthsClamped(anchor, mo);
    var d = Math.round(utcDayNumber(to) - utcDayNumber(anchor));
    return { years: y, months: mo, days: d };
  }

  function calculateAge(dob){
    var now = new Date();
    var parts = decomposeDates(dob, now);
    var years = parts.years, months = parts.months, days = parts.days;

    var totalDays = Math.round((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - Date.UTC(dob.getFullYear(), dob.getMonth(), dob.getDate())) / 86400000);
    var weekday = dob.toLocaleDateString("en-US", { weekday: "long" });

    var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var next = birthdayThisYear(dob, now.getFullYear());
    if(next < todayStart){ next = birthdayThisYear(dob, now.getFullYear() + 1); }
    var daysTo = Math.round((Date.UTC(next.getFullYear(), next.getMonth(), next.getDate()) - Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000);

    return { years: years, months: months, days: days, totalDays: totalDays, weekday: weekday, daysTo: daysTo };
  }

  var dobInput = document.getElementById("dob");
  var calcBtn = document.getElementById("calc-age-btn");
  var ageOut = document.getElementById("age-result");

  function runAgeCalc(){
    if(!dobInput || !ageOut){ return; }
    var val = dobInput.value;
    if(!val){
      ageOut.innerHTML = '<p class="result-note">Please pick your date of birth first.</p>';
      return;
    }
    var dob = new Date(val + "T00:00:00");
    if(isNaN(dob.getTime()) || dob > new Date()){
      ageOut.innerHTML = '<p class="result-note">Please enter a valid date of birth in the past.</p>';
      return;
    }
    var a = calculateAge(dob);
    ageOut.innerHTML =
      '<div class="result-grid">' +
        '<div class="result-box"><span class="num">' + a.years + '</span><span class="lbl">Years</span></div>' +
        '<div class="result-box"><span class="num">' + a.months + '</span><span class="lbl">Months</span></div>' +
        '<div class="result-box"><span class="num">' + a.days + '</span><span class="lbl">Days</span></div>' +
        '<div class="result-box"><span class="num">' + a.totalDays.toLocaleString() + '</span><span class="lbl">Total days</span></div>' +
        '<div class="result-box"><span class="num">' + a.weekday + '</span><span class="lbl">Born on</span></div>' +
        '<div class="result-box"><span class="num">' + a.daysTo + '</span><span class="lbl">Days to birthday</span></div>' +
      '</div>' +
      (a.daysTo === 0 ? '<p class="result-note"><strong>Happy birthday!</strong> Today is your birthday.</p>' : '');
  }

  if(calcBtn){ calcBtn.addEventListener("click", runAgeCalc); }
  if(dobInput){
    /* Cap the date picker at today so it never goes stale */
    var _t = new Date();
    var _today = _t.getFullYear() + "-" + ("0" + (_t.getMonth() + 1)).slice(-2) + "-" + ("0" + _t.getDate()).slice(-2);
    dobInput.max = _today;
    dobInput.addEventListener("keydown", function(e){
      if(e.key === "Enter"){ e.preventDefault(); runAgeCalc(); }
    });
  }

  /* ---------- World clocks ---------- */
  var zones = [
    ["New York", "America/New_York"],
    ["Chicago", "America/Chicago"],
    ["Denver", "America/Denver"],
    ["Los Angeles", "America/Los_Angeles"],
    ["London", "Europe/London"]
  ];
  var clocksWrap = document.getElementById("world-clocks");

  function tickClocks(){
    if(!clocksWrap){ return; }
    var now = new Date();
    var html = "";
    zones.forEach(function(z){
      var t = now.toLocaleTimeString("en-US", { timeZone: z[1], hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
      html += '<div class="clock"><span class="city">' + z[0] + '</span><span class="time">' + t + '</span></div>';
    });
    clocksWrap.innerHTML = html;
  }

  if(clocksWrap){
    tickClocks();
    setInterval(tickClocks, 1000);
  }
})();
