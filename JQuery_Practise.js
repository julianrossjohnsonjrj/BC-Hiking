// Starting with Jquery

$(document).ready(function() {

    //Jquery function goes here
});

// OR

$(function() {

});

//JQuery Manipulation html method is used to change content of the html

$(function() {
    $("#start").html("Go!");
});

// All selectors
$("div.menu")  // all <div> elements with class="menu"

$("p:first")  // the first <p> element

$("h1, p") // all <h1> and all <p> elements

$("div p") // all <p> elements that are descendants of a <div> element

$("*")  // all elements of the DOM