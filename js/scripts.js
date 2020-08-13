$(document).ready(function() {
  $("form#sides").submit(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      let output = "Not a triangle: The sum of any two sides must be greater than the remaining side.";
      $("#triangle-type").text(output);
    } else if (side1 === side2 && side2 === side3) {
      let output = "Equilateral triangle: All sides are the same length.";
      $("#triangle-type").text(output);
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      let output = "Isosceles triangle: Only two sides are the same length.";
      $("#triangle-type").text(output);
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      let output = "Scalene triangle: All sides are different lengths.";
      $("#triangle-type").text(output);
    } 

    event.preventDefault();
  });
});