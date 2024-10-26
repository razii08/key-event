const box1 = document.getElementById("box");


document.addEventListener("keydown", event => {
    box1.textContent ="😒";
    box1.style.backgroundColor = "red"
});
document.addEventListener("keyup", event => {
    box1.textContent ="😉";
    box1.style.backgroundColor = "rgb(59, 195, 59)"
});
const moveamnt = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveamnt;
                break;
            case "ArrowDown":
                y += moveamnt;
                break;
            case "ArrowLeft":
                x -= moveamnt;
                break;
            case "ArrowRight":
                x += moveamnt;
                break;
        }

        box1.style.top = `${y}px`;
        box1.style.left = `${x}px`;
    }
});

