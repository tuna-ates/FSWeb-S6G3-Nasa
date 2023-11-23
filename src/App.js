import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import axios from "axios";
import SahteVeri from "./Sahte_veri";
function App() {
  const [data,setData]=useState(SahteVeri);
  // useEffect(()=>{
  //  axios.get("https://api.nasa.gov/planetary/apod?api_key=3fLdxkWL6qRPZYfFs3QAzAvrEcLJf0ZQdOdQqLxw")
  // .then((resolve)=>{
  //  console.log("sonuç:",resolve.data);
  //  setData(resolve.data);
  // })
  // },[])
 console.log(data);
  return (
    <div className="App">
       <Main data={data}/>
    </div>
  );
}

export default App;
