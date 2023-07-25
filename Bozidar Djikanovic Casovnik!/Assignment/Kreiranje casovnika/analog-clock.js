const canvas = document.getElementById("analog-clock");
const ctx = canvas.getContext("2d");
const clockRadius = canvas.width / 2 - 10;
const center = { x: canvas.width / 2, y: canvas.height / 2 };

function drawClock() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(center.x, center.y, clockRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 10;
  ctx.stroke();

  const date = new Date();
  const hours = date.getHours() % 12; // Convert to 12-hour format
  const hourAngle = (hours - 3) * (2 * Math.PI / 12);
  drawHand(hourAngle, clockRadius * 0.5, 8, "#333");

  const minutes = date.getMinutes();
  const minuteAngle = (minutes - 15) * (2 * Math.PI / 60);
  drawHand(minuteAngle, clockRadius * 0.7, 6, "#666");

  const seconds = date.getSeconds();
  const secondAngle = (seconds - 15) * (2 * Math.PI / 60);
  drawHand(secondAngle, clockRadius * 0.9, 2, "#FF0000");

  ctx.beginPath();
  ctx.arc(center.x, center.y, 4, 0, 2 * Math.PI);
  ctx.fillStyle = "#333";
  ctx.fill();

  requestAnimationFrame(drawClock);
}

function drawHand(angle, length, width, color) {
  const x = center.x + length * Math.cos(angle);
  const y = center.y + length * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(center.x, center.y);
  ctx.lineTo(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

drawClock();