import $ from "jquery";
window.jQuery = $;
window.$ = $;

import "@progress/kendo-ui";

$(document).ready(function() {
  $("#menu").kendoMenu();
});

function printTomatoesPrice() {
  getTomatoesPrice().forEach(item => console.log(item));
}

window.getTomatoesPrice = function() {
  return [
    {
      Country: "Japan",
      Price: 5.47
    },
    {
      Country: "South Korea",
      Price: 5.13
    },
    {
      Country: "United States",
      Price: 4.26
    },
    {
      Country: "Switzerland",
      Price: 4.18
    },
    {
      Country: "Trinidad And Tobago",
      Price: 4.11
    },
    {
      Country: "Iceland",
      Price: 3.64
    },
    {
      Country: "Taiwan",
      Price: 3.47
    },
    {
      Country: "Hong Kong",
      Price: 3.32
    },
    {
      Country: "Denmark",
      Price: 3.12
    },
    {
      Country: "Finland",
      Price: 3.09
    },
    {
      Country: "France",
      Price: 3.02
    },
    {
      Country: "Australia",
      Price: 2.94
    },
    {
      Country: "Sweden",
      Price: 2.9
    },
    {
      Country: "New Zealand",
      Price: 2.85
    },
    {
      Country: "Norway",
      Price: 2.84
    },
    {
      Country: "Ireland",
      Price: 2.79
    },
    {
      Country: "Netherlands",
      Price: 2.74
    },
    {
      Country: "Malta",
      Price: 2.74
    },
    {
      Country: "Panama",
      Price: 2.74
    },
    {
      Country: "Germany",
      Price: 2.51
    },
    {
      Country: "Austria",
      Price: 2.46
    },
    {
      Country: "Costa Rica",
      Price: 2.26
    },
    {
      Country: "Estonia",
      Price: 2.25
    },
    {
      Country: "Belgium",
      Price: 2.25
    },
    {
      Country: "Slovakia",
      Price: 2.24
    },
    {
      Country: "Slovenia",
      Price: 2.23
    },
    {
      Country: "Italy",
      Price: 2.13
    },
    {
      Country: "Croatia",
      Price: 2.12
    },
    {
      Country: "United Kingdom",
      Price: 2.1
    },
    {
      Country: "Singapore",
      Price: 2.09
    },
    {
      Country: "Cyprus",
      Price: 2.08
    },
    {
      Country: "Qatar",
      Price: 1.89
    },
    {
      Country: "Czech Republic",
      Price: 1.86
    },
    {
      Country: "Belarus",
      Price: 1.84
    },
    {
      Country: "Latvia",
      Price: 1.8
    },
    {
      Country: "Spain",
      Price: 1.7
    },
    {
      Country: "Uruguay",
      Price: 1.68
    },
    {
      Country: "Hungary",
      Price: 1.67
    },
    {
      Country: "Russia",
      Price: 1.66
    },
    {
      Country: "Nigeria",
      Price: 1.65
    },
    {
      Country: "Moldova",
      Price: 1.61
    },
    {
      Country: "Lithuania",
      Price: 1.54
    },
    {
      Country: "Portugal",
      Price: 1.54
    },
    {
      Country: "Bahrain",
      Price: 1.52
    },
    {
      Country: "Venezuela",
      Price: 1.52
    },
    {
      Country: "Oman",
      Price: 1.51
    },
    {
      Country: "Israel",
      Price: 1.51
    },
    {
      Country: "United Arab Emirates",
      Price: 1.5
    },
    {
      Country: "Paraguay",
      Price: 1.5
    },
    {
      Country: "Greece",
      Price: 1.48
    },
    {
      Country: "Saudi Arabia",
      Price: 1.48
    },
    {
      Country: "Poland",
      Price: 1.42
    },
    {
      Country: "Kuwait",
      Price: 1.38
    },
    {
      Country: "Bulgaria",
      Price: 1.37
    },
    {
      Country: "Lebanon",
      Price: 1.31
    },
    {
      Country: "Namibia",
      Price: 1.31
    },
    {
      Country: "Thailand",
      Price: 1.3
    },
    {
      Country: "Honduras",
      Price: 1.28
    },
    {
      Country: "Palestine",
      Price: 1.27
    },
    {
      Country: "Romania",
      Price: 1.25
    },
    {
      Country: "Kenya",
      Price: 1.23
    },
    {
      Country: "Philippines",
      Price: 1.2
    },
    {
      Country: "Chile",
      Price: 1.2
    },
    {
      Country: "Ecuador",
      Price: 1.2
    },
    {
      Country: "Guatemala",
      Price: 1.2
    },
    {
      Country: "China",
      Price: 1.15
    },
    {
      Country: "Kazakhstan",
      Price: 1.14
    },
    {
      Country: "Bolivia",
      Price: 1.14
    },
    {
      Country: "Dominican Republic",
      Price: 1.12
    },
    {
      Country: "Montenegro",
      Price: 1.12
    },
    {
      Country: "Peru",
      Price: 1.11
    },
    {
      Country: "South Africa",
      Price: 1.1
    },
    {
      Country: "Brazil",
      Price: 1.1
    },
    {
      Country: "Iran",
      Price: 1.09
    },
    {
      Country: "Bosnia And Herzegovina",
      Price: 1.08
    },
    {
      Country: "Argentina",
      Price: 1.06
    },
    {
      Country: "Malaysia",
      Price: 1.03
    },
    {
      Country: "Serbia",
      Price: 1.01
    },
    {
      Country: "Azerbaijan",
      Price: 0.97
    },
    {
      Country: "Georgia",
      Price: 0.94
    },
    {
      Country: "Armenia",
      Price: 0.94
    },
    {
      Country: "Mexico",
      Price: 0.93
    },
    {
      Country: "Albania",
      Price: 0.92
    },
    {
      Country: "Kosovo (Disputed Territory)",
      Price: 0.91
    },
    {
      Country: "Indonesia",
      Price: 0.9
    },
    {
      Country: "Vietnam",
      Price: 0.89
    },
    {
      Country: "North Macedonia",
      Price: 0.87
    },
    {
      Country: "Sri Lanka",
      Price: 0.86
    },
    {
      Country: "Colombia",
      Price: 0.82
    },
    {
      Country: "Jordan",
      Price: 0.79
    },
    {
      Country: "Iraq",
      Price: 0.75
    },
    {
      Country: "Turkey",
      Price: 0.74
    },
    {
      Country: "Algeria",
      Price: 0.72
    },
    {
      Country: "Pakistan",
      Price: 0.7
    },
    {
      Country: "Uzbekistan",
      Price: 0.63
    },
    {
      Country: "Bangladesh",
      Price: 0.63
    },
    {
      Country: "Nepal",
      Price: 0.54
    },
    {
      Country: "Tunisia",
      Price: 0.52
    },
    {
      Country: "Morocco",
      Price: 0.5
    },
    {
      Country: "Syria",
      Price: 0.45
    },
    {
      Country: "India",
      Price: 0.45
    },
    {
      Country: "Egypt",
      Price: 0.4
    }
  ];
};
