import $ from "jquery";
window.jQuery = $;
window.$ = $;

import "@progress/kendo-ui/js/kendo.menu.min.js";
import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  var secondarySlider = new Splide("#secondary-slider", {
    fixedWidth: 100,
    height: 60,
    gap: 10,
    cover: true,
    isNavigation: true,
    pagination: false,
    focus: "center",
    breakpoints: {
      "600": {
        fixedWidth: 66,
        height: 40
      }
    }
  }).mount();

  var primarySlider = new Splide("#primary-slider", {
    type: "fade",
    heightRatio: 0.5,
    arrows: false,
    cover: true
  }); // do not call mount() here.

  primarySlider.sync(secondarySlider).mount();
});

$("#menu").kendoMenu({
  dataTextField: "text",
  dataUrlField: "dataUrlField",
  dataSource: [{
      text: "Home",
      dataUrlField: "index.html"
    },
    {
      text: "Garden",
      items: [{
          text: "Fruit garden"
        },
        {
          text: "Vegetable garden",
          dataUrlField: "second.html"
        },
        {
          text: "Seedlings"
        },
        {
          text: "Seeds"
        }
      ]
    },
    {
      text: "Blog"
    },
    {
      text: "About"
    }
  ]
});