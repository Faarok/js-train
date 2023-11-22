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





function isPremier(n) {
    if (n < 2) {
        return false
    }
    // On parcours tous les nombres de n jusqu'à 2 dans la variable i
    for (let i = n - 1; i > 1; i--) {
        // On regarde si le nombre est divisible par i
        if (n % i === 0) {
            return false
        }
    }
    return true
}

console.log(isPremier(12))