const arr = [
  { cloth: "Tshirt", offer: "20-40%off", price:200 },
  { cloth: "Shirt", offer: "50-70%off",price:2000},
  { cloth: "Jeans", offer: "30-40%off" , price:500},
  { cloth: "Shirt", offer: "20-48%off" , price:400},
  { cloth: "Formal-shirt", offer: "50-80%off", price:800 },
  { cloth: "Pant", offer: "80-90%off", price:1500 },
  { cloth: "Tshirt", offer: "60-70%off", price:2500 },
  { cloth: "Tshirt", offer: "80-90%off", price:3000 },
  { cloth: "Tshirt", offer: "50-65%off", price: 4000 },
  { cloth: "Tshirt", offer: "20-40%off",price:1200 },
];

export function greet(){
  console.log("good morning ");
}

export function meet(){
  console.log("hi bro ");
}

export default arr; 
// yaha pe ham dummy data ko rakhte hai to make code readable 
// yaha pe images bhi rakh skte hai jo use ho rhe hai baar baar 


//const let var ke saath me export default nahi le skte usse end me export krte hai 
// ek file me ek hi export default ho skta hai 