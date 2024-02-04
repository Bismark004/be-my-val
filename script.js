const button = document.getElementById('no');

const threshold = 100;

window.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;

    let rect = button.getBoundingClientRect();
    let bx = rect.left + rect.width / 2;
    let by = rect.top + rect.height / 2;

    let dx = x - bx;
    let dy = y - by;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < threshold ) {
        let rx = Math.random() * window.innerWidth;
        let ry = Math.random() * window.innerHeight;

        button.style.left = x + "px";
        button.style.top = y + "px";

    }
})