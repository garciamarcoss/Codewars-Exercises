//Count the number of vowels in a string

function getCount(str) {
    let count = 0
    for(let j = 0; j <= str.length; j++ ) {
        switch (str[j]) {
            case 'a':
                count ++;
                break;    
            case 'e':
                count ++;
                break;    
            case 'i':
                count ++;
                break;    
            case 'o':
                count ++;
                break;    
            case 'u':
                count ++;
                break;    
        }
    }
    return count;
  }
