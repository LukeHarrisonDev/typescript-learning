"use strict";
let sale = 123456789;
let course = "TypeScript";
let isPublished = true;
let thisNumber = 123432;
let type;
function render(document) {
    console.log(document);
}
let numbers = [];
let user = [1, "Luke"];
user.push(3);
let mySize = 3;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
calculateTax(10000, 2023);
let employee = { id: 1, name: "Luke", askForRaise: (str) => { console.log(str); } };
employee.askForRaise("Please can I have a raise?");
let employee1 = {
    id: 27,
    name: "Luke",
    askForRaise: (str) => {
        console.log(str);
    }
};
let employee2 = {
    id: 28,
    name: "Jessica",
    askForRaise: (str) => {
        console.log(str);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity;
//# sourceMappingURL=index.js.map