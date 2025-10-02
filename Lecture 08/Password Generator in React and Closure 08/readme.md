<!-- state variable kitne hai  -->
<!-- ui me kya kya change ho rha hai usse pta chal jayega  -->


<!-- onChange={(e)=>setlength(e.target.value)} --> // isse lenght me value change hogi icrease decrease pe 
// password generator ko 4 fn call kar skte hai 

<!-- <input type="checkbox" defaultChecked={numberChanges} onChange={()=>setnumberchange(!numberChanges)}></input>
     <label>Number</label>
 -->   phle deafult me check nahi hai lekin jab button e click hota hai tab wah false ka true kar dega 


 <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
     <label>Length {length}</label>    
     <!-- e me jitna length hoga obj me store ho jayega usse obj or e.target.value se access kar skte hai  -->
     isse aapko pta chalega ki range ki value ko kaha pe stop kiya hai 



<!-- ham chahte hai ki jab length change ho tab password change ho uske according tab ham dependency array me length ko put kar dege jab length wala change hoga tab useEffect call ho jayega  -->
useEffect(()=>{
    generatepassword();  // ab isse call krne pe infinite me nahi jayega last me execute ho jayega 
  },[]);  // dependanct array empty hai to ek bhi chalega initial me hi 
  // yah tab chalega jab iske andar koi value hogi jo future me kabhi change hogi tab chalega 



<!-- generete pass ko call kiya to heap me memory milegi  -->
<!-- agar dubara call krte hai dubara memory allocate hogi   jisse execute hone me time lagega  -->

<!-- ham chate hai ki yah purana wala memory hi use kar le jo phle baar me create hua hai jiise memory allocate ka time bache  -->


 function generatepassword(){
    let str="abcdefgijklmnopqrstuvwxwzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(CharacterChanges){
      str+="0123456789";
    }
    if(CharacterChanges){
      str+="+-@#$~!";
    }
    let pass= ""
    for(let i=0;i<length;i++){
     pass+=str [Math.floor(Math.random()*str.length)] 
    }
    setPassword(pass);
  }
  useEffect(()=>{
    generatepassword();  // ab isse call krne pe infinite me nahi jayega last me execute ho jayega 
  },[length,numberChanges,CharacterChanges]);  


  aapke code me bas setpassword(pass)  ko call kar rhe hai to sabko memory allocate krega dubara 
  // isse generatepassword ko chalana chahiye --> nahi 

  <!-- // setlegth setcharacterchanged setnumberchanged  me change nahi kar skte  -->
