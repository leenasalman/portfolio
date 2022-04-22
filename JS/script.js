$(document).ready(function () {
  // remove classes when window on resize
  var navbarButton = $("#navbarID");
  $(window).resize(function () {
    navbarButton.removeClass("mobileTransition");
    navbarButton.removeClass("transitionNavBar");
  });

  $("#btnMenu").click(function () {
    if (!navbarButton.hasClass("mobileTransition")) {
      navbarButton.addClass("mobileTransition");
    }
    navbarButton.toggleClass("transitionNavBar");
  });
  $('#documentHolderID').on('click', function(e){
    navbarButton.removeClass('transitionNavBar');
  });

  $("#cbd").on("click", function () {
    $(".box").addClass("d-none");
    $("#cbdCont").removeClass("d-none");
  });
  $("#raptorx").on("click", function () {
    $(".box").addClass("d-none");
    $("#rapCont").removeClass("d-none");
  });
  $("#iorafrica").on("click", function () {
    $(".box").addClass("d-none");
    $("#iorAfCont").removeClass("d-none");
  });
  $("#scienceUni").on("click", function () {
    $(".box").addClass("d-none");
    $("#sciuniCont").removeClass("d-none");
  });
  $("#arduino").on("click", function () {
    $(".box").addClass("d-none");
    $("#ardCont").removeClass("d-none");
  });
  $("#aboutMe").on("click", function () {
    $(".box").addClass("d-none");
    $("#abtCont").removeClass("d-none");
  });
  $("#contactMe").on("click", function () {
    $(".box").addClass("d-none");
    $("#contCont").removeClass("d-none");
  });
});
