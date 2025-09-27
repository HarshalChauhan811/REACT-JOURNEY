import React from "react";   // React library से React core functions import करो
import ReactDOM from "react-dom/client";  // React DOM के नए client API से root बनाना

// यह JS normal script नहीं, module है। इसलिए import/export syntax use होता है।

// --------------------------------------------
// React Element Create करना (React.createElement method से)
// --------------------------------------------
// const element1 = React.createElement(
//   'h1', 
//   {id:"first", className:"first", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}}, 
//   'Hello React 18!'
// );

// const element2 = React.createElement(
//   'h2', 
//   {id:"second", className:"second", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}}, 
//   'This is heading 2 '
// );

// एक div में दोनों elements को children के रूप में wrap करना
// const div1 = React.createElement('div', {}, [element1, element2]);
// Reactroot.render(div1);

// --------------------------------------------
// Function-based React Component का Example
// --------------------------------------------
// Functional component जो JSX return करता है

// function App() {
//   return (
//     <>
//       <h1>hello world</h1>
//       <div style={{height:"300px", width:"300px", border:"2px solid red"}}> 
//         {/* Image with inline styles */}
//         <img 
//           style={{height:"300px", width:"300px"}} 
//           src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww" 
//         />
//       </div>
//       <div style={{height:"300px", width:"300px", border:"2px solid red"}}> 
//         <img 
//           style={{height:"300px", width:"300px"}} 
//           src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fHww" 
//         />
//       </div>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);

// --------------------------------------------
// Simple Functional Components (React में recommended तरीका)
// --------------------------------------------

// greet नाम की function जो JSX return करता है
function greet() {
  return <h1>hi bhai  </h1>;
}

// meet नाम की function जो JSX return करता है
function meet() {
  return <h1>Aur bhai kaise ho </h1>;
}

// Functions को कॉल करके React Elements प्राप्त कर रहे हैं
const element1 = greet();
const element2 = meet();

// JSX Fragment में दोनों elements को एक साथ wrap करना
// JSX Fragment <>...</> से multiple elements बिना extra DOM node के wrap हो जाते हैं
const newelement1 = <>{greet()} {meet()}</>;

// React 18 में नया root बनाना और render करना
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(newelement1); // newelement1 को render करो

// --------------------------------------------
// JavaScript Objects और JSX में उनके उपयोग का उदाहरण
// --------------------------------------------

const obj = {
  name: "harshal",
  age: 21,
  salary: 3000
};

const names = "harshal";

const obj2 = {
  backgroundColor: "black",  // camelCase property naming ध्यान दें
  color: "pink"
};

// JSX में style attribute एक JavaScript object expect करता है
const element = (
  <>
    {/* Inline styling के लिए style prop में JS object पास किया */}
    <h1 style={obj2} id="first" className="first">
      This is heading {names}
    </h1>

    {/* Directly inline object style भी यूज़ कर सकते हैं */}
    <h3 style={{ backgroundColor: "black", color: "pink" }}>This is heading 3 </h3>

    <p>This is a paragraph</p>

    {/* JSX में JavaScript expressions को curly braces {} में लिखें */}
    <h1>Your age is {obj.age}</h1>

    {/* Custom attribute भी यूज़ कर सकते हैं, React इसे DOM में add कर देगा */}
    <h1 money={23}>your salary is {obj.salary}</h1>
  </>
);

// --------------------------------------------
// Notes on JSX and Babel
// --------------------------------------------
// JSX एक special syntax है जो HTML जैसा दिखता है लेकिन JavaScript में लिखा जाता है
// React और Browser इसे सीधे नहीं समझते, Babel (Parcel के अंदर होता है) इसे React.createElement calls में convert करता है
// इसलिए JSX को transpile करना ज़रूरी होता है

// --------------------------------------------
// आपका कोड अब ready है, ReactDOM के root element में JSX render किया जा रहा है
// --------------------------------------------
