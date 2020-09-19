var  student={
    name:'Amrita',
    age:23,
    hobbies:['Sports','music'],
    address:{
        city:'banglore',
        state:'karnatka'
    }

};

console.log(student.name);
console.log(student.address.city);
student.studID=20;
student.hasmobile=true
for(const key in student){
    const element= student[key]
    console.log(key+" "+element);
}

var student1={
    name:'raju',studid:20
};
console.log(student1.name);