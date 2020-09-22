//rest operator


function sumofNumbers(...nums:number[]) { 
            var sum = 0;
            nums.forEach((x) => {
                sum+=x;
              });
    
    console.log("sum of the numbers",sum);
            }

 sumofNumbers(100,200,400) 
 sumofNumbers(30,40,50,60,70)