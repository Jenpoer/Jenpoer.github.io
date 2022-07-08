const tiltEffectSettings = {
    max: 10,
    className: ".screenshot-holder"
};

const cards = document.querySelectorAll(tiltEffectSettings.className);

cards.forEach(card => {
    function setTransition() {
        clearTimeout(card.idOfSetTimeout);

        card.style.transition = "transform 500ms cubic-bezier(.03, .98, .52, .99)";

        card.idOfSetTimeout = setTimeout(() => {
            card.style.transition = "";
        }, 500);
    }

    card.addEventListener("mouseenter", (event) => {
        setTransition();
    });

    card.addEventListener("mousemove", (event) => {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = card.offsetTop + cardHeight / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const rotateX = ((-1) * tiltEffectSettings.max * mouseY / (cardHeight / 2)).toFixed(2);
        const rotateY = (tiltEffectSettings.max * mouseX / (cardWidth / 2)).toFixed(2);
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", (event) => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        setTransition();
    })
});



