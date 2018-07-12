// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

function Human(options) {
  this.name = options.name;
  this.age = options.age;
  this.sex = options.sex;
  this.heigth = options.heigth;
  this.weigth = options.weigth;
}
  
function Worker(...options) {
  let obj = options.reduce(elem => elem);
  Human.apply(this, options);
  this.company = obj.company;
  this.salary = obj.salary;
  this.works = () => console.log("good work!");
}
  
function Student(...options) {
  let obj = options.reduce(elem => elem);
  Human.apply(this, options);
  this.university = options.university;
  this.grants = options.grants;
  this.watchSerials = () => console.log("Greate serials!");
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

let student = new Student({
  name: "masha",
  age: 20,
  sex: "female",
  heigth: 170,
  weigth: 55,
  university: "DonNTU",
  grants: 500
});

worker.works();

student.watchSerials();
  
console.log(worker);
console.log(student);

  
