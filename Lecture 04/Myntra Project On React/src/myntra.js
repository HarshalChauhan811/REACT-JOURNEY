import React , {useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/Card";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import arr from "./utils/dummy";
import {greet as greeta  , meet} from "./utils/dummy";
// export ke baad aap apne hisaab se name ko de skte hai 
// greet();
// meet();
// ek file me ek hi export default ho skta hai --> per aap multiple export lga skte hai 
// only exprort ke liye curly braces ko lgana padta hai 


// React kyu padhe --> react hamara more efficient tarike se DOM  ko manipulate krta hai hame apne UI pe focus rahna chahiye hame ye sochne ke need nahi hai ki DOM ko manipulate krna hai 





// Header component
function Header() {
  return (
    <div className="Heading">
      <img id="logo" src="https://images.indianexpress.com/2021/01/myntra.png" height="70px" width="70px" />  
      <div className="options">
        <button className="button">MEN</button>
        <button className="button">WOMEN</button>
        <button className="button">KIDS</button>
        <button className="button">HOME & LIVING</button>
        <button className="button">BEAUTY</button>
        <button className="button">STUDIO</button>
      </div>
      <input className="searchbar" placeholder="Search for products and brand and more" />
      <div className="profile">
        <button>Profiles</button>
        <button>Wishlist</button>
        <button>Bag</button>
      </div>
    </div>
  );
}

function Footer(){
  return (
   <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/3/27/a4720a50-1594-4b1f-aff8-10bffa17214b1743070164003-App-Install-Banner.jpg" type="image/webp" width="1600px"></img> 
  )
}



// App component
function App() {
 
  let [A, setA]=useState(arr);
  function sortPrice(){
    
    
    // array ko price ke base se sort krna hai 
   A.sort((a,b)=>a.price-b.price);
   // jaha jaha a  use waha waha data short kar do 
   // CHANGE NAHI HOGA KYUKI array by reference change hoga uske liye ek clone bnana hoga memory address store hoga 
   setA([...A]);  // duplicate array usko nayi memory location milega tab value update hoga 
  }

  function priceabove499(){
    const B = arr.filter((value)=>value.price>499);
    setA(B);
  }
  return (
    <>
      {/* header */}
      <Header />
      <button onClick={priceabove499}>Price above 499 </button>
      <button onClick={sortPrice}>Short by Price </button>
      <div className="middle" style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
        {A.map((value, index) => (<Card key={index} cloth={value.cloth} offer={value.offer} price={value.price} />   // array return krta hai ek ek krke saare card ko generate krke dega 
        ))}
      </div>
      {/* footer */}
      <Footer/>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App />);


// problem in this code 
// bhout sara code ek hi js file me code massy ho jayega 10000 line code ko kaise read krege wahi se module ka intro hota hai 
// module ka matlab alag alg componet ko alag alag file me rakh de 
// header , body , footer --> alag alg file me component ya module 






// ek fn jo header ko return krke dega 
    // body  -- card ko generate krna 
    // wrap krna next line pe 
    // card me props ke format me data bhej dena 


     /* <Card cloth="T-Shirt" offer="20-70%off"/>
     <Card cloth="Jeans" offer="30-40%off"/>
     <Card cloth="Pant" offer="50-60%off"/>
     <Card cloth="Shirt" offer="40-70%off"/>
     <Card cloth="kurta" offer="50-60%off"/>
     <Card cloth="T-Shirt" offer="40-60%off"/>
     <Card cloth="pant" offer="50-90%off"/>
     <Card cloth="Lower" offer="40-45%off"/>
     <Card cloth="T-Shirt" offer="90%off"/> */

    //  for loop nahi deta return 
    // arr. map ek result return krke dega wah result arrya ki format me hoga 
    // yaha pe react aapko error dega key property btana padta hai 
    // ek div ke multiple children hai to sabko ek unic key de isse react ka rendoring process optimize ho jata