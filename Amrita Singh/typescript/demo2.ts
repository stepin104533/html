declare var mes: string;
var message ="hello World!";
console.log(message);
mes= "wlcome";


function calsum(n1:number,n2:number):number{
    return(n1+n2);
}
console.log(calsum(10,20))
function greetMyUser(name:string):void{
    console.log("Great Day"+name);

}

greetMyUser("Priya")
let greetStudent = function(name: string):string{
    return "good Day"+ name;
}
console.log(greetStudent('rohan'));
 let sum = (n1: number,n2:number)=>{
     console.log('sum' +(n1+n2));
 }