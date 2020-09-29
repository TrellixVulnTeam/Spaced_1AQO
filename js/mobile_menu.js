let hamburger = document.querySelector('.nav_hamburger');
let bar = hamburger.getElementsByTagName("span");
let mobileMenu = document.getElementById("mobileMenu");
let overlayLink = document.querySelectorAll('.nav_overlay-content--link');

let active = false;

const overlay = () => {

  if (active === false) {
    mobileMenu.style.display = "block";
    bar[0].style.cssText = "background-color: #fffef9; transform: translateY(12px) rotate(135deg)";
    bar[1].style.transform = "scale(0)";
    bar[2].style.cssText = "background-color: #fffef9; transform: translateY(-12px) rotate(-135deg)";
    active = true;
  } else {
    mobileMenu.style.display = "none";
    bar[0].style.cssText = "background-color: #000; transform: none";
    bar[1].style.transform = "scale(1)";
    bar[2].style.cssText = "background-color: #000; transform: none";
    active = false;
  }
}

overlayLink.forEach(item => {
  item.addEventListener('click', event => {
    mobileMenu.style.display = "none";
    bar[0].style.cssText = "background-color: #000; transform: none";
    bar[1].style.transform = "scale(1)";
    bar[2].style.cssText = "background-color: #000; transform: none";
  })
})

hamburger.addEventListener("click", overlay);