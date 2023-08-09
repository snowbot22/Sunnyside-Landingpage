//VARIABLES
let headerArrow = document.getElementById('headerArrow');
let sectionTwo = document.getElementById('sectionTwo');
let mobileSubmenu= document.getElementById('mobileSubmenu');
let mobileMenu = document.getElementById('mobileMenu');

//FUNCTIONS
const goToSectionTwo = () => {
    sectionTwo.scrollIntoView({behavior: "smooth"});

}
const toggleSubmenu = () => {
    mobileSubmenu.classList.toggle('hidden');
}

//EVENT LISTENERS
headerArrow.addEventListener('click', goToSectionTwo);
mobileMenu.addEventListener('click', toggleSubmenu);