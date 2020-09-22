
//Calc.ts
namespace Operations{
    export interface calculator{
        calculate(x:number , y:number):void;
    }
}

//basic.ts


/// <reference path = 'Calc'/>
namespace basic{
    class Adder implements Operations.calculator{
        calculate = (x:number, y:number)=>{
            console.log(x*y)
        }
    }
    export class product implements  Operations.calculator{
        calculate = (x:number, y:number)=>{
               console.log('product', x*y)
        }
    }
}