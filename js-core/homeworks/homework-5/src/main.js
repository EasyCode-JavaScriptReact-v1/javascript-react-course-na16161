/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
  'a',
  0,
  0,
  'b',
  null,
  'c',
  'd',
  0,
  1,
  false,
  0,
  1,
  0,
  3,
  [],
  0,
  1,
  9,
  0,
  0,
  {},
  0,
  0,
  9
];


function moveZeroToEnd(arr) {
  const newArr1 = [];
  const newArr2 = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if ( element === 0){
      newArr1.push(0);
      continue
    }
    newArr2.push(element);
  }
  return newArr2.concat(newArr1);
}

console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */

let numberSum1 = [10,20,30,1,31,11,10]; 
let numberSum2 = [-1,0,25];
let numberSum3 = [-4,-10,25,10];
let numberSum4 = [0,200,10,25,15];

function minimalNumber(arr) {
    const sortArr = arr.sort(function(a, b){
      return a > b;
    })
    return(sortArr[0] + sortArr[1]);
}

console.log(minimalNumber(numberSum1));
console.log(minimalNumber(numberSum2));
console.log(minimalNumber(numberSum3));
console.log(minimalNumber(numberSum4));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

function nameShuffler(str) {
    let name = str.split(' ').reverse().join(' ');
    console.log(name);
}

nameShuffler('john McClane');
nameShuffler('Arnold Schwarzenegger');
nameShuffler('James Bond');


/*4. Напишите функцию которая принимает массив с именами и возвращает массив
в котором каждая буква становится заглавной
capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

function capMe(arr) {
  const upperCaseArr = [];
    for (let i = 0; i < arr.length; i++) {
      const elemLowerCase = arr[i].toLowerCase();
      const firstLatter = elemLowerCase[0].toUpperCase();
      const newName = firstLatter + elemLowerCase.slice(1);
      upperCaseArr.push(newName);
    }
    return upperCaseArr;
}

console.log(capMe(['jo', 'nelson', 'jurie']));
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));

// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

// function random(arr) {
//     let 
// }

// random([1, 3, 5, 9]);
// random([0, 8, 16, 32]);
// random([0, 16, 24, 32]);
// random([4, 6, 8, 10]);

/*
 Задача с собеседований*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 example:
  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 */

// function openBraces(arr) {
	
// }

// console.log(openBraces([[1,2],[3,[4]],5, 10]));
// console.log(openBraces([25,10,[10,[15]]]));
