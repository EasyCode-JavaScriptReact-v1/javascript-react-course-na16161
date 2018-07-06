/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь +
 - Верифицированный пользователь(админ) +
 - Гость +
 - База данных +
 - База хранит информацию о пользователях +
 - Пользователи знают мыло админа +
 - админ знает пароль от базы данных +
 - Гости могут зарегистрироваться в базе данных
 *
 * */

 let user = {
     name: 'Nastya',
     mail: 'mail@gmail.com',
     pass: '112233'
 }

 let admin = {
     mailAdmin: 'adminmail@gmail.com',
 }

 let guest = {

 }

 let db = {
     __proto__: user,
     passDb: 'qwerty',
 }

admin.__proto__.passDb = db.passDb;
user.__proto__.mailAdmin = admin.mailAdmin;

 console.log('пользователь:', user);
 console.log('админ:', admin);
 console.log('гость:', guest);
 console.log('база:', db);
