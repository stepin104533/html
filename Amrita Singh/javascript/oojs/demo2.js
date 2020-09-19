var stud={
    name:'ram',
    empid:20,
    hobbies:['music','sports'],
    address:{
        city:'ban',state:'kar'
    }
}
var jsonstring=JSON.stringify(stud)
console.log(jsonstring);
var jsobj= JSON.parse(jsonstring);
console.log(jsobj);