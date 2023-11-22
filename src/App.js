import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import axios from "axios";
function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
  axios.get("https://api.nasa.gov/planetary/apod?api_key=3fLdxkWL6qRPZYfFs3QAzAvrEcLJf0ZQdOdQqLxw")
  .then((resolve)=>{
   console.log("sonuç:",resolve.data);
   setData(resolve.data);
  })
  },[])
  return (
    <div className="App">
       <Main data={data}/>
    </div>
  );
}

export default App;
