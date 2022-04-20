/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;
  console.log('scrollY');
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav_scroll a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav_scroll a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);


// menue bar for mobile devices
const menu = document.querySelector(".menu");
console.log(menu);
const navMenueUl = document.querySelector(".navmenue-ul");
console.log(navMenueUl);

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navMenueUl.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
  navMenueUl.classList.remove("show");
}));




// filterable image gallery

const filterContainer = document.querySelector('.project-filter');
console.log(filterContainer);

const projectItems = document.querySelectorAll('.project-item');
console.log(projectItems);

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {

    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");

    projectItems.forEach((item) => {

      if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.classList.remove("hide");
        item.classList.add("show");
      }

      else {
        item.classList.remove("show");
        item.classList.add("hide");
      }

    });
  }
});

/*============== // Get each modal and close button=========== */

const triggers = document.getElementsByClassName('trigger');
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName('modal');
const closeButtons = document.getElementsByClassName('btn-close');

for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    modals[index].classList.toggle('show-modal');
  }
  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);

}



// swiper review section slider
var swiper = new Swiper(".mySwiperJerry", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});