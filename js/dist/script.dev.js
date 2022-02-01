"use strict";

var user = {
  name: 'Иван',
  age: 30
};
var admin = {
  name: 'John',
  age: 30
};
var clone = Object.assign({}, admin);
alert(clone.name === user.age);
//# sourceMappingURL=script.dev.js.map
