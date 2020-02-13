const user = {
    name: 'qwe',
    age: 123,
}

function info(secondName) {
    console.log(`name: ${this.name}; age: ${this.age}; second name: ${secondName}`);
}

function myBind(func, context){
    return function (...args){
        func.apply(context, args);
    }
}

myBind(info, user)('asd');