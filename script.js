class ToggleSwitch{
    isToggled = false;
    Toggle(){
        this.isToggled = !this.isToggled;
    }
}
var light_dark = new ToggleSwitch;
light_dark.isToggled = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
function DayNight(){
    let body = document.body;
    if(light_dark.isToggled){
        body.classList.add("light");
        body.classList.remove("dark");
    }else{
        body.classList.add("dark");
        body.classList.remove("light");
    }
    light_dark.Toggle();
}