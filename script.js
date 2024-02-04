const noButton = document.getElementById('no');

noButton.addEventListener('mousemove', function() {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
});
