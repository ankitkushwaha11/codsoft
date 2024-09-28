const navToggle = document.querySelector('.nav-toggle');
const navItems = document.querySelector('.nav-items');

navToggle.addEventListener('click', () => {
    navItems.classList.toggle('open');
});

window.onscroll=()=>{

  navItems.classList.remove('open')
}


