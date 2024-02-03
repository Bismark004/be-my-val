let yesButton = document.getElementById('yes');

let noButton = document.getElementById('no');

yesButton.addEventListener('mousemove', function() {

});

noButton.addEventListener('mousemove', function(event) {
    const buttonRect = noButton.getBoundingClientRect();
    const distanceX = event.clientX - (buttonRect.left + buttonRect.width / 2);

    noButton.style.transform = `translateX(${Math.min(Math.max(distanceX, -50), 50)}px)`;
});

noButton.addEventListener('mouseleave', function() {
    noButton.style.transform = 'translateX(0)';
});