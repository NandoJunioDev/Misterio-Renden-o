const box  = document.getElementById("#conteiner")
const image = document.querySelectorAll(".container img");

let contador = 0;
function slider (){
    contador++;
    
    if (contador > image.length -1 ){
        contador = 0;
    }
    box.style.transform = `translateX(${-contador * 600 }px)`;
}
setInterval(slider ,2000)