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
        displayError("Image not in your planning Area");
    } else {
        displayError("URL cannot be empty and must be valid");
    }
}

// on clicking the add button
function addImage() {
    removeError();
    var inputurl = document.getElementById("input_url").value;

    // if valid then add image
    if (isValidUrl(inputurl)) {
        addUrlToPlanningArea(inputurl);
    } else {
        displayError("URL cannot be empty and must be valid");
    }
}

window.onload = function () {
    // add event handlers to buttons
    $("add_btn").onclick = addImage;
    $("delete_btn").onclick = deleteImage;
};


// function that displays erros in red font below the controls
function displayError(err) {
    document.getElementById("error_statement").innerHTML = err;
}


// removes the error statement from the error div
function removeError() {
    $("error_statement").innerHTML = "";
}
