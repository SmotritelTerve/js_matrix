console.log(1 + '2'); // => строка "12", JS приводит число 1 к строке "1" и потом конкатинирует
console.log('' + 1 + 0); // => строка "10"
console.log('' - 1 + 0); // => -1, потому что для строк не определен оператор минус, вот и считает интерпретатор, что это числа
console.log('3' * '8'); // => 24, в JS для строк нет оператора умножения, вот и приводит всё к числам
// порядок очень важен
console.log(4 + 10 + 'px'); // => 14px
console.log('px' + 4 + 10); // => px410
console.log('42' - 40); // => 2
console.log('42px' - 2); // => NaN
console.log(null + 2); // => 2 , потому что null при приведении к числу становится равен 0
console.log(underfined + 2); // => NaN