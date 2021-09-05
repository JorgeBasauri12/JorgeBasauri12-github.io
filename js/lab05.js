//COLOR 
(function() {

    let btn = document.getElementById("Colorear");
    let c1 = document.getElementById("AN");
    let c2 = document.getElementById("Fecha");
    let c3 = document.getElementById("AP");
    let c4 = document.getElementById("AM");
    let c5 = document.getElementById("N");
    let c6 = document.getElementById("Long");
    let c7 = document.getElementById("Edad");
    let c8 = document.getElementById("Mes");   
    btn.addEventListener("click", cambioColor);
    let contador = 0;
    function cambioColor() {
      if (contador % 2 == 0) {
          c1.style.backgroundColor= "#cd5c5c"
          c1.style.border="1px solid red";
          c2.style.backgroundColor= "#cd5c5c"
          c2.style.border="1px solid red";
          c3.style.backgroundColor= "#cd5c5c"
          c3.style.border="1px solid red";
          c4.style.backgroundColor= "#cd5c5c"
          c4.style.border="1px solid red";
          c5.style.backgroundColor= "#cd5c5c"
          c5.style.border="1px solid red";  
          c6.style.backgroundColor= "#4169e1"
          c6.style.border="1px solid blue";    
          c7.style.backgroundColor= "#4169e1"
          c7.style.border="1px solid blue";    
          c8.style.backgroundColor= "#4169e1"
          c8.style.border="1px solid blue";            
      } 
      if (contador % 2 != 0){     
        c1.style.backgroundColor= "#4169e1"
        c1.style.border="1px solid blue";
        c2.style.backgroundColor= "#4169e1"
        c2.style.border="1px solid blue";
        c3.style.backgroundColor= "#4169e1"
        c3.style.border="1px solid blue";
        c4.style.backgroundColor= "#4169e1"
        c4.style.border="1px solid blue";
        c5.style.backgroundColor= "#4169e1"
        c5.style.border="1px solid blue";
        c6.style.backgroundColor= "#cd5c5c"
        c6.style.border="1px solid red";
        c7.style.backgroundColor= "#cd5c5c"
        c7.style.border="1px solid red";
        c8.style.backgroundColor= "#cd5c5c"
        c8.style.border="1px solid red";
      }
      contador += 1;
    }
})();