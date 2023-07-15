let mouse = { x: 0, y: 0 }; //Cursor position
let pos = { x: 0, y: 0 }; //Cursor position
let ratio = 0.05; //delay follow cursor
let active = false;


let ball = document.getElementById("ball");
let navLinks = document.querySelectorAll("a");
let text = document.querySelectorAll("h1");

TweenLite.set(ball, { xPercent: -50, yPercent: -50 }); // this is the mouse
TweenLite.from(".fixed", 2, {
    x: -400,
    skewX: 30,
});
TweenLite.from(".logo", 2, {
    x: 400,
    skewX: 30,
});
TweenLite.from("img", 2, {
    opacity: 0,
    stagger: 0.5,
    scale: 4,
    delay: 3,
});
TweenLite.from(text, 1.3, {
    skewY: 20,
    ease: Bounce.easeOut,
    y: 200,
    delay: 5,
    stagger: 0.3,
});
TweenLite.from(".heading p", 1.3, {
    y: 10,
    delay: 6,
    opacity: 0,
});
TweenLite.from(".heading a", 1.3, {
    y: 10,
    delay: 6,
    opacity: 0,
});

// mouse  
TweenLite.ticker.addEventListener("tick", updatePosition);

function updatePosition() {
    if (!active) {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;

        TweenLite.set(ball, { x: pos.x, y: pos.y });
    }
}
TweenLite.ticker.addEventListener('tick', updatePosition)

// mouse animation
document.addEventListener("mousemove", mouseMove);

function mouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}
navLinks.forEach((link) => {
    link.addEventListener("mouseleave", () => {
        ball.classList.remove("link_grow");
    });
    link.addEventListener("mouseover", () => {
        ball.classList.add("link_grow");
    });
});

text.forEach((link) => {
    link.addEventListener("mouseleave", () => {
        ball.classList.remove("text_grow");
    });
    link.addEventListener("mouseover", () => {
        ball.classList.add("text_grow");
    });
});
