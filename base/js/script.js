// const currentYear = new Date().getFullYear()
// const birthyear = prompt('Quelle est votre année de naissance ?')
// let age = parseInt(currentYear - birthyear)

// if(age >= 13)
//     console.log('Lilo & Stitch');
// else if(age < 18)
//     console.log('Matrix')
// else
//     console.log('Evil Dead')

// const a = prompt('first number');
// const b = prompt('second number');
// const result = parseInt(a) *  parseInt(b)
// let sign = '';

// if(isNaN(result))
//     console.log('opération impossible : ' + a + 'x' + b)

// if(result > 0)
//     sign = 'positif'
// else if(result < 0)
//     sign = 'négatif'

// if(sign == '')
//     console.log(a + 'x' + b + ' = ' + result)
// else
//     console.log(a + 'x' + b + '=' + result + ' => ' + sign)

// const input = prompt('Indiquer un nombre en 0 et 10')

// if(isNaN(input))
//     console.log('input must be an integer')

// else if(input < 0 || input > 10)
//     console.log('input out of range')
// else
// {
//     for(let i = input; i >= 0; i--)
//         console.log(i)
// }



// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// const rand = getRandomInt(10)
// let input = prompt('chose a number between 0 and 10')

// while(input != rand)
// {
//     console.log(input + ' n\'est pas le résultat attendu')
//     input = input = prompt('chose a number between 0 and 10')
// }
// console.log('bravo ! ' + rand + ' était le résultat')


// function demo(name = 'John') {
//     return 'Hello '+ name +' !'
// }



// const a = {
//     prop: 42,
//     func: function() {
//         return this.prop;
//     },
// };

// console.log(a.func()) // '42'


// const hello = (name) => {
//     console.log(`Bonjour ${name}`)
// }

// const double = (n) => 2 * n

// console.log(double(2))



// const rand = Math.floor(Math.random() * 10)
// const isRight = (x) => x == rand
// console.log(rand)


// function guess() {
//     let input = prompt('Chose a number between 0 and 10')
//     if(isNaN(input))
//         return 'the number must be an integer'
//     else if(input < 0 || input > rand)
//         return 'number out of range'
//     return isRight(input)
// }

// for(let i = 0; i < 3; i++)
// {
//     if(guess()) {
//         console.log('bravo')
//         break
//     }
//     else
//         console.log('pas bon')
// }


// function isPremier(n)
// {
//     if(n == 0 || n == 1)
//         return false;

//     for(let i = n - 1; i > 1; i--)
//     {
//         if(n % i == 0)
//             return false;
//     }
//     return true;
// }


// console.log('0', isPremier(0)) // false
// console.log('1', isPremier(1)) // false
// console.log('2', isPremier(2)) // true
// console.log('3', isPremier(3)) // true
// console.log('11', isPremier(11)) // true
// console.log('12', isPremier(12)) // false



// function isPalindromAlgo(word)
// {
//     let splittedWord = word.split('');

//     let temp = [];
//     for(let i = 0; i < splittedWord.length; i++)
//         temp.unshift(splittedWord[i]);

//     let reverseWord = temp.join('');

//     return word.toLowerCase() == reverseWord.toLowerCase();
// }

// function isPalindrom(word)
// {
//     let reverseWord = word.split('').reverse().join('');
//     return word.toLowerCase() == reverseWord.toLowerCase();
// }


// console.log(isPalindromAlgo('kayak')) // true
// console.log(isPalindromAlgo('SOS')) // true
// console.log(isPalindromAlgo('Kayak')) // true
// console.log(isPalindromAlgo('Bonjour')) // false
// console.log(isPalindrom('kayak')) // true
// console.log(isPalindrom('SOS')) // true
// console.log(isPalindrom('Kayak')) // true
// console.log(isPalindrom('Bonjour')) // false




// const students = [
//     {
//         name: 'John',
//         notes: [1, 20, 18, 19, 12]
//     },
//     {
//         name: 'Jane',
//         notes: [17, 18, 20, 13, 15]
//     },
//     {
//         name: 'Sophie',
//         notes: [17, 12, 14, 15, 13]
//     },
//     {
//         name: 'Marc',
//         notes: [2, 3, 5, 8, 9]
//     },
//     {
//         name: 'Manon',
//         notes: [18, 17, 18, 19, 12]
//     }
// ];

// function average(notes)
// {
//     let sum = 0;
//     for(let note of notes)
//         sum += note;
//     return sum / notes.length;
// }

// const compare = (a, b) => {
//     return b.moyenne - a.moyenne;
// }

// for(let student of students)
// {
//     student.moyenne = average(student.notes);
//     student.worst = Math.min(...student.notes);
//     student.best = Math.max(...student.notes);
// }

// students.sort(compare);

// const formatStudent = (student) => {
//     return `${student.name} avec une moyenne de ${student.moyenne} ; meilleure note (${student.best}) ; pire note (${student.worst})`;
// }

// console.log(`Top 3 étudiant
// 1: ${formatStudent(students[0])}
// 2: ${formatStudent(students[1])}
// 3: ${formatStudent(students[2])}
// `);

// students.forEach(element => {
//     console.log(`${element.name} avec une moyenne de ${element.moyenne} ; meilleure note (${element.best}) ; pire note (${element.worst})`);
// });


const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`;

function wordCount(sentence)
{
    let array = regex(sentence).toLowerCase().split(' ');
    const object = {};
    for(word of array)
    {
        if(word in object == false)
            object[word] = 1;
        else
            object[word]++;
    }
    return object;
}

const regex = (sentence) => {
    // const regex = /[^a-zA-Z0-9 ]/;
    if(!isNaN(sentence))
        return false;
    return sentence.replaceAll(/[^a-zA-Z0-9éèêàâ’ ]/g, '');
};

function generateTopThree(sentence)
{
    let temp = wordCount(sentence);
    let sortable = [];

    for(var word in temp)
        sortable.push([word, temp[word]]);

    let sorted = sortable.sort(function(a, b) {
        return a[1] - b[1];
    }).reverse();

    let output = {};
    for(let i = 0; i < 3; i++)
        output[sorted[i][0]] = sorted[i][1]

    return output;
}

console.log(generateTopThree(phrase));