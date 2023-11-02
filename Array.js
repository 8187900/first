//OBJECT DESTCRING //
// const employee ={
//     name:'Ankit',
//     age:23,
//     address:{
//         city:'kanpur',
//         country:'india'
//     }
// }
//  const{name,age,address:{city,country}}=employee
//  console.log(name)
//  console.log(age)
//  console.log(city)
//  console.log(country)
// HOISTING //
// getData()
// console.log(x)
// var x=7
// function getData(){
//     console.log("WELCOME")
// }
// HOW FUNCTION WORK //
// var x=1
// a()
// b()

// console.log(x)
// function a(){
//     var x=1
//     console.log(x)
// }
// function b(){
//     var y=100
//     console.log(y)
// }
//CLOSURE //
// var a=50
// function x(){
//     var a=10;
//     function y(){
//         console.log(a)
//     }
//     y()
// }
// x()
// var a=30
// function foo(){
//     var x=10
//     function bar(){
//         var z=20
//         let output =a+x+z
//         return output
//     }
//     return bar
    
// }
// let total =foo()
// console.log(total())

// CALLBACK //
// function Greeting(name){
//     console.log(` Hello my name is ${name}`)
// }
// function user(cb){
//     const name='ANKIT'
//     cb(name)
// }
// user(Greeting)

// CALLBACK HELL //
// setTimeout(()=>{
//     console.log("CALLED ONE")
//     setTimeout(()=>{
//         console.log("CALLED TWO")
//         setTimeout(()=>{
//             console.log("CALLED THREE")
//             setTimeout(()=>{
//                 console.log("CALLED four")
//             },1000)
//         },2000)
//     },3000)
// },4000)

//  var promise =new Promise ((resolve,reject)=>{
//     console.log("promise is called")
//  })
 // CURRIYING //
//  function sum (x,y,z){
//     return x+y+z
//  }
//  console.log(sum(5,10,15))

// function sum (x){
//     return (y)=>{
//         return (z)=>{
//             return x+y+z
//         }
//     }
// }
// let data =sum(4)(6)(8)
// console.log(data)

/// SHALLOW COPY AND DEEP COPY //

// var obj1={
//     id:1,
//     name:'ANKIT',
//     address:{
//         city:'kanpur',
//         state:'up'
//     }
// }
// var obj2 =JSON.parse(JSON.stringify(obj1))
// obj2.address.city ="gurugaon"
// console.log(obj2)
// var obj2 =Object.assign({},obj1)
// var obj2={...obj1}
// console.log(obj2)

// (function (name){
//     console.log(`WELCOME MY NAME IS ${name}`)
// })('ANKIT')

// CALL APPLY BIND //
// const person1 ={
//     fName:'ANKIT',
//     lName:"KATIYAR",
//     fullName:function (city,country){
//         return this.fName +" "+ this.lName+ city +country
//     }
// }
// const person2 ={
//     fName:"NEETESH",
//     lName:"KURMI"
// }
// console.log(person1.fullName.call(person2,"kanpur","india"))
// console.log(person1.fullName())

//SOME QUESTIONS //
// const Input ="I LOVE JAVASCRIPT"
  
// function ReverseString (data){

// const arrayInput =data.split(' ');

// const result =arrayInput.map(d=>{
  
//     return d.split('').reverse().join('')
// })
// return result.join('')
// }
// console.log(ReverseString(Input))

const str ="react is a Librabry" // O/p-- 'a is react Library'

function RevStr(data){
//     const dataArray =data.split('')// convert into Array
   
//     dataArray.sort((a,b)=>{    // SORT THE ARRAY
//     return a-b
//     })
//    return dataArray.join('') //CONVERT INTO STRING
const result =data.split("").sort((a,b)=>a-b).join("")
return result
}
console.log(RevStr(str))