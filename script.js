    var customPizza1 = document.getElementById("customPizza1");
    var customPizza2 = document.getElementById("customPizza2");
    var customPizza3 = document.getElementById("customPizza3");
    var customPizza4 = document.getElementById("customPizza4");
    var customPizza5 = document.getElementById("customPizza5");

    var myVar = setInterval(pricing, 1000);
    var myVar2 = setInterval(showMenu,1000);

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
    // function attachCheckboxHandlers(){
    //   var toppingsContainer = document.getElementById("toppingsContainer");
    //   var priceText = document.getElementById("priceText");
    
    //   // get reference to input elements in toppings container element
    //   var toppingCheckbox = toppingsContainer.getElementsByTagName('input');
    
    //   // assign function to onclick property of each checkbox
    //   for (var i=0, len=toppingCheckbox.length; i<len; i++) {
    //       if ( toppingCheckbox[i].type === 'checkbox' ) {
    //           toppingCheckbox[i].onclick = updateTotal;
  
    //       }
    //   }
    // }
    
    // function updateTotal(e) {
    //   // 'this' is reference to checkbox clicked on
    //   var form = this.form;
      
    //   // get current value in total text box, using parseFloat since it is a string
    //   var val = parseFloat( form.elements['total'].value );
      
      
    //   // if check box is checked, add its value to val, otherwise subtract it
    //   if ( this.checked ) {
    //       val += parseFloat(this.value);
    //   } else {
    //       val -= parseFloat(this.value);
    //   }
      
    //   // format val with correct number of decimal places
    //   // and use it to update value of total text box
    //   form.elements['total'].value = formatDecimal(val);
    // }
      
    // // format val to n number of decimal places
    // // modified version of Danny Goodman's (JS Bible)
    // function formatDecimal(val, n) {
    //   n = n || 2;
    //   var str = "" + Math.round ( parseFloat(val) * Math.pow(10, n) );
    //   while (str.length <= n) {
    //       str = "0" + str;
    //   }
    //   var pt = str.length - n;
    //   return str.slice(0,pt) + "." + str.slice(pt);
    // }
    
    // // in script segment below form
    // attachCheckboxHandlers();
    
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











// get reference to element containing toppings checkboxes

function showChecked(){
  document.getElementById('priceText').innerHTML = toppingsSelected();
  
}
function toppingsSelected(){
  return document.querySelectorAll("input[name=topping]:checked").length;
}
document.querySelectorAll("input[name=topping]").forEach(i=>{
  i.onclick = () => showChecked();
 });

 function pricing(){
   if(toppingsSelected() >= 5){
     
    specialDeal.style.display = "block";
   } else{
    specialDeal.style.display = "none";
   }
 }
 