/*
 *
 * TASK 1
 *
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 *
 *
 * */

function solution1(someString) {
  let str = '';
  return function(val){
    return str += `${val} `;
  }
}
  
  let stringBuffer = solution1();
  
  console.log(stringBuffer('Замыкания')); // Замыкания
  console.log(stringBuffer('Использовать нужно')); // Замыкания Использовать нужно
  console.log(stringBuffer('Привет')); // Замыкания Использовать нужно Привет вызываем много раз
  
  /*
 *
 * TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 *
 * */

function validBraces(str) {
  let brackets = []
}

console.log(validBraces('(){}[]')); // => returns true
console.log(validBraces('(}')); // => returns false
console.log(validBraces('[(])')); // => returns false
console.log(validBraces('([{}])')); // => returns true
console.log(validBraces('({[]})')); // => returns true

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */

function sum(num) {

}

sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэш

sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша
