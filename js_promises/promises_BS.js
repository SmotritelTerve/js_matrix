// промисы позволяют обрабатывать отложенные во времени события
// асинхронность  - например, посылаем запрос к серверу, но ответ получаем ене сразу, а через некоторое время
// промис - это обещание предоставить результат позже
// промис может вернуть ошибку если результат предоставить невозможно
// состояния промиса: ожидание (когда только создается), исполнен (когда вернул какой то результат), отклонен (если возникла какая то ошибка)
// промис в JS это объект
// создание промиса

const myPromise = new Promise((resolve, reject) => {
    /**
     * выполнение асинхронных действий
     * 
     * внутри этой функции нужно в результате вызвать одну из функций resolve или reject
     */
});

// получение результата промиса

myPromise
    .then(value =>{
        /**
         * Действие в случае успешного исполнения Промиса
         * Значение value - это значение, переданное в вызове функции resolve внутри Промиса
         *  
    * */})
    .catch(error => {
        /**
         * Действие в случае отклонения Промиса
         * Значение error - это значение, переданное в вызове функции reject внутри Промиса
         */
    })