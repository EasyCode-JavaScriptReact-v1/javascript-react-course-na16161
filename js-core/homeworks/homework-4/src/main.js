/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
* */

function typeOfParam(data) {
    if (typeof data === 'number' || typeof data === 'object') {
        return true;
    } else if (typeof data === 'function') {
        return false;
    }else if (typeof data === 'string'){
        return data.length!=10 ? `длина вашей строки: ${data.length}`:`you win`;
    }
}

const num = 1212;
const obj = {
    param1: 11,
    param2: 22
}
const func = function smthFunc(){};
const str = 'qwerty qwe';
const str2 = 'qwerty qwerty';

console.log(typeOfParam(num));
console.log(typeOfParam(obj));
console.log(typeOfParam(func));
console.log(typeOfParam(str));
console.log(typeOfParam(str2));

/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let arr = [];
	let i = 0;
	for(a; a <= b; a++){
		arr[i] = a;
		i++;
	}
	return arr;
}

console.log(numbersBetween(3, 5));
// 3, 4, 5

console.log(numbersBetween(10, 12));
// 10, 11, 12

/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(number) {
    let Fizz = "Fizz";
    let Buzz = "Buzz";

    if (number % 3 == 0 && number % 5 == 0){
        return Fizz+Buzz;
    }
    else if (number % 3 == 0){
        return Fizz;
    }       
    else if (number % 5 == 0){
        return  Buzz;
    }        
    else{
        return number;
    }        
}

// console.log(FizzBuzz(21));


function fizzBuzz100(number) {
    for(let i = number; i <= 100; i++){
        console.log(FizzBuzz(i));
    }
}

fizzBuzz100(77);

/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function elementsType(data){
    let arr = [];
    for(let i = 0; i < data.length; i++){
        arr[i] = typeof data[i];
    }
    return arr;
}

console.log(elementsType(arr));

/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({length: 35},
    (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);
  
  
function solution(arr) {
    for(let i = 0; i < arr.length; i++){
        let valueAge = arr[i];
        if(isNaN(valueAge.age)) {
            valueAge.unknownAge = true;
        }
    }
    return returnAgeArr(arr);
}

function returnAgeArr(arr) {
    let result = [];
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        let valueAge = arr[i];
        if(valueAge.unknownAge){
            result[count] = valueAge;
            count++;
        }
    }
    return result;
}

console.log(solution(array));
