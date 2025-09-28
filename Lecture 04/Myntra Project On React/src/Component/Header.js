// yaha se bhi export kar skte hai 
export default function Header() {
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