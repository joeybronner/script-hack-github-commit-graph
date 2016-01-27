  var days = ['sundays', 'mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays'];
  var d = new Date();
  var today = d.getDay();

  function init() {
    new Clipboard('.btn');
    // Create empty 365 day graph
    for (var i = 0, iLen = days.length; i < iLen; i++) {
      var tr = document.getElementById(days[i]);
      var td = document.createElement('td');
      // Add <td> with first letter of the week day
      td.setAttribute('class', 'day-of-wk');
      td.textContent = days[i].substring(1, 0);
      tr.appendChild(td);
      for (var j = 52; j > 0; j--) {
        var box = document.createElement('td');
        box.setAttribute('id', days[i] + '_day_' + j);
        box.classList.add('boxday');
        if (j === 1 && i > today) continue;

        box.onclick = function(event) {
          var target = event.target;
          if (hasClass(target, 'green')) {
            target.classList.remove('green');
          } else {
            target.classList.add('green');
          }

          generateDatesFromCalendar();

        };

        tr.appendChild(box);
      }
    }
  };

function resetGraph() {
  var calendar = document.getElementById('github_calendar');
  var boxes = document.getElementsByClassName('boxday');
  for (var i = 0, iLen = boxes.length; i < iLen; i++) {
    boxes[i].classList.remove('green');
  }
  generateDatesFromCalendar();

};

function hasClass(target, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function copyDates() {
  //var datesTxt = document.getElementById('dates-txt');
  copyToClipboard('dates-txt');
}

function generateDatesFromCalendar() {
  // Code generation
  var datesTxt = document.getElementById('dates-txt');
  var calendar = document.getElementById('github_calendar');
  var boxes = calendar.getElementsByClassName('boxday');
  datesTxt.innerText = '';
  for (var i = 0, iLen = boxes.length; i < iLen; i++) {
    if (hasClass(boxes[i], 'green')) {
      var id = boxes[i].id;
      var idSplited = id.split('_');
      var day = idSplited[0];
      var wk = idSplited[2];
      var idDay = days.indexOf(day);

      var dayDifference = (-today) + idDay;
      var weekDifference = wk - 1;

      // Calculate Date
      var commitDate = new Date();
      commitDate.setDate(d.getDate() + dayDifference - (weekDifference * 7));

      var dateToString = commitDate.toString();
      datesTxt.innerText += dateToString.substring(0,15) + String.fromCharCode(13);
    }
  }
}

function drawHack() {
  var daysToDraw = [
        'sundays_day_43',
        'sundays_day_40',
        'sundays_day_28',
        'sundays_day_20',
        'sundays_day_18',
        'sundays_day_11',
        'mondays_day_43',
        'mondays_day_40',
        'mondays_day_38',
        'mondays_day_37',
        'mondays_day_36',
        'mondays_day_32',
        'mondays_day_31',
        'mondays_day_30',
        'mondays_day_28',
        'mondays_day_25',
        'mondays_day_18',
        'mondays_day_11',
        'tuesdays_day_43',
        'tuesdays_day_40',
        'tuesdays_day_35',
        'tuesdays_day_33',
        'tuesdays_day_28',
        'tuesdays_day_26',
        'tuesdays_day_20',
        'tuesdays_day_18',
        'tuesdays_day_17',
        'tuesdays_day_16',
        'tuesdays_day_11',
        'wednesdays_day_43',
        'wednesdays_day_42',
        'wednesdays_day_41',
        'wednesdays_day_40',
        'wednesdays_day_37',
        'wednesdays_day_36',
        'wednesdays_day_35',
        'wednesdays_day_33',
        'wednesdays_day_28',
        'wednesdays_day_27',
        'wednesdays_day_20',
        'wednesdays_day_18',
        'wednesdays_day_11',
        'thursdays_day_43',
        'thursdays_day_40',
        'thursdays_day_38',
        'thursdays_day_35',
        'thursdays_day_33',
        'thursdays_day_28',
        'thursdays_day_27',
        'thursdays_day_20',
        'thursdays_day_18',
        'thursdays_day_11',
        'fridays_day_43',
        'fridays_day_40',
        'fridays_day_38',
        'fridays_day_35',
        'fridays_day_33',
        'fridays_day_28',
        'fridays_day_26',
        'fridays_day_20',
        'fridays_day_18',
        'saturdays_day_43',
        'saturdays_day_40',
        'saturdays_day_37',
        'saturdays_day_36',
        'saturdays_day_35',
        'saturdays_day_32',
        'saturdays_day_31',
        'saturdays_day_30',
        'saturdays_day_28',
        'saturdays_day_25',
        'saturdays_day_20',
        'saturdays_day_17',
        'saturdays_day_16',
        'saturdays_day_11' ]

  for (var i = 0, iLen = daysToDraw.length; i < iLen ; i++) {
    var box = document.getElementById(daysToDraw[i]);
    box.classList.add('green');
  }

  generateDatesFromCalendar();
}

window.onload = init;
