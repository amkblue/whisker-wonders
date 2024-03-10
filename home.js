
/* expanding cards project from udemy */
const panels = document.querySelectorAll('.panel');
const pets = document.getElementById('pets');
const essentials = document.getElementById('essentials');
const merch = document.getElementById('merch');
const donations = document.getElementById('donations');


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

/* double click on expanded card - links to different pages */
pets.addEventListener('dblclick', () => {
    if (pets.classList.contains('active')) {
        window.location.href = "pet/pet.html";
    }
})

essentials.addEventListener('dblclick', () => {
    if (essentials.classList.contains('active')) {
        window.location.href = "essentials/essentials.html";
    }
})

merch.addEventListener('dblclick', () => {
    if (merch.classList.contains('active')) {
        window.location.href = "merch/merch.html";
    }
})

donations.addEventListener('dblclick', () => {
    if (donations.classList.contains('active')) {
        window.location.href = "donation/donation.html";
    }
})




/* pink hearts effect on header 
   double click heart from udemy course */
const header = document.getElementById('header');

header.addEventListener('dblclick', (e) => {
    createHeart(e);
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fa-solid');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    header.appendChild(heart);
}
