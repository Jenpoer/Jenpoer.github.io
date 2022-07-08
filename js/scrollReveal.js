window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    

    reveals.forEach(element => {
        var windowHeight = window.innerHeight;
        var revealTop = element.getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            clearTimeout(element.idOfSetTimeout);
            element.style.transition = "transform 500ms ease-out, opacity 250ms ease-in-out";
            element.idOfSetTimeout = setTimeout(() => {
                element.style.transition = "";
            }, 500);
            element.style.transform = 'translateX(0%) translateY(0%)';
            element.style.opacity = 1;
        } else {
            if(element.classList.contains('horizontally')) {
                element.style.transform = 'translateX(-10%)';
            } else if(element.classList.contains('vertically')) {
                element.style.transform = 'translateY(10%)';
            }
            element.style.opacity = 0;
        }
    })
}