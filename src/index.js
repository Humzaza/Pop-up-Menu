
function menuToggle() {
    let menuTog = document.querySelector(".menu");
    let navBar = document.querySelector('.nav-Bar');
    let state = false;
    menuTog.addEventListener('click', (e) => {
        if (state) {
            navBar.style.display = 'none';
            state = false;
        }
        else {
            navBar.style.display = 'grid';
            navBar.setAttribute('display', 'grid');
            state = true;
        }
    });
}

menuToggle();