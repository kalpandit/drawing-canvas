var Col = {};
var Media = {};

function touchMoved() {
    return false;
  }
function setup() {
  var width = window.innerWidth;
var height = window.innerHeight;
  createCanvas(width, height);
  background('#ffffff');
  Col.color = 'black';
  if (Col.weight != 0) changeSize();
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
function zeroStroke() {
  console.log("0");

  if (Col.weight != 0) {
    Col.weight = 0;
    tool(Col.color);

  }
  else if (Col.weight == 0) {
    var s = document.getElementById("size").value;
    Col.weight = s;
    tool(Col.color);

  }
}