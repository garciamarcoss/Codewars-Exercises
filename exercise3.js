//Find the largest and smallest number in a string of numbers

function highAndLow(numbers){
    //Convertí la cadena de números en un array de números
    let arr = numbers.split(' ').map(Number);

    //Al usar los tres puntos antes de arr, estamos descomponiendo el array en una lista de argumentos individuales para las funciones Math.max y Math.min.
    let lowNumber = Math.min(...arr);
    let highNumber = Math.max(...arr);

    return highNumber + ' ' + lowNumber;

}