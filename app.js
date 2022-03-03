

const teclas = document.getElementsByClassName("tecla");



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



function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
  
async function runDemo(ejercicio,velocidad) {
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





var landing = `
<div>
            <h1>TAPETE CUADRICULADO</h1>
            <p>El tapete cuadriculado es un invento japonés
            realizado por los doctores Shiguematzu y Okura,
            con el propósito de disminuir el riesgo de caídas 
            y prevenir síndrome demencial en los 
            adultos mayores.
            La diabetes Melitus es un factor de riesgo para
            la demencia, por ello a las personas con ésta
            enfermedad se les recomienda hacer ejercicio
            físico y combinarlos con ejercicio mental
            simultáneamente.</p>
        </div>
        <div class="beneficios">

        </div>

        <div class="meta">
            <h2>¡LA META!</h2>
            <P>40 MINUTOS, 3 VECES A LA SEMANA DURANTE 6 MESES CONTINUOS</P>
        </div>

        <div class="btnera">
            <div class="btnLand">TAPETE FÍSICO</div>
            <div class="btnLand">TAPETE VIRTUAL</div>
        </div>

`;

var tapeteFisico = [
   //Instrucciones
    `
    <div>
            <h1>INSTRUCCIONES</h1>
            <h3>Paso 1</h3>
            <p>En una superficie plana, dibuje un tapete
                cuadriculado como se muestra en la figura</p>
            <div class="tapeteEjemplo"></div>
            
            
            <h3>Paso 2</h3>
            <p>Una vez que ya cuente con el tapete cuadriculado,
                podrá iniciar la siguiente rutina:</p>
            <h4>A&#41;Calentamiento:</h4>
            <p>Iniciar con un calentamiento de marcha "indoor"
                por 15 minutos. Apóyese del siguiente video:</p>
            <div class="videoYT"></div>

            <h4>B&#41;Tapete cuadriculado:</h4>
            <p>Es importante seguir el plan de acción por 20
                minutos tal como lo indica el ejercicio.</p>

            <h4>C&#41;Enfriamiento:</h4>
            <p>Al terminar la actividad, deberá realizar un
                enfriamiento por 5 minutos, este puede ser una
                ligera caminata alrededor del tapete.</p>
                
            <div class="btnera">
                <div class="btnLand">COMENZAR</div>
            </div>
        </div>
    `,
    //Bitácora Pre-actividad
    `
    <div>
            <h1>BÍTACORA PRE-ACTIVIDAD:</h1>
            <P>Escala de medición de esfuerzo percibido durante
                el calentamiento:</P>
            
            <div class="escalaEsfuerzo">
                    <div class="renglonEsfuerzo">
                        <div class="num">0.</div>
                        <label for="0">Reposos</label>
                        <input type="radio" id="0" name="escalaEsfuerzo" value="Reposos">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">1.</div>
                        <label for="1">Muy muy ligero</label>
                        <input type="radio" id="1" name="escalaEsfuerzo" value="Muy muy ligero">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">2.</div>
                        <label for="2">Muy ligero</label>
                        <input type="radio" id="2" name="escalaEsfuerzo" value="Muy ligero">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">3.</div>
                        <label for="3">Ligero</label>
                        <input type="radio" id="3" name="escalaEsfuerzo" value="Ligero">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">4.</div>
                        <label for="4">Algo pesado</label>
                        <input type="radio" id="4" name="escalaEsfuerzo" value="Algo pesado">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">5.</div>
                        <label for="5">Pesado</label>
                        <input type="radio" id="5" name="escalaEsfuerzo" value="Pesado">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">6.</div>
                        <label for="6">Más pesado</label>
                        <input type="radio" id="6" name="escalaEsfuerzo" value="Más pesado">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">7.</div>
                        <label for="7">Muy pesado</label>
                        <input type="radio" id="7" name="escalaEsfuerzo" value="Muy pesado">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">8.</div>
                        <label for="8">Muy muy pesado</label>
                        <input type="radio" id="8" name="escalaEsfuerzo" value="Muy muy pesado">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">9.</div>
                        <label for="9">Máximo</label>
                        <input type="radio" id="9" name="escalaEsfuerzo" value="Máximo">
                    </div>

                    <div class="renglonEsfuerzo">
                        <div class="num">10.</div>
                        <label for="10">Extremo</label>
                        <input type="radio" id="10" name="escalaEsfuerzo" value="Extremo">
                    </div>
                    
            </div>

            <p>Escala de medición del estado de animo del
                paciente después del calentamiento:</p>
            
            <div class="contEscalaCaras">
                <div class="escalaCaras"></div>
                <div class="caras">
                    <div class="cara">
                        <label for="cara1"></label>
                        <input type="radio" id="cara1" name="caras" value="1">
                    </div>

                    <div class="cara">
                        <label for="cara2"></label>
                        <input type="radio" id="cara2" name="caras" value="1">
                    </div>

                    <div class="cara">
                        <label for="cara3"></label>
                        <input type="radio" id="cara3" name="caras" value="1">
                    </div>

                    <div class="cara">
                        <label for="cara4"></label>
                        <input type="radio" id="cara4" name="caras" value="1">
                    </div>

                    <div class="cara">
                        <label for="cara5"></label>
                        <input type="radio" id="cara5" name="caras" value="1">
                    </div>

                </div>
            </div>
            
            
                
            <div class="btnera">
                <div class="btnLand">SIGUIENTE</div>
            </div>
    `,

    //Ejercicios

    `
    `,

    //Bitacora Post-actividad   

    `
    `

]
