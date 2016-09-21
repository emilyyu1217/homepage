// todo: history, onhashchange

// Loading inspired by https://css-tricks.com/rethinking-dynamic-page-replacing-content/
var contentBasePath = "content/";
var pagesPath = contentBasePath + "pages.html";
var articleBasePath = contentBasePath + "articles/";
var imageBasePath = contentBasePath + "images/";

var baseHeight = 0;
var fadeOutSpeed = 100, fadeInSpeed = fadeOutSpeed;

var activeClass = "active";

$(function() {
    var main = $("main");
    var wrap = $("wrap");

    wrap.height(wrap.height());
    baseHeight = wrap.height() - main.height();

    $(window).hashchange(hashchange);

    hashchange();
});

hashchange = function() {
    var main = $("main"), cont = main.find("#content"), wrap = $("wrap"), nav = $("nav"), nav_a = $("nav a");
    var hash = location.hash;

    cont.fadeOut(fadeOutSpeed, function() {
        cont.load(pagesPath + " " + hash, function() {
            cont.fadeIn(fadeInSpeed, function() {
                cont.animate({
                    height: cont.height() + "px"
                });
            });
        });
    });

    nav_a.removeClass(activeClass);
    $("nav a[href$='" + hash + "']").addClass(activeClass);
};