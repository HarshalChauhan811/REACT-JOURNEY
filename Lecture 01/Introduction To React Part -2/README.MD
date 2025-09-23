# Mini React Library & React 18 Rendering Explained

---

## What is React?

- React ek **JavaScript library** hai jo UI banane ke liye use hoti hai.
- Mostly **Single Page Applications (SPAs)** ke liye.
- React aur ReactDOM alag hain:
  - **React**: UI components banata hai.
  - **ReactDOM**: React components ko browser DOM me render karta hai.

---

## Why React and ReactDOM are Separate?

- React platform-independent hai (browser, mobile, etc.).
- ReactDOM browser-specific DOM manipulation ke liye.
- Separation se modularity aur maintainability badhti hai.

---

## How to Use React in Browser with CDN?

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> 
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

---

## React 17 (Old way)
const element = React.createElement('h1', {}, 'Hello React');
ReactDOM.render(element, document.getElementById('root'));  // Deprecated in React 18

ReactDOM.render() React 17 tak use hota tha.

React 18 me ye method deprecated hai.

---

## React 18 (New way)
const element = React.createElement('h1', {}, 'Hello React 18!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

ReactDOM.createRoot() se root container banta hai.

root.render() se rendering hoti hai.

---

## Why React Changed the API?

JavaScript single-threaded hai, isliye React 17 me UI block hoti thi during rendering.

React 18 me Concurrent Mode introduce hua:

- Rendering background me hoti hai.
- Rendering ko pause, cancel, ya prioritize kar sakte hain.
- UI zyada responsive aur fast hoti hai.

---

## React 17 vs React 18 Comparison

Feature              | React 17                   | React 18                         
---------------------|---------------------------|---------------------------------
DOM Rendering        | ReactDOM.render()         | ReactDOM.createRoot().render()  
Concurrent Rendering | ❌ Not supported           | ✅ Supported                    
UI Responsiveness    | ❌ Blocks UI              | ✅ Interruptible Rendering      
Performance          | Manual/limited            | Automatic via new engine        

---

## Summary:

React 17:
ReactDOM.render(element, document.getElementById('root'));

React 18:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

React 18 ka new root API use karo for better performance and future readiness.

---

💡 Bonus:

React 18 ka root system sirf syntax change nahi, React architecture ka naya approach hai — jisme rendering smarter, interruptible, aur zyada responsive hoti hai.
