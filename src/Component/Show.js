import React from 'react'
import loader from "../assets/loader.gif";

const Show = (props) => {
    console.log(props);
    const{gallery, setGallery} = props;


    const DeleteHandler =(index) => {
        const copygallery =[...gallery];
        copygallery.splice(index);
        setGallery(copygallery);
      }

      let cardlist =(
        <p className="text-center w-100 ">
           <img className="loadder mt-1 -prt" width={800} src={loader} alt="" />
           <div>
          <h1 className="text-center text-danger ">Empty Gallery !!</h1>
          </div>
        </p>
      );
      
      
    if(gallery.length> 0){
        cardlist = gallery.map((card, index) => (
          <div key={index} className="card" style={{width:200}}>
            <img src={card.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                 <p className="card-text d-flex justify-content-between aling-items-center">
                  <span>
                  {card.title} <br/>
                  {card.author}
                  </span>
                  <i onClick={()=> DeleteHandler(index)} 
                 
                  className ="fs=4 text-Dark ri-delete-bin-line">
                    
                  </i>
                 
                 </p>
            </div>
          </div>
        ))
       }
  

  return (
   <div className="container d-flex flex-wrap" >
       {cardlist}
   </div>
  )
}

export default Show;