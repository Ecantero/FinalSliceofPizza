var customPizza1 = document.getElementById("customPizza1");
var customPizza2 = document.getElementById("customPizza2");
var customPizza3 = document.getElementById("customPizza3");
var customPizza4 = document.getElementById("customPizza4");
var customPizza5 = document.getElementById("customPizza5");

// var myVar = setInterval(pricing, 1000);
// var myVar2 = setInterval(showMenu, 1000);

var topping1 = document.getElementById("topping1");
var topping2 = document.getElementById("topping2");
var topping3 = document.getElementById("topping3");
var topping4 = document.getElementById("topping4");
var topping5 = document.getElementById("topping5");
var topping6 = document.getElementById("topping6");
var topping7 = document.getElementById("topping7");
var topping8 = document.getElementById("topping8");
var topping9 = document.getElementById("topping9");
var topping10 = document.getElementById("topping10");

var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var menu4 = document.getElementById("menu4");
var menu5 = document.getElementById("menu5");
var menu6 = document.getElementById("menu6");
var menu7 = document.getElementById("menu7");
var menu8 = document.getElementById("menu8");
var menu9 = document.getElementById("menu9");
var menu10 = document.getElementById("menu10");

var specialDeal = document.getElementById("specialDeal");

var price = 0.0;

var arryTopping = [];

const pepp = document.querySelector("input[name=topping1]");
pepp.addEventListener("change", function () {
  if (this.checked) {
    topping1.checked = true;
    price += 1;
    arryTopping.push("pepperoni");
    showPepp();
    showMenu();
    console.log(arryTopping);
    console.log("pepp topping is checked");
  } else {
    topping1.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "pepperoni");
    dontShowPepp();
    showMenu();
    console.log("pepp is not clicked");
  }
});
const doublePepp = document.querySelector("input[name=pepperoni]");
doublePepp.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double pepperoni");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double pepperoni");
    console.log("It is not checked");
  }
  showChecked();
});
const pepp_left = document.getElementById("peppLeft");
const pepp_right = document.getElementById("peppRight");
function showPeppLeft() {
  pepp_left.style.display = "block";
  pepp_right.style.display = "none";
}
function showPeppRight() {
  pepp_right.style.display = "block";
  pepp_left.style.display = "none";
}
function showPepp() {
  pepp_right.style.display = "block";
  pepp_left.style.display = "block";
}
function dontShowPepp() {
  pepp_left.style.display = "none";
  pepp_right.style.display = "none";
}

const sausage = document.querySelector("input[name=topping2]");
sausage.addEventListener("change", function () {
  if (this.checked) {
    topping2.checked = true;
    price += 1;
    arryTopping.push("sausage");
    showSausage();
    showMenu();
    console.log("sausage topping is checked");
  } else {
    topping2.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "sausage");
    dontShowSausage();
    showMenu();
    console.log("sausage is not clicked");
  }
});
const doubleSausage = document.querySelector("input[name=sausage]");
doubleSausage.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double sausage");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double sausage");
    console.log("It is not checked");
  }
  showChecked();
});
const sausage_left = document.getElementById("sausageLeft");
const sausage_right = document.getElementById("sausageRight");
function showSausageLeft() {
  sausage_left.style.display = "block";
  sausage_right.style.display = "none";
}
function showSausageRight() {
  sausage_right.style.display = "block";
  sausage_left.style.display = "none";
}
function showSausage() {
  sausage_right.style.display = "block";
  sausage_left.style.display = "block";
}
function dontShowSausage() {
  sausage_left.style.display = "none";
  sausage_right.style.display = "none";
}

const ham = document.querySelector("input[name=topping3]");
ham.addEventListener("change", function () {
  if (this.checked) {
    topping3.checked = true;
    price += 1;
    arryTopping.push("ham");
    showHam();
    showMenu();
    console.log("ham topping is checked");
  } else {
    topping3.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "ham");
    dontShowHam();
    showMenu();
    console.log("ham is not clicked");
  }
});
const doubleHam = document.querySelector("input[name=ham]");
doubleHam.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double ham");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double ham");
    console.log("It is not checked");
  }
  showChecked();
});
const ham_left = document.getElementById("hamLeft");
const ham_right = document.getElementById("hamRight");
function showHamLeft() {
  ham_left.style.display = "block";
  ham_right.style.display = "none";
}
function showHamRight() {
  ham_right.style.display = "block";
  ham_left.style.display = "none";
}
function showHam() {
  ham_right.style.display = "block";
  ham_left.style.display = "block";
}
function dontShowHam() {
  ham_left.style.display = "none";
  ham_right.style.display = "none";
}

const bacon = document.querySelector("input[name=topping4]");
bacon.addEventListener("change", function () {
  if (this.checked) {
    topping4.checked = true;
    price += 1;
    arryTopping.push("bacon");
    showBacon();
    showMenu();
    console.log("bacon topping is checked");
  } else {
    topping4.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "bacon");
    dontShowBacon();
    showMenu();
    console.log("bacon is not clicked");
  }
});
const doubleBacon = document.querySelector("input[name=bacon]");
doubleBacon.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double bacon");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double bacon");
    console.log("It is not checked");
  }
  showChecked();
});
const bacon_left = document.getElementById("baconLeft");
const bacon_right = document.getElementById("baconRight");
function showBaconLeft() {
  bacon_left.style.display = "block";
  bacon_right.style.display = "none";
}
function showBaconRight() {
  bacon_right.style.display = "block";
  bacon_left.style.display = "none";
}
function showBacon() {
  bacon_right.style.display = "block";
  bacon_left.style.display = "block";
}
function dontShowBacon() {
  bacon_left.style.display = "none";
  bacon_right.style.display = "none";
}

const shrimp = document.querySelector("input[name=topping5]");
shrimp.addEventListener("change", function () {
  if (this.checked) {
    topping5.checked = true;
    price += 1;
    arryTopping.push("shrimp");
    showShrimp();
    showMenu();
    console.log("shrimp topping is checked");
  } else {
    topping5.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "shrimp");
    dontShowShrimp();
    showMenu();
    console.log("shrimp is not clicked");
  }
});
const doubleShrimp = document.querySelector("input[name=shrimp]");
doubleShrimp.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double shrimp");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double shrimp");
    console.log("It is not checked");
  }
  showChecked();
});
const shrimp_left = document.getElementById("shrimpLeft");
const shrimp_right = document.getElementById("shrimpRight");
function showShrimpLeft() {
  shrimp_left.style.display = "block";
  shrimp_right.style.display = "none";
}
function showShrimpRight() {
  shrimp_right.style.display = "block";
  shrimp_left.style.display = "none";
}
function showShrimp() {
  shrimp_right.style.display = "block";
  shrimp_left.style.display = "block";
}
function dontShowShrimp() {
  shrimp_left.style.display = "none";
  shrimp_right.style.display = "none";
}

const pineapple = document.querySelector("input[name=topping6]");
pineapple.addEventListener("change", function () {
  if (this.checked) {
    topping6.checked = true;
    price += 1;
    arryTopping.push("pineapples");
    showPineapple();
    showMenu();
    console.log("pineapple topping is checked");
  } else {
    topping6.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "pineapples");
    dontShowPineapple();
    showMenu();
    console.log("pineapple is not clicked");
  }
});
const doublePineapple = document.querySelector("input[name=pineapple]");
doublePineapple.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double pineapples");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double pineapples");
    console.log("It is not checked");
  }
  showChecked();
});
const pineapple_left = document.getElementById("pineappleLeft");
const pineapple_right = document.getElementById("pineappleRight");
function showPineappleLeft() {
  pineapple_left.style.display = "block";
  pineapple_right.style.display = "none";
}
function showPineappleRight() {
  pineapple_right.style.display = "block";
  pineapple_left.style.display = "none";
}
function showPineapple() {
  pineapple_right.style.display = "block";
  pineapple_left.style.display = "block";
}
function dontShowPineapple() {
  pineapple_left.style.display = "none";
  pineapple_right.style.display = "none";
}

const peppers = document.querySelector("input[name=topping7]");
peppers.addEventListener("change", function () {
  if (this.checked) {
    topping7.checked = true;
    price += 1;
    arryTopping.push("bell peppers");
    showPeppers();
    showMenu();
    console.log("peppers topping is checked");
  } else {
    topping7.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "bell peppers");
    dontShowPeppers();
    showMenu();
    console.log("peppers is not clicked");
  }
});
const doublePepper = document.querySelector("input[name=pepper]");
doublePepper.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double bell peppers");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double bell peppers");
    console.log("It is not checked");
  }
  showChecked();
});
const peppers_left = document.getElementById("bellLeft");
const peppers_right = document.getElementById("bellRight");
function showPeppersLeft() {
  peppers_left.style.display = "block";
  peppers_right.style.display = "none";
}
function showPeppersRight() {
  peppers_right.style.display = "block";
  peppers_left.style.display = "none";
}
function showPeppers() {
  peppers_right.style.display = "block";
  peppers_left.style.display = "block";
}
function dontShowPeppers() {
  peppers_left.style.display = "none";
  peppers_right.style.display = "none";
}

const mushrooms = document.querySelector("input[name=topping8]");
mushrooms.addEventListener("change", function () {
  if (this.checked) {
    topping8.checked = true;
    price += 1;
    arryTopping.push("mushrooms");
    showMushroom();
    showMenu();
    console.log("mushrooms topping is checked");
  } else {
    topping8.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "mushrooms");
    dontShowMushroom();
    showMenu();
    console.log("mushrooms is not clicked");
  }
});
const doubleMushroom = document.querySelector("input[name=mushroom]");
doubleMushroom.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double mushrooms");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double mushrooms");
    console.log("It is not checked");
  }
  showChecked();
});
const mushroom_left = document.getElementById("mushroomLeft");
const mushroom_right = document.getElementById("mushroomRight");
function showMushroomLeft() {
  mushroom_left.style.display = "block";
  mushroom_right.style.display = "none";
}
function showMushroomRight() {
  mushroom_right.style.display = "block";
  mushroom_left.style.display = "none";
}
function showMushroom() {
  mushroom_right.style.display = "block";
  mushroom_left.style.display = "block";
}
function dontShowMushroom() {
  mushroom_left.style.display = "none";
  mushroom_right.style.display = "none";
}

const olives = document.querySelector("input[name=topping9]");
olives.addEventListener("change", function () {
  if (this.checked) {
    topping9.checked = true;
    price += 1;
    arryTopping.push("olives");
    showOlive();
    showMenu();
    console.log("olives topping is checked");
  } else {
    topping9.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "olives");
    dontShowOlive();
    showMenu();
    console.log("olives is not clicked");
  }
});
const doubleOlive = document.querySelector("input[name=olive]");
doubleOlive.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double olives");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double olives");
    console.log("It is not checked");
  }
  showChecked();
});
const olive_left = document.getElementById("oliveLeft");
const olive_right = document.getElementById("oliveRight");
function showOliveLeft() {
  olive_left.style.display = "block";
  olive_right.style.display = "none";
}
function showOliveRight() {
  olive_right.style.display = "block";
  olive_left.style.display = "none";
}
function showOlive() {
  olive_right.style.display = "block";
  olive_left.style.display = "block";
}
function dontShowOlive() {
  olive_left.style.display = "none";
  olive_right.style.display = "none";
}

const hotCheeto = document.querySelector("input[name=topping10]");
hotCheeto.addEventListener("change", function () {
  if (this.checked) {
    topping10.checked = true;
    price += 1;
    arryTopping.push("hot cheetos");
    showCheeto();
    showMenu();
    console.log("hot cheeto topping is checked");
  } else {
    topping10.checked = false;
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "hot cheetos");
    dontShowCheeto();
    showMenu();
    console.log("hot cheeto is not clicked");
  }
});
const doubleCheeto = document.querySelector("input[name=cheeto]");
doubleCheeto.addEventListener("change", function () {
  if (this.checked) {
    price += 1;
    arryTopping.push("double hot cheetos");
    console.log("It is checked");
  } else {
    price -= 1;
    arryTopping = arryTopping.filter((e) => e !== "double hot cheetos");
    console.log("It is not checked");
  }
  showChecked();
});
const cheeto_left = document.getElementById("cheetoLeft");
const cheeto_right = document.getElementById("cheetoRight");
function showCheetoLeft() {
  cheeto_left.style.display = "block";
  cheeto_right.style.display = "none";
}
function showCheetoRight() {
  cheeto_right.style.display = "block";
  cheeto_left.style.display = "none";
}
function showCheeto() {
  cheeto_right.style.display = "block";
  cheeto_left.style.display = "block";
}
function dontShowCheeto() {
  cheeto_left.style.display = "none";
  cheeto_right.style.display = "none";
}

function showMenu() {
  if (topping1.checked == true) {
    // showChecked();
    menu1.style.display = "block";
  } else {
    menu1.style.display = "none";
    // showChecked();
  }

  if (topping2.checked == true) {
    // showChecked();
    menu2.style.display = "block";
  } else {
    menu2.style.display = "none";
    // showChecked();
  }

  if (topping3.checked == true) {
    // showChecked();
    menu3.style.display = "block";
  } else {
    menu3.style.display = "none";
    // showChecked();
  }

  if (topping4.checked == true) {
    // showChecked();
    menu4.style.display = "block";
  } else {
    menu4.style.display = "none";
    // showChecked();
  }

  if (topping5.checked == true) {
    // showChecked();
    menu5.style.display = "block";
  } else {
    menu5.style.display = "none";
    // showChecked();
  }

  if (topping6.checked == true) {
    // showChecked();
    menu6.style.display = "block";
  } else {
    menu6.style.display = "none";
    // showChecked();
  }

  if (topping7.checked == true) {
    // showChecked();
    menu7.style.display = "block";
  } else {
    menu7.style.display = "none";
    // showChecked();
  }

  if (topping8.checked == true) {
    // showChecked();
    menu8.style.display = "block";
  } else {
    menu8.style.display = "none";
    // showChecked();
  }

  if (topping9.checked == true) {
    // showChecked();
    menu9.style.display = "block";
  } else {
    menu9.style.display = "none";
    // showChecked();
  }

  if (topping10.checked == true) {
    // showChecked();
    menu10.style.display = "block";
  } else {
    menu10.style.display = "none";
    // showChecked();
  }
  showChecked();
  if (price < 0) {
    price = 0;
    console.log(`price ${price}`);
  }
  console.log(`Price Total: ${price}`);
}

function meatLovers() {
  if (customPizza1.checked == true) {
    topping1.checked = true;
    topping2.checked = true;
    topping3.checked = true;
    topping4.checked = true;
    price += 4;

    arryTopping = arryTopping.filter((e) => e !== "pepperoni");
    arryTopping.push("pepperoni");
    showPepp();

    arryTopping = arryTopping.filter((e) => e !== "sausage");
    arryTopping.push("sausage");
    showSausage();

    arryTopping = arryTopping.filter((e) => e !== "ham");
    arryTopping.push("ham");
    showHam();

    arryTopping = arryTopping.filter((e) => e !== "bacon");
    arryTopping.push("bacon");
    showBacon();

    showMenu();
  } else {
    topping1.checked = false;
    topping2.checked = false;
    topping3.checked = false;
    topping4.checked = false;
    price -= 4;
    arryTopping = arryTopping.filter((e) => e !== "pepperoni");
    arryTopping = arryTopping.filter((e) => e !== "sausage");
    arryTopping = arryTopping.filter((e) => e !== "ham");
    arryTopping = arryTopping.filter((e) => e !== "bacon");
    dontShowPepp();
    dontShowSausage();
    dontShowHam();
    dontShowBacon();
    showMenu();
  }
}

function baileysOriginal() {
  if (customPizza2.checked == true) {
    topping1.checked = true;
    topping2.checked = true;
    topping7.checked = true;
    price += 3;

    arryTopping = arryTopping.filter((e) => e !== "pepperoni");
    arryTopping.push("pepperoni");
    showPepp();

    arryTopping = arryTopping.filter((e) => e !== "sausage");
    arryTopping.push("sausage");
    showSausage();

    arryTopping = arryTopping.filter((e) => e !== "bell peppers");
    arryTopping.push("bell peppers");
    showPeppers();

    showMenu();
  } else {
    topping1.checked = false;
    topping2.checked = false;
    topping7.checked = false;
    price -= 3;

    arryTopping = arryTopping.filter((e) => e !== "pepperoni");
    arryTopping = arryTopping.filter((e) => e !== "sausage");
    arryTopping = arryTopping.filter((e) => e !== "bell peppers");
    dontShowPepp();
    dontShowSausage();
    dontShowPeppers();
    showMenu();
  }
}

function fireCracker() {
  if (customPizza3.checked == true) {
    topping1.checked = true;
    topping2.checked = true;
    topping9.checked = true;
    topping10.checked = true;
    price += 4;

    arryTopping = arryTopping.filter((e) => e !== "pepperoni");
    arryTopping.push("pepperoni");
    showPepp();

    arryTopping = arryTopping.filter((e) => e !== "sausage");
    arryTopping.push("sausage");
    showSausage();

    arryTopping = arryTopping.filter((e) => e !== "olives");
    arryTopping.push("olives");
    showOlive();

    arryTopping = arryTopping.filter((e) => e !== "hot cheetos");
    arryTopping.push("hot cheetos");
    showCheeto();

    showMenu();
  } else {
    topping1.checked = false;
    topping2.checked = false;
    topping9.checked = false;
    topping10.checked = false;
    price -= 4;

    arryTopping = arryTopping.filter((e) => e !== "pepperoni");
    arryTopping = arryTopping.filter((e) => e !== "sausage");
    arryTopping = arryTopping.filter((e) => e !== "olives");
    arryTopping = arryTopping.filter((e) => e !== "hot cheetos");
    dontShowPepp();
    dontShowSausage();
    dontShowOlive();
    dontShowCheeto();
    showMenu();
  }
}

function veggieDelight() {
  if (customPizza4.checked == true) {
    topping7.checked = true;
    topping8.checked = true;
    topping9.checked = true;
    price += 3;

    arryTopping = arryTopping.filter((e) => e !== "bell peppers");
    arryTopping.push("bell peppers");
    showPeppers();

    arryTopping = arryTopping.filter((e) => e !== "mushrooms");
    arryTopping.push("mushrooms");
    showMushroom();

    arryTopping = arryTopping.filter((e) => e !== "olives");
    arryTopping.push("olives");
    showOlive();

    showMenu();
  } else {
    topping7.checked = false;
    topping8.checked = false;
    topping9.checked = false;
    price -= 3;

    arryTopping = arryTopping.filter((e) => e !== "bell peppers");
    arryTopping = arryTopping.filter((e) => e !== "mushrooms");
    arryTopping = arryTopping.filter((e) => e !== "olives");

    dontShowPeppers();
    dontShowMushroom();
    dontShowOlive();
    showMenu();
  }
}

function hawaiian() {
  if (customPizza5.checked == true) {
    topping3.checked = true;
    topping6.checked = true;
    price += 2;

    arryTopping = arryTopping.filter((e) => e !== "ham");
    arryTopping.push("ham");
    showHam();

    arryTopping = arryTopping.filter((e) => e !== "pineapples");
    arryTopping.push("pineapples");
    showPineapple();

    showMenu();
  } else {
    topping3.checked = false;
    topping6.checked = false;
    price -= 2;

    arryTopping = arryTopping.filter((e) => e !== "ham");
    arryTopping = arryTopping.filter((e) => e !== "pineapples");

    dontShowHam();
    dontShowPineapple();
    showMenu();
  }
}

var thankyou = document.getElementById("thankyou");
function thankYou() {
  console.log("works");
  customPizza1.checked = false;
  customPizza2.checked = false;
  customPizza3.checked = false;
  customPizza4.checked = false;
  customPizza5.checked = false;
  topping1.checked = false;
  topping2.checked = false;
  topping3.checked = false;
  topping4.checked = false;
  topping5.checked = false;
  topping6.checked = false;
  topping7.checked = false;
  topping8.checked = false;
  topping9.checked = false;
  topping10.checked = false;
  thankyou.style.display = "block";
}

// get reference to element containing toppings checkboxes
const deal = document.getElementById("deal");

var currentPrice = 0;
var priceTopping = document.getElementById("priceText");
var priceTotal = document.getElementById("priceTotal");
function showChecked() {
  if (price > 0 || price < 5) {
    currentPrice = price - 1;
    if (currentPrice < 0) {
      currentPrice = 0;
    }
    deal.style.display = "none";
  }
  if (price > 4) {
    currentPrice = currentPrice - 1;
    deal.style.display = "block";
  }
  totalPrice();
  // text.innerText = `$ ${currentPrice}`;
}

var sizePrice;
function changeFunc() {
  var selectBox = document.getElementById("sel1");
  let size = selectBox.options[selectBox.selectedIndex].value;
  console.log(`price for size: ${size}`);
  if (size == 0) {
    sizePrice = 0;
  }
  if (size == 5) {
    sizePrice = 5;
  }
  if (size == 10) {
    sizePrice = 10;
  }
  if (size == 15) {
    sizePrice = 15;
  }
  if (size == 20) {
    sizePrice = 20;
  }
  showChecked();
}

const tpList = document.getElementById("tpList");
function totalPrice() {
  console.log(`topping ${currentPrice}`);
  priceTopping.innerText = `$ ${currentPrice}`;
  console.log(`size ${sizePrice}`);
  if (sizePrice === undefined) {
    sizePrice = 0;
  }
  let total = sizePrice + currentPrice;
  console.log(`total ${total}`);
  while (tpList.firstChild) {
    tpList.removeChild(tpList.firstChild);
  }
  arryTopping.forEach(toppingsList);
  priceTotal.innerText = `$ ${total}`;
}

function toppingsList(item) {
  console.log(item);
  tpList.innerHTML += item + ", ";
}

function toppingsSelected() {
  return document.querySelectorAll("input[name=topping]:checked").length;
}
// document.querySelectorAll("input[name=topping]").forEach((i) => {
//   i.onclick = () => showChecked();
// });

function pricing() {
  let currentPrice = price;
  if (toppingsSelected() >= 5) {
    specialDeal.style.display = "block";
    price = 3;
  } else {
    specialDeal.style.display = "none";
    price = currentPrice;
  }
}
