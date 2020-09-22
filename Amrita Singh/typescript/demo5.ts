// function welcomeUser(fname:string,city:string='mysore'){
//     console.log('welcome, $(fname)')
//     console.log('are u from $(city)')
// }



// function welcomeUser(fname:string, city:string) {
//     if (fname === 'ram'; ) { city = 'Mysore'; }
//     console.log("welcome," + fname);
//     console.log("Are u from " + city);
// }
var alpha = new Array('a','b','c','d','e');
alpha[10]='m';
console.log(alpha[7]);
console.log(alpha.length);


var nums:number[] = [10,20];
var [a,b] = nums;
var[a,b,c] = nums;
var [m]= nums;
console.log(a);
console.log(b);
console.log(c);
console.log(m);