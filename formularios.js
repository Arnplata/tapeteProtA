function Bitacora(BitIniEsf,BitPreEsf,BitPostEsf,BitAnimo){
    this.BitIniEsf=BitIniEsf
    this.BitPreEsf=BitPreEsf
    this.BitPostEsf=BitPostEsf
    this.BitAnimo=BitAnimo
    }
    nuevaPersona = new Bitacora('ligero','ligero','AlgoPesado','4/5')
console.log(nuevaPersona)


function Ciclo(semana1,semana2,semana3,fechaFinal){
    this.semana1=semana1;
    this.semana2=semana2;
    this.semana3=semana3;
    this.fechaFinal=fechaFinal;
    
    }
    nuevoCiclo = new Ciclo('2022-3-14','2022-3-21','2022-3-28','2022-4-3')
console.log(fecha)
console.log(nuevoCiclo)


function getPeriodo(f){
    let date1 = f.getTime();
    let sem1 = new Date(nuevoCiclo.semana1).getTime();
    let sem2 = new Date(nuevoCiclo.semana2);
    let sem3 = new Date(nuevoCiclo.semana3);
    let fechFinal = new Date(nuevoCiclo.fechFinal);


console.log('Semana 1' + date1 > sem1);
console.log('Semana 2' + date1 >= sem2&&date1 < sem3);
console.log('Semana 3' + date1 >= sem3&&date1 < fechFinal);
}

// Nos quedamos aqui, tenemos que sacar la semana en la que estamos a apartir de la
// Fecha en la que estamos

function Dia(e1Der,e1Izq,e2Der,e2Izq,e3Der,e3Izq){
    this.e1Der=e1Der
    this.e1Izq=e1Izq
    this.e2Der=e2Der
    this.e2Izq=e2Izq
    this.e3Der=e3Der
    this.e3Izq=e3Izq
    
    }
    nuevoDia = new Dia(
        E1_7,E1_8,
        E2_1,E2_2,
        E2_3,E2_4 );

    console.log(nuevoDia)



