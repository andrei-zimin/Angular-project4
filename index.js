"use strict";
//2 лаб-ая
console.log('%c2 лабораторная работа', 'font-size: 15px; font-weight: bold; color: red; text-decoration: underline');
//2 lab 1 zad.
var Cherry = 'Cherry';
var Apple = 'Apple';
var Limon = 'Limon';
var Cherrynum = 60;
var Applenum = 50;
var Limonnum = 30;
var summ = 0;
console.log('%cНаименование \tСтоимость шт. \t   Количество \t   Итого', 'font-size: 15px; font-weight: bold; color: blue');
console.log(Apple, "\t\t\t\t\t", Applenum, "\t\t\t\t\t", 3, "\t\t\t\t", Applenum * 3);
console.log(Cherry, "\t\t\t\t\t", Cherrynum, "\t\t\t\t\t", 5, "\t\t\t\t", Cherrynum * 5);
console.log(Limon, "\t\t\t\t\t", Limonnum, "\t\t\t\t\t", 6, "\t\t\t\t", Limonnum * 6);
summ = (Applenum * 3) + (Cherrynum * 5) + (Limonnum * 6);
console.log("Сумма товаров:", summ);
//2 lab, 2 zad.
var Array1 = ['Skoda', 4500100];
console.log(Array1[0], Array1[1]);
//2 lab, 3 zad.
var Array2 = [5, 10, 15, 25];
var buf = 0;
var arrres = 0;
console.log('Массив:\n');
function disp(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        buf += arr_names[i];
        console.log(arr_names[i]);
    }
    return buf / arr_names.length;
}
function wakrn(message) {
    console.warn(message);
}
wakrn("jgug");
console.log('Среднее арифметическое элементов массива:\n', disp(Array2)); //вывод значения вызова функции, т.е. среднее значение массива, переданного в качестве аргумента
//3 лаб-ая
console.log('%c3 лабораторная работа', 'font-size: 15px; font-weight: bold; color: red; text-decoration: underline');
//3 lab 1 zad.
var car = {
    bodywork: 'Внедорожник',
    box: 'АКПП',
    drive: 'Полный',
    wheel: 'Левый',
    color: 'Красный',
};
console.log('%cПараметры автомобиля', 'font-size: 15px; font-weight: bold; color: green');
console.log("Кузов: " + car.bodywork);
console.log("Коробка передач: " + car.box);
console.log("Привод: " + car.drive);
console.log("Руль: " + car.wheel);
console.log("Цвет: " + car.color);
//3 lab 2 zad.
var arr;
var welcome = {
    words: arr = ["Привет, ", "мир", "!"]
};
console.log(welcome.words[0] + welcome.words[1] + welcome.words[2]);
//3 lab 3 zad.
var numbers;
(function (numbers) {
    numbers[numbers["one"] = 13] = "one";
    numbers[numbers["two"] = 14] = "two";
    numbers[numbers["three"] = 15] = "three";
    numbers[numbers["four"] = 16] = "four";
    numbers[numbers["five"] = 17] = "five";
    numbers[numbers["six"] = 98] = "six";
    numbers[numbers["seven"] = 99] = "seven";
    numbers[numbers["eight"] = 100] = "eight";
    numbers[numbers["nine"] = 101] = "nine";
    numbers[numbers["ten"] = 102] = "ten";
})(numbers || (numbers = {}));
var output_digits1 = numbers.one;
console.log(output_digits1);
var output_digits2 = numbers.two;
console.log(output_digits2);
var output_digits3 = numbers.three;
console.log(output_digits3);
var output_digits4 = numbers.four;
console.log(output_digits4);
var output_digits5 = numbers.five;
console.log(output_digits5);
var output_digits6 = numbers.six;
console.log(output_digits6);
var output_digits7 = numbers.seven;
console.log(output_digits7);
var output_digits8 = numbers.eight;
console.log(output_digits8);
var output_digits9 = numbers.nine;
console.log(output_digits9);
var output_digits10 = numbers.ten;
console.log(output_digits10);
var firstName = "Tom";
var age = 28;
var info = "\u0418\u043C\u044F " + firstName + "    \u0412\u043E\u0437\u0440\u0430\u0441\u0442: " + age;
console.log(info); // Имя Tom    Возраст: 28
var sentence = "Hello World!\nGoob bye World!";
var list = [10, 20, 30];
var colors = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
var names = ["Tom", "Bob", "Alice"];
console.log(names[1]); // Bob
function fail(message) {
    throw new Error(message);
}
fail("85986950590505");
// определение кортежа - кортеж состоит из двух элементов - строки и числа
var userInfo;
// инициализация кортежа
userInfo = ["Tom", 28];
// Неправильная инициализация - переданные значения не соответствуют типам по позиции
//userInfo = [28, "Tom"]; // Ошибка
// использование кортежа
console.log(userInfo[1]); // 28
userInfo[1] = 37;
