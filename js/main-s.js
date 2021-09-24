"use strict";

function _classCallCheck(e, t) {
   if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function () {
   function e(e, t) {
      for (var n = 0; n < t.length; n++) {
         var i = t[n];
         i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
   }
   return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
   }
}();
document.addEventListener("DOMContentLoaded", function () {
   function e() {
      document.getElementById("nav-menu").classList.remove("show-menu")
   } ! function () {
      function e(e) {
         for (var n = 0; n < s.length; n++) {
            var i = s[n],
               a = i.element,
               c = i.destination,
               l = i.place,
               d = "_dynamic_adapt_" + i.breakpoint;
            if (r[n].matches) {
               if (!a.classList.contains(d)) {
                  var u;
                  u = "first" == l ? t(c)[0] : "last" == l ? t(c)[t(c).length] : t(c)[l], c.insertBefore(a, c.children[u]), a.classList.add(d)
               }
            } else a.classList.contains(d) && (v = void 0, f = (m = a).getAttribute("data-da-index"), v = (h = o[f]).parent, p = h.index, g = t(v, !0)[p], v.insertBefore(m, v.children[g]), a.classList.remove(d))
         }
         var m, f, h, v, p, g;
         Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      }

      function t(e, t) {
         for (var n = e.children, i = [], o = 0; o < n.length; o++) {
            var a = n[o];
            t ? i.push(o) : null == a.getAttribute("data-da") && i.push(o)
         }
         return i
      }
      var n, i, o = [],
         a = document.querySelectorAll("[data-da]"),
         s = [],
         r = [];
      if (0 < a.length) {
         for (var c = 0, l = 0; l < a.length; l++) {
            var d = a[l],
               u = d.getAttribute("data-da").split(",");
            3 == u.length && (d.setAttribute("data-da-index", c), o[c] = {
               parent: d.parentNode,
               index: (i = d, Array.prototype.slice.call(i.parentNode.children).indexOf(i))
            }, s[c] = {
               element: d,
               destination: document.querySelector("." + u[0].trim()),
               place: u[1].trim(),
               breakpoint: u[2].trim()
            }, c++)
         } (n = s).sort(function (e, t) {
            return e.breakpoint > t.breakpoint ? -1 : 1
         }), n.sort(function (e, t) {
            return e.place > t.place ? 1 : -1
         });
         for (var m = 0; m < s.length; m++) {
            var f = s[m].breakpoint;
            r.push(window.matchMedia("(max-width: " + f + "px)")), r[m].addListener(e)
         }
      }
      e()
   }(), new (function () {
      function e(t) {
         _classCallCheck(this, e), this.options = Object.assign({
            isOpen: function () { },
            isClose: function () { }
         }, t), this.modal = document.querySelector(".modal"), this.speed = !1, this.animation = !1, this.isOpen = !1, this.modalContainer = !1, this.previousActiveElement = !1, this.fixBlocks = document.querySelectorAll(".fix-block"), this.focusElements = ["a[href]", "input", "button", "select", "textarea", "[tabindex]"], this.events()
      }
      return _createClass(e, [{
         key: "events",
         value: function () {
            this.modal && (document.addEventListener("click", function (e) {
               var t = e.target.closest("[data-path]");
               if (t) {
                  var n = t.dataset.path,
                     i = t.dataset.animation,
                     o = t.dataset.speed;
                  return this.animation = i || "fade", this.speed = o ? parseInt(o) : 300, this.modalContainer = document.querySelector('[data-target="' + n + '"]'), void this.open()
               }
               e.target.closest(".modal-close") && this.close()
            }.bind(this)), window.addEventListener("keydown", function (e) {
               27 == e.keyCode && this.isOpen && this.close(), 9 == e.keyCode && this.isOpen && this.focusCatch(e)
            }.bind(this)), this.modal.addEventListener("click", function (e) {
               e.target.classList.contains("modal__container") || e.target.closest(".modal__container") || !this.isOpen || this.close()
            }.bind(this)))
         }
      }, {
         key: "open",
         value: function () {
            var e = this;
            this.previousActiveElement = document.activeElement, this.modal.style.setProperty("--transition-time", this.speed / 1e3 + "s"), this.modal.classList.add("is-open"), this.disableScroll(), this.modalContainer.classList.add("modal-open"), this.modalContainer.classList.add(this.animation), setTimeout(function () {
               e.options.isOpen(e), e.modalContainer.classList.add("animate-open"), e.isOpen = !0, e.focusTrap()
            }, this.speed)
         }
      }, {
         key: "close",
         value: function () {
            this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("modal-open"), this.enableScroll(), this.options.isClose(this), this.isOpen = !1, this.focusTrap())
         }
      }, {
         key: "focusCatch",
         value: function (e) {
            var t = this.modalContainer.querySelectorAll(this.focusElements),
               n = Array.prototype.slice.call(t),
               i = n.indexOf(document.activeElement);
            e.shiftKey && 0 === i && (n[n.length - 1].focus(), e.preventDefault()), e.shiftKey || i !== n.length - 1 || (n[0].focus(), e.preventDefault())
         }
      }, {
         key: "focusTrap",
         value: function () {
            var e = this.modalContainer.querySelectorAll(this.focusElements);
            this.isOpen ? e[0].focus() : this.previousActiveElement.focus()
         }
      }, {
         key: "disableScroll",
         value: function () {
            var e = window.scrollY;
            this.lockPadding(), document.body.classList.add("disable-scroll"), document.body.dataset.position = e, document.body.style.top = -e + "px"
         }
      }, {
         key: "enableScroll",
         value: function () {
            var e = parseInt(document.body.dataset.position, 10);
            this.unlockPadding(), document.body.style.top = "auto", document.body.classList.remove("disable-scroll"), window.scroll({
               top: e,
               left: 0
            }), document.body.removeAttribute("data-position")
         }
      }, {
         key: "lockPadding",
         value: function () {
            var e = window.innerWidth - document.body.offsetWidth + "px";
            this.fixBlocks.forEach(function (t) {
               t.style.paddingRight = e
            }), document.body.style.paddingRight = e
         }
      }, {
         key: "unlockPadding",
         value: function () {
            this.fixBlocks.forEach(function (e) {
               e.style.paddingRight = "0px"
            }), document.body.style.paddingRight = "0px"
         }
      }]), e
   }())({});
   var t = {
      Android: function () {
         return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i)
      },
      any: function () {
         return t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
      }
   };
   t.any();
   var n, i = document.querySelector(".wrapper");
   n = "header", window.addEventListener("scroll", function () {
      var e = window.scrollY,
         t = document.getElementById(n).offsetHeight,
         o = document.getElementById(n);
      1 <= e ? (o.classList.add("fixed"), i.style.paddingTop = t + "px") : (o.classList.remove("fixed"), i.style.paddingTop = null)
   });
   var o = document.querySelector(".header-menu__icon");
   if (o) {
      var a = document.querySelector(".menu-header");
      o.addEventListener("click", function () {
         o.classList.toggle("active"), a.classList.toggle("active")
      })
   }
   document.querySelectorAll(".nav__link").forEach(function (t) {
      return t.addEventListener("click", e)
   }), document.getElementById("action-up").addEventListener("click", function () {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   });
   for (var s = document.querySelectorAll(".scroll-to"), r = 0; r < s.length; r++) s[r].addEventListener("click", function (e) {
      e.preventDefault();
      var t = e.target.getAttribute("href").substring(1);
      document.getElementById(t).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   });
   $(".filter-head__item").click(function () {
      $(".filter-head__item").removeClass("active"), $(this).addClass("active")
   }), $(".result-object__nav--item").click(function () {
      $(".result-object__nav--item").removeClass("active"), $(this).addClass("active")
   }), $(".filter-dropdown__room").click(function () {
      $(".filter-dropdown__room").removeClass("filter-dropdown__room-current"), $(this).addClass("filter-dropdown__room-current")
   }), $(".currency-button").click(function () {
      $(".currency-button").removeClass("currency-button__current"), $(this).addClass("currency-button__current")
   }), $(".select-filter__button").click(function () {
      var e = $(this).closest(".select-filter__item");
      e.hasClass("active") ? e.removeClass("active") : ($(".select-filter__item").removeClass("active"), e.addClass("active"))
   }), $(document).on("click", function (e) {
      $(e.target).closest(".select-filter").length || $(".select-filter__item").removeClass("active"), e.stopPropagation()
   });
   var c = document.getElementById("range-slider-1"),
      l = document.getElementById("range-slider-2");
   if (c) {
      noUiSlider.create(c, {
         start: [0, 1e6],
         connect: !0,
         step: 1,
         range: {
            min: [0],
            max: [1e6]
         },
         handleAttributes: [{
            class: "ff"
         }, {
            class: "gg"
         }]
      });
      var d = [document.getElementById("input-0"), document.getElementById("input-1")];
      c.noUiSlider.on("update", function (e, t) {
         d[t].value = Math.round(e[t])
      }), d.forEach(function (e, t) {
         e.addEventListener("change", function (e) {
            var n, i, o;
            console.log(t), n = t, i = e.currentTarget.value, (o = [null, null])[n] = i, console.log(o), c.noUiSlider.set(o)
         })
      })
   }
   if (l) {
      noUiSlider.create(l, {
         start: [0, 100],
         connect: !0,
         step: 1,
         range: {
            min: [0],
            max: [100]
         },
         handleAttributes: [{
            class: "ff"
         }, {
            class: "gg"
         }]
      });
      var u = [document.getElementById("input-2"), document.getElementById("input-3")];
      l.noUiSlider.on("update", function (e, t) {
         u[t].value = Math.round(e[t])
      }), u.forEach(function (e, t) {
         e.addEventListener("change", function (e) {
            var n, i, o;
            n = t, i = e.currentTarget.value, (o = [null, null])[n] = i, l.noUiSlider.set(o)
         })
      })
   }
   var m = $(".result-object");
   $(".item-gallery").click(function () {
      m.removeClass("result-object__list"), m.addClass("result-object__gallery")
   }), $(".item-list").click(function () {
      m.removeClass("result-object__gallery"), m.addClass("result-object__list")
   });
   var f = document.querySelectorAll(".infrasrtucture__tab"),
      h = document.querySelectorAll(".infrasrtucture__tab-item");
   f.forEach(function (e) {
      e.addEventListener("click", function () {
         var t = e,
            n = t.getAttribute("data-tab"),
            i = document.querySelector(n);
         f.forEach(function (e) {
            e.classList.remove("active")
         }), h.forEach(function (e) {
            e.classList.remove("active")
         }), t.classList.add("active"), i.classList.add("active")
      })
   }), new Swiper(".swiper-container", {
      loop: !0,
      pagination: {
         el: ".slider-pagination"
      },
      navigation: {
         nextEl: ".slider-controls__btn-next",
         prevEl: ".slider-controls__btn-prev"
      }
   });
   var v = new Swiper(".slider-block", {});
   document.querySelectorAll(".slider-nav__item").forEach(function (e, t) {
      e.setAttribute("data-index", t), e.addEventListener("click", function (t) {
         var n = parseInt(t.currentTarget.dataset.index);
         v.slideTo(n), document.querySelectorAll(".slider-nav__item").forEach(function (e) {
            e.classList.remove("active")
         }), e.classList.add("active")
      })
   }), $(window).on("load resize", function () {
      1266 < $(window).width() && $(window).scroll(function () {
         var e = $("#about-animation");
         e.offset().top, $(".infrasrtucture"), $(window).scrollTop() <= 600 && e.css({
            top: $(window).scrollTop() + "px",
            right: "25px",
            position: "absolute"
         })
      })
   })
});