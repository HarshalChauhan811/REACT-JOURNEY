# Mini React Library - Lecture 01 (Part 1)

## What is React?  
React एक JavaScript library है जो UI बनाने के लिए use होती है, खासकर Single Page Applications (SPAs) में।  
यह JavaScript का हिस्सा है, कोई अलग language नहीं।  

## React की Approach  
- **Declarative:** UI कैसा दिखना चाहिए बस बताओ, React DOM को अपडेट करता है।  
- **Component-Based:** UI को छोटे components में बांटकर reuse और manage करो।  
- **Efficient:** कम code में ज्यादा काम, और React खुद performance optimize करता है।  

## Vanilla JS vs React  
Vanilla JS में manual DOM manipulation करना पड़ता है, जिससे code लंबा और repetitive हो जाता है।  
React इसे आसान, structured और तेज बनाता है।  
**Analogy:** C++ में raw arrays की जगह STL vectors जैसे, React भी plain JS का बेहतर विकल्प है।  

## Mini React Library Features  

### 1. `createElement` Function  
- HTML elements dynamically बनाता है।  
- Arguments: tag, styles, children।  
- Styles apply करता है और children attach करता है।  

### 2. `render` Function  
- DOM में element inject करता है।  
- `ReactDOM.render(element, root)` से element को root में add करता है।  

## Usage Example  
```js
const header1 = React.createElement('h1', { fontSize: '30px', backgroundColor: 'blue', color: 'white' }, 'Hello Coder Army');
const header2 = React.createElement('h2', { fontSize: '25px', backgroundColor: 'black', color: 'white' }, 'Kaise Ho Aap Sab Log');

const li1 = React.createElement('li', {}, 'li1');
const li2 = React.createElement('li', {}, 'li2');
const li3 = React.createElement('li', {}, 'li3');

const ul = React.createElement('ul', { fontSize: '25px', backgroundColor: 'black', color: 'white' }, [li1, li2, li3]);

const root = document.getElementById('root');
ReactDOM.render(header1, root);
ReactDOM.render(header2, root);
ReactDOM.render(ul, root);



// Why Build Your Own Mini React?

खुद React जैसा library बनाकर concepts को बेहतर समझो।

React पहले से complex cases handle करता है।

Facebook, Instagram, Netflix जैसे बड़े platforms React use करते हैं।

छोटे projects के लिए custom reusable functions efficient होते हैं।

// Summary
Topic	Description
React	JS library for dynamic, reusable UIs
Approach	Declarative, component-based, efficient
createElement	Creates styled HTML elements
render	Injects elements into DOM
Use Case	Used by Facebook, Instagram, Netflix
Learning	Mastery comes from understanding core logic