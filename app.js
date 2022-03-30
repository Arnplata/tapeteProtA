


const teclas = document.getElementsByClassName("tecla");

var fecha = new Date().toLocaleDateString();

var num = new Date().getDay();

function b(id) {
    let tecla = document.getElementById(`${id}`);
    limpiarActive();
    tecla.classList.add("active");
}



function limpiarPrint(){
    
    // const teclas = document.getElementsByClassName("tecla");

    for (let i = 0; i < teclas.length; i++) {
        let tecla = teclas[i];
        tecla.classList.remove("i","f","d");
        tecla.innerHTML = "";
    }
}

function filtro(fila, columna){

    let primero = (
        fila == 'J' ? 0 :
        fila == 'I' ? 1 :
        fila == 'H' ? 2 :
        fila == 'G' ? 3 :
        fila == 'F' ? 4 :
        fila == 'E' ? 5 :
        fila == 'D' ? 6 :
        fila == 'C' ? 7 :
        fila == 'B' ? 8 :
        fila == 'A' ? 9 :"" );

    let segundo = (
        columna == 1 ? 0 :
        columna == 2 ? 1 :
        columna == 3 ? 2 :
        columna == 4 ? 3 :"" );

        return [primero,segundo]

}


function printEjer(ejercicio){

    limpiarPrint();
    
    for (let i = 0; i < teclas.length; i++) {
        let tecla = teclas[i];

        let fila = tecla.id.charAt(0);
        let columna = tecla.id.charAt(1);

        let [uno, dos] = filtro(fila,columna);
        
        let contTecla = ejercicio[uno][dos];
        
        if (ejercicio[uno][dos] == 0) {
            tecla.classList.add("f");
        } else {

            let numero = contTecla.charAt(0)
            let pie = contTecla.charAt(1)

            tecla.innerHTML = `${numero}`;


            if (pie == 'd') {
                tecla.classList.add("d");
            } else {
                tecla.classList.add("i");
            }
        }

        limpiarActive();
    }  


}

function manejadorInterruptor(pie){
    let pieLabel = document.getElementById('inicio');
    if (pie =='pie izquierdo') {
        document.getElementById('btnPieInicio').classList.remove('der');
        pieLabel.classList.remove('b');
        pieLabel.classList.add('g');
        pieLabel.innerHTML=pie;
    } else {
        document.getElementById('btnPieInicio').classList.add('der');
        pieLabel.classList.remove('g');
        pieLabel.classList.add('b');
        pieLabel.innerHTML=pie;
    }
}

function cambiarEjer(ejerDerecho,ejerIzquierdo,tipo){

    let botonBox = document.getElementById('pInicioBx');
    let titulo = document.getElementById('titulo');
    if (tipo.charAt(0)=='E') {
        botonBox.innerHTML= `
        <div class="inicio-t der" id="btnPieInicio" onclick="cambiarEjer(${ejerDerecho[11]},${ejerIzquierdo[11]},'btn')">
            <div class="boton"></div>
        </div>
        `;
        printEjer(ejerDerecho); 
        manejadorInterruptor(ejerDerecho[10])
        titulo.innerHTML= tipo ;
        cambiarBtnDemo(ejerDerecho);
    } else {
        
        botonBox.innerHTML= `
        <div class="inicio-t der" id="btnPieInicio" onclick="cambiarEjer(${ejerIzquierdo[11]},${ejerDerecho[11]},'btn')">
            <div class="boton"></div>
        </div>
        `;
        manejadorInterruptor(ejerIzquierdo[10]);
        printEjer(ejerIzquierdo);
        cambiarBtnDemo(ejerIzquierdo);

    }    

    
    
}

function cambiarBtnDemo(e){
    var demoCont = document.getElementById('demoCont');
    var btnDemo = `
    <div class="btnDemostracion " onclick="runDemo(${e[11]},800)">
            <div class="btnLabel">DEMOSTRACIÓN</div>
            <div class="triangulo"></div>
        </div>
    `;

    demoCont.innerHTML = btnDemo;

}

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
  
async function runDemo(e,velocidad) {
    let ejercicio = e[12]
    for (let i = 0; i < ejercicio.length; ++i) {
        await waitforme(`${velocidad}`);
        b(ejercicio[i]);
        
    }
    await waitforme(`${velocidad}`);
    limpiarActive();
    
}




function limpiarActive(){
    var teclas=document.getElementsByClassName("tecla")
    for (var i = 0; i<teclas.length; i++) {
        teclas[i].classList.remove("active");
     }
}

function moverseccion(sec){
    var mainCont = document.getElementById("mainCont")


    if (sec == tapeteFisico) {
        mainCont.innerHTML = sec
        
        tapeteLoad();
        cambiarEjer(E1_1,E1_2,'Ejercicio 1');
        
      

        
    } else {
        mainCont.innerHTML = sec
        
    }
}


function tapeteLoad(){
    

    var dia = (
        num == 0 ? 'Domingo' :
        num == 1 ? 'Lunes' :
        num == 2 ? 'Martes' :
        num == 3 ? 'Miércoles' :
        num == 4 ? 'Jueves' :
        num == 5 ? 'Viernes' :
        num == 6 ? 'Sábado' :"" );

    document.getElementById("diaPalabra").innerHTML= dia;
    document.getElementById("diaNumero").innerHTML= fecha;

}


