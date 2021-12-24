

//-------------------------ЭЛЕМЕНТАРНОЕ СЛОЖЕНИЕ-------------------------//


// let count = 9

// function increment(){
//     return count = count +1
//     }

// console.log(increment())


//-------------------------ЭЛЕМЕНТАРНОЕ СОЧЕТАНИЕ БУКВ-------------------------//


// const name = 'Doug'

// function sendText() {
//     console.log('Hey ' + name + ' you left your bag at my house!')
// }

// sendText()


//-------------------------ЭЛЕМЕНТАРНЫЕ АРИФМИТИЧЕСКИЕ ОПЕРАТОРЫ-------------------------//


// Arithmetic Operators


//-------------------------ОСТАТОК-------------------------//


// Modulus
// console.log(20 % 4)


//-------------------------СЛОЖЕНИЕ-------------------------//


// Increment
// let count = 4

// count++

// console.log(count)


//-------------------------ВЫЧИТАНИЕ-------------------------//


// Decrement
// let count = 4

// count--

// console.log(count)


//-------------------------ВЫВОД ПЕРЕМЕННОЙ-------------------------//


// Unary Negation
// let x = 4

// console.log(x)


//-------------------------ВЫВОД СОЧЕТАНИЯ-------------------------//


// Unary Plus
// let y ='4'

// console.log(y)


//-------------------------КВАДРАТ ЧИСЛА-------------------------//


// Expotential Operator
// let z = 4

// console.log(z ** 2)




// !!!! ASSIGNMENT OPERATORS !!!! //
// let x = 6

// Assignment
// x = 4

// Addition assignment x = x + y
// x += 5

// Substraction assignment x = x - y
// x -= 5

// Multiplication assignment x = x * y
// x *= 5

// Division assignment x = x / y
// x /= 3

// Remainder assignment x = x % y
// x %=5

// Exponentiation assignment x = x ** y
// x **= 2




// !!!! COMPARISON OPERATORS !!!! //
// let x = 20
// Equal
// console.log(x == 20)


// Not Equal
// console.log(x != 2)


// Deeply Equal
// console.log(x === 20)


// Strict not Equal
// console.log(x !== 2)


// Greater than
// console.log(x > 2)


// Greater or equal
// console.log(x >= 20)


// Less than
// console.log(x < 20)


// Less than or equal
// console.log(x <= 20)


//-------------------------LOGICAL OPERATORS-------------------------//
// const fruit = ['apple', 'banana', 'grape']


// AND
// if (fruit.includes('apple') && fruit.includes('banana')) {
//     console.log('both fruits exist')
// }

// OR
// if (fruit.includes('coconut') || fruit.includes('apple')) {
//     console.log('atleast one fruit exist')
// }

// NOT
// if (!fruit.includes('cherry')) {
//     console.log('cherry is missing')
// }

// [] - Array, скобки ставятся в том случае, если будет перечисление


//-------------------------TERNARY OPERATORS-------------------------//


// let isGameOver = false

// if (isGameOver == true) {
//     console.log('Sorry, you are not the winner')
// } else {
//     console.log('Carry on playing')
// }

// isGameOver ? console.log('Sorry, you are not the winner') : console.log('Carry on playing')


// let num = 3

// if (num % 15 === 0){
//     console.log('fizz buzz')
// } else if (num % 5 === 0){
//     console.log('buzz')
// } else if (num % 3 === 0){
//     console.log('fizz')
// } else {
//     console.log(num)
// }


//-------------------------LOOPS-------------------------//


// for(let i = 0; i < 10; i++) {
//     //code
//     if (i === 0) {
//         console.log(i + 1 + ' beer on the wall')
//     } else {
//     console.log(i + 1 + ' beers on the wall')
//     }
// }


// for(let num = 0; num < 100; num++){
//     if ((num + 1) % 15 === 0){
//         console.log('fizz buzz')
//     } else if ((num + 1) % 5 === 0){
//         console.log('buzz')
//     } else if ((num + 1) % 3 === 0){
//         console.log('fizz')
//     } else {
//         console.log(num + 1)
//     }
// }


//-------------------------ARRAYS-------------------------//

// let books = ['Moby Dick', 'Life of Pi', 'Sapiens']

// let count = [1,2,3,4]

// let passResults = [false, true, true, false]

// let books = ['Moby Dick', 'Life of Pi', 'Sapiens']

// console.log(books.length)

// console.log(books[0])

// let books = ['Moby Dick', 'Life of Pi', 'Sapiens', 'The Hungry Caterpillar', 'New Earth', 'Dicktionary']

// for (let i = 0; i < books.length; i++) {
//     if (books[i] === 'Sapiens') {
//         console.log(true)
//     }
// }

// let books = ['Moby Dick', 'Life of Pi', 'Sapiens', 'The Hungry Caterpillar',  'Sapiens','New Earth', 'Dicktionary', 'Sapiens']

// let count = 0
// for (let i = 0; i < books.length; i++) {
//     console.log(books[i])
//     if (books[i] === 'Sapiens') {
//         count = count + 1
//         console.log(count)
//     }
// }


//-------------------------OBJECTS-------------------------//

// const user = {
//     name: 'Dmitriy',
//     lastName: 'Tultsev',
//     pets: true
// }

// console.log(user.name)
// console.log(user.pets)


//-------------------------OBJECTS IN ARRAYS-------------------------//

// const users = [
//     {
//         username: 'Pawtik',
//         followers: 34,
//         is_followed: false
//     },
//     {
//         username: 'Gish',
//         followers: 133,
//         is_followed: true
//     },
//     {
//         username: 'Slavin',
//         followers: 234421,
//         is_followed: true
//     }
// ]

// console.log(users[0].username)


// for (let i = 0; i < users.length; i++) {
//     if (users[i].is_followed === true) {
//         console.log('Hi, ' + users[i].username + ' sucka sucka')
//     }
// }
// let name = 'Dumb'

// function sendText() {
//     console.log('Hey '+ name + ', you lost your shit')
// }

// sendText()


// function sendText(name, time) {
//     console.log('Hey '+ name + ', you lost your shit ' + time + ' times')
// }

// sendText('Slavin', 2)
// sendText('Pawtic', 10)
// sendText('Carpet', 99)
// sendText('Gish', -15)


// function sendReminder(name, time) {
//     console.log('Hey, bitchy ' + name + ' you have a meeting at ' + time + ' oclock')
// }

// sendReminder('Slavin', 12)
// sendReminder('Gish', 11)
// sendReminder('Pawtik', 23)
// sendReminder('Carpet', 05)



//-------------------------MOVING BOB-------------------------//
// const bob = document.querySelector('.face')
// let count = 0

// function moveBob(){
//     count += 50 
//     console.log(count)
//     bob.style.left = count + 'px'
// }

// bob.addEventListener('click', moveBob)


//-------------------------WHILE LOOP-------------------------//

// let i = 0

// while (i<11) {
//     console.log(i + ' Beers on the wall')
//     i++
// }


//-------------------------LENGTH-------------------------//

// const word = 'Hi there'
// console.log(word.length)

//------------------------- CONCAT-------------------------//
//doesn't change the existing arrays
// it returns a NEW array


// const string = 'Hi there'
// const string2 = ' noob'
// console.log(string.concat(string2))

// const array = [1,2,3]
// const array2 = [4,5,6]
// const array3 = [7,8,9]

// const Newarray = array.concat(array2, array3)

// console.log(Newarray)


//------------------------- JOIN-------------------------//
// returns a NEW String


// const textDisplay = document.querySelector('.text')

// const emotions = ['Happy', 'Sad', 'Confident']
// const newWord = emotions.join('-')

// textDisplay.innerHTML = newWord


//------------------------- POP-------------------------//
//changes the length of the array

//ARRAYS//
// const textDisplay = document.querySelector('.display')

// const movies = ['Argo', ' Aliens', ' Fear']

// console.log(movies)

// movies.pop()

// textDisplay.innerHTML = movies

//POP WITH OBJECTS

// const textDisplay = document.querySelector('.display')

// const movies = [
//     {
//         name: 'Argo',
//         length: '136'

//     },
//     {
//         name: 'Aliens',
//         length: '201'

//     },
//     {
//         name: 'Fear',
//         length: '124'

//     }
// ]

// console.log(movies)

// movies.pop()

// console.log(movies)

// textDisplay.innerHTML = movies


//-------------------------SHIFT-------------------------//
//changes the length of the array


// const textDisplay = document.querySelector('.display')

// const movies = ['Clue', 'Wolf', 'Jumanji']

// movies.shift()

// textDisplay.innerHTML = movies


//-------------------------UNSHIFT-------------------------//
//this will change the array

// const textDisplay = document.querySelector('.display')

// const plays = [' Hamilton']

// plays.unshift('Lock ', ' Jacks')

// textDisplay.innerHTML = plays
// console.log(plays)


//-------------------------PUSH-------------------------//
//Аналог аншифт с добавлением контента в конце списка!!!!//
//this will change the array

// const textDisplay = document.querySelector('.display')

// const plays = ['Hamilton']

// plays.push(' Adder')

// textDisplay.innerHTML = plays


//-------------------------SLICE-------------------------//
// does not change the array
// вытаскивает контент из строки

// const display = document.querySelector('.display')

// const singers = ['Shakira', 'Snoop', 'Sia', 'Beyonce', 'Swift']

// const notSSingers = singers.slice(3)

// const maleArtists = singers.slice(1,2)
// console.log(maleArtists)
 
// display.innerHTML = notSSingers

//-------------------------SPLICE-------------------------//
//заменяет контент либо просто убирает контент из строки

// const display = document.querySelector('.display')

// const movies = ['Elf', 'Annie','Hero']

// movies.splice(2,0, 'Hook' )

// display.innerHTML = movies


//-------------------------FOR EACH-------------------------//

// circles = document.querySelectorAll('.circle')

// circles.forEach(circle => circle.style.backgroundColor = 'red')

// const names = ['Ania','Bobby','Melanie']

// names.forEach(name => console.log(name))

// const scores = [32, 543, 43, 43, 22, 22, 44, 22]

// scores.forEach(i => {

//     console.log(i + 2)
//     }
// )

// const sentence = 'Common baby light my fire'

// const noob = sentence.split(' ')

// console.log(noob[0])

//-------------------------ARRAY WORK-------------------------//
//MAP

// const fahrenheit = [23, 140, 212, 41]
// let celciusArray

// function getCelcius() {
//     celciusArray = fahrenheit.map( i => (i - 32) * 5 / 9 )
// }

// getCelcius()
// console.log(celciusArray)

// const fahrenheit = [23, 140, 212, 41]

// function getCelcius() {
//     return fahrenheit.map(value => (value - 32) * 5 / 9)
// }
// console.log(getCelcius())



//SOME

// const array = [11, [], 'Angels', NaN]

// function checkForFalsey() {
//     return array.some(value => !value) 
// }
// console.log(checkForFalsey())



//REDUCE

// const array = ['Rabbit', 'Football', 'Cracking']

// function getTotal() {
//     return array.reduce((x,y) => x + y)
// }
// console.log(getTotal().length)

//SECOND VERSION

// const array = ['Rabbit', 'Football', 'Cracking']

// function getTotal() {
//     return array.reduce((x,y) => x + y.length, 0)
// }
// console.log(getTotal())


 
//EVERY

//   const numbers = [9, 16, 81, 64]
  
//   function checkSquares() {
//       return numbers.every(number => Math.sqrt(number) % 1 === 0)
//   }
//   console.log(checkSquares())



//FILTER

// const wordsArray = ['Florida', 'dog', 'phone']

// function getWords() {
//     return wordsArray.filter(word => word.length >=5)
// }
// console.log(getWords())
  


//MAP parse.Float

// function getValues(array) { 
//     return array.map(value => parseFloat(value))
// }
// console.log(getValues(['34cm', '45cm', '1.2cm']))



//SPLIT FILTER

// const vowels = ['a','e','u','i','o','A','E','U','I','O']

// function getVowelCount(x) {
//     return x.split('').filter(letter => vowels.includes(letter)).length
// }
// console.log(getVowelCount('In West Philadelphia, born and raised'))



//SPLIT, MAP, JOIN


// function captialise(title) {
//     return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
// }
 
// console.log(captialise('keep your mouth shut'))
 
// target.addEventListener(event, function)
 
// const hexagon = document.getElementById('hexagon')
// function AlertMe() {
//     console.log("clicked")
// }


//ADD EVENT LISTENER

// hexagon.addEventListener('mouseover', AlertMe)


// TOGGLE COLOR

// const hexagon = document.querySelector('.hexagon')
// let count = 0

// function toggleColor() {
//     hexagon.classList.toggle('red-hexagon')
//     count++
//     console.log(count)
//     if (count > 10) {
//         hexagon.removeEventListener('click', toggleColor)
//     }
// }
// hexagon.addEventListener('click', toggleColor)


// MOVING CIRCLE

// const circle = document.querySelector('.circle')
// let count = 200

// function moveCircle() {
//     count += 50
//     console.log(count)
//     circle.style.top = count +'px'
//     if (count > 500) {
//         circle.removeEventListener('click', moveCircle)
//     }
// }
// circle.addEventListener('click', moveCircle)


// САМ ТЕСТИЛ ЧТОБЫ ПРИ НАЖАТИИ ВЫДАВАЛО РАНДОМ ОТ 0 ДО 100

// const circle = document.querySelector('.circle')
// function clickCircle() {
//    console.log(Math.floor(Math.random() * 101))
// }
// circle.addEventListener('click', clickCircle)

// const Tet = [1, 2, 3, 4, 5, 6]
// let x = Math.floor(Math.random() * Tet.length)
// console.log(Tet[x])

// const drinksMenu = ['Vodka Tonic','White Wine','Beer','Mocktail']

// const gift = Math.floor(Math.random() * drinksMenu.length)

// console.log(drinksMenu[gift])

// console.log(drinksMenu[Math.floor(Math.random() * drinksMenu.length)])

// function doIt(param) {
//     param = 2
// }

// var test = 2
// doIt(test)
// console.log(test)


const display = document.querySelector('.display')

const race = ["Гном", "Эльф", "Человек", "Ящер"]
let x = Math.floor(Math.random() * race.length)
console.log(race[x])

const clas = ["Метаморф", "Следопыт", "Вор", "Клинок тени", "Странник", "Чернокнижник", "Волшебник", "Боевой маг", "Жрец", "Призыватель", "Заклинатель", "Боец", "Инквизитор", "Рыцарь"]
let y = Math.floor(Math.random() * clas.length)
console.log(clas[y])

const mustHave = ["Телекинез", "Знание легенд", "Обмен", "Убеждение"]
let z = Math.floor(Math.random() * mustHave.length)
console.log(mustHave[z])

const result = [race[x],clas[y],mustHave[z]]

console.log(mustHave)
console.log(z)

// display.innerHTML = [x, y, z]

display.innerHTML = result

clas.splice(y, 1)
mustHave.splice(z, 1)
console.log(mustHave)


const display2 = document.querySelector('.display2')


let e = Math.floor(Math.random() * race.length)
console.log(race[e])

let w = Math.floor(Math.random() * clas.length)
console.log(clas[w])

let q = Math.floor(Math.random() * mustHave.length)
console.log(mustHave[q])

const result2 = [race[e],clas[w],mustHave[q]]

display2.innerHTML = result2
console.log(mustHave)
console.log(q)
clas.splice(w, 1)
mustHave.splice(q, 1)
console.log(mustHave)

const display3 = document.querySelector('.display3')


let u = Math.floor(Math.random() * race.length)
console.log(race[u])

let i = Math.floor(Math.random() * clas.length)
console.log(clas[i])

let o = Math.floor(Math.random() * mustHave.length)
console.log(mustHave[o])

const result3 = [race[u],clas[i],mustHave[o]]

display3.innerHTML = result3
console.log(mustHave)
clas.splice(i, 1)
mustHave.splice(o, 1)
console.log(mustHave)

const display4 = document.querySelector('.display4')


let b = Math.floor(Math.random() * race.length)
console.log(race[b])

let n = Math.floor(Math.random() * clas.length)
console.log(clas[n])

let m = Math.floor(Math.random() * mustHave.length)
console.log(mustHave[m])

const result4 = [race[b],clas[n],mustHave[m]]

display4.innerHTML = result4
console.log(mustHave)
clas.splice(n, 1)
mustHave.splice(m, 1)
console.log(mustHave)

const pla = document.querySelector('.top')
const player = ["Гиш","Паштик","Тарас","Ковёр"]

let player1 = Math.floor(Math.random() * player.length)
pla.innerHTML = player[player1]
player.splice(player1, 1)

const ple = document.querySelector('.top2')

let player2 = Math.floor(Math.random() * player.length)
ple.innerHTML = player[player2]
player.splice(player2, 1)

const plo = document.querySelector('.top3')

let player3 = Math.floor(Math.random() * player.length)
plo.innerHTML = player[player3]
player.splice(player3, 1)

const pli = document.querySelector('.top4')

let player4 = Math.floor(Math.random() * player.length)
pli.innerHTML = player[player4]
player.splice(player4, 1)





// const display = document.querySelector('.display')

// const singers = ['Shakira', 'Snoop', 'Sia', 'Beyonce', 'Swift']

// const notSSingers = singers.slice(3)

// const maleArtists = singers.slice(1,2)
// console.log(maleArtists)
 
// display.innerHTML = notSSingers

