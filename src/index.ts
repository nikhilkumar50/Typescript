let a="hello";
console.log(a);

const names:string[]=["nikhil","kumar","raj"];
console.log(names);

names.push("45");

const numbers:number[]=[12,15,18];
console.log(numbers);


const values: ReadonlyArray<number>=[5,10,15,20,25];

const namesstring:readonly string[]=["nikhil","kumar"];
const namestring2:ReadonlyArray<string>=["a","c"];

console.log(values);

type obj={
    height:number,
    weight:number,
    gender?:string,
}

const nikhil:obj={
    height:180,
    weight:72,
    gender:"male",
}
const person:obj={
    height:150,
    weight:50,
} 