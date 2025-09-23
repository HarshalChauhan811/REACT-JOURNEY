// ✅ Example 1: Basic Element Creation & Rendering

// Step 1: Create a React element using createElement
const element = React.createElement('h1', {}, 'Hello React');

// Step 2: Create root container using ReactDOM.createRoot (React 18 way)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Step 3: Render the element into the root container
root.render(element);

// -----------------------------------------------

// ✅ Example 2: Another React Element (Better readability)

// Step 1: Create another React element
const element1 = React.createElement('h1', {}, 'Hello React 18!');

// Step 2: Create another root container (same DOM element for demo)
const root1 = ReactDOM.createRoot(document.getElementById('root'));

// Step 3: Render the new element (this will replace the previous one)
root1.render(element1);
