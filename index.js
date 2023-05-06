const sketchBox = document.documentElement.clientWidth >= 600 ? document.querySelector(".paint1") :document.querySelector(".paint2");
// const sketchBox2 = document.querySelector(".paint2");

const context = sketchBox.getContext("2d");
context.lineCap = "round";

const colorPick = document.querySelector(".color");
const rangePick = document.querySelector(".range");

const rangeValue = document.querySelector(".range-value");
// width
rangePick.addEventListener("input", (event) => {
  const width = event.target.value;
  rangeValue.innerHTML = width;
  context.lineWidth = width;
});
//color
colorPick.addEventListener("input", (e) => {
  console.log(e);
  const color = e.target.value;
  context.strokeStyle = color;
});
// draw
let x = 0;
let y = 0;
let start = false;

const StartDraw = (e) => {
  start = true;
  x = e.offsetX;
  y = e.offsetY;
};

const Draw = (e) => { 
  if (start) {
    let newX = e.offsetX;
    let newY = e.offsetY;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(newX, newY);
    context.stroke();
    x = newX;
    y = newY;
  }
};

const StopDraw = (e) => {
  start = false;
  x = 0;
  y = 0;
};

sketchBox.addEventListener("mousedown", StartDraw);
sketchBox.addEventListener("mousemove", Draw);
sketchBox.addEventListener("mouseup", StopDraw);
sketchBox.addEventListener("mouseout", StopDraw);

const downloadBtn = document.getElementById("download");

var download = function(){
  var link = document.createElement('a');
  link.download = 'sketch.png';
  link.href = sketchBox.toDataURL("image/png");
  link.click();
}
downloadBtn.addEventListener("click", download);
