const noButton = document.getElementById('no');

noButton.addEventListener('mousemove', function(event) {
 const mouseX = event.clientX;
 const mouseY = event.clientY;


 const buttonRect = noButton.getBoundingClientRect();
 const buttonX = buttonRect.left + buttonRect.width / 2;
 const buttonY = buttonRect.top + buttonRect.height /2;

 const distance = Math.sqrt((mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2);

 if (distance < 50) {
    moveButtonRandomly();
 }
});

noButton.addEventListener('click', moveButtonRandomly);

function moveButtonRandomly() {
    let x = Math.random() * (window.innerWidth - noButton.clientWidth);
    let y = Math.random() * (window.innerHeight - noButton.clientHeight);

    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}