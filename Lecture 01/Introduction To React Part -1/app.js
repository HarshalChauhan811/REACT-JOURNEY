// create element through js 
// react ke pass ek fn hai jo element ko create krega 
// react yah pe object hai 
const React = {

  // style = { backgroundColor: "white", color: "red", fontSize: "30px" }
  // object ki form me aaya hai ab ispar iterate kar lege

  createElement: function(tag, styles, children) {   // isme 3 argument ko pass kar rhe hai 
    const element = document.createElement(tag);

    // ✅ Array ko handle krna hai to
    if (typeof children === 'object' && Array.isArray(children)) {
      for (let val of children) {
        element.append(val);  // ✅ Append each child
      }
    }
    else {
      element.innerText = children;  // ✅ If plain text
    }

    // ✅ ek ek krke style se value ko nikalega 
    // [key] kya hai? js ka variable hai jisse bracket ki hlp se access krte hai 
    for (let key in styles) {
      element.style[key] = styles[key];  // ✅ .style se css ki property apply hoti hai
    }

    return element;
  }
};

// -------------------------------------------

// Ham dom ko khud  se manipulate nahi krna chate hai uske liye 
// ek naya obj banate hai jo dom ko manipulate krega
// uska name ReactDOM jo render ka kaam krega 

// is fn ka kaam bas root ke inside element ko append kar dena hai 
// ReactDom is responsible for rendering to the DOM
const ReactDom = {
  render: function(element, root) {
    root.append(element); // ✅ Append the element to the root
  }
};

// ***********************************************
// niche ka utna code likhne ke bajay ek hi function se likh dete hai

// ✅ style ko as a object send kar diya wah style ke inside jayega 
const header1 = React.createElement(
  'h1',
  { backgroundColor: "blue", color: "red", fontSize: "30px" },
  "Hellow React"
);

const header2 = React.createElement(
  'h2',
  { backgroundColor: "black", color: "white", fontSize: "30px" },
  "Kaise ho bhai"
);

// ✅ List creation
// ul me HTML, CSS, JS - ul ke children hoge
const li1 = React.createElement('li', {}, "HTML");
const li2 = React.createElement('li', {}, "CSS");
const li3 = React.createElement('li', {}, "JS");

// ✅ ab saare element ko ek saath array ki form me send krege
const ul = React.createElement(
  'ul',
  { backgroundColor: "red", color: "white", fontSize: "30px" },
  [li1, li2, li3]  // ✅ Children as array
);

// ul ke li1 sabhi children hai to usse append krna padega
// uske innerText me change nahi kar skte kyki wah children hai 

const root = document.getElementById('root');

// ✅ yah pe hmne khud ka fn bna diya 
ReactDom.render(header1, root);
ReactDom.render(header2, root);
ReactDom.render(ul, root);

// ✅ Naya task aapko list ko append krna hai 
// ul 
// html css js  ko list me

// ============================================
// ❌ Pura manual DOM manipulation ka traditional way
/*
const header = document.createElement('h1');
header.innerText = "Hellow React";
header.style.backgroundColor = "blue";
header.style.fontSize = "30px";
header.style.color = "white";

const header1 = document.createElement('h2');
header1.innerText = "Aur bhai kya haal chal ";
header1.style.backgroundColor = "black";
header1.style.fontSize = "30px";
header1.style.color = "white";

const root = document.getElementById('root');
root.append(header);
root.append(header1);

// ➕ Agar ek aur element create krna ho to same code repeat karna padega
// ➕ Isiliye ek common reusable function banana best practice hoti hai
*/
