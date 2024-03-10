/* not finished... T^T */


/* expanding cards project from udemy */
const panels = document.querySelectorAll('.panel');
const pets = document.getElementById('pets');
const essentials = document.getElementById('essentials');
const merch = document.getElementById('merch');
const donations = document.getElementById('donations');


panels.forEach((panel) => {
    panel.addEventListener('click', () => { // listen for click to trigger event
    removeActiveClasses(); // removes all active classes
    panel.classList.add('active'); // adds active class to panel that was clicked on
    })
})

function removeActiveClasses() { // remove active classes from all panels
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}

pets.addEventListener('dblclick', () => { // if element with id pet hears a 'dblclick' trigger this event/function
    if (pets.classList.contains('active')) { // if element with id pet has active class
        window.location.href = "/pet/pet.html"; // redirect user to pets page
    }
})

essentials.addEventListener('dblclick', () => { // if element with id essential hears a 'dblclick' trigger this event/function
    if (essentials.classList.contains('active')) { // if element with id essentials has active class
        window.location.href = "/essentials/essentials.html"; // redirect user to essentials page
    }
})

merch.addEventListener('dblclick', () => { // if element with id merch hears a 'dblclick' trigger this event/function
    if (merch.classList.contains('active')) { // if element with id merch has active class
        window.location.href = "/merch/merch.html"; // redirect user to merch page
    }
})

donations.addEventListener('dblclick', () => { // if element with id donations hears a 'dblclick' trigger this event/function
    if (donations.classList.contains('active')) { // if element with id donations has active class
        window.location.href = "/donations/donations.html"; // redirect user to donations page
    }
})




/*double click heart on pet essentials header from udemy
fix this!! T^T.......*/
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