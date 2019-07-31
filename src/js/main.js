$(document).ready(function() {
  $('#ham-menu').sidr();
  $("#ham-menu-close").click(function() {
    $.sidr('close', 'sidr');
    return false;
  });
  $(".search-trigger").click(function(){
    $(".header__search").addClass("show");
    return false;
  });
  $(".scroll-control").click(function(){
    if($(this).hasClass("up")) {
      $(window).scrollTo($(".header"), {duration: 400});
    }
    else {
      $(window).scrollTo($(".footer"), {duration: 400});
    }
    return false;
  });
  $('.selectpicker').selectpicker();
  $(".statistic__item").each(function(){
    var meter = $(this).find(".statistic__meter input");
    var value = $(this).data("speed");
    meter.myfunc({divFact: $(this).data("speed-dif"), maxVal: $(this).data("speed-max"), edgeRadius: 120, indicatorNumbRadius: 67, indicatorRadius: 90, eventListenerType:'click'});
    if($(this).data("speed-small")) {
      value = value / 100;
    }
    meter.val(value);
    $(this).find(".statistic__nums span").text($(this).data("speed"));
  });
});
$(window).scroll(function(){
  var scrollBottom = $(window).scrollTop() + $(window).height();
  var docCenter = $(document).height()/2;
  if ( scrollBottom > docCenter) {
    $(".scroll-control").addClass("up");
  }
  else {
    $(".scroll-control").removeClass("up");
  }
});
var show = true;
$(window).on('scroll load resize', function() {
  if(!show || $(".statistic__item").length == 0) return false;
  var scrollTop = $(window).scrollTop();
  if ( scrollTop > $(".statistic__item").offset().top - 200 ) {
    $(".statistic__item").find(".statistic__meter input").trigger('click');
    $(".spincrement").spincrement({decimalPoint: "."});
    show = false;
  }
});
$(document).mouseup(function (e){
  var div = $(".header__search");
  if (!div.is(e.target)
    && div.has(e.target).length === 0) {
      div.removeClass("show");
    }
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})
$('.phone-pick input').mask('(999) 999-99-99');