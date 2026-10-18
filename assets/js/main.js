/* AgeDateCalc shared scripts: age calculator, world clocks, footer year */

(function(){
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  /* ---------- Age calculator ---------- */
  function isLeapYear(y){ return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0); }

  function birthdayThisYear(dob, year){
    var m = dob.getMonth(), d = dob.getDate();
    if(m === 1 && d === 29 && !isLeapYear(year)){ d = 1; m = 2; } // Feb 29 -> Mar 1
    return new Date(year, m, d);
  }

  function calculateAge(dob){
    var now = new Date();
    var years = now.getFullYear() - dob.getFullYear();
    var months = now.getMonth() - dob.getMonth();
    var days = now.getDate() - dob.getDate();

    if(days < 0){
      months -= 1;
      var prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += prevMonthDays;
    }
    if(months < 0){ years -= 1; months += 12; }

    var totalDays = Math.floor((now - dob) / 86400000);
    var weekday = dob.toLocaleDateString("en-US", { weekday: "long" });

    var next = birthdayThisYear(dob, now.getFullYear());
    if(next <= now){ next = birthdayThisYear(dob, now.getFullYear() + 1); }
    var daysTo = Math.ceil((next - now) / 86400000);

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
      '</div>';
  }

  if(calcBtn){ calcBtn.addEventListener("click", runAgeCalc); }
  if(dobInput){
    dobInput.addEventListener("keydown", function(e){
      if(e.key === "Enter"){ e.preventDefault(); runAgeCalc(); }
    });
  }

  /* ---------- World clocks ---------- */
  var zones = [
    ["Karachi", "Asia/Karachi"],
    ["Dubai", "Asia/Dubai"],
    ["London", "Europe/London"],
    ["New York", "America/New_York"],
    ["Sydney", "Australia/Sydney"]
  ];
  var clocksWrap = document.getElementById("world-clocks");

  function tickClocks(){
    if(!clocksWrap){ return; }
    var now = new Date();
    var html = "";
    zones.forEach(function(z){
      var t = now.toLocaleTimeString("en-GB", { timeZone: z[1], hour: "2-digit", minute: "2-digit", second: "2-digit" });
      html += '<div class="clock"><span class="city">' + z[0] + '</span><span class="time">' + t + '</span></div>';
    });
    clocksWrap.innerHTML = html;
  }

  if(clocksWrap){
    tickClocks();
    setInterval(tickClocks, 1000);
  }
})();
