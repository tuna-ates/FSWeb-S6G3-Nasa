import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import axios from "axios";
import SahteVeri from "./Sahte_veri";
import Pick from "./layout/Pick";

function App() {
  const dateNow=new Date();
  const [data,setData]=useState(SahteVeri);
  const [date,setDate]=useState(dateNow.toISOString().slice(0,10));
  const [random,setRandom]=useState(false);
  
   useEffect(()=>{
    setData(null);
    const dataUrl=random?`https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3`:`https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;
    axios.get( dataUrl)
   .then((resolve)=>{
    //console.log("sonuç:",resolve.data);
    setData(resolve.data);
   })
   },[date,random])
 console.log(data);
  return (
    <div className="App">
    {random?<Pick items={data}/>:<Main setRandom={setRandom} date={date} setDate={setDate} data={data}/>}
    </div>
  );
}

export default App;
