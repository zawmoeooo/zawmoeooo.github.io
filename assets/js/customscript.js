slidehow_images = slidehow_images_Lan;
var browserWidth = window.innerWidth || document.documentElement.clientWidth;
if(browserWidth <= 640){
    slidehow_images = slidehow_images_Port;
}
else{
    slidehow_images = slidehow_images_Lan;
}

document.addEventListener('contextmenu', event => event.preventDefault());
 
document.onkeydown = function (e) {
    // disable F12 key
    if(e.key == "F12") {
        return false;
    }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

function handleResize() {
    // Get the new browser width and height
    var newWidth = window.innerWidth || document.documentElement.clientWidth;
    console.log(newWidth);
    if(newWidth <= 640){
        for(var i=0; i<slidehow_images_Port.length; i++){
            $("div.zs-slide.zs-slide-"+i).css("background-image","url(" + slidehow_images_Port[i] + ")")
        };
    }
    else{
        for(var i=0; i<slidehow_images_Lan.length; i++){
            $("div.zs-slide.zs-slide-"+i).css("background-image","url(" + slidehow_images_Lan[i] + ")")
        };
    }
  }
  
  // Add an event listener for the resize event
  window.addEventListener("resize", handleResize);

