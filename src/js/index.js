// import $ from "jquery";
// window.jQuery = $;
// window.$ = $;

// import "kendo-ui-core";
// import Splide from "@splidejs/splide";
// // import popper from 'popper.js';
// // import bootstrap from 'bootstrap';

// document.addEventListener("DOMContentLoaded", function() {
//   var secondarySlider = new Splide("#secondary-slider", {
//     fixedWidth: 100,
//     height: 60,
//     gap: 10,
//     cover: true,
//     isNavigation: true,
//     pagination: false,
//     focus: "center",
//     breakpoints: {
//       "600": {
//         fixedWidth: 66,
//         height: 40
//       }
//     }
//   }).mount();

//   var primarySlider = new Splide("#primary-slider", {
//     type: "fade",
//     heightRatio: 0.5,
//     arrows: false,
//     cover: true
//   }); // do not call mount() here.

//   primarySlider.sync(secondarySlider).mount();
// });

// $(document).ready(function() {
//   $("#menu").kendoMenu();
// });

// function printTomatoesPrice() {
//   getTomatoesPrice().forEach(item => console.log(item));
// }

// function getTomatoesPrice() {
//   return [
//     ["Japan", 5.47],
//     ["South Korea", 5.13],
//     ["United States", 4.26],
//     ["Switzerland", 4.18],
//     ["Trinidad And Tobago", 4.11],
//     ["Iceland", 3.64],
//     ["Taiwan", 3.47],
//     ["Hong Kong", 3.32],
//     ["Denmark", 3.12],
//     ["Finland", 3.09],
//     ["France", 3.02],
//     ["Australia", 2.94],
//     ["Sweden", 2.9],
//     ["Canada", 2.86],
//     ["New Zealand", 2.85],
//     ["Norway", 2.84],
//     ["Ireland", 2.79],
//     ["Netherlands", 2.74],
//     ["Malta", 2.74],
//     ["Panama", 2.74],
//     ["Germany", 2.51],
//     ["Austria", 2.46],
//     ["Costa Rica", 2.26],
//     ["Estonia", 2.25],
//     ["Belgium", 2.25],
//     ["Slovakia", 2.24],
//     ["Slovenia", 2.23],
//     ["Italy", 2.13],
//     ["Croatia", 2.12],
//     ["United Kingdom", 2.1],
//     ["Singapore", 2.09],
//     ["Cyprus", 2.08],
//     ["Qatar", 1.89],
//     ["Czech Republic", 1.86],
//     ["Belarus", 1.84],
//     ["Latvia", 1.8],
//     ["Spain", 1.7],
//     ["Uruguay", 1.68],
//     ["Hungary", 1.67],
//     ["Russia", 1.66],
//     ["Nigeria", 1.65],
//     ["Moldova", 1.61],
//     ["Lithuania", 1.54],
//     ["Portugal", 1.54],
//     ["Bahrain", 1.52],
//     ["Venezuela", 1.52],
//     ["Oman", 1.51],
//     ["Israel", 1.51],
//     ["United Arab Emirates", 1.5],
//     ["Paraguay", 1.5],
//     ["Greece", 1.48],
//     ["Saudi Arabia", 1.48],
//     ["Poland", 1.42],
//     ["Kuwait", 1.38],
//     ["Bulgaria", 1.37],
//     ["Ukraine", 1.33],
//     ["Lebanon", 1.31],
//     ["Namibia", 1.31],
//     ["Thailand", 1.3],
//     ["Honduras", 1.28],
//     ["Palestine", 1.27],
//     ["Romania", 1.25],
//     ["Kenya", 1.23],
//     ["Philippines", 1.2],
//     ["Chile", 1.2],
//     ["Ecuador", 1.2],
//     ["Guatemala", 1.2],
//     ["China", 1.15],
//     ["Kazakhstan", 1.14],
//     ["Bolivia", 1.14],
//     ["Dominican Republic", 1.12],
//     ["Montenegro", 1.12],
//     ["Peru", 1.11],
//     ["South Africa", 1.1],
//     ["Brazil", 1.1],
//     ["Iran", 1.09],
//     ["Bosnia And Herzegovina", 1.08],
//     ["Argentina", 1.06],
//     ["Malaysia", 1.03],
//     ["Serbia", 1.01],
//     ["Azerbaijan", 0.97],
//     ["Georgia", 0.94],
//     ["Armenia", 0.94],
//     ["Mexico", 0.93],
//     ["Albania", 0.92],
//     ["Kosovo (Disputed Territory)", 0.91],
//     ["Indonesia", 0.9],
//     ["Vietnam", 0.89],
//     ["North Macedonia", 0.87],
//     ["Sri Lanka", 0.86],
//     ["Colombia", 0.82],
//     ["Jordan", 0.79],
//     ["Iraq", 0.75],
//     ["Turkey", 0.74],
//     ["Algeria", 0.72],
//     ["Pakistan", 0.7],
//     ["Uzbekistan", 0.63],
//     ["Bangladesh", 0.63],
//     ["Nepal", 0.54],
//     ["Tunisia", 0.52],
//     ["Morocco", 0.5],
//     ["Syria", 0.45],
//     ["India", 0.45],
//     ["Egypt", 0.43]
//   ];
// }