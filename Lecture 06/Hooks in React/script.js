import React, { useState } from "react";  // useState hook ko React se import karna hota hai
import ReactDOM from "react-dom/client";

// Counter component - simple counter jo increment aur decrement karta hai
function Counter() {
  // useState hook: count ki initial value 0 hai
  // useState ek array return karta hai jisme pehla element current state (count)
  // aur doosra element state update karne wali function (setCount) hota hai
  let [count, setCount] = useState(0);

  // increment function - count ko 1 se badhata hai
  function incrementnumber() {
    console.log(`Current count before increment: ${count}`);
    // setCount call karne se React ko pata chalta hai ki state change hui hai
    // aur component re-render hota hai jisse UI update hota hai
    setCount(count + 1);
  }

  // decrement function - count ko 1 se ghatata hai
  function decrementnumber() {
    // Directly count ko modify mat karo, React state update function ka use karo
    console.log(`Current count before decrement: ${count}`);
    setCount(count - 1);
  }

  // JSX return karta hai UI structure
  // JSX me multiple elements ko wrap karne ke liye <div> use kiya hai
  // onClick event handlers ko functions assign kiya hai jo tab call hote hain jab button click ho
  return (
    <div id="first">
      <h1>Count is {count}</h1>
      <button onClick={incrementnumber}>Increment {count}</button>
      <button onClick={decrementnumber}>Decrement {count}</button>
    </div>
  );
}

// ReactDOM se component ko root element me render kar rahe hain
ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
