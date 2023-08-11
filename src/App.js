import { useState } from "react";
import Create from "./Component/Create";
import Show from "./Component/Show";

// import {nanoid} from "nanoid";

function App() {

  // const [name, setName] = useState("John doe")
    
  //   const clickhandler = ()=>{
  //    // name = "Anney doe";
  //    setName("Anny doe")
  
  //   }
  //   return(
  //     <div>
  //       <h1>{name}</h1>
  //       <button onClick={clickhandler}>Change name</button>
  //     </div>
  //   )


    //    const [data, setData] = useState("Lorem lodu")
    //    const [toggle,setData2] = useState(true)
     
    //   const togglehandler = ()=>{

    //    if(toggle===true){
    //     setData2(false)
    //    }  else{
    //     setData2(true)
    //    }
       
    // }
    // return(
    //   <div>
        
    //     {toggle ? <h1>Lorem lodu</h1>: " "}
    //     <button onClick={togglehandler}>Toggle</button>
    //   </div>
    // )

    // const [data, setData] = useState("Lorem lodu")
    //    const [toggle,setData2] = useState(true)
     
    //   const togglehandler = ()=>{

    //    if(toggle===true){
    //     setData2(false)
    //    }  else{
    //     setData2(true)
    //    }
       
    // }
    // return(
    //   <div>
        
    //     {toggle ? <h1>Lorem lodu</h1>:<h1> bhg bc</h1>}
    //     <button onClick={togglehandler}>Toggle</button>
    //   </div>
    // )

      // const id = nanoid();
      // const title = e.target[0].value;
      // const url = e.target[1].value;
      // console.log(title)
      // console.log(author)
      // console.log(image)
      
      
      const [gallery,setGallery] = useState("");

    
   
    return (
      <div>
       <Create gallery ={gallery} setGallery={setGallery}/>
        
        <hr className="container"/>
        
         <Show gallery={gallery} setGallery={setGallery}/>
      </div>
    )
       
}

export default App;
