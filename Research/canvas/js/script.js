// function draw() {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     var ctx = canvas.getContext("2d");

//     ctx.fillStyle = "rgb(200,0,0)";
//     ctx.fillRect (10, 10, 50, 50);

//     ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//     ctx.fillRect (30, 30, 50, 50);
//   }
// }

// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');

//     ctx.fillRect(25, 25, 100, 100);
//     ctx.clearRect(45, 45, 60, 60);
//     ctx.strokeRect(50, 50, 50, 50);
//   }
// }

function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    // ctx.stroke();
    ctx.fill();
  }
}