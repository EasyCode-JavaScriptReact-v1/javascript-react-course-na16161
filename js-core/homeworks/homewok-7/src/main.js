/*
 * TASK 1
 * */

function add(x) {
  return function(y){
    return function(z){
      return x+y+z;
    }
  }
}

console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

/*
 * TASK 2
 *  */

function patternModule() {
  let i = 0;
  return {
      method: function(){
          return ++i;
      },
      setToZero: function(){
          i = 0;
          return 'reset';
      }
  }
}

// patternModule

let test = patternModule(); 
console.log(test.method()); 
console.log(test.setToZero());
console.log(test.method()); 
console.log(test.method());
console.log(test.method());
console.log(test.method());
console.log(test.setToZero());
console.log(test.method());
console.log(test.method());
console.log(test.method());


/*
 * TASK 3
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {
  let newObj = obj;
  newObj[name] = fn;
  newObj.count = num;
  
  return newObj;
}

methodCounter(jun, 'logger', 2, sumNumber);

}


console.log(jun.logger(1, 2, 3, 4)); // 2, 10
console.log(jun.logger(5, 5, 5, 5)); // 1, 20
console.log(jun.logger(5, 5)); // ERROR ! add more methods

console.log(jun.addCounter(10, methodName));
