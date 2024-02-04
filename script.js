const noButton = document.getElementById('nO');

noButton.addEventListener('mouseenter', function() {
  moveButtonRandomly();
});

noButton.addEventListener('click', function() {
  moveButtonRandomly();
});

function moveButtonRandomly() {
  let x = Math.random() * (window.innerWidth - noButton.clientWidth);
  let y = Math.random() * (window.innerHeight - noButton.clientHeight);

  noButton.style.left = x + "px";
  noButton.style.top = y + "px";
}
