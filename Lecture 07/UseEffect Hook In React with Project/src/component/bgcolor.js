import React , {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

// 🎯 Purpose: Background color changer component

// 🔸 Default color = black
// 🔸 setColor("orange") → isse component re-render hoga
// 🔸 useState me jitni baar value set karoge, function dobara chalega
// 🔸 useState previous value ko yaad rakhta hai (persist karta hai)

// 🔍 Primitive value (jaise string, number) agar set karoge:
//     ➤ pehli baar React 2 render karega (Strict mode ke karan)
//     ➤ fir agar same value fir se set kari (e.g. red), to wo render skip karega
//     ➤ reason: performance overhead se bachne ke liye (React ka built-in optimization — isko "bailout" bolte hain)

// 🧠 Object type values me agar tum same reference bhejte ho, to React render nahi karega
//     ➤ Kyuki React reference check karta hai, value ka deep comparison nahi

// 🔧 useEffect Hook: Syntax → useEffect(callback, dependencyArray)
//     ➤ Har render ke baad chalta hai, lekin control dependency array ke through hota hai

function Colorful(name){
   // 🔹 Component ke state me color set kar rahe hain, default: black
   // 🔹 Function jitni baar chalega, memory dobara allocate hoti hai
   const [color, setColor]= useState("black");

   // Debugging ke liye check kar rahe hain ki component kitni baar render ho raha hai
   console.log("render ");  
   console.log(name);

   // 🔸 Background color directly yahan bhi change kar sakte the
   //    document.body.style.backgroundColor = color;
   // 🔸 Lekin hum isko useEffect ke andar kar rahe hain (best practice)

   // 📌 Note: Button pe click hone pe callback function chalega (onClick)

   // useEffect ke andar ka code har render ke baad, sabse last me execute hota hai
   useEffect(()=>{
      console.log("useEffect executed ");
      document.body.style.backgroundColor=color;
   }, [color]); 
   // ⬆️ Dependency array me color diya hai:
   //     ➤ Jab bhi color me change aayega tabhi ye effect chalega
   //     ➤ Agar same color pe dobara click kiya (e.g. red → red), to ye useEffect dubara nahi chalega

   // ✅ useEffect sirf tab chalega jab state (color) me actual change ho
   //    Agar dependency array khali dete to useEffect sirf ek baar (initial render me) chalta

   console.log("render 2");

   return (
    <>
    <h1>Background Color Changer</h1>
    <div>
      {/* ⬇️ Button pe click hone par color change hoga */}
      <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
      <button  style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue </button>
      <button  style={{backgroundColor:"orange"}}onClick={()=>setColor("orange")}>Orange</button>
      <button  style={{backgroundColor:"green"}}onClick={()=>setColor("green")}>Green</button>
      <button  style={{backgroundColor:"purple"}}onClick={()=>setColor("purple")}>puple</button>
    </div>
    </>
   )
}

// ✅ Summary: jis button pe click karoge, body ka background waisa hi change ho jayega


// 🧠 React.memo() kya karta hai:
//    ➤ Yeh component ko memoize (yaad) karta hai
//    ➤ Agar parent component bar-bar render ho raha ho, lekin is component ke props change nahi ho rahe
//       to React is component ko dubara render nahi karega (performance optimization)

// ⚠️ Har jagah React.memo lagane ki zarurat nahi hai
//    ➤ Memo ke sath thoda extra code bhi attach hota hai (overhead)
//    ➤ Use wahi karo jahan parent me baar-baar changes ho rahe ho aur tum is component ka render avoid karna chahte ho

export default React.memo(Colorful);
