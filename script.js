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
    const horizontalOffset = buttonBox.width / 2 + OFFSET;
    const verticalOffset = buttonBox.height / 2 + OFFSET;

    if(Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 10
        )
    }

});

function setButtonPosition(left, right) {
    const windowBox = document.body.getBoundingClientRect();
    const buttonBox = noButton.getBoundingClientRect();

    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET;
    };
}