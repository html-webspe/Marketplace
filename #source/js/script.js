let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
if (isMobile.any()) { }

//====================  <!-- Fixed -->========================//
const topOffset = document.querySelector('.wrapper');

const positionFixed = (element, poinst) => {
   window.addEventListener('scroll', () => {
      let scrollDistens = window.scrollY;

      const headerHeight = document.getElementById(element).offsetHeight;


      const scrollPos = poinst,
         elements = document.getElementById(element);

      if (scrollDistens >= scrollPos) {
         elements.classList.add('fixed');
         topOffset.style.paddingTop = `${headerHeight}px`;
      } else {
         elements.classList.remove('fixed');
         topOffset.style.paddingTop = null;
      }
   });
}
//====================  <!-- Header-Fixed -->========================//
positionFixed('header', 1)

/*==================== SHOW MENU ====================*/
const iconMenu = document.querySelector('.header-menu__icon');

if (iconMenu) {
   const menuBody = document.querySelector('.menu-header');

   iconMenu.addEventListener('click', () => {
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
   })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/*const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)*/

//====================  <!-- Header-Fixed -->========================//
//====================  <!-- Up -->========================//

const up = document.getElementById('action-up');
up.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});

//====================  <!-- Up -->========================//

//====================  <!-- GoTO -->  ========================//
const links = document.querySelectorAll('.scroll-to');

for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', (e) => {
      e.preventDefault();

      const blockId = e.target.getAttribute('href').substring(1);

      document.getElementById(blockId).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}
//====================  <!-- GoTO -->  ========================//



$('.filter-head__item').click(function () {
   $('.filter-head__item').removeClass('active');

   $(this).addClass('active');
})

$('.result-object__nav--item').click(function () {
   $('.result-object__nav--item').removeClass('active');
   $(this).addClass('active');

})
$('.filter-dropdown__room').click(function () {
   $('.filter-dropdown__room').removeClass('filter-dropdown__room-current');
   $(this).addClass('filter-dropdown__room-current');
})
$('.currency-button').click(function () {
   $('.currency-button').removeClass('currency-button__current');
   $(this).addClass('currency-button__current');
})

$('.select-filter__button').click(function () {
   let sectList = $(this).closest('.select-filter__item');
   if (!sectList.hasClass('active')) {
      $('.select-filter__item').removeClass('active')
      sectList.addClass('active')
   } else {
      sectList.removeClass('active')
   }
})

$(document).on('click', function (e) {
   if (!$(e.target).closest(".select-filter").length) {
      $('.select-filter__item').removeClass('active')
   }
   e.stopPropagation();
});

const rangeSlider1 = document.getElementById('range-slider-1');
const rangeSlider2 = document.getElementById('range-slider-2');


if (rangeSlider1) {
   noUiSlider.create(rangeSlider1, {
      start: [0, 1000000],
      connect: true,
      step: 1,
      range: {
         'min': [0],
         'max': [1000000]
      },
      handleAttributes: [
         { 'class': 'ff' },
         { 'class': 'gg' },
      ],
   });

   const input0 = document.getElementById('input-0');
   const input1 = document.getElementById('input-1');
   const inputs = [input0, input1];

   rangeSlider1.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
   });

   const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;

      console.log(arr);

      rangeSlider1.noUiSlider.set(arr);
   };

   inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
         console.log(index);
         setRangeSlider(index, e.currentTarget.value);
      });
   });
}

if (rangeSlider2) {
   noUiSlider.create(rangeSlider2, {
      start: [0, 100],
      connect: true,
      step: 1,
      range: {
         'min': [0],
         'max': [100]
      },
      handleAttributes: [
         { 'class': 'ff' },
         { 'class': 'gg' },
      ],
   });

   const input2 = document.getElementById('input-2');
   const input3 = document.getElementById('input-3');
   const inputs1 = [input2, input3];

   rangeSlider2.noUiSlider.on('update', function (values, handle) {
      inputs1[handle].value = Math.round(values[handle]);
   });

   const setRangeSlider = (i, value) => {
      let arr = [null, null];
      arr[i] = value;
      rangeSlider2.noUiSlider.set(arr);
   };

   inputs1.forEach((el, index) => {
      el.addEventListener('change', (e) => {
         setRangeSlider(index, e.currentTarget.value);
      });
   });
}

const objectFilter = $('.result-object');

$('.item-gallery').click(function () {
   objectFilter.removeClass('result-object__list');
   objectFilter.addClass('result-object__gallery');
})
$('.item-list').click(function () {
   objectFilter.removeClass('result-object__gallery');
   objectFilter.addClass('result-object__list');
})



const tabsBtn = document.querySelectorAll('.infrasrtucture__tab');
const tabsItem = document.querySelectorAll('.infrasrtucture__tab-item');

tabsBtn.forEach((item) => {
   item.addEventListener("click", () => {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach((item) => {
         item.classList.remove('active');
      })
      tabsItem.forEach((item) => {
         item.classList.remove('active');
      })

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
   })
})

const swiper = new Swiper('.swiper-container', {
   loop: true,
   // If we need pagination
   pagination: {
      el: '.slider-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.slider-controls__btn-next',
      prevEl: '.slider-controls__btn-prev',
   },
});



const cardSlider = new Swiper('.slider-block', {
   //effect: "fade",
});
const sliderNavItem = document.querySelectorAll('.slider-nav__item');

sliderNavItem.forEach((el, index) => {
   el.setAttribute('data-index', index);

   el.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      cardSlider.slideTo(index);

      document.querySelectorAll('.slider-nav__item').forEach((e) => {
         e.classList.remove('active');
      })
      el.classList.add('active');
   });
})

