// Camera function forked from https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos
var Col = {};
var Media = {};

function touchMoved() {
    return false;
  }
function setup() {
    if (window.matchMedia("(max-width: 400px)").matches) {
      Media.width = 350;
        createCanvas(350, 350);
    }
    else if (window.matchMedia("(max-width: 500px)").matches) {
      Media.width = 480;
        createCanvas(480, 480);
    }
    else if (window.matchMedia("(max-width: 700px)").matches) {
      Media.width = 650;
        createCanvas(650,650);
    }
    else {
      Media.width = 720;
        createCanvas(720,720);
    }

  background('#ffffff');
  Col.color = 'black';
  Col.weight = 7;
  changeSize();
}
function draw() {
  if (mouseIsPressed) {
    tool(Col.color);
  }
}
function tool(str) {
    stroke(str);
	strokeWeight(Col.weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
}
function eraserTool() {
    Col.color = 'white';
    tool(Col.color);
}
function redTool() {
Col.color = 'red';
tool(Col.color);
}
function orangeTool() {
Col.color = 'orange';
tool(Col.color);
}
function yellowTool() {
Col.color = 'yellow';
tool(Col.color);
}
function greenTool() {
Col.color = 'green';
tool(Col.color);   
}
function blueTool() {
Col.color = 'blue';
tool(Col.color);    
}
function purpleTool() {
Col.color = 'purple';
tool(Col.color);    
}
function resetTool() {
Col.color = 'black';
tool(Col.color);    
}
function changeSize() {
    var s = document.getElementById("size").value;
    Col.weight = s;
    tool(Col.color);
}
function download() {
  var can = document.getElementById("defaultCanvas0");
  let down = can.toDataURL("image/png");
  var link = document.createElement('a');
   link.download = 'masterpiece.png';
   link.href = down;
   link.click();
}