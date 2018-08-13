$(document).ready(function() {
  $('#favorites').submit(function(event) {

    var favoriteFoods = $("input#favorite-foods").val();
    var favoriteColors = $("input#favorite-colors").val();
    var favoriteIcyF = $("input#favorite-ice-cream").val();

    console.log(favoriteFoods, favoriteColors, favoriteIcyF);

    $(".input-food").text(favoriteFoods);
    $(".input-colors").text(favoriteColors);
    $(".input-food").text(favoriteIcyF);

    $("#favorite-things").show();

    event.preventDefault();
  });
});
