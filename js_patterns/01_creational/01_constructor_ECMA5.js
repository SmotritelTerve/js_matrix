// наиболее часто встречаемый в JS паттерн
// позволяет создавать объекты определенного типа
// ECMA5
// ниже название функции с большой буквы,
// потому что хотим это иметь как класс
// это у нас конструктор

function Server(name, ip ){  
    this.name = name;
    this.ip = ip;
}

// расширяем функциональность этого класса
// раньше обращались к прототипу

Server.prototype.getUrl = function(){
    return `https://${this.ip}:80`;
}

// создаем инстанс данного класса

const aws = new Server('AWS German', '82.21.21.32');

console.log(aws.getUrl());