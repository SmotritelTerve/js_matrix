// область видимости - по сути доступность переменных в функциях
// global scope - переменные объявлены вне функции, но доступны внутри функций в этом scope
// например, в браузере объекты document и window относятся к global scope
// local scope - переменная доступна только внутри функции или вложенных в неё функциях

function funcA(){
    let a = 1;

    function funcB(){
        let b = 2;

        function funcC(){
            let c = 3;

            console.log('funcC: ', a, b, c);
        }
        funcC();
        console.log('funcB: ', a, b);
    }
    funcB();
    console.log('funcA: ', a);
}

funcA();
