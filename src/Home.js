import "./Home.css"
import React,{useState} from 'react'
import {db} from "./firebase"
import {v4 as uuidv4} from "uuid"
import {IconButton} from "@material-ui/core"
import {Send} from "@material-ui/icons"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Home = () => {
    const [url, setUrl] = useState("");
 
 
    const handleFormSubmit = async(e) => {
        e.preventDefault();
        let code = uuidv4();
       await db.collection("urls").add({
            url: url,
            code: code
        });
        alert("Your Shortened URL- http://localhost:3000/l/"+code);
        console.log(url);
 }
    return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <div className="home">
            <h1>URL <span>Scissor</span></h1>
            <input type="url" 
            value={url} 
            onChange={(e)=>setUrl(e.target.value)} 
            placeholder="Enter your URL here..." />
           <IconButton type="submit" variant="contained" color="primary">
            <Send/>
           </IconButton>
            
           </div>
        </form>
    </div>
  )
}

export default Home
