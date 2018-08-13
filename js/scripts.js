$(document).ready(function() {
  $("#favorites").submit(function(event) {
    event.preventDefault();
    var favoriteFood = $("input#favorite-foods").val();
    var favoriteColor = $("input#favorite-colors").val();
    var favoriteIcyF = $("input#favorite-ice-cream").val();



    var favorites = [favoriteFood, favoriteColor, favoriteIcyF];
    var favoriteAll = [];

    favoriteAll.push(favorites[0] , favorites[2]);

    $("#new-array").append("<li>" + favoriteAll[0] + "</li>" + "<li>" + favoriteAll[1] + "</li>");
    // console.log(favoriteAll);

    // favorites.forEach(function(favorite) {
    //   console.log(favorite);
    //   var userFaves = $('input#' + favorite).val();
    //   $("." + favorite).text(userInput);
    // });
  //
  $("#answers").text(favorites);
  $("#answer1").text(favorites[0]);
  $("#answer2").text(favorites[1]);
  // $("#answer3").text(blanks2);

// blanks.forEach(function(faves) {
//   alert("I love " + faves + "!");
// });
// var blanks2 = ["delicious"]
// blanks2.push(blanks[0]);
// alert(blanks2);
//
// console.log(blanks2);

  //
  // blanks.push(blanks2);
  // console.log(blanks, blanks2);
    // blanks.forEach(function(blank) {
    //   var userInput = $("input#" + blank).val();
    //   $("." = blank).text(userInput);
    // })

    // $(".input-food").text(favoriteFoods);
    // $(".input-color").text(favoriteColors);
    // $(".input-ice-cream").text(favoriteIcyF);


    $("#favorite-things").show();

  });
});
