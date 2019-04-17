"use strict";

var imagePlanning = [];

function deleteImage() {
    // removing errors on button clicks
    removeError();
    var inputurl = document.getElementById("input_url").value;
    if (isValidUrl(inputurl)) {

        // remove only one image
        var index = 0;
        for (index = 0; index < imagePlanning.length; index += 1) {
            if (imagePlanning[index] === inputurl) {
                imagePlanning.splice(index, 1);
                displayPlanningArea();
                return;
            }
        }
