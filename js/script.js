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





// function isPremier(n) {
//     if (n < 2) {
//         return false
//     }
//     // On parcours tous les nombres de n jusqu'à 2 dans la variable i
//     for (let i = n - 1; i > 1; i--) {
//         // On regarde si le nombre est divisible par i
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isPremier(12))



// const moyenne = (notes) => {
    // let sum = 0;
    // for(let note of notes)
    //     sum += note;

    // return sum / notes.length;
// }

// class Student
// {
//     ecole = 'Jules Ferry';
//     _notes = [];

//     constructor(firstname, name)
//     {
//         this._firstname = firstname;
//         this._name = name;
//     }

//     /**
//      * @param {string | any[]} value
//      */
//     set notes(value)
//     {
//         if(Array.isArray(value))
//             this._notes = value;
//     }

//     get name()
//     {
//         return this._firstname + ' ' + this._name;
//     }

//     notesAverage()
//     {
//         let sum = 0;
//         for(let note of this._notes)
//             sum += note;

//         return sum / this._notes.length;
//     }

//     canPass()
//     {
//         return this.notesAverage() >= 10;
//     }
// }

// class SuperStudent extends Student
// {

//     constructor(firstname, name, notes)
//     {
//         super(firstname, name);
//         this._notes = notes;
//     }

//     get notes()
//     {
//         return this._notes;
//     }

//     get name()
//     {
//         return 'Super ' + super.name;
//     }

//     canPass()
//     {
//         return super.canPass();
//     }
// }

// let john = new SuperStudent('John', 'Doe', [0, 10, 8]);
// let jane = new Student('Jane', 'Doe');

// jane.notes = [15, 18, 19];

// console.log(john, john.name);

// console.log(john.canPass(), jane.canPass());

// class Rectangle // 2*h + 2*L
// {

//     constructor(height, width)
//     {
//         if(height <= 0 || width <= 0)
//             throw Error('La hauteur et la largeur doivent être strictement supérieur à 0');

//         this.height = height;
//         this.width = width;
//     }

//     get perimeter()
//     {
//         return 2 * this.height + 2 * this.width;
//     }

//     isBiggerThan(rectangle)
//     {
//         return this.perimeter > rectangle.perimeter;
//     }
// }

// class Square extends Rectangle
// {

//     constructor(width)
//     {
//         if(width <= 0)
//             throw Error('Le côté d\'un carré doit être stricrement supérieur à 0.');

//         super(width, width);
//     }
// }

// let rectangle = new Rectangle(10, 20);
// let square = new Square(10);

// console.log(
//     rectangle.perimeter,
//     square.perimeter,
//     rectangle.isBiggerThan(square)
// );

class Book
{

    currentPage = 1;

    constructor(name, numberPages)
    {
        if(numberPages <= 0)
            throw Error('Le livre doit contenir au moins 1 page.');

        if(name.length < 0)
            throw Error('Le titre du livre doit contenir au moins caractère.');

        this.name = name;
        this.numberPages = numberPages;
    }

    get page()
    {
        return this.currentPage;
    }

    nextPage()
    {
        this.currentPage++;
    }

    close()
    {
        this.currentPage = 1;
    }
}

class Library
{

}