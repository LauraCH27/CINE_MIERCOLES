//PREGUNTANDO POR UN DATO QUE ESTA ALMACENANDO EN MEMORIA
let datosPeliculaSeleccionada=JSON.parse(localStorage.getItem("peliculaSeleccionada"))
console.log(datosPeliculaSeleccionada)
let poster=datosPeliculaSeleccionada.poster
let sinopsis=datosPeliculaSeleccionada.sinopsis
let nombre=datosPeliculaSeleccionada.nombre
let genero=datosPeliculaSeleccionada.genero
let idioma=datosPeliculaSeleccionada.idioma
let director=datosPeliculaSeleccionada.director
let actores=datosPeliculaSeleccionada.actores
//PINTAR PELICULAS, cargar datos
let foto= document.getElementById("foto")
foto.src=poster
let sipnosiss= document.getElementById("sipnosiss")
sipnosiss.textContent= sinopsis
let titulo= document.getElementById("titulo")
titulo.textContent=nombre
let generos= document.getElementById("generos")
generos.textContent=genero
let idiomas= document.getElementById("idiomas")
idiomas.textContent=idioma
let directores= document.getElementById("directores")
directores.textContent=director
let actoress= document.getElementById("actoress")
actoress.textContent=actores




