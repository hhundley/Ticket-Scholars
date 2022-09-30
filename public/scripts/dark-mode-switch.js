var logo = document.getElementById('logo');
var label = document.getElementById('label');
var darkSwitch = document.getElementById("darkSwitch");
window.addEventListener("load", function () {
  if (darkSwitch) {
    initTheme();
    darkSwitch.addEventListener("change", function () {
      resetTheme();
    });
  }
});

/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will be set to light mode.
 * @return {void}
 */
function initTheme() {
  var darkThemeSelected =
    localStorage.getItem("darkSwitch") !== null &&
    localStorage.getItem("darkSwitch") === "dark";
  darkSwitch.checked = darkThemeSelected;
  if (darkThemeSelected) {
    document.body.setAttribute("data-theme", "dark");
    label.innerHTML ='<i class="fa-solid fa-sun fa-lg"></i>';
    logo.src = '../../public/images/ticketmaster - 12@2x.png';
  } else {
    document.body.setAttribute("data-theme", "light");
    label.innerHTML = '<i class="fa-solid fa-moon fa-lg"></i>';
    logo.src = '../../public/images/ticketmaster - 11@2x.png';
  }
}

/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  
  if (darkSwitch.checked) {
    document.body.setAttribute("data-theme", "dark");
    label.innerHTML = '<i class="fa-solid fa-sun fa-lg"></i>';    
    localStorage.setItem("darkSwitch", "dark");
    logo.src = '../../public/images/ticketmaster - 12@2x.png';
  } else {
    document.body.setAttribute("data-theme", "light");
    label.innerHTML = '<i class="fa-solid fa-moon fa-lg"></i>';
    localStorage.setItem("darkSwitch", "light");
    logo.src = '../../public/images/ticketmaster - 11@2x.png';
  }
}