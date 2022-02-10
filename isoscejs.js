// isosceles tiene exactamente dos lados iguales
// podemos calcular las raíces cuadradas con la función Math.sqrt de JavaScript) math.sqrt
// calcular altura
// Para calcular la altura de un triángulo isósceles vamos a dividir nuestro triángulo en dos. Así tendremos dos triángulos iguales, uno de sus nuevos lados tendrá la misma longitud que la altura del triángulo original y calculando la longitud de este lado habremos calculado también la altura.

function alturaTriangulo(lado1, lado2, ladoBase) {
    if (lado1 === lado2 && lado1 !== ladoBase) {
        const altura = Math.sqrt(lado1 ** 2 - (ladoBase / 2) ** 2);
        return altura;
    } else {
        alert("No estás agregando los lados de un triángulo isósceles");
    }
}




function calcularAlturaIscoceles() {


    var input = document.getElementById("lad1");
    var value = input.value;

    var input2 = document.getElementById("lad2");
    var value2 = input2.value;

    var input3 = document.getElementById("base");
    var value3 = input3.value;

    if (value == value2 && value != value3 && value2 != value3) {

        var altura = alturaTriangulo(value, value2, value3);
        alert("El calculo de la altura es: " + altura);

    } else {

        alert("Los lados A y B no son iguales, no es un triangulo Iscoceles");
    }
}