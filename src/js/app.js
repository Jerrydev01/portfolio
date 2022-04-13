// menue bar for mobile devices
const menu = document.querySelector(".menu");
console.log(menu);
const navMenueUl = document.querySelector(".navmenue-ul");
console.log(navMenueUl);

menu.addEventListener("click", () =>{
  menu.classList.toggle("active")
  navMenueUl.classList.toggle("show")
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
  menu.classList.remove("active");
  navMenueUl.classList.remove("show");
}))




// filterable image gallery

const filterContainer = document.querySelector('.project-filter');
console.log(filterContainer);

const projectItems = document.querySelectorAll('.project-item');
console.log(projectItems);

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
 
      // deactivate existing active 'filter-item'
        filterContainer.querySelector(".active").classList.remove("active");
 
      // activate new 'filter-item'
        event.target.classList.add("active");
 
        const filterValue = event.target.getAttribute("data-filter");
 
        projectItems.forEach((item) =>{
 
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove("hide");
             item.classList.add("show");
        }
 
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
 
         });
    }
  });

/*============== end of image gallery =========== */
let fullImgBox = document.getElementById('fullImgBox');
console.log(fullImgBox);
let fullImg = document.getElementById('fullImg');
console.log(fullImg);

function openFullImg(pic) {
  fullImgBox.style.display = 'flex';
  fullImg.src = pic;
}

function closeFullImg() {
  fullImgBox.style.display = 'none';
  
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