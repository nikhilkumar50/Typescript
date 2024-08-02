"use strict";
// let a = "hello";
// console.log(a);
//optional parameter
const multipleFunction = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
// console.log(multipleFunction(10,20));
//Default Parameter 
const subtractFunction = (n, m, l = 30) => {
    return l - m - n;
};
const func = (...m) => {
    return m;
};
const getData = (product) => {
    console.log(product);
};
getData({
    name: "Nikhil",
    stock: 1,
    price: 10,
    photo: "awesome"
});
//Never Type
const errorHandler = () => {
    throw new Error();
};
//classes in Typescript
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
        this.id = String(Math.random() * 1000);
    }
}
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
    get getMyWeight() {
        return this.weight;
    }
    set changeMyweight(val) {
        this.weight = val;
    }
}
// console.log(abhi.getMyHeight());
// console.log(abhi.getMyPower());
// abhi.changeMyweight=80
// console.log(abhi.getMyWeight);
const abhi = new Player2(186, 72, 500, true);
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.round(Math.random() * 1000));
        this.getId = () => this.id;
    }
}
const product1 = new Product("Samsung", 15000, 25);
// console.log(product1.getId());
//Type Assertion
// const btn=document.getElementById("btn")!;
const btn = document.getElementById("btn");
// const btn=<HTMLElement>document.getElementById("btn");
btn.onclick;
