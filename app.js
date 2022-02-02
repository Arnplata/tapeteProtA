var E1_1 = [1,2,1,2,1,2,1,2,1,2]

function b(n) {
    console.log(n);
}

function printTab(semana,i,pie) {
    var tabCont = document.getElementById("contGrilla")
    var pieInicio = document.getElementById("inicio")

    tabCont.innerHTML = semana[i]

    if (pie == 0) {
        pieInicio.innerHTML = "Pie de inicio: Izquierdo";
    } else {
        pieInicio.innerHTML = "Pie de inicio: Derecho";
    }
    
    
}

var semana1 = [
    // E1-1
    `

    <div class="fila">
    <div class="g-title">E1-1</div>

</div>
<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla i" onclick="b(2)">2</div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla d" onclick="b(1)">1</div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla i" onclick="b(2)">2</div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla d" onclick="b(1)">1</div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla i" onclick="b(2)">2</div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla d" onclick="b(1)">1</div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla i" onclick="b(2)">2</div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla d" onclick="b(1)">1</div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla i" onclick="b(2)">2</div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
</div>

<div class="fila">
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla" onclick="b(0)"></div>
    <div class="tecla d" onclick="b(1)">1</div>
    <div class="tecla" onclick="b(0)"></div>
</div>
    
    `,

    // E1-2
    `
    <div class="fila">
            <div class="g-title">E1-2</div>

        </div>
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

    `,

    // E1-3
    `
    <div class="fila">
            <div class="g-title">E1-3</div>

        </div>
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

    // E1-4
    `
    <div class="fila">
            <div class="g-title">E1-4</div>

        </div>
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    
    `,

    // E1-5
    `
    <div class="fila">
            <div class="g-title">E1-5</div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>
    
    `,

    // E1-6
    `
    <div class="fila">
            <div class="g-title">E1-6</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

];


var semana2 = [
    // E1-7
    `
    <div class="fila">
            <div class="g-title">E1-7</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

    `,

    // E1-8
    `
    <div class="fila">
            <div class="g-title">E1-8</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

    // E2-1
    `
    <div class="fila">
            <div class="g-title">E2-1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(1)">2</div>
            <div class="tecla d" onclick="b(2)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>
    `,

    // E2-2
    `
    <div class="fila">
            <div class="g-title">E2-2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>
    `,

    // E2-3
    `
    <div class="fila">
            <div class="g-title">E2-3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

    `,

    // E2-4
    `
    <div class="fila">
            <div class="g-title">E2-4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla d" onclick="b(2)">2</div>
        </div>

    `,

    // E2-5
    `
    <div class="fila">
            <div class="g-title">E2-5</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

    // E2-6
    `
    <div class="fila">
            <div class="g-title">E2-6</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

    `
]

var semana3 = [
    // E1-3
    `
     <div class="fila">
            <div class="g-title">E1-3</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

    // E1-4
    `
    <div class="fila">
            <div class="g-title">E1-4</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
        
        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

    // E2-7
    `
    <div class="fila">
            <div class="g-title">E2-7</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(6)">6</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(5)">5</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(6)">6</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(5)">5</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
        </div>
    `,

    // E2-8
    `
    <div class="fila">
            <div class="g-title">E2-8</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(6)">6</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(5)">5</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(6)">6</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(5)">5</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

    // E2-1
    `
    <div class="fila">
            <div class="g-title">E2-1</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(3)">3</div>
        </div>
    `,

    // E2-2
    `
    <div class="fila">
            <div class="g-title">E2-2</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>

        <div class="fila">
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(4)">4</div>
        </div>
    `,

    // E2-19
    `
    <div class="fila">
            <div class="g-title">E2-19</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(6)">6</div>
            <div class="tecla d" onclick="b(5)">5</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(6)">6</div>
            <div class="tecla d" onclick="b(5)">5</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(2)">2</div>
            <div class="tecla d" onclick="b(3)">3</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `,

    // E2-20
    `
    <div class="fila">
            <div class="g-title">E2-20</div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(5)">5</div>
            <div class="tecla d" onclick="b(6)">6</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(5)">5</div>
            <div class="tecla d" onclick="b(6)">6</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla d" onclick="b(4)">4</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(3)">3</div>
            <div class="tecla d" onclick="b(2)">2</div>
            <div class="tecla" onclick="b(0)"></div>
        </div>

        <div class="fila">
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla i" onclick="b(1)">1</div>
            <div class="tecla" onclick="b(0)"></div>
            <div class="tecla" onclick="b(0)"></div>
        </div>
    `
]
