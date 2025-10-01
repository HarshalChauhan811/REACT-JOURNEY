import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Colorful from "./src/component/bgcolor"

// 🚩 Problem:
// Main function me dono (Count aur Colorful) functions hain
// Jab count increment karte hain, to poora Main function dubara run hota hai
// Isliye Colorful component bhi re-render hota hai, jo hum nahi chahte

// Hook (useState) jab setCount ko call karta hai, to poora function rerun hota hai
// Isliye jab parent render hota hai to child bhi render ho jata hai

// DOM manipulation ke liye useEffect use karo, taaki parent ke changes child me affect na kare

// Solution:
// React.memo() use karo child component ko memorize karne ke liye
// Matlab agar props change nahi hua to child render nahi hoga
// React.memo ko Colorful component me apply karo:
// export default React.memo(Colorful);
// Isse jab parent render hoga to jab tak props change nahi hota child render nahi hoga

function Main(){
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <h1>Count is : {count}</h1>
        <button 
          width="50px" height="50px" 
          onClick={() => setCount(count + 1)} 
          style={{backgroundColor:"white", color:"aqua"}}
        >
          Increment
        </button>
      </div>

      {/* React.memo applied hai Colorful component pe */}
      {/* Ab jab count change hoga to Colorful re-render nahi hoga unless props change ho */}
      <Colorful name="harshal" />

      {/* Agar yahan count bhejoge props me to Colorful fir render hoga, kyunki prop change ho raha */}
      {/* <Colorful name={count} /> */}
    </>
  )
}

/*
IMPORTANT NOTE:

- Agar props "harshal" fix hai to React.memo use karke Colorful ko render hone se bacha sakte hain.
- Agar props me koi change hoga (jaise count) to React.memo allow karega render ko.
- React.memo se performance thoda improve hota hai, lekin ye har jagah lagane ki zarurat nahi.
- Overhead bhi badhta hai thoda, to use karo sirf jab jarurat ho.

Twist:
Agar Main ke andar koi function define karoge aur usko child me pass karoge, to har render me woh function naya create hoga,
iska matlab child fir bhi render hoga.
Isliye functions ko ya to useCallback ke sath wrap karo ya component ke bahar define karo.

Summary:
Jab bhi DOM manipulation karni ho to useEffect me karo, parent changes child me na aaye isliye React.memo use karo.

*/

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
