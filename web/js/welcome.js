  var days = ['sundays', 'mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays'];
  var d = new Date();
  var today = d.getDay();

  function init() {
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

          // Code generation
          var datesTxt = document.getElementById('dates-txt');
          var calendar = document.getElementById('github_calendar');
          var boxes = calendar.getElementsByClassName('boxday');
          datesTxt.innerText = '';
          console.log(datesTxt);
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
};

function hasClass(target, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function copyDates() {
  //var datesTxt = document.getElementById('dates-txt');
  copyToClipboard('dates-txt');
}

function copyToClipboard(elementId) {

}

window.onload = init;
