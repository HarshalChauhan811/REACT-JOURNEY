// 💬 React object with createElement function to create HTML elements dynamically
const React = {
  createElement: function(tag, styles, children) {
    // 💬 Create a new DOM element using the provided tag
    const element = document.createElement(tag);

    // 💬 Handle children: if it's an array, append each child element
    if (Array.isArray(children)) {
      children.forEach(child => element.appendChild(child));
    } 
    // 💬 If children is a string or number, set it as innerText
    else if (typeof children === 'string' || typeof children === 'number') {
      element.innerText = children;
    }

    // 💬 Apply the given styles to the element if styles object is provided
    if (styles && typeof styles === 'object') {
      for (let key in styles) {
        element.style[key] = styles[key];
      }
    }

    // 💬 Return the created and styled element
    return element;
  }
};

// 💬 ReactDOM object responsible for rendering elements to the page
const ReactDOM = {
  render: function(element, root) {
    // 💬 Append the created element inside the given root element
    root.appendChild(element);
  }
};

// 💬 Example usage of our mini React library:

// 💬 Create an <h1> element with styles and text
const header1 = React.createElement('h1', {
  fontSize: '30px',
  backgroundColor: 'blue',
  color: 'white'
}, 'Hello Coder Army');

// 💬 Create an <h2> element with styles and text
const header2 = React.createElement('h2', {
  fontSize: '25px',
  backgroundColor: 'black',
  color: 'white'
}, 'Kaise Ho Aap Sab Log');

// 💬 Create list items (<li>)
const li1 = React.createElement('li', {}, 'li1');
const li2 = React.createElement('li', {}, 'li2');
const li3 = React.createElement('li', {}, 'li3');

// 💬 Create an unordered list (<ul>) with styles and the list items as children
const ul = React.createElement('ul', {
  fontSize: '25px',
  backgroundColor: 'black',
  color: 'white'
}, [li1, li2, li3]);

// 💬 Select the root element from the DOM where we want to render our components
const root = document.getElementById('root');

// 💬 Render the elements inside the root element
ReactDOM.render(header1, root);
ReactDOM.render(header2, root);
ReactDOM.render(ul, root);

// 💬 Note: Ab hum React jaise functions call kar ke apna UI bana sakte hain bina baar-baar repetitive code likhe.