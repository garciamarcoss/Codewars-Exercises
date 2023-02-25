//The marketing team is spending way too much time typing in hashtags.
//Let's help them with our own Hashtag Generator!

//Here's the deal:

//It must start with a hashtag (#).
//All words must have their first letter capitalized.
//If the final result is longer than 140 chars it must return false.
//If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    const newStr = str.trim(); //Remove possible leading and trailing spaces
    if (newStr.length == 0) {
        return false;
    } else {
        let hashtag = '#'
        newStr.split(' ').map(word => {
            let correctWord = word.charAt(0).toUpperCase() + word.substr(1);
            hashtag += correctWord;
        })
        if (hashtag.length>140) {
            return false
        } else {
            return hashtag
        }

    }

}

console.log(generateHashtag('Hola marcos      como andas'))