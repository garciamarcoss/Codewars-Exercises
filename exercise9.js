// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8^1 + 9^2 = 8 + 81

//The next number in having this property is 135

// See this property again: 135 = 1^1 + 3^2 + 5^3 = 1 + 9 + 125

//We need a function to collect these numbers, that may receive two integers a,b that defines the range [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        let acum = 0;
        num = i.toString().split('').map(Number);
        for (let j = 0; j < num.length; j++) {
            acum += num[j]**(j+1); // Reemplaza el operador de XOR (^) con el operador de potencia (**)
            if (acum == i) {
             arr.push(i)
            }
        }
    }
    return arr;
    
}


console.log(sumDigPow(1,100))