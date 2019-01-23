
//Code v1
  // var leapYear = function(year) {
  //   if (year % 4 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

//Code v2
  //var leapYear = function(year) {
  //   if (year % 100 === 0) {
  //     return false;
  //   } else if (year % 4 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

//Code refactored
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

//jQuery UI logic below
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
