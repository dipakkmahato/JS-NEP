// datatypes : Generalli two types 

// 1. premmitive datatypes : String , Number , boolean , null , undefined , symbol , bigInt

const score = 100;
const idValue = 100.3;
const isLogged = false;
const outsideTemp = null ;
let userEmail;
let usersEmail = undefined;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigInt = 1234567887654n

// Reference (non premmitive ) : Array , Function , Object
 
const hero = ["Ram", "Sita", "Laxman"];
let myObj = {
    name : "Dipak",
    age : 25,
}


const myFunction = function(){
console.log("hello world");

}


// console.table([score, idValue, isLogged, outsideTemp, userEmail,usersEmail, id, anotherId, bigInt, myObj, hero, myFunction]);
console.log(typeof myFunction);
console.log(typeof hero);
console.log(typeof id);

