// Define our viewportWidth variable
var viewportWidth;

// Set/update the viewportWidth value
var setViewportWidth = function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};

// Set our initial width
setViewportWidth();

// On resize events, recalculate
window.addEventListener(
  "resize",
  function () {
    setViewportWidth();
    section.removeEventListener("mouseenter", sectionMouseEnter);
    section.removeEventListener("mousemove", sectionMouseMove);
    section.removeEventListener("mouseleave", sectionMouseLeave);
    window.removeEventListener("deviceorientation", sectionDeviceOrientation);
    if (viewportWidth >= 768) {
      section.addEventListener("mouseenter", sectionMouseEnter);
      section.addEventListener("mousemove", sectionMouseMove);
      section.addEventListener("mouseleave", sectionMouseLeave);
    } else {
      window.addEventListener("deviceorientation", sectionDeviceOrientation);
    }
  },
  false
);

const translateSettings = {
  image1Scale: 350,
  image2Scale: 100,
};

const section = document.querySelector("#section-1");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");

if (viewportWidth >= 768) {
  section.addEventListener("mouseenter", sectionMouseEnter);
  section.addEventListener("mousemove", sectionMouseMove);
  section.addEventListener("mouseleave", sectionMouseLeave);
} else {
  window.addEventListener("deviceorientation", sectionDeviceOrientation);
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

  image1.style.transform = `translateX(${
    mouseX / translateSettings.image1Scale
  }%) translateY(${mouseY / translateSettings.image1Scale}%)`;
  image2.style.transform = `translateX(${
    mouseX / translateSettings.image2Scale
  }%) translateY(${mouseY / translateSettings.image2Scale}%)`;
}

// For mobile - track device orientation
function sectionDeviceOrientation(event) {
  let x = event.beta;
  let y = event.gamma;

  // Constrain x value to [-90, 90]
  if (x > 90) x = 90;
  if (x < -90) x = 90;

  // Shift range of x and y to [0, 180]
  x += 90;
  y += 90;

  image1.style.transform = `translateX(${
    (x / 180) * (translateSettings.image1Scale / 100)
  }%) translateY(${(y / 180) * (translateSettings.image1Scale / 100)}%)`;
  image2.style.transform = `translateX(${
    (x / 180) * (translateSettings.image2Scale / 100)
  }%) translateY(${(y / 180) * (translateSettings.image2Scale / 100)}%)`;
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
