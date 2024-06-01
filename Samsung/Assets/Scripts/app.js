/*
==========
Main
==========
*/
/*
==========
Main >> explore stories Section for mobile
==========
*/
let container_swiper_wrapper_width = document.getElementsByClassName("container-swiper-wrapper")[0].clientWidth;
let container_swiper_content_count = document.querySelectorAll(".container-swiper__content-wrapper");
let container_swiper_width = document.getElementById("container-swiper").style.width=container_swiper_wrapper_width*(container_swiper_content_count.length)+'px';
let indicator_dots = document.querySelectorAll(".indicator-wrapper__dot");
let turn = 0;
container_swiper_content_count.forEach(co_swip_count);
function co_swip_count(item) {
  item.style.width=container_swiper_wrapper_width+'px';
}
indicator_dots[0].addEventListener("click" , function() {
  turn == 1;
  document.getElementById("container-swiper").style.transform = `translatex(-${turn * container_swiper_wrapper_width}px)`;
  indicator_dots[0].classList.add("indicator-wrapper__dot--active");
  indicator_dots[1].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[2].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[3].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[4].classList.remove("indicator-wrapper__dot--active");
})
indicator_dots[1].addEventListener("click" , function() {
  document.getElementById("container-swiper").style.transform = `translatex(-${1 * container_swiper_wrapper_width}px)`;
  indicator_dots[1].classList.add("indicator-wrapper__dot--active");
  indicator_dots[0].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[2].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[3].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[4].classList.remove("indicator-wrapper__dot--active");
})
indicator_dots[2].addEventListener("click" , function() {
  document.getElementById("container-swiper").style.transform = `translatex(-${2 * container_swiper_wrapper_width}px)`;
  indicator_dots[2].classList.add("indicator-wrapper__dot--active");
  indicator_dots[0].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[1].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[3].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[4].classList.remove("indicator-wrapper__dot--active");
})
indicator_dots[3].addEventListener("click" , function() {
  document.getElementById("container-swiper").style.transform = `translatex(-${3* container_swiper_wrapper_width}px)`;
  indicator_dots[3].classList.add("indicator-wrapper__dot--active");
  indicator_dots[0].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[1].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[2].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[4].classList.remove("indicator-wrapper__dot--active");
})
indicator_dots[4].addEventListener("click" , function() {
  document.getElementById("container-swiper").style.transform = `translatex(-${4 * container_swiper_wrapper_width}px)`;
  indicator_dots[4].classList.add("indicator-wrapper__dot--active");
  indicator_dots[0].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[1].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[2].classList.remove("indicator-wrapper__dot--active");
  indicator_dots[3].classList.remove("indicator-wrapper__dot--active");
})


/*
==========
Main >> explore stories Section
==========
*/
const EXPSTORIESLINK = document.querySelectorAll(".explore-stories__link");
const EXPSTORIESITEM = document.querySelectorAll(".explore-stories__item");
const EXPSTORIESIMG = document.querySelectorAll(".explore-stories__img");
const LEARNMORE = document.querySelectorAll(".explore-stories__link-learnMore");

EXPSTORIESLINK[1].addEventListener("mouseenter",function(){
  LEARNMORE[1].classList.add("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[1].classList.add("explore-stories__item--open");
  LEARNMORE[0].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[0].classList.remove("explore-stories__item--open");
  LEARNMORE[2].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[2].classList.remove("explore-stories__item--open");
  LEARNMORE[3].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[3].classList.remove("explore-stories__item--open");
  LEARNMORE[4].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[4].classList.remove("explore-stories__item--open");
  EXPSTORIESIMG[3].classList.add("explore-stories__img--visible");
  EXPSTORIESIMG[0].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[1].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[2].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[4].classList.remove("explore-stories__img--visible");
})
EXPSTORIESLINK[0].addEventListener("mouseenter",function(){
  LEARNMORE[0].classList.add("explore-stories__link-learnMore--open");
  EXPSTORIESIMG[4].classList.toggle("explore-stories__img--visible");
  EXPSTORIESITEM[0].classList.add("explore-stories__item--open");
  LEARNMORE[1].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[1].classList.remove("explore-stories__item--open");
  LEARNMORE[2].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[2].classList.remove("explore-stories__item--open");
  LEARNMORE[3].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[3].classList.remove("explore-stories__item--open");
  LEARNMORE[4].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[4].classList.remove("explore-stories__item--open");
  EXPSTORIESIMG[4].classList.add("explore-stories__img--visible");
  EXPSTORIESIMG[0].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[1].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[2].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[3].classList.remove("explore-stories__img--visible");
})
EXPSTORIESLINK[2].addEventListener("mouseenter",function(){
  LEARNMORE[2].classList.add("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[2].classList.add("explore-stories__item--open");
  LEARNMORE[0].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[0].classList.remove("explore-stories__item--open");
  LEARNMORE[1].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[1].classList.remove("explore-stories__item--open");
  LEARNMORE[3].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[3].classList.remove("explore-stories__item--open");
  LEARNMORE[4].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[4].classList.remove("explore-stories__item--open");
  EXPSTORIESIMG[2].classList.add("explore-stories__img--visible");
  EXPSTORIESIMG[0].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[1].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[3].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[4].classList.remove("explore-stories__img--visible");
})
EXPSTORIESLINK[3].addEventListener("mouseenter",function(){
  LEARNMORE[3].classList.add("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[3].classList.add("explore-stories__item--open");
  LEARNMORE[0].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[0].classList.remove("explore-stories__item--open");
  LEARNMORE[2].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[2].classList.remove("explore-stories__item--open");
  LEARNMORE[1].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[1].classList.remove("explore-stories__item--open");
  LEARNMORE[4].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[4].classList.remove("explore-stories__item--open");
  EXPSTORIESIMG[1].classList.add("explore-stories__img--visible");
  EXPSTORIESIMG[0].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[3].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[2].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[4].classList.remove("explore-stories__img--visible");
})
EXPSTORIESLINK[4].addEventListener("mouseenter",function(){
  LEARNMORE[4].classList.add("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[4].classList.add("explore-stories__item--open");
  LEARNMORE[0].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[0].classList.remove("explore-stories__item--open");
  LEARNMORE[2].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[2].classList.remove("explore-stories__item--open");
  LEARNMORE[3].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[3].classList.remove("explore-stories__item--open");
  LEARNMORE[1].classList.remove("explore-stories__link-learnMore--open");
  EXPSTORIESITEM[1].classList.remove("explore-stories__item--open");
  EXPSTORIESIMG[0].classList.add("explore-stories__img--visible");
  EXPSTORIESIMG[3].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[1].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[2].classList.remove("explore-stories__img--visible");
  EXPSTORIESIMG[4].classList.remove("explore-stories__img--visible");
})
/*
==========
Main >> search keyword Section
==========
*/

const CLEARSEARCH = document.getElementsByClassName(".searchkey__x-icon");
const SEARCHBOX = document.getElementsByClassName(".searchkey__input");


/*
==========
Main >> Accordion Section
==========
*/
const ACTITLE = document.querySelectorAll(".accordion_title");
const ACCORDIONCAPTIONS = document.querySelectorAll(".accordion_captions");
const ACTITLEICONS = document.querySelectorAll(".accordion_title-icons");
const ACICONS = document.querySelectorAll(".ac_icons");
const SHOWMORE = document.querySelectorAll(".showMore");
const SHOWLESS = document.querySelectorAll(".showLess");
const ACCAPTIONHIDE = document.querySelectorAll(".accordion_caption-more");

ACTITLE[0].addEventListener("click" , function() {
  ACCORDIONCAPTIONS[0].classList.toggle("accordion_captions--close");
  ACTITLEICONS[0].classList.toggle("bg-black");
  ACICONS[0].classList.toggle("ac_icons-anime");
})
ACTITLE[1].addEventListener("click" , function() {
  ACCORDIONCAPTIONS[1].classList.toggle("accordion_captions--close");
  ACTITLEICONS[1].classList.toggle("bg-black");
  ACICONS[1].classList.toggle("ac_icons-anime");
})
ACTITLE[2].addEventListener("click" , function() {
  ACCORDIONCAPTIONS[2].classList.toggle("accordion_captions--close");
  ACTITLEICONS[2].classList.toggle("bg-black");
  ACICONS[2].classList.toggle("ac_icons-anime");
})

SHOWMORE[0].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[0].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[0].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[0].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[0].classList.add("accordion_caption-more-showhide");
    SHOWMORE[0].textContent = "Show Less";
  }
})

SHOWMORE[1].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[1].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[1].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[1].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[1].classList.add("accordion_caption-more-showhide");
    SHOWMORE[1].textContent = "Show Less";
  }
})

SHOWMORE[2].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[2].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[2].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[2].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[2].classList.add("accordion_caption-more-showhide");
    SHOWMORE[2].textContent = "Show Less";
  }
})

SHOWMORE[3].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[3].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[3].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[3].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[3].classList.add("accordion_caption-more-showhide");
    SHOWMORE[3].textContent = "Show Less";
  }
})

SHOWMORE[4].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[4].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[4].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[4].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[4].classList.add("accordion_caption-more-showhide");
    SHOWMORE[4].textContent = "Show Less";
  }
})

SHOWMORE[5].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[5].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[5].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[5].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[5].classList.add("accordion_caption-more-showhide");
    SHOWMORE[5].textContent = "Show Less";
  }
})

SHOWMORE[6].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[6].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[6].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[6].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[6].classList.add("accordion_caption-more-showhide");
    SHOWMORE[6].textContent = "Show Less";
  }
})

SHOWMORE[7].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[7].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[7].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[7].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[7].classList.add("accordion_caption-more-showhide");
    SHOWMORE[7].textContent = "Show Less";
  }
})

SHOWMORE[8].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[8].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[8].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[8].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[8].classList.add("accordion_caption-more-showhide");
    SHOWMORE[8].textContent = "Show Less";
  }
})

SHOWMORE[9].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[9].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[9].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[9].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[9].classList.add("accordion_caption-more-showhide");
    SHOWMORE[9].textContent = "Show Less";
  }
})

SHOWMORE[10].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[10].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[10].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[10].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[10].classList.add("accordion_caption-more-showhide");
    SHOWMORE[10].textContent = "Show Less";
  }
})

SHOWMORE[11].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[11].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[11].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[11].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[11].classList.add("accordion_caption-more-showhide");
    SHOWMORE[11].textContent = "Show Less";
  }
})

SHOWMORE[12].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[12].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[12].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[12].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[12].classList.add("accordion_caption-more-showhide");
    SHOWMORE[12].textContent = "Show Less";
  }
})

SHOWMORE[13].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[13].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[13].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[13].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[13].classList.add("accordion_caption-more-showhide");
    SHOWMORE[13].textContent = "Show Less";
  }
})

SHOWMORE[14].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[14].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[14].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[14].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[14].classList.add("accordion_caption-more-showhide");
    SHOWMORE[14].textContent = "Show Less";
  }
})

SHOWMORE[15].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[15].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[15].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[15].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[15].classList.add("accordion_caption-more-showhide");
    SHOWMORE[15].textContent = "Show Less";
  }
})

/*
==========
Footer >> Footer middle Section
==========
*/
const footerAccTitle = document.querySelectorAll(".footer-acc-titles");
const footerAccTitleIcons = document.querySelectorAll(".ftr-acc-icon");
const footerAccCaptionWrapper = document.querySelectorAll(".footer-acc-caption_wrapper");

footerAccTitle[0].addEventListener("click" , function() {
  footerAccCaptionWrapper[0].classList.toggle("ftr-acc-caption_wrap1--open");
  footerAccTitle[0].classList.toggle("footer-acc-titles--border");
  footerAccTitle[0].classList.remove("footer-acc-titles--bordernone");
  footerAccTitle[1].classList.remove("footer-acc-titles--border");
  footerAccTitle[2].classList.remove("footer-acc-titles--border");
  footerAccTitle[3].classList.remove("footer-acc-titles--border");
  footerAccTitle[4].classList.remove("footer-acc-titles--border");
  footerAccTitleIcons[0].classList.toggle("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[1].classList.remove("ftr-acc-caption_wrap2--open");
  footerAccTitleIcons[1].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[2].classList.remove("ftr-acc-caption_wrap3--open");
  footerAccTitleIcons[2].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[3].classList.remove("ftr-acc-caption_wrap4--open");
  footerAccTitleIcons[3].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[4].classList.remove("ftr-acc-caption_wrap5--open");
  footerAccTitleIcons[4].classList.remove("ftr-acc-icon--rotate");
})

footerAccTitle[1].addEventListener("click" , function() {
  footerAccCaptionWrapper[1].classList.toggle("ftr-acc-caption_wrap2--open");
  footerAccTitle[1].classList.toggle("footer-acc-titles--border");
  footerAccTitle[1].classList.remove("footer-acc-titles--bordernone");
  footerAccTitle[0].classList.remove("footer-acc-titles--border");
  footerAccTitle[2].classList.remove("footer-acc-titles--border");
  footerAccTitle[3].classList.remove("footer-acc-titles--border");
  footerAccTitle[4].classList.remove("footer-acc-titles--border");
  footerAccTitleIcons[1].classList.toggle("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[0].classList.remove("ftr-acc-caption_wrap1--open");
  footerAccTitleIcons[0].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[2].classList.remove("ftr-acc-caption_wrap3--open");
  footerAccTitleIcons[2].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[3].classList.remove("ftr-acc-caption_wrap4--open");
  footerAccTitleIcons[3].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[4].classList.remove("ftr-acc-caption_wrap5--open");
  footerAccTitleIcons[4].classList.remove("ftr-acc-icon--rotate");
})

footerAccTitle[2].addEventListener("click" , function() {
  footerAccCaptionWrapper[2].classList.toggle("ftr-acc-caption_wrap3--open");
  footerAccTitle[2].classList.toggle("footer-acc-titles--border");
  footerAccTitle[2].classList.remove("footer-acc-titles--bordernone");
  footerAccTitle[1].classList.remove("footer-acc-titles--border");
  footerAccTitle[0].classList.remove("footer-acc-titles--border");
  footerAccTitle[3].classList.remove("footer-acc-titles--border");
  footerAccTitle[4].classList.remove("footer-acc-titles--border");
  footerAccTitleIcons[2].classList.toggle("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[0].classList.remove("ftr-acc-caption_wrap1--open");
  footerAccTitleIcons[0].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[1].classList.remove("ftr-acc-caption_wrap2--open");
  footerAccTitleIcons[1].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[3].classList.remove("ftr-acc-caption_wrap4--open");
  footerAccTitleIcons[3].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[4].classList.remove("ftr-acc-caption_wrap5--open");
  footerAccTitleIcons[4].classList.remove("ftr-acc-icon--rotate");
})

footerAccTitle[3].addEventListener("click" , function() {
  footerAccCaptionWrapper[3].classList.toggle("ftr-acc-caption_wrap4--open");
  footerAccTitle[3].classList.toggle("footer-acc-titles--border");
  footerAccTitle[3].classList.remove("footer-acc-titles--bordernone");
  footerAccTitle[1].classList.remove("footer-acc-titles--border");
  footerAccTitle[2].classList.remove("footer-acc-titles--border");
  footerAccTitle[0].classList.remove("footer-acc-titles--border");
  footerAccTitle[4].classList.remove("footer-acc-titles--border");
  footerAccTitleIcons[3].classList.toggle("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[0].classList.remove("ftr-acc-caption_wrap1--open");
  footerAccTitleIcons[0].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[1].classList.remove("ftr-acc-caption_wrap2--open");
  footerAccTitleIcons[1].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[2].classList.remove("ftr-acc-caption_wrap3--open");
  footerAccTitleIcons[2].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[4].classList.remove("ftr-acc-caption_wrap5--open");
  footerAccTitleIcons[4].classList.remove("ftr-acc-icon--rotate");
})

footerAccTitle[4].addEventListener("click" , function() {
  footerAccCaptionWrapper[4].classList.toggle("ftr-acc-caption_wrap5--open");
  footerAccTitle[4].classList.toggle("footer-acc-titles--border");
  footerAccTitle[4].classList.remove("footer-acc-titles--bordernone");
  footerAccTitle[1].classList.remove("footer-acc-titles--border");
  footerAccTitle[2].classList.remove("footer-acc-titles--border");
  footerAccTitle[3].classList.remove("footer-acc-titles--border");
  footerAccTitle[0].classList.remove("footer-acc-titles--border");
  footerAccTitleIcons[4].classList.toggle("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[0].classList.remove("ftr-acc-caption_wrap1--open");
  footerAccTitleIcons[0].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[1].classList.remove("ftr-acc-caption_wrap2--open");
  footerAccTitleIcons[1].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[3].classList.remove("ftr-acc-caption_wrap4--open");
  footerAccTitleIcons[3].classList.remove("ftr-acc-icon--rotate");
  footerAccCaptionWrapper[2].classList.remove("ftr-acc-caption_wrap3--open");
  footerAccTitleIcons[2].classList.remove("ftr-acc-icon--rotate");
})

/*
==========
Footer >> final(right side >> social icons)
==========
*/
const SOCIALICONS = document.querySelectorAll(".footer-final__socialitems");

SOCIALICONS[0].addEventListener("click" , function() {
  SOCIALICONS[0].classList.add("footer-final__socialitems--border");
  SOCIALICONS[1].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[2].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[3].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[4].classList.remove("footer-final__socialitems--border");
})
SOCIALICONS[1].addEventListener("click" , function() {
  SOCIALICONS[1].classList.add("footer-final__socialitems--border");
  SOCIALICONS[0].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[2].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[3].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[4].classList.remove("footer-final__socialitems--border");
})
SOCIALICONS[2].addEventListener("click" , function() {
  SOCIALICONS[2].classList.add("footer-final__socialitems--border");
  SOCIALICONS[1].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[0].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[3].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[4].classList.remove("footer-final__socialitems--border");
})
SOCIALICONS[3].addEventListener("click" , function() {
  SOCIALICONS[3].classList.add("footer-final__socialitems--border");
  SOCIALICONS[1].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[2].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[0].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[4].classList.remove("footer-final__socialitems--border");
})
SOCIALICONS[4].addEventListener("click" , function() {
  SOCIALICONS[4].classList.add("footer-final__socialitems--border");
  SOCIALICONS[1].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[2].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[3].classList.remove("footer-final__socialitems--border");
  SOCIALICONS[0].classList.remove("footer-final__socialitems--border");
})