require("./batman");
require("./superman");

// iife

(function () {})(); // bunda aynı isimden birden fazla yazsak bile qsorun çıkartmıyor buna iife diyoruz sanırım!

(function () {
  const superhero = "Batman";
  console.log(superhero);
})();

(function () {
  const superhero = "Superman";
  console.log(superhero);
})();
