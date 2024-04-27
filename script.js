// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCircleFn = (x, y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity:1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity:1`;
};
// End of Mouse Circle

// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mX = 0;
let mY = 0;
const z = 100;

const animatedCircles = (e,x,y) => {
    if(x < mX) {
        circles.forEach((circle) => {
            circle.style.left = `${z}px`;
        });
        mainImg.style.left = `${z}px`;
    } else if(x > mX) {
        circles.forEach((circle) => {
            circle.style.left = `-${z}px`;
        });
        mainImg.style.left = `-${z}px`;
    }

    if(y < mY) {
        circles.forEach((circle) => {
            circle.style.top = `${z}px`;
        });
        mainImg.style.top = `${z}px`;
    } else if (y > mY) {
        circles.forEach((circle) => {
            circle.style.top = `-${z}px`;
        });
        mainImg.style.top = `-${z}px`;
    }

    mX = e.clientX;
    mY = e.clientY
};

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x, y);
    animatedCircles(e,x,y);
});

document.body.addEventListener("mouseleave", () => { // Mouse circle and dot disappear when cursor leaves window
    mouseCircle.style.opacity = '0';
    mouseDot.style.opacity = '0';
});

// Main Button
const mainBtns = document.querySelectorAll(".main-btn")

mainBtns.forEach(btn => {
    let ripple;

btn.addEventListener('mouseenter', (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
});

btn.addEventListener("mouseleave", () => {
    btn.removeChild(ripple);
});
})



// End of Main Button

// About Me text
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeTextContent = 
    "I am a designer & I create award winning websites with the best user experience, that is all... just contact me. :)";

Array.from(aboutMeTextContent).forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    aboutMeText.appendChild(span);

    span.addEventListener('mouseenter',(e) => {
        e.target.style.animation = "aboutMeTextAnim 10s infinite"
    })
});
// End of About Me text