//2 лаб-ая
console.log('%c2 лабораторная работа', 'font-size: 15px; font-weight: bold; color: red; text-decoration: underline');
//2 lab 1 zad.
let Cherry = 'Cherry';
let Apple = 'Apple';
let Limon = 'Limon';
let Cherrynum: number = 60;
let Applenum:  number = 50;
let Limonnum: number  = 30;
let summ: number = 0;

console.log('%cНаименование \tСтоимость шт. \t   Количество \t   Итого', 'font-size: 15px; font-weight: bold; color: blue');
console.log(Apple,"\t\t\t\t\t",Applenum,"\t\t\t\t\t", 3, "\t\t\t\t", Applenum*3);
console.log(Cherry,"\t\t\t\t\t",Cherrynum,"\t\t\t\t\t",5, "\t\t\t\t", Cherrynum*5);
console.log(Limon,"\t\t\t\t\t",Limonnum,"\t\t\t\t\t",6, "\t\t\t\t", Limonnum*6);
summ = (Applenum*3) + (Cherrynum*5) + (Limonnum*6);
console.log("Сумма товаров:", summ);
//2 lab, 2 zad.
let Array1: [string, number] = ['Skoda', 4500100];
console.log(Array1[0],Array1[1]);
//2 lab, 3 zad.
let Array2: number[] = [5, 10, 15, 25];
let buf: number = 0;
let arrres: number = 0;
console.log('Массив:\n');
function disp(arr_names: number[]) {
    for(let i = 0; i<arr_names.length; i++) {
        buf += arr_names[i];
        console.log(arr_names[i]);
    }
return buf/arr_names.length;
}

function wakrn(message: string): string {
    console.warn(message);
}
wakrn("jgug");

console.log('Среднее арифметическое элементов массива:\n',disp(Array2));//вывод значения вызова функции, т.е. среднее значение массива, переданного в качестве аргумента

//3 лаб-ая
console.log('%c3 лабораторная работа', 'font-size: 15px; font-weight: bold; color: red; text-decoration: underline');
//3 lab 1 zad.
let car: {bodywork: string, box: string, drive: string, wheel: string, color: string} = {
    bodywork: 'Внедорожник',
    box: 'АКПП',
    drive: 'Полный',
    wheel: 'Левый',
    color: 'Красный',
};
console.log('%cПараметры автомобиля', 'font-size: 15px; font-weight: bold; color: green');
console.log("Кузов: "+car.bodywork);
console.log("Коробка передач: "+car.box);
console.log("Привод: "+car.drive);
console.log("Руль: "+car.wheel);
console.log("Цвет: "+car.color);

//3 lab 2 zad.
let arr: string[];
let welcome: {words: string[]} = {
    words: arr = ["Привет, ", "мир", "!"]
};
    console.log(welcome.words[0] + welcome.words[1] + welcome.words[2]);

//3 lab 3 zad.
enum numbers {
    one = 13,
    two,
    three,
    four,
    five,
    six = 98,
    seven,
    eight,
    nine,
    ten
}

const output_digits1: numbers = numbers.one; console.log(output_digits1);
const output_digits2: numbers = numbers.two; console.log(output_digits2);
const output_digits3: numbers = numbers.three; console.log(output_digits3);
const output_digits4: numbers = numbers.four; console.log(output_digits4);
const output_digits5: numbers = numbers.five; console.log(output_digits5);
const output_digits6: numbers = numbers.six; console.log(output_digits6);
const output_digits7: numbers = numbers.seven; console.log(output_digits7);
const output_digits8: numbers = numbers.eight; console.log(output_digits8);
const output_digits9: numbers = numbers.nine; console.log(output_digits9);
const output_digits10: numbers = numbers.ten; console.log(output_digits10);


let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName}    Возраст: ${age}`;
console.log(info);  // Имя Tom    Возраст: 28



let sentence: string = `Hello World!
Goob bye World!`;



let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);

let names: Array<string> = ["Tom", "Bob", "Alice"];
console.log(names[1]);  // Bob







function fail(message: string): never {
    throw new Error(message);
}



fail("85986950590505");










// определение кортежа - кортеж состоит из двух элементов - строки и числа
let userInfo: [string, number];
// инициализация кортежа
userInfo = ["Tom", 28];
// Неправильная инициализация - переданные значения не соответствуют типам по позиции
//userInfo = [28, "Tom"]; // Ошибка

// использование кортежа
console.log(userInfo[1]); // 28
userInfo[1] = 37;