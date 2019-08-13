

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $("#intro").click(function() {
    $("#intro").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".fun-facts").fadeIn();
  });
});
