 // ES6 Fat Arrow Function

/* function number(){
    return 10;
 }*/


/*
let number=()=>{
    return 2;
 }

 console.log(number());
*/


/* let number =n=> 2

 console.log(number(3))

 var javascript= {
     name: 'js',
     Libraries: ['Angular', 'react', 'vue', 'node'],
     printLibraries: function () {
         // this.Libraries.forEach( (a)=>console.log(`${this.name}  loves ${a}`)
         this.Libraries.forEach((a) => console.log(`${this.name} loves ${a}`))


     }
 }

 javascript.printLibraries()*/



 // Array Find

/* var number=[1,2,3,4,5,7,8,9]

 var result =number.find(function (currentvalue,currentIndex){

     return currentvalue> 7

 })
console.log(result);*/


//Another one
/*

 class Student
 {
     constructor(name,age)
     {
         this.name=name;
         this.age=age;
     }
     test()
     {
         console.log('Hello');
     }
     examplefunction()
     {
         let array=[1,2,3,100];
        array.find(()=>
        {
            this.test();

        })
     }
 }
let student = new Student("Sayem",35);
 student.examplefunction();
*/



 //array findIndex

/*
 var array=[0,2,3,21,323,33]

 result=array.findIndex((currentvalue,index,ar)=>{

     return currentvalue >6;

     });
console.log(result);
*/


 // ======================================================
 // Array Prototype filter

/* var array = [12,13,14,15,16,19,33,34]

 var result= array.filter((currentValue,index,array)=>{

     return currentValue > 16
 })

 console.log(result)*/



 //Array Splice

/* var numbers =[1,2,3,4,5,6]

 var result = numbers.splice(1,2,100)

 console.log(numbers);*/

 // Arrow function

 var number=(x,y)=>{
  return x+y;
 }
 console.log(number(3,5));


 //Implicit function

 const square= x=> x*x

 console.log(square(2))

 var add=(a,b) => (
     a+b
 )

 console.log(add(1,1))


 //map function