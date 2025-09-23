// React jaisa object jo DOM element create karta hai
const React = {
  createElement: function (tag, styles = {}, children = "") {
    const element = document.createElement(tag);

    // Handle children (either text or array of elements)
    if (Array.isArray(children)) {
      children.forEach(child => element.append(child));
    } else {
      element.innerText = children;
    }

    // Apply styles
    for (let key in styles) {
      element.style[key] = styles[key];
    }

    return element;
  }
};

// ReactDOM jaisa object jo DOM me render karta hai
const ReactDOM = {
  render: function (element, root) {
    root.append(element);
  }
};

// ********************* USAGE *********************

// Get root element
const root = document.getElementById('root');

// Create headings
const header1 = React.createElement('h1', {
  backgroundColor: "blue",
  color: "white",
  fontSize: "30px"
}, "Hello React");

const header2 = React.createElement('h2', {
  backgroundColor: "black",
  color: "white",
  fontSize: "25px"
}, "Kaise ho bhai");

// Create list items
const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JavaScript");

// Create unordered list
const ul = React.createElement('ul', {
  backgroundColor: "red",
  color: "white",
  fontSize: "20px",
  padding: "10px"
}, [li1, li2, li3]);

// Render elements
ReactDOM.render(header1, root);
ReactDOM.render(header2, root);
ReactDOM.render(ul, root);
