var body = document.querySelector('body');
var toggleSwitch = document.getElementsByClassName('toggle__switch')[0];
toggleSwitch.addEventListener('click', toggleMode);

// function toggleMode() {
//     body.classList.toggle('light-mode');
//   }

var moods = [
  'dark-mode',
  'light-mode',
];

body.className = getCookie('modeCookie') ? getCookie('modeCookie') : moods[0];

function toggleMode() {
  var currentMode = body.className;

  var nextIndex = moods.indexOf(currentMode) + 1;

  var nextMode = nextIndex >= moods.length
    ? moods[0]
    : moods[nextIndex];

  body.className = nextMode;
  setCookie('modeCookie', nextMode, 365)
}

// Standard W3 Set GetCookie 

  // set a cookie
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // get a value of a cookie
  // if exist returns the name, if not returns empty string - false
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }