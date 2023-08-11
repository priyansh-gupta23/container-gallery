import React from 'react'
import { useState } from 'react';

const Create = (props) => {
  const [title,setTitle] = useState("");
  const [author,setAuthor] = useState("");
  const [image,setImg] = useState("");

  const {gallery,setGallery}= props;
    
    const SubmitHandler =(e) =>{
      e.preventDefault();
      if(!title.trim()||!author.trim()||!image.trim()){
        alert("Kuch toh likh Lavdey");
        return;
      }

      const newdata = {title,author,image};
      setGallery([...gallery,newdata]);
      setTitle("");
      setAuthor("");
      setImg("");

    }
  
  return (
    <div> <h1 className="p-5">Add Gallery📹 </h1>
    <form onSubmit={SubmitHandler} className="Container text-center mt-1 w-50 p-5 ml-5" >
    <input 
      className="form-control mb-3 fs-4"
      type="Text"
      placeholder="Title"
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      />

      <input 
      className="form-control mb-3 fs-4"
      type="Text"
      placeholder="Author"
      onChange={(e) => setAuthor(e.target.value)}
      value={author}
      
      />
      <input 
      className="form-control mb-3 fs-4"
      type="Text"
      placeholder="Image Url"
      onChange={(e) => setImg(e.target.value)}
      value={image}
 
      />

      <button className="fs-4 btn btn-success w-25">Add</button>
    </form></div>
  )
}

export default Create;