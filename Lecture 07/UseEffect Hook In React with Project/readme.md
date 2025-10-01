// useEffect hook(callback fn , dependency )

<!-- 1. agar dependancy array [color] diye to ek baar chalega  -->
 useEffect(()=>{
    console.log("useEffect executed ");
    document.body.style.backgroundColor=color;
   }, [color] );  // color me jab change hoga tabhi chalega  red hai phle se dubara red button pe click kiye to nahi chalega 

<!-- agar dependancy array [] kahli tab   chalega  hi nahi bas initial me chalega -->
 useEffect(()=>{
    console.log("useEffect executed ");
    document.body.style.backgroundColor=color;
   }, []);   // chalega hi nahi bas initial state me chalega ye 

<!-- agar  dependancy array diye hi nahi to har baar chalega jitni baar button click hua hai utni baar -->
   useEffect(()=>{
    console.log("useEffect executed ");
    document.body.style.backgroundColor=color;
   }, );      har baal chalega 


   <!-- useEffect important kyu hai padh kyu rahe hai isse  -->


   // twist --> agar return  me ek counter fn bna de to agar counter ko call krege to colordul wala bhi chalega then phir se memory allocate hogi 

//  function Main(){
//   const[count, setCount]= useState(0);

// return (
//   <>
//   <div classNmae="counter "></div>
//   <h1>Count is "{count } </h1>
//   <button onClick={(setCount)=>{count+1} }></button>
//   </>
// )
//  }     // parent me kuch bhi change krne pe child bhi chalega kyuki colorful fn call hai to use to hoga hi 

// jab bhi dom manipulation krna ho to hooks ka use krte hai taki pare


// bhaiya ham chate hai ki jab setcount wala execute ho tab colourful wala na chale uske liye useMemo hook ka use hota hai  jo usse fn call hone se bacha lega 

// export default React.memo(colorful) // ab yah count ko bolega ki jo tere uper changes hue hai mere uper mat la independent ho jayeg  child wala ab safe ho jayega 




<!-- useememo  -->
<!-- export default React.memo(Colorful); -->
// bhaiya mujhe memorize kar lo mere se tumhare uper koi fark nahi pad rha me independent hu mere se tumpe koi fark nahi pad rha hai 
// har jagah react. memo krne ki need nahi hai usme kuch portion hoga code ka jo aapke code ke saath attach hoga 
// isko tabhi use kre jab aapko lage ki parent ke uper bahut saare changes ho rhe hai cv=hhote changes pe use na kre 



// ek baar user ko dikha chuka hu props ka argu wah change nahi ho rha hai to baar baar user ko kyu dikhau isliye execute nahi ho rha hai 