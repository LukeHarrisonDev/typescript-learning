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
let employee = { id: 1,
    name: "Luke",
    askForRaise: (str) => {
        console.log(str);
    }
};
employee.askForRaise("Please can I have a raise?");
//# sourceMappingURL=index.js.map