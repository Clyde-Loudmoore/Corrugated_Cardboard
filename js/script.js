let user = {
    name: 'Иван',
    age: 30,
};

let admin = {
    name: 'John',
    age: 30,
};


let clone = Object.assign({}, admin);

alert(clone.name === user.age);