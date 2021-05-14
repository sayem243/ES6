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

 const number1=[1,2,2,2,3,3,4,4,5,5,6,8,10,20,30,40,50]
 const name=['Tamim','Sakib','Mash','Sayem','Musta']
 const object=[
  {name:'Humayun Ahmed',availableBooks:30},
  {name:'Humayun Azad',availableBooks:10},
  {name:'Robi Boss',availableBooks:130}
 ]

 /*===============Map with Arrow function====================*/

 const newNumber=number1.map( x=>{
  return x*2;
 })

 console.log(newNumber);

 const uppercase=name.map(name_string=>{
   return   name_string.toUpperCase()
 })


console.log(uppercase);

 const newObject=object.map(item=>{
 return   item.name+''+' Available Books '+item.availableBooks
 })

 console.log(newObject);

 /*===============Find and Filter====================*/

 const students=[
  {name:'Humayun Ahmed',marks:35,subject:'MATH'},
  {name:'Humayun Azad',marks:32,subject:'English'},
  {name:'Robi Boss',marks:45,subject:'English'},
  {name:'Sunil Boss',marks:30,subject:'BANGLA'},
  {name:'Messi ',marks:40,subject:'English'},
  {name:'CR7',marks:55,subject:'BANGLA'},
 ]

 const studentMark=students.find(mark=>{

  return  mark.marks >35
     })
 console.log("Find :");
 console.log(studentMark);

 const filter_studentMarks= students.filter(mar=>{
   return mar.marks>35;
 })

 console.log('Filter: ', filter_studentMarks);

const noDuplicate= number1.filter((num,index,arr)=>{
 return  arr.indexOf(num)===index;
 })

 console.log(noDuplicate);

// ====================Every and Some Method ====================

 const lessThan_tweenty=number1.every((num)=>{
  return  num<30
 })
 console.log(lessThan_tweenty);

const some_function=number1.some((num)=>{
  return  num<30
 })
 console.log(some_function);




 //====================== Array Reduce =====================

 const reduce=number1.reduce((prev,current,currentIndex,arr)=>{
  return prev+ current
 },0)

 console.log('Reduce '+reduce);

 const max_number=number1.reduce((prev,curr,currentIndex,array)=>Math.max(prev,curr))
 const min_number=number1.reduce((prev,curr,currentIndex,array)=>
     Math.min(prev,curr))

 console.log('Maximum '+max_number,' Minimum Number '+min_number)

 const product=[
  {
   name:'book',
   amount:5,
   price:10
  },  {
   name:'Pen',
   amount:5,
   price:10
  },
  {
   name:'Watch',
   amount:5,
   price:5
  },
 ]

 const totalTk=product.reduce((acc,currentvalue)=>{
      return acc+ currentvalue.amount * currentvalue.price
     },0
 )
console.log('Total tk ',totalTk);

 const Prize=[
  {
   name:'sayem',
   prize:'No'
  },
  {
   name:'sayem',
   prize:'yes'
  },
  {
   name:'Karim',
   prize:'yes'
  },
  {
   name:'Karim',
   prize:'No'
  },
  {
   name:'Rahim',
   prize: 'yes'
  }

 ]
 const counting_instance_of_value =Prize.reduce((accumulator,item)=>{

   accumulator[item.name] =accumulator[item.name]  || []
   accumulator[item.name].push(item)


  // if (accumulator[item.name] ){
  //  //(accumulator[item.name])++
  //  (accumulator[item.name])++
  // }
  //
  // else {
  //
  //   accumulator[item.name]=1
  // }

    // accumulator[item.prize]=[]||[];
    //
    // accumulator[item.prize].push(item)


return accumulator;

  //console.log(accumulator);

 },{})

 console.log(counting_instance_of_value);


 var cars = [{ make: 'audi', model: 'r8', year: '2012' },
      { make: 'audi', model: 'rs5', year: '2013' },
      { make: 'ford', model: 'mustang', year: '2012' },
      { make: 'ford', model: 'fusion', year: '2015' },
      { make: 'kia', model: 'optima', year: '2012' }],
     result = cars.reduce(function (r, a) {

       r[a.make] = r[a.make] || [] ;
       r[a.make].push(a);

      return r;
     }, Object.create(null));

 console.log(result);


 //======================Spread operator=====================

 var  spread_operator=[...number1,100]

 console.log('Spread operator :'+ spread_operator);


 //======================Rest operator=====================

 var cars=((a,...params)=>{

 return params

 })
 console.log(cars(1,22,3,4,))


 //======================Destructuring =====================
 const user ={
  name2:'Md',
  id:2212,
  education:{
   degree:'Masters',
   degree2:'CSE'
  }
 }

 const { name2:title } = user; //title hocche Alias

 console.log(title);

 const {education :{degree2:bachelorDegree}}=user
 console.log(bachelorDegree);


 var num=[11,23,123,4,24,1334]

 var[,,,a,b]=num;
 console.log('Array Destructuring '+ a,b);

 //swap

 var aa=15;
 var bb=11
var [bb,aa]=[aa,bb]
console.log('SWAP '+aa,bb);

// import and export

//import {pen as p,pi} from './external.js'; //one way

 import * as test from './external.js'; //one way

console.log('             /n')
console.log("Pen :", test.pen);

// =====================Template Literal====================

 var sami = 10;
 var sufiya =20;

 console.log(`sami's age is ${sami} and sufiya's age is ${sufiya}`);


console.log('     ');
// ====================Tagged Template Literal==================

 var player1="sakib"
 var player2="Tamim"

 function modifier(strings,...values){
   const m=strings.reduce((prev ,current)=>{
    return prev+current+ (values.length ? "Mr "+values.shift() : " ")

   },"")
  return m;
 }


 console.log(modifier`We have ${player1} and ${player2} in our cricket team`);

 /*========================Set and WeakSet============================*/

 function log(anything){
  return console.log(anything);
 }

 let myarray=[]; //literal syntex
 let myarray= new Array(); //constructor syntex