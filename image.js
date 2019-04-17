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

// checks if url is valid
function isValidUrl(url) {
    var expression = /[a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    var regex = new RegExp(expression);
    return url.match(regex);
}


function showUrl() {
    // remove all erros on button clicks
    removeError();

    // display the url in the input box
    $("input_url").value = this.src;
}

// function that zooms an image on hover
function zoomIn() {
    var x = this.originalHeight;
    var y = this.originalWidth;

    if (x < 500 && y < 500) {
        this.height = x;
        this.width = y;
    } else {
        this.height = 500;
        this.width = 500;
    }
}
