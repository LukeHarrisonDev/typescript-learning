let sale: number = 123_456_789
let course: string = "TypeScript"
let isPublished: boolean = true

let thisNumber = 123432 //still a number
let type // this is type "any" --- Try avoiding this

function render(document: any) {
    console.log(document)
}

let numbers: number[] = []


//Tuples
let user: [number, string] = [1, "Luke"]
user.push(3)
// console.log(user)

// enums
// const small = 1
// const medium = 2
// const large = 3

const enum Size { Small = 1, Medium, Large } 
let mySize: Size = Size.Large
console.log(mySize)

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2
    } else {
        return income * 1.3
    }
}

calculateTax(10_000, 2023)

// Objects Long way
let employee: {readonly id: number, name: string, askForRaise: (str: string) => void}
=
{ id: 1, name: "Luke", askForRaise: (str: string) => {console.log(str)}}


employee.askForRaise("Please can I have a raise?")