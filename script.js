/*تغير صور المعهد كل ٤ ثواني*/
let images = ["instit1.jpg", "instit2.jpg", "instit3.jpg","IMG-20251103-WA0007.jpg"];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}, 3500);
