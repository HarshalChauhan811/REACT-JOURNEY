// closure in js 
// console.log("Closure");

let b = 20;

function greet() {
  let a = 20;

  // console.log(a);
  // console.log(b);  // b global scope mein hai, isliye directly accessible hai 

  function meet() {
    console.log(a);   // meet function greet ke andar hai, isliye greet ka 'a' access kar sakta hai (closure ka example)
  }

  return meet;   // meet function ka reference return ho raha hai
}

// greet();

const number = greet();   // greet() call hone par meet ka reference 'number' variable me store ho gaya (closure create ho gaya)
console.log(number);      // [Function: meet] -> iska matlab meet function ka reference store hai
number();                 // 20  -> number() call karne ka matlab hai meet() function ko call karna

// Yah jo function hai (meet), usko memory heap me allocate kiya jata hai
// Closure function jis-jis variable ko access kar sakta hai (jaise yahan 'a'), unka reference bhi uske saath store ho jata hai
// Aur meet function ke saath 'a' ki value bhi preserve ho jaati hai
// Closure outer scope ki values ko bhi "remember" karke rakhta hai
// Isse performance aur optimization badh jaati hai, kyunki unnecessary variable creation avoid hota hai

// --> Real projects me iska use tab hota hai jab:
// - Bar-bar same function create karna memory-consuming ho sakta hai
// - Closure help karta hai ek baar function bana ke baar-baar use karne me, bina dobara variables ko recreate kiye
// - State maintain karne ke liye bhi closures useful hote hain (like counter, settings, caching etc.)

// ✅ Optimized explanation:
// Closure ek aisa concept hai jahan ek inner function (meet) apne outer function (greet) ke scope ke variables ko yaad rakhta hai, 
// even after outer function execution is complete.
// Isse humko memory efficient aur reusable functions banane me madad milti hai, jo complex projects me performance improve karta hai.
