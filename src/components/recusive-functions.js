import { hashMap } from './hashmaps';

export function printAnagram(word, arr=[]){
    anagrams('', word);

    function anagrams(prefix, str){
    if(str.length <= 1){
        arr.push(prefix+str);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1);
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }
}
    return arr
}

const permPalindrome = x => {
    const str = x.toLowerCase();
    if (!hasTwo(str)) {
        return false
    }
    const ans = printAnagram(str)

    const pals = ans.filter(x => {
        return isPalindrome(x)
    })
    return `${x}'s palindromical anagrams are ${pals.join(', ')}`
}
