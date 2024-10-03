var header = document.getElementById('Barra')

window.addEventListener("scroll", ()=>{

    var scroll = window.scrollY ;

    if (scroll > 10){
        //header.style.backgroundColor = '#042608'
        //header.style.backgroundSize = "30%"
        //header.style.backgroundImage = 'url("/Imagenes/pruebaspatas.png")'
    }else{
        //header.style.backgroundColor = 'transparent'
        //header.style.backgroundImage = 'none'
    }

})