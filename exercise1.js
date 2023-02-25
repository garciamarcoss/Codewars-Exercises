//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(string) {
    
    if (string.length % 2 != 0) {
        string += '_'
    }
    let newArray = [];
    for (let i = 0; i < string.length; i += 2) {
        newArray.push(string.substr(i, 2)) 
    }
    return newArray;   
}

