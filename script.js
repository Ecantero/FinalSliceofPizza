    var customPizza1 = document.getElementById("customPizza1");
    var customPizza2 = document.getElementById("customPizza2");
    var customPizza3 = document.getElementById("customPizza3");
    var customPizza4 = document.getElementById("customPizza4");
    var customPizza5 = document.getElementById("customPizza5");


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
  
function showMenu() {
  
    if (topping1.checked == true){
      menu1.style.display = "block";
    } else {
      menu1.style.display = "none";
    }

    if (topping2.checked == true){
        menu2.style.display = "block";
    } else {
        menu2.style.display = "none";
    }
 
    if (topping3.checked == true){
      menu3.style.display = "block";
    } else {
      menu3.style.display = "none";
    }

    if (topping4.checked == true){
        menu4.style.display = "block";
      } else {
        menu4.style.display = "none";
      }

    if (topping5.checked == true){
        menu5.style.display = "block";
    } else {
        menu5.style.display = "none";
    }
 
    if (topping6.checked == true){
        menu6.style.display = "block";
      } else {
        menu6.style.display = "none";
      }
  
    if (topping7.checked == true){
        menu7.style.display = "block";
    } else {
        menu7.style.display = "none";
    }
   
    if (topping8.checked == true){
    menu8.style.display = "block";
    } else {
    menu8.style.display = "none";
    }
  
    if (topping9.checked == true){
        menu9.style.display = "block";
    } else {
        menu9.style.display = "none";
    }
  
    if (topping10.checked == true){
        menu10.style.display = "block";
    } else {
        menu10.style.display = "none";
    }
   
}

function meatLovers(){
    if (customPizza1.checked == true){
        topping1.checked = true;
        topping2.checked = true;
        topping3.checked = true;
        topping4.checked = true;
        showMenu();
    } else {
      topping1.checked = false;
      topping2.checked = false;
      topping3.checked = false;
      topping4.checked = false;
      showMenu();
    }
}

function baileysOriginal(){
  if (customPizza2.checked == true){
    topping1.checked = true;
    topping2.checked = true;
    topping7.checked = true;
    showMenu();
} else {
  topping1.checked = false;
  topping2.checked = false;
  topping7.checked = false;
  showMenu();
  }
}

function fireCracker(){
  if (customPizza3.checked == true){
    topping1.checked = true;
    topping2.checked = true;
    topping9.checked = true;
    topping10.checked = true;
    showMenu();
} else {
  topping1.checked = false;
  topping2.checked = false;
  topping9.checked = false;
  topping10.checked = false;
  showMenu();
  }
}

function veggieDelight(){
  if (customPizza4.checked == true){
    topping7.checked = true;
    topping8.checked = true;
    topping9.checked = true;
    showMenu();
} else {
  topping7.checked = false;
  topping8.checked = false;
  topping9.checked = false;
  showMenu();
  }
}

function hawaiian(){
  if (customPizza5.checked == true){
    topping3.checked = true;
    topping6.checked = true;
    showMenu();

} else {
  topping3.checked = false;
  topping6.checked = false;
  showMenu();
  }
}


function thankYou(){
  var thankyou = document.getElementById("thankyou");
  console.log("works");
  thankyou.style.display = "block";
}

// function showChecked(){
//   document.getElementById('priceText').innerHTML = toppingsSelected();
  
// }
// function toppingsSelected(){
//   return document.querySelectorAll("input[name=topping]:checked").length;
// }
// document.querySelectorAll("input[name=topping]").forEach(i=>{
//   i.onclick = () => showChecked();
//  });