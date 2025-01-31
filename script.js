// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// до z. 
//? Верните новую отсортированную строку (в алфавитном порядке возрастания), 
// ?максимально длинную, содержащую различные буквы — каждая взята только один раз — из s1 или s2.

function longest(s1, s2) {
    const newStr = s1 + s2
    const newArr = newStr.split('')
    const resultArr = []
    for (let i = 0; i < newArr.length; i++ ) {
        if(!resultArr.includes(newArr[i])){
            resultArr.push(newArr[i])
        }
    }
    return resultArr.sort().join('')
  }

console.log(longest('qwwwe', 'rtyyyy'));
console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));