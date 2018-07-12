/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

class Human {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.sex = options.sex;
        this.heigth = options.heigth;
        this.weigth = options.weigth;
      }
}

class Worker extends Human {
    constructor(options){
        super(options);
        this.company = options.company;
        this.salary = options.salary;
        this.works = () => console.log("good work!");
    }
}

class Student extends Human {
    constructor(options){
        super(options);
        this.university = options.university;
        this.grants = options.grants;
        this.watchSerials = () => console.log("Greate serials!");
    }
}

let worker = new Worker({
    name: "nastya",
    age: 24,
    sex: "female",
    heigth: 175,
    weigth: 65,
    salary: 5000,
    company: "company name"
});

worker.works();

let student = new Student({
    name: "masha",
    age: 20,
    sex: "female",
    heigth: 170,
    weigth: 55,
    university: "DonNTU",
    grants: 500
});

student.watchSerials();

console.log(worker);
console.log(student);

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */
 
 /*тут я не доделала еще - доделаю обновлю*/

class DataBase {
    constructor(){
        this.interval = 0;
        this.query = function(){
            var counter = 5;
            
        }
        var interval = setInterval(() => {
            this.interval = interval;
            counter--;
            if (counter == 0){
                clearInterval(interval);
                console.log('The web server is down');
            }
        },1000)
    }
}

const dataBase = new DataBase();
dataBase.query();


// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')
