
// Change state of active navbar
$(".menu__list .menu__item").click(function(){
    $(".menu__item").removeClass("menu__item--current");
    $(this).addClass("menu__item--current");
})

// Reload the animation from page name heading
function slidePageHeading(heading){
    $(".banner1 h2 a").html(heading);
    $(".banner1 h2").removeClass();
    $(".banner1 h2").css({"animation-name": "none", "visibility": "hidden"})
    $(".banner1 h2").width();
    $(".banner1 h2").addClass("animated wow slideInLeft");
    $(".banner1 h2").css({"animation-name": "slideInLeft", "visibility": "visible"});
}

// Action for aulas button
$("#link-aulas").click(function() {
    $("#main-content").empty();
    $("#main-content").load("content/aulas.html", slidePageHeading("Aulas"));
})

$("#link-links").click(function() {
    $("#main-content").empty();
    $("#main-content").load("content/aulas.html", slidePageHeading("Links"));
})