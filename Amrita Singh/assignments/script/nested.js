var register = function(name){
    return function validate(){
 
        if(username==" "){
            console.log("invalid name");
        }
            else{
                console.log("valid name");
            }
        };
    };
    var res=register(" ");
    res();
