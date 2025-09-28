// Imports React to use JSX (a shorthand for creating React elements).
import React from "react";
// Imports ReactDOM for rendering the app to the DOM.
import ReactDOM from "react-dom/client";

// Create a React element (JSX)
// const element1 = <h1>Helloow bhai</h1>;

// JSX ke andar JavaScript ka koi bhi **expression** likh sakte hain
// Expression → jo koi value/ output return kare
// ⛔ JSX me **statements** nahi likh sakte, jaise: { let x = 2 }
//     Kyunki ye sirf x me value store karega, render karne ke liye koi output nahi dega — is wajah se error aayega
//     Example: if-else condition, loops, variable declaration — ye sab statements hain

// JSX me direct **object** bhi nahi daal sakte
//     JSX ko result chahiye hota hai — jaise string, number, ya valid JSX
//     Object ka direct render nahi hota, isliye error deta hai

let obj = {
  name: "Harshal Chauhan"
};
// ⛔ {obj} se error aayega
// ✅ Lekin {obj.name} use karenge to string milegi, aur wo render ho jaayegi

const arr = ["harshal", 10, 20];
// ✅ Array render ho sakta hai agar usme strings, numbers, ya JSX elements ho
// ⛔ Lekin agar array ke andar object hoga, to render nahi hoga — error aayega

// function greet(name) {
//   // return <h1>Raam Raam Bhai Saare Ne {obj.name}</h1>
//   // return <h1>{arr}</h1>
//   return <h1>Hellow {name} bhai</h1>
// }

// ✅ Apna khud ka JSX element banana (Custom Component)
// JSX me function ka naam **capital letter** se shuru hona chahiye tabhi React usse component samjhega

// greet component argument kaise lega?
// ➤ JSX component ke andar jo attributes pass karte hain, wo function ko **props** object ke form me milte hain

// Example: <Greet name="Harshal" age="27" />
// props = {
//   name: "Harshal Chauhan",
//   age: "27"
// }

function Greet(props) {
  console.log(props); // props ko console me dekh sakte hain
  return <h1>Raam Raam ji {props.name} {props.age}</h1>;
}

// ✅ Function me argument pass karna JSX ke through
const element2 = <Greet name="Harshal Chauhan" age="27" />;  // JSX ka rule hai: attributes as arguments function ko props ke through milte hain
// <Greet /> ye ek component/function call hai, lekin JSX syntax ke through

const elenent3 = <h1 id="first" className="first"></h1>; // HTML ki tarah JSX me bhi attributes pass karte hain

// ReactDOM se root element banate hain jaha react ka content render hoga
const Root = ReactDOM.createRoot(document.getElementById('root'));  // HTML file me <div id="root"></div> hota hai — usi root ko yaha target kiya gaya hai

Root.render(element2);  // Is line se React component ya element ko render karte hain

// ❌ Root.render(greet("Harshal")); — ye galat tarika hai, direct function call se render nahi karna chahiye
