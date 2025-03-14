function sayMyName(){
    let a=10;
    let b=100;
    console.log(a+b);
    
}
sayMyName()

/*function addtion(num1,num2)//parameters
{
    console.log(num1+num2);
    
}*/
function addtion(num1,num2)//parameters
{
    let res=num1+num2
    return res;
    
}
addtion(100,6)//argumnets
const res=addtion(1000,6)//argumnets
console.log(res);//undefined for non returnable

function loginUserMessage(username = "sam")//sam is minimum val is user do not pass any argumnet
{
    if(!username)//if no username is there
    {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
function calculateCartPrice(val1, val2, ...num1)//here ...i rest operator
{
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));