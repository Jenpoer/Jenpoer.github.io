window.addEventListener("scroll", changeColor);

function isElementInViewport(el, top, btm) {
  var rect = el.getBoundingClientRect();
  const vTop =
    (window.innerHeight || document.documentElement.clientHeight) * top;
  const vBottom =
    (window.innerHeight || document.documentElement.clientHeight) * btm;
  return (
    rect.top >= vTop &&
    rect.left >= 0 &&
    rect.bottom <= vBottom &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function changeColor() {
  var markers = document.querySelectorAll(".marker");
  //var chatBubbles = document.querySelectorAll(".timeline-content .text");

  for (var i = 0; i < markers.length; i++) {
    if (isElementInViewport(markers[i], 0, 0.7)) {
      markers[i].classList.add("in-view");
    } else {
      markers[i].classList.remove("in-view");
    }
  }
}
