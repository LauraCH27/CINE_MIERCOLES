import { pintarSillas } from "../helper/pintarSilla.js"

let asientos=[
    [{id:"a1",estado:2},{id:"b1",estado:2},{id:"c1",estado:0},{id:"d1",estado:0}],
    [{id:"a2",estado:0},{id:"b2",estado:0},{id:"c2",estado:0},{id:"d2",estado:0}],
    [{id:"a3",estado:0},{id:"b3",estado:2},{id:"c3",estado:0},{id:"d3",estado:0}],
    [{id:"a4",estado:0},{id:"b5",estado:0},{id:"c4",estado:0},{id:"d4",estado:0}]
]
//PINTAR DESDE JS MI SALA DE CINE
let cinema=document.getElementById("salacinema")
//recorrer los asientos y aplicar traversig
pintarSillas(asientos,cinema)
//EVENTO DE CLICK EN LA SALA DE CINE
cinema.addEventListener("click",function(e){
        if(e.target.tagName=="IMG"){
            let idAsientoSeleccionado=e.target.id
            asientos.forEach(function(hilera){
                hilera.forEach(function(asiento){
                    if(asiento.id==idAsientoSeleccionado){
                        //encontre el asiento que el ususario escogió
                        if(asiento.estado==0){
                            asiento.estado=1
                            e.target.src="../../assets/img/cinema-chair (2).png"

                        }else if(asiento.estado==1){
                            asiento.estado=0
                            e.target.src="../../assets/img/cinema-chair.png"


                        }
                    }

            })

        })
    }    
    

})


    


