// Creating a simple React element
// Style is passed as an object
// All CSS properties are inside this object {}
const element1 = React.createElement('h1', {
  id: "first",
  className: "first",
  style: { backgroundColor: "blue", fontSize: "30px", color: "pink" }
}, 'Hello React 18!');

const element2 = React.createElement('h2', {
  id: "second",
  className: "second",
  style: { backgroundColor: "black", fontSize: "30px", color: "pink" }
}, 'This is heading 2');

// Creating a div to wrap both elements
// Both elements will be considered as children of this div
const div1 = React.createElement('div', {}, [element1, element2]);

// Getting the root element where the React elements will be rendered
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the React elements inside the root container
Reactroot.render(div1);

// Reactroot.render(element1);
// Reactroot.render(element2);  // If we render element2 after element1, element1 will disappear

// When Reactroot.render is called again, it clears the previous content and renders only the new content

// How to make both visible at the same time?
// Wrap both elements inside a div and render that div inside the root container
