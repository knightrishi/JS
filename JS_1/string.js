const name='Arnav'

const repoCount=21;

//console.log(name + repoCount +"Val");//old way of writing

//console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);//mordern way called STING INTERPOLATION


const nn=new String('hello-Arnav');
//console.log(nn);

//console.log(nn.toUpperCase());//does not change original val stack memory
//console.log(nn.charAt(7));
//console.log(nn.indexOf('o'));
// const newNAme=nn.substring(0,4)//last vali val add nahi hoti like at 4 will not be added
 //console.log(newNAme);
 const aN=nn.slice(-7,3);
 console.log(aN);
const new1="   hitesh   "
console.log(new1);

console.log(new1.trim());

const new2="https://hitesh.com/hitesh%20chaudhary"
console.log(new2.replace('%20','-'))
console.log(nn.split('-'));
/** split(separator)
split(separator, limit)
If separator is a string, an Array of strings is returned, split at each point where the separator occurs in the given string.
 */

 
