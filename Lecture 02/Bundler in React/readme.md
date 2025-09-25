# 📦 Lecture 02: Bundler in React — Quick Notes

---

## ⚛️ React Basics

### React.createElement with ID, Class & Style
```js
const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "Saurav",
    style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
  },
  "Hellocoder Army"
);
Render Element
js
Copy code
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
Rendering Another Element Replaces Old One
js
Copy code
const element2 = React.createElement(
  "h1",
  {
    id: "second",
    className: "Saurav",
    style: { backgroundColor: "black", fontSize: "30px", color: "white" },
  },
  "majaa aaya mujhe"
);
root.render(element2);  // replaces previous element
Render Multiple Elements Together
js
Copy code
const parent = React.createElement("div", {}, element, element2);
root.render(parent);
✨ JSX vs createElement()
JSX = HTML-like syntax in JS, easier to read & maintain

Babel converts JSX to React.createElement behind the scenes

Example JSX:

jsx
Copy code
const element = (
  <div>
    <h1>Hello React</h1>
    <p>majaa aaya mujhe</p>
  </div>
);
🏗️ Hosting React Project Without Bundler — Problems
Large file size (comments, spaces)

Slow loading from CDN

Full React & ReactDOM load unnecessary

🛠️ Bundler — Solution!
What is Bundler?
Tool that bundles JS, CSS, assets → smaller, optimized files → faster loading

Popular Bundlers
Tool	Feature
Webpack	Most used & flexible
Parcel	Zero-config, easy
Vite	Fast dev server
ESBuild	Ultra-fast bundling

⚙️ Setup with Parcel
Initialize project

bash
Copy code
npm init
# or
npm init -y
Install Parcel

bash
Copy code
npm install parcel
Install React & ReactDOM

bash
Copy code
npm install react react-dom
📦 NPM Overview
NPM = Node Package Manager, hosts JS packages

Packages like React, Parcel, TypeScript available

package.json = project metadata + dependencies

package-lock.json = exact installed versions

🔍 Why Multiple Packages with Parcel?
Parcel depends on many internal packages (Babel, compilers), all installed inside node_modules.

🔢 Versioning in NPM
Format	Meaning
18.2.3	Exact version
^18.2.3	Minor & Patch updates
~18.2.3	Patch updates only

🧹 GitHub Best Practices
Do NOT upload node_modules/ (too heavy)

Upload only:

index.html

script.js / App.js

package.json

package-lock.json

To restore packages, run:

bash
Copy code
npm install
🔥 Summary Table
Concept	Notes
React.createElement	Manual element creation
JSX	Cleaner UI syntax
render()	Renders latest content only
Bundler	Optimizes & bundles files
Parcel	Easy-to-use bundler
npm init	Creates package.json
npm install parcel	Installs Parcel & dependencies
React install	Installs React & ReactDOM
package.json	Lists dependencies
package-lock.json	Locks exact versions
GitHub	Avoid pushing node_modules
npm install	Restores all dependencies
Versioning	Semantic versioning (Major.Minor.Patch)

💡 Pro Tip
Add node_modules/ to .gitignore for cleaner repos.