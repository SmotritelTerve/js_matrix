// Immediately-invoked Function Expression

// функции для создания локального скоупа и немедленного использования
// окружены круглыми скобками

let result = [];

for (var i = 0; i < 5; i++){
    result.push( function() {
        console.log(i);
    }
    )
}

result[2](); // => 5
result[4](); // => 5  потому что используем var

let result2 = [];

for (var i = 0; i < 5; i++){
        (function(){   // оборачиваем анонимную функцию
            var j =i;
            result2.push( function() {console.log(j)})
        })()
}

result2[2](); // => 2
result2[4](); // => 4