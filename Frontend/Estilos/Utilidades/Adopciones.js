document.addEventListener('DOMContentLoaded', () =>{
    const contenedorP = document.getElementById('contenedorP');

   function mostrarAdopciones(){ 
        fetch('/EnAdopciones') //solicitud a la pagina en donde se encuentran los Adopciones en .JSON
        .then(response => response.json()) //convertir la respuesta en .JSON
        .then(Adopciones => {

            contenedorP.innerHTML = '';

            if(Adopciones.length === 0){ //Mira todos los Adopciones agregados y si pasa a mayor de 0 se muestra el adopcion
                contenedorP.innerHTML = '<h1 style="color: black;">No hay Publicaciones</h1>';
                return;
            }

            Adopciones.forEach(adopcion => {
                const adopcionHTML = `
            <div class="ComPros">
                <div class="tabla">
                    <img src="${adopcion.img}" class="fotoDog" height="400px"><br><br>
                    <h2> ${adopcion.nombre} </h2>
                    <h2> ${adopcion.edad} </h2>
                    <p class="des"><b>${adopcion.descripcion}</b></p><br><br>
                </div>
            </div>
            `;
            contenedorP.innerHTML += adopcionHTML; 
            });
        })
    }mostrarAdopciones();
});
