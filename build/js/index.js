const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");
const header = document.getElementById("header");

// Responsive Navbar Toggle
burgerMenu.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  header.classList.toggle("blur");
});

function TabsManager(el) {
  this.tabsContainers = document.querySelectorAll(el);
  this.init();
}

TabsManager.prototype.init = function () {
  var self = this;

  document.body.addEventListener("click", function (event) {
    var target = event.target;

    while (target !== document.body) {
      if (target.matches(".tabs-tags__tag")) {
        self.handleTabClick(target);
        return;
      }

      target = target.parentNode;
    }
  });

  self.tabsContainers.forEach(function (tabsContainer) {
    if (tabsContainer) {
      var contentTexts = tabsContainer.querySelectorAll(".tabs-content__block");
      contentTexts.forEach(function (text, index) {
        if (index !== 0) {
          text.style.display = "none";
        }
      });
      tabsContainer.querySelector(".tabs-tags__tag").classList.add("active");
    }
  });
};

TabsManager.prototype.handleTabClick = function (clickedTab) {
  var self = this;
  var tabsContainer = clickedTab.closest(".tabs");

  if (tabsContainer) {
    var contentTexts = tabsContainer.querySelectorAll(".tabs-content__block");
    var tags = tabsContainer.querySelectorAll(".tabs-tags__tag");
    var index = Array.from(tags).indexOf(clickedTab);
    contentTexts.forEach(function (text) {
      text.style.display = "none";
    });
    contentTexts[index].style.display = "block";
    tags.forEach(function (t) {
      t.classList.remove("active");
    });
    clickedTab.classList.add("active");
  }
};

// Инициализация объекта TabsManager
var tabsManager = new TabsManager(".tabs");

// Слайдеры

var swiper = new Swiper(".products__slider", {
  slidesPerView: 4,
  spaceBetween: 16,
  watchSlidesProgress: true,
  slideVisibleClass: "products__slider-slide-visible",
  pagination: {
    el: ".products__slider-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".products__slider-next",
    prevEl: ".products__slider-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1.1, spaceBetween: 16 },
    500: { slidesPerView: 2.1, spaceBetween: 16 },
    768: { slidesPerView: 3, spaceBetween: 16 },
    1124: { slidesPerView: 4, spaceBetween: 16 },
  },
});

var swiper2 = new Swiper(".about_us__slider", {
  slidesPerView: 1.4,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".about_us__slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".about_us__slider-next",
    prevEl: ".about_us__slider-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
      centeredSlides: false,
      loop: false,
    },
    840: {
      slidesPerView: 1.4,
      spaceBetween: 16,
      centeredSlides: false,
      loop: false,
    },
    1150: {
      slidesPerView: 1.4,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
    },
  },
});

var swiper3 = new Swiper(".our_team__slider", {
  slidesPerView: 4,
  spaceBetween: 56,
  pagination: {
    el: ".our_team__slider-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1.1, spaceBetween: 16 },
    500: { slidesPerView: 2.1, spaceBetween: 16 },
    768: { slidesPerView: 3, spaceBetween: 26 },
    1024: { slidesPerView: 4, spaceBetween: 56 },
    1280: { slidesPerView: 4, spaceBetween: 56 },
  },
});

var swiper4 = new Swiper(".wonderlife__slider", {
  slidesPerView: 4,
  spaceBetween: 56,
  loop: true,
  pagination: {
    el: ".wonderlife__slider-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: { slidesPerView: 1.4, spaceBetween: 16, centeredSlides: true },
    430: { slidesPerView: 1.5, spaceBetween: 16, centeredSlides: true },
    520: { slidesPerView: 2.6, spaceBetween: 26, centeredSlides: true },
    768: { slidesPerView: 3.4, spaceBetween: 26, centeredSlides: true },
    1024: { slidesPerView: 4, spaceBetween: 26, centeredSlides: false },
  },
});
