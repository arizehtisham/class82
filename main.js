var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="";
var lastX,lastY;
canvas.addEventListener("mouseup",up);
function up(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousedown",down);
function down(e){
    color1=document.getElementById("color").value;
    width1=document.getElementById("width").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mousemove",move);
function move(e){
  var x=e.clientX-canvas.offsetLeft;
  var y=e.clientY-canvas.offsetTop;
  if(mouseEvent=="mousedown"){
      ctx.beginPath();
      ctx.strokeStyle=color1;
      ctx.lineWidth=width1;
      ctx.moveTo(lastX,lastY);
      ctx.lineTo(x,y);
      ctx.stroke();
  }
  lastX=x;
  lastY=y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}