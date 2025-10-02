import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

const PasswordGenerator = () => {
  // 🔐 Generated password ko store karega
  const [password, setPassword] = useState("ABCDEFGHI");

  // 📏 User-selected password length
  const [length, setLength] = useState(10);

  // 🔢 Numbers chahiye ya nahi
  const [includeNumbers, setIncludeNumbers] = useState(false);

  // 🔣 Special characters chahiye ya nahi
  const [includeSymbols, setIncludeSymbols] = useState(false);

  /**
   * 🔁 generatePassword function:
   * - Password banata hai based on selected options (length, numbers, symbols)
   * - useCallback se wrap isliye kiya gaya hai taaki ye function
   *   sirf tabhi dobara create ho jab dependencies (length, includeNumbers, includeSymbols) change ho.
   * 
   * 🔄 Agar useCallback na use karein:
   * - Har render pe ye naya function banega
   * - useEffect me dependency change samjhi jaayegi
   * - useEffect bar-bar chalega → infinite loop (specially jab setState call ho)
   * - useCallback se purane fn ka hi use krege dubrara starting se memory allocate nahi hogi ham ek baar hi memory ko create kar ke dubara usse use kar skte hai 
   */
  const generatePassword = useCallback(() => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) {
      characters += "0123456789";
    }

    if (includeSymbols) {
      characters += "!@#$%^&*()_+-=~";
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    // ❗ setPassword → triggers re-render
    // Agar yeh call directly useEffect ke bahar hota, toh har render me re-render trigger hota
    setPassword(newPassword);
  }, [length, includeNumbers, includeSymbols]); // ❗ Dependency array ensures controlled re-creation

  /**
   * 🧠 useEffect:
   * - Component mount hone ke baad ya jab koi dependency change ho (length, includeNumbers, includeSymbols)
   * - Tab generatePassword() call hota hai
   * 
   * ❗ Infinite Loop Warning:
   * - Agar hum yeh function directly component ke andar call karte (generatePassword()),
   *   toh setPassword() ke baad render hota, phir generatePassword() fir se call hota → infinite loop
   * 
   * ✅ useEffect ensures:
   * - Controlled side-effect based on specific changes
   */
  useEffect(() => {
    generatePassword();
  }, [generatePassword]); // ✔️ Only runs when generatePassword changes

  return (
    <>
      <h1>Password is: {password}</h1>

      <div className="controls">
        {/* 📏 Length controller */}
        <input
          type="range"
          min={10}
          max={50}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <label>Length: {length}</label>

        {/* 🔢 Include numbers checkbox */}
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        <label>Include Numbers</label>

        {/* 🔣 Include symbols checkbox */}
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        <label>Include Symbols</label>
      </div>
    </>
  );
};

// 🔽 Component render karna
ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);
