// some configurations
var contentBasePath = "content/";
var pagesPath = contentBasePath + "pages.html";
var articleBasePath = contentBasePath + "articles/";
var imageBasePath = contentBasePath + "images/";

var fadeOutSpeed = 100, fadeInSpeed = fadeOutSpeed;
var defaultSubpage = "#about";
var activeClass = "active";

// adds events, loads content initially
$(function() {
    // add event for hash changes
    $(window).hashchange(reloadContent());

    // load content initially
    reloadContent();
});

// reloads the content of the UI
// inspired by https://css-tricks.com/rethinking-dynamic-page-replacing-content/
reloadContent = function() {
    // get some UI elements
    var main = $("main"), cont = main.find("#content"), wrap = $("wrap"), nav = $("nav"), nav_a = $("nav a");

    // get hash from URL or fallback
    var hash = location.hash || defaultSubpage;

    // fade out, load new content, fade in 
    cont.fadeOut(fadeOutSpeed, function() {
        cont.load(pagesPath + " " + hash, function() {
            cont.fadeIn(fadeInSpeed);   
        });
    });

    // update active link element
    nav_a.removeClass(activeClass);
    $("nav a[href$='" + hash + "']").addClass(activeClass);
};