let LastName = prompt ('Вашa фамилия:');
let name = prompt ('Ваше имя:');
let SecondName = prompt ('Ваше отчество:');
let gender = prompt ('Укажите ваш пол:');
let year = prompt ('Укажите год своего рождения:');
let month = prompt ('Укажите месяц своего рождения:');

while (!year || isNaN(year)) {
    year = prompt ('Введите число');
}

if (year<100) {
    year = `19${year}`;
}

let age = 2020 - year;

while (!month || isNaN(month) || (month < 0 || month > 12)) {
    month = prompt ('Введите число');
}

if (month === 1) {
    month = (month + ' месяц');
    age = (age - 1);
} else if (month > 4) {
    month = 13 - month;
    month = (month + ' месяцев');
} else {
    month = 13 - month;
    month = (month + ' месяца');
}

let adult = 'совершеннолетний';
let not = 'не';
if (age<18) {
    adult = `${not}${adult}`;
} 

let child = confirm('У вас есть дети?') ? prompt('Сколько?:'):'нет';

alert (`
ваше ФИО: ${LastName} ${name} ${SecondName}
пол: ${gender}
вам ${age} лет и ${month}
вы ${adult}
у вас детей: ${child}
`)
