const age:number = 31;
const name:string = "Maxi";
const isLive:boolean = true;

type Student = {
    name:string;
    age:number;
    id:string;
    gender: "male" | "female" | "other";
    sayHello:() => void;
    calc:(a:number, b:number) => number
}



const test:Student = {name:"Max", age:41, id:"1", gender:"male", sayHello:() => console.log("Hello"), calc:(a:number, b:number) => a+b};
console.log(test.name)

type Math = (a:number, b:number) => number;

type Operand = "add" | "subtract" | "multiply" | "divide"

function calculate(input:Operand, a:number, b:number):number {
    if (input === "add"){
        return a+b;
    }else if (input === "subtract"){
        return a-b;
    }else if (input === "multiply"){
        return a*b;
    }else if (input === "divide"){
        return a/b;
    }else {
        console.log("Invalid Input!")
        return -1;
    }

}

console.log(calculate("multiply", 5, 6))

