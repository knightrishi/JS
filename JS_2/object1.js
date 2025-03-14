//singleton is created when object is made using constructor 
//matlab ek tara ka ek hi object banega

//Object Literal
const myS=Symbol("key1")
const Jsuser={
    name:"Arnav",
    //name is itslef a string"name"
"full name":"arnav Singh",
    age:20,
//myS="myKey1" this is not a symbol data type obj it is string
[myS]:"myKey1",//Symbol Data type
    location:Array,
    isLogged:false


}
console.log(Jsuser.name);
console.log(Jsuser["name"]);//to access Object
console.log(Jsuser["full name"]);//cannt use . operator
console.log(Jsuser[myS]);
console.log(typeof Jsuser[myS]);
Jsuser.name="arpuit"
//Object.freeze(Jsuser)
Jsuser.name="arnav"
console.log(Jsuser);


Jsuser.greeting=function(){
    console.log(`Hello Coder ${this.name}`)
}
console.log(Jsuser.greeting);//gives function return back
console.log(Jsuser.greeting());
 //WE CAN access object by 2 method
 //1--by using(.)operator
 //2--by usingh [] square brackets
 //to access Symbol data type use []