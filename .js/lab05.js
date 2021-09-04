let karol=1;
function CambiarColor(){
    let miEtiquita = document.getElementById("AN");
    if (karol) {
        miEtiquita.background= "#cd5c5c";
        karol=0;
    }else{
        miEtiquita.background= "#4169e1";
        karol=1;
    }
}