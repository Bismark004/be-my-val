const noButton = document.getElementById('no');

noButton.addEventListener('click', function(e) {
    alert('Nice try');
    window.close();
});

document.addEventListener('mousemove', function(e) {
    const x = e.pageX;
    const Y = e.pageY;
    const buttonBox = noButton.getBoundingClientRect();
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
});

