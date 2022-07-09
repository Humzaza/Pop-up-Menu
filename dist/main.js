/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYSIsInNvdXJjZXMiOlsid2VicGFjazovL2Ryb3AtZG93bi1tZW51Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xyXG4gICAgbGV0IG1lbnVUb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbiAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1CYXInKTtcclxuICAgIGxldCBzdGF0ZSA9IGZhbHNlO1xyXG4gICAgbWVudVRvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIG5hdkJhci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBzdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmF2QmFyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2Rpc3BsYXknLCAnZ3JpZCcpO1xyXG4gICAgICAgICAgICBzdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbm1lbnVUb2dnbGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=