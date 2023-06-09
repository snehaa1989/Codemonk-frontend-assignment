const canvas = document.querySelector("#canvas");
//code here
const ctx = canvas.getContext("2d");

// Level 1: Draw a circle around the user's mouse position
function drawCircle(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();
}

// Level 2: Draw a mirror image of the circle in the other half
function drawMirrorCircles(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();

  const mirrorX = canvas.width - x;
  ctx.beginPath();
  ctx.arc(mirrorX, y, 30, 0, 2 * Math.PI);
  ctx.stroke();
}

// Level 3: Draw a mirror image of the circle in the other three quadrants
function drawQuadrantCircles(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.stroke();

  const mirrorX = canvas.width - x;
  const mirrorY = canvas.height - y;

  ctx.beginPath();
  ctx.arc(mirrorX, y, 30, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, mirrorY, 30, 0, 2 * Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mirrorX, mirrorY, 30, 0, 2 * Math.PI);
  ctx.stroke();
}

// Event listener for mouse movement
canvas.addEventListener("mousemove", function (event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  if (x < canvas.width / 2) {
    if (y < canvas.height / 2) {
      // Level 3
      drawQuadrantCircles(x, y);
    } else {
      // Level 2
      drawMirrorCircles(x, y);
    }
  } else {
    // Level 1
    drawCircle(x, y);
  }
});