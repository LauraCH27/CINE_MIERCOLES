//una función se escribe en forma de verbo
export function pintarPelicula(peliculas){
    let fila=document.getElementById("fila")
    peliculas.forEach(function(pelicula){
        console.log(pelicula.Nombre)
        console.log(pelicula.Genero)
        console.log(pelicula.Duración)
        console.log(pelicula.Poster)
        console.log(pelicula.Sinopsis)
        console.log(pelicula.Clasificacion)
        console.log(pelicula.Idioma)
    
        //TRAVERSING (crear etiquetas de html desde JS)
        //1. creamos una columna para cada pelicula
        let columna=document.createElement("div")
        columna.classList.add("col")
        //2. creamos una tarjeta para cada pelicula
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
        //3. creamos una imagen para cada pelicula
        let poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.Poster
        //4. creamos nombre para cada pelicula
        let nombre=document.createElement("h3")
        nombre.classList.add("card-title")
        //cambiar el contenido
        nombre.textContent=pelicula.Nombre
        //5. creamos el genero de cada pelicula
        let genero=document.createElement("h4")
        genero.classList.add("fw-bold")
        genero.textContent= "Género: "+ pelicula.Genero
        //6. creamos el idioma a cada pelicula
        let idioma=document.createElement("h5")
        idioma.classList.add("fw-bold")
        idioma.textContent="Idioma: "+ pelicula.Idioma
        
        let duracion=document.createElement("h6")
        duracion.classList.add("fw-bold")
        duracion.textContent="Duración: "+ pelicula.Duración
        let clasificacion=document.createElement("h7")
        clasificacion.classList.add("fw-bold")
        clasificacion.textContent="Clasificación: "+ pelicula.Clasificacion
    
        //7.creamos la sipnosis
        let sinopsis=document.createElement("p")
        //sinopsis.classList.add("d-none")
        sinopsis.textContent=pelicula.Sinopsis
    
        // Padres e hijos
        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(duracion)
        tarjeta.appendChild(clasificacion)
        tarjeta.appendChild(sinopsis)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        
    
    })
}
    export function pintarPelicula2(peliculass){
    let cartelera=document.getElementById("cartelera")
    peliculass.forEach(function(peli){
    console.log(peli.Nombre)
    console.log(peli.Genero)
    console.log(peli.Duración)
    console.log(peli.Poster)
    console.log(peli.Sinopsis)
    console.log(peli.Clasificacion)
    console.log(peli.Idioma)

    let columna=document.createElement("div")
    columna.classList.add("col")
    //2. creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")
    //3. creamos una imagen para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=peli.Poster
    //4. creamos nombre para cada pelicula
    let nombre=document.createElement("h3")
    nombre.classList.add("card-title")
    //cambiar el contenido
    nombre.textContent=peli.Nombre
    //5. creamos el genero de cada pelicula
    let genero=document.createElement("h4")
    genero.classList.add("fw-bold")
    genero.textContent= "Género: "+ peli.Genero
    //6. creamos el idioma a cada pelicula
    let idioma=document.createElement("h5")
    idioma.classList.add("fw-bold")
    idioma.textContent="Idioma: "+ peli.Idioma
    //
    let duracion=document.createElement("h6")
    duracion.classList.add("fw-bold")
    duracion.textContent="Duración: "+ peli.Duración
    let clasificacion=document.createElement("h7")
    clasificacion.classList.add("fw-bold")
    clasificacion.textContent="Clasificación: "+ peli.Clasificacion
    //7.creamos la sipnosis
    let sinopsis=document.createElement("p")
    //sinopsis.classList.add("d-none")
    sinopsis.textContent=peli.Sinopsis

    // Padres e hijos
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(duracion)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(sinopsis)
    columna.appendChild(tarjeta)
    cartelera.appendChild(columna)
    })
}


