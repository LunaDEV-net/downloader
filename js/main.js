// from https://davidwalsh.name/fullscreen
function launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
}
// from https://davidwalsh.name/fullscreen
function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
}

function button_exit() {
  close()
}

function button_minimize() {  
  location.href = "/pages/minimized.html"
  sleep(200);
  launchIntoFullscreen(document.documentElement);
}

function Back() {
  exitFullscreen();
  history.back();
}

function button_fullscreen(){
  launchIntoFullscreen(document.documentElement);
  document.getElementById("placehoulder_fullscreen_icon").innerHTML = document.getElementById("icon_exit_fullscreen").innerHTML;
}
function button_fullscreen_exit(){
  exitFullscreen();
  document.getElementById("placehoulder_fullscreen_icon").innerHTML = document.getElementById("icon_fullscreen").innerHTML;
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}