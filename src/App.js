import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import axios from "axios";
import SahteVeri from "./Sahte_veri";
function App() {
  const dateNow=new Date();
  const [data,setData]=useState(SahteVeri);
  const [date,setDate]=useState(dateNow.toISOString().slice(0,10));
  
   useEffect(()=>{
    setData(null);
    axios.get(`https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
   .then((resolve)=>{
    console.log("sonuç:",resolve.data);
    setData(resolve.data);
   })
   },[date])
 console.log(data);
  return (
    <div className="App">
    {data?<Main date={date} setDate={setDate} data={data}/>:<p>Loading...</p>}
    </div>
  );
}

export default App;
