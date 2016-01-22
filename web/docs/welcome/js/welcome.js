(function() {
  var init, isMobile, setupHero;

  isMobile = $(window).width() < 567;

  init = function() {
    var days = ['sundays', 'mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays'];

    // Create empty 365 day graph
    for (var i = 0, iLen = days.length; i < iLen; i++) {
      var tr = document.getElementById(days[i]);
      var d = document.createElement('td');
      // Add <td> with first letter of the week day
      d.setAttribute('class', 'day-of-wk');
      d.textContent = days[i].substring(1, 0);
      tr.appendChild(d);
      for (var j = 52; j > 0; j--) {
        var box = document.createElement('td');
        box.setAttribute('id', days[i] + '_day_' + j);
        box.classList.add('boxday');
        tr.appendChild(box);
      }
    }

    // Tease H.A.C.K letters
      for (var j = 0; j < 7; j++) {
        var day = days[j];
        for (var k = 1; k < 53; k++) {
            var box = document.getElementById(day + '_day_' + k);
            console.log(day + '_day_' + k);
            box.classList.add('green');
            sleepFor(10);
        }
      }
  };

  sleepFor = function(sleepDuration) {
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration) {
      // Nothing, just sleep.
    }
  };
  
  init();

}).call(this);
