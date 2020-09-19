function Student(name,city){
this.name=name;
this.city=city;
this.getDetails= function(){
    console.log('welcome',this.name,this.city)
}
}
var stud=new Student('raju','ssm')
console.log(stud);
var stud1= new Student('soham','vns');
console.log(stud1);
stud.getDetails();

Student.prototype.studID=90;
Student.prototype.greetMessage=()=>{
    console.log('great day','rohan');
}
stud.greetMessage('rohan');
