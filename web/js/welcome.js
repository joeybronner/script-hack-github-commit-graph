
  var days = ['sundays', 'mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays'];

  function init() {
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
        box.onclick = function(event){
          var target = event.target;
          target.classList.add('green');
        };
        tr.appendChild(box);
      }
    }
  };

function setGreen() {
  console.log('green');
};

window.onload = init;
