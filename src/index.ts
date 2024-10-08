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

// Type Alias
type Employee = {
    readonly id: number,
    name: string,
    askforRaise: (str: string) => void
}

let employee1 = {
    id: 27,
    name: "Luke",
    askForRaise: (str: string) => {
        console.log(str)
    }
}

let employee2 = {
    id: 28,
    name: "Jessica",
    askForRaise: (str: string) => {
        console.log(str)
    }
}
// Union Types
function kgToLbs(weight: number | string): number {
    if (typeof weight === "number") {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}

//Intersection Types
let weight: number & string

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal Types
type Quantity = 50 | 100
let quantity: Quantity // Can only ever be 50 or 100

type Metric = "cm" | "inch"

// Nullable Types
function greet(name: string | null | undefined) {
    if(name) {
        console.log(name.toUpperCase())
    } else {
        console.log("Hi!")
    }
}

greet(null)

// So you can't use null or undefined unless you say so in the parameters, but you should account for this in the function