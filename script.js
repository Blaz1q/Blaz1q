class ToggleSwitch{
    isToggled = false;
    Toggle(){
        this.isToggled = !this.isToggled;
    }
}
var light_dark = new ToggleSwitch;
const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
light_dark.isToggled = prefersDark; // jeśli preferuje ciemny, to zaczynamy od "dark"
function loadThemeToggleIcon(){
    const button = document.getElementById("theme-toggle");
    if(prefersDark){
        button.textContent = "☀️";
    }
    else{
        button.textContent = "🌙"; 
    }
}
function DayNight() {
  const body = document.body;
  const button = document.getElementById("theme-toggle");

  if (light_dark.isToggled) {
    body.classList.add("light");
    body.classList.remove("dark");
    button.textContent = "🌙"; // noc
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
    button.textContent = "☀️"; // dzień
  }
  light_dark.Toggle();
}