//CONSUMIR DATOS DEL API DE SPOTIFY
//1. URI =URL + EP
const URI="https://api.spotify.com/v1/artists/796OSRuB0E9Hq55uTFL9U8/top-tracks?market=US" 
//2.TKEN DE ACCESO
const TOKEN="Authorization: Bearer BQDbMIH6FKAHndXY5lsu_vVZ_nGJfXExRlMrJFhDG_kl31oprsvLIUO1XLcn1qZokiUJo4K0MaKU-wfkfsZ4AQQg5eq4rFZ8SVANQhKHGoR8JAz5CHIH3HJXPm8R21amSspsE_k-qbB3qghSSAJI-mLTQAnTg_F6Ry_MbWCldXUdfouVqYEPCCAXoxB5sqw"
//3. petición 
const PETICION={
    method:"GET",
    headers: {Authorization:TOKEN}, 
}
let fila=document.getElementById("fila")
//4. usamos la rpomesa FETH para consumir el API
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
   let canciones=respuesta.tracks
   canciones.forEach(function(cancion){

    let nombre=document.createElement("h1")
    nombre.classList.add("text-center")
    nombre.textContent=cancion.name

    let columna=document.createElement("div")
    columna.classList.add("col")

    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    let audio=document.createElement("audio")
    audio.setAttribute("controls","controls")
    audio.src=cancion.preview_url

    tarjeta.appendChild(audio)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

   })    
})
.catch(function(error){
    console.log(error)
})



