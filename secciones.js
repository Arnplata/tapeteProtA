
  


var introduccion = `
<div class="introduccion">
<h1>TAPETE CUADRICULADO:</h1>

<p>El tapete cuadriculado es un invento japonés realizado por los doctores <strong>Shiguematzu y Okura</strong>, con el propósito de disminuir el riesgo de caídas y prevenir síndrome demencial en los adultos mayores.</p>
<p>La diabetes Melitus es un factor de riesgo para la demencia, por ello a las personas con ésta enfermedad se les recomienda hacer ejercicio físico y combinarlos con ejercicio mental simultáneamente.</p>

</div>

<div class="rectanguloGris">
    <div class="interno">
        <div class="contTit">
            <div class="beneTit"><h2>BENEFICIOS MENTALES O COGNITIVOS</h2></div>
            <div class="beneTit"><h2>BENEFICIOS FÍSICOS</h2></div>
        </div>

        <div class="libre"></div>

        <div class="contBene">

            <div class="beneLista">

                <ul>
                    <li>Memoria</li>
                    <li>Atención</li>
                    <li>Lenguaje</li>
                    <li>Función ejecutiva</li>
                    <li>Concentración</li>
                </ul>


            </div>

            <div class="beneLista">

                <ul>
                    <li>Mejora la cordinación del cuerpo.</li>
                    <li>Mejora el equilibrio.</li>
                    <li>Incrementa la fuerza de las piernas.</li>
                    <li>Disminuye el riesgo de caidas.</li>
                </ul>
            </div>
        </div>
        
    </div>
</div>

<div class="meta">
    <h3>¡LA META!</h3>
    <p>40 MINUTOS, 3 VECES A LA SEMANA DURANTE 6 MESES CONTINUOS</p>
</div>

<div class="botones">

    <div class="boton" onclick="moverseccion(instruccionesPaso1)">COMENZAR</div>
</div>
</div>      

`;

// instruccionesPaso1
var instruccionesPaso1 = `
<div class="instrucciones">
<div id="semana" class="header">
Instrucciones
</div>
            
            <div class="pContInstr">
                <p><strong>Paso 1</strong></p>
                <p>En una superficie plana, dibuje un tapete cuadriculado como se muestra en la figura:</p>
            
            </div>
            <div class="imagenTapeteCont">
                <div class="imagenTapete"></div>
            </div>
            
           

            
            
            
            
            <div class="botones">
                <div class="boton" onclick="moverseccion(bitacoraInicial)">SIGUIENTE</div>
            </div>
            </div>       
`;  



var bitacoraInicial = `
<div class="bitacora">
            <h1>BÍTACORA INICIAL:</h1>
            <div class="pCont">
                <p>Antes de comenzar, nos gustaría saber como se encuentra el día de hoy:
                </p>
            </div>
            
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
    
            <div class="pCont">
                <p>Escala de medición del estado de ánimo del
                    paciente <strong>antes de la actividad:</strong></p>
            </div>
            
            <div class="contEscalaCaras">
                
                <div class="caras">
                    <div class="caraBtnCont">
                        <label class="cara1" for="cara1">
                            <div class="cara cara1"></div>
                        </label>
                        <input type="radio" id="cara1" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara2">
                            <div class="cara cara2"></div>
                        </label>
                        <input type="radio" id="cara2" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara3">
                            <div class="cara cara3"></div>
                        </label>
                        <input type="radio" id="cara3" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara4">
                            <div class="cara cara4"></div>
                        </label>
                        <input type="radio" id="cara4" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara5">
                            <div class="cara cara5"></div>
                        </label>
                        <input type="radio" id="cara5" name="caras" value="1">
                    </div>
    
                </div>
            </div>
            
            
                
            <div class="botones">
                        <div class="boton" onclick="moverseccion(calentamiento)">SIGUIENTE</div>
            </div>
        </div>
    
`;

var calentamiento = `
<div class="bitacora">
<div id="semana" class="header">
Instrucciones
</div>
    <h1>CALENTAMIENTO</h1>

    <div class="pCont">
                
                <p>Iniciar Con un calentamiento de marcha "indoor" por 15 minutos. Apóyese del siguiente video:</p>
            
            </div>

            <div class="video">
            
            </div>
            
    <div class="botones">
        <div class="boton" onclick="moverseccion(bitacoraPreActividad)">SIGUIENTE</div>
    </div>
</div>
`;

// bitacoraPreActividad

var bitacoraPreActividad = `
<div class="bitacora">
<h1>BÍTACORA PRE-ACTIVIDAD:</h1>


    <div class="pCont">
    <p>Escala de medición de esfuerzo percibido durante
    el calentamiento:</p>
    </div>

<div class="escalaEsfuerzo">
        <div class="renglonEsfuerzo">
            <div class="num">0.</div>
            <label for="0">Reposos</label>
            <div class="inptBox">
                <input type="radio" id="0" name="escalaEsfuerzo" value="Reposos">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">1.</div>
            <label for="1">Muy muy ligero</label>
            <div class="inptBox">
                <input type="radio" id="1" name="escalaEsfuerzo" value="Muy muy ligero">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">2.</div>
            <label for="2">Muy ligero</label>
            <div class="inptBox">
                <input type="radio" id="2" name="escalaEsfuerzo" value="Muy ligero">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">3.</div>
            <label for="3">Ligero</label>
            <div class="inptBox">
                <input type="radio" id="3" name="escalaEsfuerzo" value="Ligero">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">4.</div>
            <label for="4">Algo pesado</label>
            <div class="inptBox">
                <input type="radio" id="4" name="escalaEsfuerzo" value="Algo pesado">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">5.</div>
            <label for="5">Pesado</label>
            <div class="inptBox">
                <input type="radio" id="5" name="escalaEsfuerzo" value="Pesado">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">6.</div>
            <label for="6">Más pesado</label>
            <div class="inptBox">
                <input type="radio" id="6" name="escalaEsfuerzo" value="Más pesado">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">7.</div>
            <label for="7">Muy pesado</label>
            <div class="inptBox">
                <input type="radio" id="7" name="escalaEsfuerzo" value="Muy pesado">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">8.</div>
            <label for="8">Muy muy pesado</label>
            <div class="inptBox">
                <input type="radio" id="8" name="escalaEsfuerzo" value="Muy muy pesado">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">9.</div>
            <label for="9">Máximo</label>
            <div class="inptBox">
                <input type="radio" id="9" name="escalaEsfuerzo" value="Máximo">
            </div>
        </div>

        <div class="renglonEsfuerzo">
            <div class="num">10.</div>
            <label for="10">Extremo</label>
            <div class="inptBox">
                <input type="radio" id="10" name="escalaEsfuerzo" value="Extremo">
            </div>
        </div>
        
</div>




    
<div class="botones">
    <div class="boton" onclick="moverseccion(indicacionesTapete)">SIGUIENTE</div>
</div>
</div>        
`;

var indicacionesTapete = `
<div class="bitacora">
<div id="semana" class="header">
Instrucciones
</div>
<h1>INDICACIONES</h1>
<div class="botones">
    <div class="boton" onclick="moverseccion(tapeteFisico)">SIGUIENTE</div>
</div>
</div>
`;

var tapeteFisico = `
<div id="semana" class="header">
Semana 1
</div>

<div class="diaCont">
<div id="diaPalabra">
    Lunes
</div>
<div id="diaNumero">
    00/0/0000
</div>
</div>

<div class="tapContainer">
<div id="contGrilla" class="tapeteFisico">
    <div class="fila">
        <div class="g-title" id="titulo">E1-1</div>

    </div>
    <div class="fila">
        <div id="J1" class="tecla f" onclick="b('J1')"></div>
        <div id="J2" class="tecla i" onclick="b('J2')">2</div>
        <div id="J3" class="tecla f" onclick="b('J3')"></div>
        <div id="J4" class="tecla f" onclick="b('J4')"></div>
    </div>

    <div class="fila">
        <div id="I1" class="tecla f" onclick="b('I1')"></div>
        <div id="I2" class="tecla f" onclick="b('I2')"></div>
        <div id="I3" class="tecla d" onclick="b('I3')">1</div>
        <div id="I4" class="tecla f" onclick="b('I4')"></div>
    </div>

    <div class="fila">
        <div id="H1" class="tecla f" onclick="b('H1')"></div>
        <div id="H2" class="tecla i" onclick="b('H2')">2</div>
        <div id="H3" class="tecla f" onclick="b('H3')"></div>
        <div id="H4" class="tecla f" onclick="b('H4')"></div>
    </div>

    <div class="fila">
        <div id="G1" class="tecla f" onclick="b('G1')"></div>
        <div id="G2" class="tecla f" onclick="b('G2')"></div>
        <div id="G3" class="tecla d" onclick="b('G3')">1</div>
        <div id="G4" class="tecla f" onclick="b('G4')"></div>
    </div>

    <div class="fila">
        <div id="F1" class="tecla f" onclick="b('F1')"></div>
        <div id="F2" class="tecla i" onclick="b('F2')">2</div>
        <div id="F3" class="tecla f" onclick="b('F3')"></div>
        <div id="F4" class="tecla f" onclick="b('F4')"></div>
    </div>

    <div class="fila">
        <div id="E1" class="tecla f" onclick="b('E1')"></div>
        <div id="E2" class="tecla f" onclick="b('E2')"></div>
        <div id="E3" class="tecla d" onclick="b('E3')">1</div>
        <div id="E4" class="tecla f" onclick="b('E4')"></div>
    </div>

    <div class="fila">
        <div id="D1" class="tecla f" onclick="b('D1')"></div>
        <div id="D2" class="tecla i" onclick="b('D2')">2</div>
        <div id="D3" class="tecla f" onclick="b('D3')"></div>
        <div id="D4" class="tecla f" onclick="b('D4')"></div>
    </div>

    <div class="fila">
        <div id="C1" class="tecla f" onclick="b('C1')"></div>
        <div id="C2" class="tecla f" onclick="b('C2')"></div>
        <div id="C3" class="tecla d" onclick="b('C3')">1</div>
        <div id="C4" class="tecla f" onclick="b('C4')"></div>
    </div>

    <div class="fila">
        <div id="B1" class="tecla f" onclick="b('B1')"></div>
        <div id="B2" class="tecla i" onclick="b('B2')">2</div>
        <div id="B3" class="tecla f" onclick="b('B3')"></div>
        <div id="B4" class="tecla f" onclick="b('B4')"></div>
    </div>

    <div class="fila">
        <div id="A1" class="tecla f" onclick="b('A1')"></div>
        <div id="A2" class="tecla f" onclick="b('A2')"></div>
        <div id="A3" class="tecla d" onclick="b('A3')">1</div>
        <div id="A4" class="tecla f" onclick="b('A4')"></div>
    </div>

</div>

<div class="acciones" onload="si()">
    
    <div class="vueltas">
        
        
        <div class="label">3 VUELTAS</div>
    
</div>

    <div class="inicio">

        <div>PIE DE INICIO</div>

        
            <div id="pInicioBx">
                <div class="inicio-t der" id="btnPieInicio">
                    <div class="boton">
            
                    </div>
                </div>
            </div>
        
        
        <div id="inicio" class="b">pie derecho</div>
    </div>

    <div class="btnDemostracionCont" id="demoCont">
        <div class="btnDemostracion " onclick="runDemo(E1_1,800)">
            <div class="btnLabel">DEMOSTRACIÓN</div>
            <div class="triangulo"></div>
        </div>
    </div>

    

    <div class="inputs">
       

        <div class="inpt">
            <label class="completado" for="complete">COMPLETADO</label>
            <input type="checkbox" id="complete" value="completado">
        </div>
    </div>

    <div id="ejerciciosMenuCont">

        <div class="btnEjercicio active" onclick="cambiarEjer(E1_1,E1_2,'Ejercicio 1')">Ejercicio 1</div>
        <div class="btnEjercicio" onclick="cambiarEjer(E1_3,E1_4,'Ejercicio 2')">Ejercicio 2</div>
        <div class="btnEjercicio" onclick="cambiarEjer(E1_5,E1_6,'Ejercicio 3')">Ejercicio 3</div>

    </div>

    <div class="btnFinalizarCont">
        <div class="btnFinalizar" onclick="moverseccion(bitacoraPost)">FINALIZAR DÍA</div>
    </div>
</div>
</div>
<div class="pContInstr">
                <p><strong>Nota:</strong></p>
                <p>Cada ejercicio se recorre 3 veces, empezando con el <strong>pie derecho</strong> y a continuación 3 veces empezando con el <strong>pie izquierdo</strong></p>
            
            </div>


`;

var bitacoraPost = `
<div class="bitacora">
            <h1>BÍTACORA POST-ACTIVIDAD:</h1>
            <div class="pCont">
                <P>Escala de medición de esfuerzo percibido <strong>después del ejercicio</strong>
                </P>
            </div>
            
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
    
            <div class="pCont">
                <p>Escala de medición del estado de ánimo del
                    paciente <strong>después del Ejercicio:</strong></p>
            </div>
            
            <div class="contEscalaCaras">
                
                <div class="caras">
                    <div class="caraBtnCont">
                        <label class="cara1" for="cara1">
                            <div class="cara cara1"></div>
                        </label>
                        <input type="radio" id="cara1" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara2">
                            <div class="cara cara2"></div>
                        </label>
                        <input type="radio" id="cara2" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara3">
                            <div class="cara cara3"></div>
                        </label>
                        <input type="radio" id="cara3" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara4">
                            <div class="cara cara4"></div>
                        </label>
                        <input type="radio" id="cara4" name="caras" value="1">
                    </div>
    
                    <div class="caraBtnCont">
                        <label for="cara5">
                            <div class="cara cara5"></div>
                        </label>
                        <input type="radio" id="cara5" name="caras" value="1">
                    </div>
    
                </div>
            </div>


            <div class="pContInstr">
                <p><strong>Enfriamiento:</strong></p>
                <p>Al terminar la actividad, deberá realizar un enfriamiento por 5 minutos, <strong>éste puede ser una ligera caminata al rededor del tapete</strong></p>
            
            </div>
            
            
                
            <div class="botones">
                        <div class="boton">FINALIZAR</div>
            </div>
        </div>
    
`;

var resumen = `

`;







var opcionesMenu = `
<div class="semCont">
Semana 1
<div class="btnCont">
<div class="btn" onclick="printEjer(E1_1)">E1-1</div>
<div class="btn" onclick="printEjer(E1_2)">E1-2</div>
<div class="btn" onclick="printEjer(E1_3)">E1-3</div>
</div>

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_4)">E1-4</div>
<div class="btn" onclick="printEjer(E1_5)">E1-5</div>
<div class="btn" onclick="printEjer(E1_6)">E1-6</div>
</div>
</div>

<div class="semCont">
Semana 2

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_7)">E1-7</div>
<div class="btn" onclick="printEjer(E1_8)">E1-8</div>
<div class="btn" onclick="printEjer(E2_1)">E2-1</div>
<div class="btn" onclick="printEjer(E2_2)">E2-2</div>
</div>
<div class="btnCont">
<div class="btn" onclick="printEjer(E2_3)">E2-3</div>
<div class="btn" onclick="printEjer(E2_4)">E2-4</div>
<div class="btn" onclick="printEjer(E2_5)">E2-5</div>
<div class="btn" onclick="printEjer(E2_6)">E2-6</div>
</div>
</div>

<div class="semCont">
Semana 3

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_3)">E1-3</div>
<div class="btn" onclick="printEjer(E1_4)">E1-4</div>
<div class="btn" onclick="printEjer(E2_7)">E2-7</div>
<div class="btn" onclick="printEjer(E2_8)">E2-8</div>
</div>
<div class="btnCont">
<div class="btn" onclick="printEjer(E2_1)">E2-1</div>
<div class="btn" onclick="printEjer(E2_2)">E2-2</div>
<div class="btn" onclick="printEjer(E2_19)">E2-19</div>
<div class="btn" onclick="printEjer(E2_20)">E2-20</div>
</div>
</div>

<div class="semCont">
Semana 4

<div class="btnCont">
<div class="btn" onclick="printEjer(E1_3)">E1-3</div>
<div class="btn" onclick="printEjer(E1_4)">E1-4</div>
<div class="btn" onclick="printEjer(E2_7)">E2-7</div>
<div class="btn" onclick="printEjer(E2_8)">E2-8</div>
</div>
<div class="btnCont">
<div class="btn" onclick="printEjer(E2_1)">E2-1</div>
<div class="btn" onclick="printEjer(E2_2)">E2-2</div>
<div class="btn" onclick="printEjer(E2_19)">E2-19</div>
<div class="btn" onclick="printEjer(E2_20)">E2-20</div>
</div>
</div> -->
`;

var tapeteVirtual = `
<div class="tapVirtual">
<div id="contGrilla">
    <div class="fila">
        <div class="g-title">E1-1</div>
    
    </div>
    <div class="fila">
        <div id="J1" class="tecla f" onclick="b('J1')"></div>
        <div id="J2" class="tecla i" onclick="b('J2')">2</div>
        <div id="J3" class="tecla f" onclick="b('J3')"></div>
        <div id="J4" class="tecla f" onclick="b('J4')"></div>
    </div>
    
    <div class="fila">
        <div id="I1" class="tecla f" onclick="b('I1')"></div>
        <div id="I2" class="tecla f" onclick="b('I2')"></div>
        <div id="I3" class="tecla d" onclick="b('I3')">1</div>
        <div id="I4" class="tecla f" onclick="b('I4')"></div>
    </div>
    
    <div class="fila">
        <div id="H1" class="tecla f" onclick="b('H1')"></div>
        <div id="H2" class="tecla i" onclick="b('H2')">2</div>
        <div id="H3" class="tecla f" onclick="b('H3')"></div>
        <div id="H4" class="tecla f" onclick="b('H4')"></div>
    </div>
    
    <div class="fila">
        <div id="G1" class="tecla f" onclick="b('G1')"></div>
        <div id="G2" class="tecla f" onclick="b('G2')"></div>
        <div id="G3" class="tecla d" onclick="b('G3')">1</div>
        <div id="G4" class="tecla f" onclick="b('G4')"></div>
    </div>
    
    <div class="fila">
        <div id="F1" class="tecla f" onclick="b('F1')"></div>
        <div id="F2" class="tecla i" onclick="b('F2')">2</div>
        <div id="F3" class="tecla f" onclick="b('F3')"></div>
        <div id="F4" class="tecla f" onclick="b('F4')"></div>
    </div>
    
    <div class="fila">
        <div id="E1" class="tecla f" onclick="b('E1')"></div>
        <div id="E2" class="tecla f" onclick="b('E2')"></div>
        <div id="E3" class="tecla d" onclick="b('E3')">1</div>
        <div id="E4" class="tecla f" onclick="b('E4')"></div>
    </div>
    
    <div class="fila">
        <div id="D1" class="tecla f" onclick="b('D1')"></div>
        <div id="D2" class="tecla i" onclick="b('D2')">2</div>
        <div id="D3" class="tecla f" onclick="b('D3')"></div>
        <div id="D4" class="tecla f" onclick="b('D4')"></div>
    </div>
    
    <div class="fila">
        <div id="C1" class="tecla f" onclick="b('C1')"></div>
        <div id="C2" class="tecla f" onclick="b('C2')"></div>
        <div id="C3" class="tecla d" onclick="b('C3')">1</div>
        <div id="C4" class="tecla f" onclick="b('C4')"></div>
    </div>
    
    <div class="fila">
        <div id="B1" class="tecla f" onclick="b('B1')"></div>
        <div id="B2" class="tecla i" onclick="b('B2')">2</div>
        <div id="B3" class="tecla f" onclick="b('B3')"></div>
        <div id="B4" class="tecla f" onclick="b('B4')"></div>
    </div>
    
    <div class="fila">
        <div id="A1" class="tecla f" onclick="b('A1')"></div>
        <div id="A2" class="tecla f" onclick="b('A2')"></div>
        <div id="A3" class="tecla d" onclick="b('A3')">1</div>
        <div id="A4" class="tecla f" onclick="b('A4')"></div>
    </div>

</div>

<div class="instr">
    <div class="pieInicio" id="inicio">Pie de Inicio: Pie Derecho</div>
    <div class="subContInst">
        <div class="izquierdo">Pie Izquierdo</div>
        <div class="derecho">Pie Derecho</div>
    </div>
    <div class="subContInst">
        <div id="dia1">Lunes</div>
        <div >3 Vueltas</div>
    </div>
    <div class="subContInst">
        <div id="dia2">Miércoles</div>
        <div >3 Vueltas</div>
    </div>
    <div class="subContInst">
        <div id="dia3">Viernes</div>
        <div >3 Vueltas</div>
    </div>
</div>

</div>
`;


