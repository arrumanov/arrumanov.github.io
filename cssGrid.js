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

$(document).ready(function () {
    $("#menu").kendoMenu();
});