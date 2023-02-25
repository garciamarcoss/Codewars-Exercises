//There is an array with some numbers. All numbers are equal except for one. Try to find it!

function findUniq(arr){
    arr = arr.sort((a,b)=>a-b)
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        let lastElement = arr.length - 1;
        return arr[lastElement];
    }
}
