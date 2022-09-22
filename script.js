//header part starts
const toggleButton = document.getElementsByClassName('toggle-button')[0] //cause we are pointing to arr we want the first elm
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//eventListener mean when the button is clicked do this
toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})
//header part ends

