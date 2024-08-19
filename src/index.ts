// let a = "hello";
// console.log(a);

// const names: string[] = ["nikhil", "kumar", "raj"];
// console.log(names);

// names.push("45");

// const numbers: number[] = [12, 15, 18];
// console.log(numbers);

// const values: ReadonlyArray<number> = [5, 10, 15, 20, 25];

// const namesstring: readonly string[] = ["nikhil", "kumar"];
// const namestring2: ReadonlyArray<string> = ["a", "c"];

// const decimalnumbers: readonly number[] = [1, 2, 3, 4, 5];
// console.log(decimalnumbers);

// console.log(values);

// type obj={
//     height:number,
//     weight:number,
//     gender?:string,
// }

// const nikhil:obj={
//     height:180,
//     weight:72,
//     gender:"male",
// }
// const person:obj={
//     height:150,
//     weight:50,
// }

// type FuncType=(n:number,m:number,l?:number)=>number;

// const func:FuncType=(n,m,l)=>{
//     if(typeof l==="undefined"){
//         return n*m;
//     }
//     return n*m*l;
// };

// // func(25,20,10);

// type obj = {
//   height: number;
//   weight: number;
//   bmi?: boolean;
// };

// interface objtype {
//   height: number;
//   weight: number;
//   bmi: boolean;
// }

// type FuncType = (n: number, m: number) => number;

// interface newObj extends objtype {
//   age: number;
//   func: FuncType;
// }

// const object1: newObj = {
//   height: 183,
//   weight: 72,
//   bmi: true,
//   age: 21,
//   func: (n, m) => {
//     return n * m;
//   },
// };
// console.log(object1.func(20, 30));

// console.log(object1);



type FuncType=(n:number,m:number,l?:number)=>number;

//optional parameter
const multipleFunction:FuncType=(n,m,l)=>{
    if(typeof l==="undefined")return n*m;

    return n*m*l;
}
// console.log(multipleFunction(10,20));


//Default Parameter 
const subtractFunction:FuncType=(n,m,l=30)=>{
    return l-m-n;
}

// console.log(subtractFunction(5,10));


type RestFunc=(...m:number[])=>number[];

const func:RestFunc=(...m)=>{
    return m;
}
// console.log(func(10,20,30,40,50,60,70));

type getDatatype=(product:{name:string,stock:number,price:number,photo:string})=>void;

const getData:getDatatype=(product)=>{
    console.log(product);
}

getData({
    name:"Nikhil",
    stock:1,
    price:10,
    photo:"awesome"
})


//Never Type

const errorHandler=():never=>{
    throw new Error();
};

//classes in Typescript

class Player{
    public readonly id:string;
   
    constructor(private height:number,public weight:number,protected power:number){
        this.id=String(Math.random()*1000);
    }
    getMyHeight=()=>this.height;

}

class Player2 extends Player{
    special:boolean;
    constructor(height:number,weight:number,power:number,special:boolean){
        super(height,weight,power);
        this.special=special;
    }
    getMyPower=()=>this.power;

    get getMyWeight():number{
        return this.weight
    }

    set changeMyweight(val:number){
        this.weight=val;
    }


}

// console.log(abhi.getMyHeight());
// console.log(abhi.getMyPower());

// abhi.changeMyweight=80
// console.log(abhi.getMyWeight);



const abhi=new Player2(186,72,500,true);

interface ProductType{
    name:string,
    price:number,
    stock:number,
    offer?:boolean,
}

interface giveId{
    getId:()=>string;
}

class Product implements ProductType,giveId{

    public id:string=String(Math.round(Math.random()*1000))

    constructor(public name:string,public price:number,public stock:number){

    }

    getId= () => this.id;


}
const product1=new Product("Samsung",15000,25);

// console.log(product1.getId());


//Type Assertion

// const btn=document.getElementById("btn")!;
const btn=document.getElementById("btn") as HTMLElement;
// const btn=<HTMLElement>document.getElementById("btn");



// type User={
//     name:string,
//     email:string,
// }

// type User2=Partial<User> //it makes both the property optional

// type User3={
//     name?:string,
//     email?:string,
// }

// type User4=Required<User3>; //it makes both the property mandotary


// type User={
//     name:string,
//     email:string,
// }

// // it make the User type as readonly

// const user:Readonly<User>={
//     name:"Nikhil",
//     email:"nikhil@xscaleglobal.com",
// }

// interface UserInfo {
//     age:number;
// }

// type UserName="john"|"levi"|"elon"|"jack";

// const users:Record<UserName,UserInfo>={
//     john:{age:34},
//     levi:{age:34},
//     elon:{age:34},
//     jack:{age:34},
// }





