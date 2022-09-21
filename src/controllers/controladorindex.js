/*Declarando arreglos en JS: es una variable especial que me permite almacenar multiples datos en 
// en una sola variables, un arreglo es un conjunto de elementos, cada arreglo dbe tener un indice y un valor
let numeros =[5,8,12,10]
//console.log(numeros[0])
//Instanciando una clase, se escribe en plural
let nombres = Array("juan","sara","carlos","laura")
//console.log(nombres[3])
//un objeto es una variables especial que permite que yo almacene multiples datos en una sola variable, un objeto tiene atributos
let persona={
    nombre:"Juan",
    profesion:"ingeniero",
    edad:33,
    hinchaDelmejor:true,
    materiasDisctadas:["Web2","Avanzadas","Nuevas tecnologias"],
    equiposFavoritos:["Nacional","Liverpool"],
    comida:{
        nombre:"bandeja paisa",
        precio: 25000
    }
}
console.log(persona.materiasDisctadas[2])
console.log(persona.equiposFavoritos[1])
console.log(persona.comida.precio)*/
//llamo al arreglo base de datos
import {peliculas} from '../helper/baseDatos.js'
import{peliculass} from '../helper/baseDatos2.js'
//llamo a la función pintar peliculas
import{pintarPelicula, pintarPelicula2} from '../helper/pintarPeliculas.js'
//traer ID del html
let fila=document.getElementById("fila")
let cartelera=document.getElementById("cartelera")
//llamo a la función pinatrPeliculas
pintarPelicula(peliculas)
pintarPelicula2(peliculass)

    //Recorriendo un arreglo en JS
    //función: se reutiliza y se llama las veces que quiera...
//DETETANTANDO SELECCION DE UN PELICULA
//palabra resrvada
//función anonima
let peliculaSeleccionada={}
fila.addEventListener("click",function(evento){
    //me tarae toda la info de la tarjeta o columna, querySelector 
    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector('img').src)
    peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector('h3').textContent)//nombre
    peliculaSeleccionada.genero=(evento.target.parentElement.querySelector('h4').textContent)//genero
    peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector('h5').textContent)//idioma
    peliculaSeleccionada.duracion=(evento.target.parentElement.querySelector('h6').textContent)//duracion
    peliculaSeleccionada.clasificacion=(evento.target.parentElement.querySelector('h7').textContent)
    peliculaSeleccionada.sipnosis=(evento.target.parentElement.querySelector('p').textContent)
    console.log(peliculaSeleccionada)
    //LLAMANDO A LA MEMORIA DEL NAVEGADOR
    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))
    //REDIRECCIONA A OTRA VISTA
   // window.location.href="./src/views/ampliarInfoPelicula.html"
    
})
let peliculaSeleccionada2={}
cartelera.addEventListener("click",function(evento){
    //me tarae toda la info de la tarjeta o columna, querySelector 
    peliculaSeleccionada2.poster=(evento.target.parentElement.querySelector('img').src)
    peliculaSeleccionada2.nombre=(evento.target.parentElement.querySelector('h3').textContent)//nombre
    peliculaSeleccionada2.genero=(evento.target.parentElement.querySelector('h4').textContent)//genero
    peliculaSeleccionada2.idioma=(evento.target.parentElement.querySelector('h5').textContent)//idioma
    peliculaSeleccionada2.duracion=(evento.target.parentElement.querySelector('h6').textContent)//duracion
    peliculaSeleccionada2.clasificacion=(evento.target.parentElement.querySelector('h7').textContent)
    peliculaSeleccionada2.sipnosis=(evento.target.parentElement.querySelector('p').textContent)
    console.log(peliculaSeleccionada2)
    //LLAMANDO A LA MEMORIA DEL NAVEGADOR
    localStorage.setItem("peliculaSeleccionada2",JSON.stringify(peliculaSeleccionada2))
    //REDIRECCIONA A OTRA VISTA
    //window.location.href="./src/views/ampliarInfoPelicula.html"
    
})
    

