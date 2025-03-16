// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let amigosIngresados=[];

//Implementa una función para agregar amigos


function agregarAmigo(){
    // Capturar el valor del campo de entrada
    let nombreAmigo = document.getElementById('amigo').value;
   
   // Validar la entrada
    if (nombreAmigo){
        //Actualizar el array de amigos
        amigosIngresados.push(nombreAmigo);
         
        
        //actualiza lista que se muestra en pantalla
        muestraLista();
        limpiarCampo();
        
    }else{
        alert("Debe ingresar un nombre");
    }

}


//4 Limpiar el campo de entrada
function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}

//muestra lista en pantalla
function muestraLista(){
    let listaPantalla = document.getElementById('listaAmigos'); 
    listaPantalla.innerHTML=''; //limpia

    for (let indice=0; indice < amigosIngresados.length; indice++){
        listaPantalla.innerHTML += `${amigosIngresados[indice]}  <br>`;
    }
}

function sortearAmigo(){
    if (amigosIngresados.length != 0){ 
        let sorteado = Math.floor(Math.random()*amigosIngresados.length);
        let amigoSecreto= document.getElementById('resultado');
        amigoSecreto.innerHTML += ` ¡Vaya, vaya! Tu amigo/a secreto/a es:  ${amigosIngresados[sorteado]}`;


    }else{
        alert("La lista no contiene elementos, debes ingresar un nombre por lo menos");
    
    }
}

