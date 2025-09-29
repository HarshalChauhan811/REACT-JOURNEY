# ⚛️ React Hook: `useState` (Quick Guide)

## 🔹 What is it?
- React Hook for adding **state** in functional components.

## 🔹 Syntax:
```js
const [value, setValue] = useState(initialValue);
🔹 How it works:
useState sets up state.

setValue() updates it.

React re-renders UI with new value.

🔹 Example:
js
Copy code
const [count, setCount] = useState(0);

function inc() {
  setCount(count + 1);
}
🔹 Arrays:
js
Copy code
setItems([...items, newItem]); // ✅ new array
🔹 Objects:
js
Copy code
setUser({ ...user, age: 26 }); // ✅ new object
⚠️ Don’t:
js
Copy code
count++;        ❌
setCount(count) ❌
Use:

js
Copy code
setCount(prev => prev + 1); ✅
🔁 Recap:
🔸 Feature	✅ Summary
State mgmt	useState()
UI update	via setValue()
Immutability	Always use spread

✅ Functional + Hooks = Modern React

Happy Coding 🚀