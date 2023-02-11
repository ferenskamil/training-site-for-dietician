// =============================
// VARIABLES
const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__list-item');

// =============================
// FUNCTIONS
const toggleNav = () => {
	nav.classList.toggle('nav--active');
};

const hideNav = () => {
	nav.classList.remove('nav--active');
};

// =============================
// EVENTS
burgerBtn.addEventListener('click', toggleNav);
navItem.forEach((item) => {
	item.addEventListener('click', hideNav);
});
