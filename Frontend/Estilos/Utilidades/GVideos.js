document.addEventListener('DOMContentLoaded', () =>{
    const contenedorP = document.getElementById('contGVideo');

   function mostrarGaleria(){ 
        fetch('/contGVideo') //solicitud a la pagina en donde se encuentran los Adopciones en .JSON
        .then(response => response.json()) //convertir la respuesta en .JSON
        .then(Adopciones => {

            contenedorP.innerHTML = '';

            if(Adopciones.length === 0){ //Mira todos los Adopciones agregados y si pasa a mayor de 0 se muestra el adopcion
                contenedorP.innerHTML = '<h1 style="color: black;">No hay Fotos</h1>';
                return;
            }

            Adopciones.forEach(adopcion => {
                const adopcionHTML = `
            <div class="ComPros">
                <div class="tabla">
                    ${adopcion.video ? `<video src="${adopcion.video}" class="fotoDog" height="350px" width="350px" controls></video>` : ''}
                    <h2> ${adopcion.nombre} </h2>
                    <h2> ${adopcion.edad} </h2>
                    <p class="des">${adopcion.descripcion}</p><br><br>
                </div>
            </div>
            `;
            contenedorP.innerHTML += adopcionHTML; 
            });
        })
    }mostrarGaleria();
});