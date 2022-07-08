const tiltEffectSettings = {
    max: 5,
    brightness: 50
};

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    const cardImageHolder = card.children[0].children[0];
    const projectTitle = card.children[0].children[1];
    const viewCaseStudyText = card.children[0].children[2];

    function setTransition() {
        clearTimeout(card.idOfSetTimeout);
        clearTimeout(cardImageHolder.idOfSetTimeout);
        clearTimeout(projectTitle.idOfSetTimeout);
        clearTimeout(viewCaseStudyText.idOfSetTimeout);

        card.style.transition = "transform 500ms cubic-bezier(.03, .98, .52, .99), box-shadow 200ms ease-in-out";
        cardImageHolder.style.transition = "filter 250ms ease-in-out";
        projectTitle.style.transition = "transform 400ms ease-in-out, opacity 400ms ease-in-out";
        viewCaseStudyText.style.transition = "opacity 400ms ease-in-out";

        card.idOfSetTimeout = setTimeout(() => {
            card.style.transition = "";
        }, 500);
        cardImageHolder.idOfSetTimeout = setTimeout(() => {
            cardImageHolder.style.transition = "";
        }, 250);
        projectTitle.idOfSetTimeout = setTimeout(() => {
            projectTitle.style.transition = "";
        }, 400);
        viewCaseStudyText.idOfSetTimeout = setTimeout(() => {
            viewCaseStudyText.style.transition = "";
        }, 400);
    }

    card.addEventListener("mouseenter", (event) => {
        cardImageHolder.style.filter = `brightness(${tiltEffectSettings.brightness}%)`;
        projectTitle.style.opacity = "1";
        projectTitle.style.transform = `translateY(0px)`;
        viewCaseStudyText.style.opacity = "1";
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
        card.style.boxShadow = `-7px 7px 0 5px #dea19b`;

    });

    card.addEventListener("mouseleave", (event) => {
        cardImageHolder.style.filter = `brightness(100%)`;
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.boxShadow = ``;
        projectTitle.style.opacity = "0";
        projectTitle.style.transform = `translateY(-20px)`;
        viewCaseStudyText.style.opacity = "0";
        setTransition();
    })
});



