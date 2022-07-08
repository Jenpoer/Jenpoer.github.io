// Define our viewportWidth variable
var viewportWidth;

// Set/update the viewportWidth value
var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

// Set our initial width
setViewportWidth();

// On resize events, recalculate
window.addEventListener('resize', function () {
	setViewportWidth();
    section.removeEventListener("mouseenter", sectionMouseEnter);
    section.removeEventListener("mousemove", sectionMouseMove);
    section.removeEventListener("mouseleave", sectionMouseLeave);
    if(viewportWidth >= 768) {
        section.addEventListener("mouseenter", sectionMouseEnter);
        section.addEventListener("mousemove", sectionMouseMove);
        section.addEventListener("mouseleave", sectionMouseLeave);
    }
}, false);

const translateSettings = {
    image1Scale: 350,
    image2Scale: 100
};

const section = document.querySelector("#section-1");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");

if(viewportWidth >= 768) {
    section.addEventListener("mouseenter", sectionMouseEnter);
    section.addEventListener("mousemove", sectionMouseMove);
    section.addEventListener("mouseleave", sectionMouseLeave);
}

function sectionMouseEnter(event) {
    setTransition(image1);
    setTransition(image2);
}

function sectionMouseMove(event) {
    var centerX = section.clientWidth / 2;
    var centerY = section.clientHeight / 2;
    var mouseX = event.clientX - centerX;
    var mouseY = event.clientY - centerY;

    image1.style.transform = `translateX(${mouseX / translateSettings.image1Scale}%) translateY(${mouseY / translateSettings.image1Scale}%)`;
    image2.style.transform = `translateX(${mouseX / translateSettings.image2Scale}%) translateY(${mouseY / translateSettings.image2Scale}%)`;
}


function sectionMouseLeave(event) {
    restore();
}

function restore() {
    setTransition(image1);
    setTransition(image2);
    image1.style.transform = `translateX(0%) translateY(0%)`;
    image2.style.transform = `translateX(0%) translateY(0%)`;
}

function setTransition(image) {
    clearTimeout(image.idOfSetTimeout);
    image.style.transition = "transform 500ms cubic-bezier(.03, .98, .52, .99)";
    image.idOfSetTimeout = setTimeout(() => {
        image.style.transition = "";
    }, 500);
}
