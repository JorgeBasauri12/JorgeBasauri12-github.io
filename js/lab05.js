(function() {
    window.onload=function(){
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
        let temp = 0;
        function cambioColor() {
            if (temp % 2 == 0) {
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
            if (temp % 2 != 0){     
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
            temp += 1;
        }
        let btn1 = document.getElementById("Extraer")
        btn1.addEventListener("click", extraer);
        function extraer(){
            /*---AP-AM-N---*/
            const AN = document.getElementById("NombresyApellidos");
            let nombApe = AN.value;
            let N = nombApe.split(/\s+/);
            const Paterno = document.getElementById("ApellidoPaterno");
            Paterno.value="";
            Paterno.value=N[0];
            const Materno = document.getElementById("ApellidoMaterno");
            Materno.value="";
            Materno.value=N[1];
            const Nombre = document.getElementById("Nombres");
            Nombre.value="";
            for (let i = 2; i < N.length; i++) {
                Nombre.value+=N[i]+" ";                
            }
            /*---Longitud Apellido---*/
            document.getElementById("longitud").value= ("Posee "+(Paterno.value+ Materno.value).length + " letras");
            /*---Fecha Nacimiento---*/
            let fecha= document.getElementById("FechaNacimiento").value;
            let hoy = new Date();
            let cumpleanos = new Date(fecha);
            let edad = hoy.getFullYear() - cumpleanos.getFullYear();
            let m = (hoy.getMonth()+1) - (cumpleanos.getDate());
            if (m < 0) {
                edad--;
            }else if (m==0) {
                if (hoy.getDate() < (cumpleanos.getMonth()+1)) {
                    edad--;
                }
            }
            document.getElementById("edad").value=("Tiene "+edad+" años");            
            let Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            let d = new Date(cumpleanos);
            document.getElementById("mes").value = (Meses[d.getDate()-1]);
        }
    }; 

})();


