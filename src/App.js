import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideNav from "./Sidebar/SideNav";

const App = () => {
  return (
    <div>
      <Router>
        <SideNav />
      </Router>
    </div>
  );
};

export default App;
// import axios from 'axios'
// import React, { useState,useEffect } from 'react'

// const App = () => {
//  const [goods,setGoods]=useState([])
//  const invertoryGoods=[]
//  useEffect(()=>{
// getApi()
//  },[])
//  const getApi=async()=>{
// const response=await axios.get('http://test.api.boxigo.in/sample-data/')
// invertoryGoods=response.data.Customer_Estimate_Flow.map((ele)=>setGoods(ele.items.inventory))
//  }
//   return (
//     <div>
   
//     <div className="accordion" id="accordionFlushExample">
//     {
//       goods.map((items,index)=>{
//   return(
//     <div className="accordion-item" key={index}>
//     <h2 className="accordion-header">
//       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false"  aria-controls={`collapse${index}`}>
//       <h1>{items.displayName}</h1>
//       </button>
//     </h2>
//     <div id={`collapse${index}`}className="accordion-collapse collapse" data-bs-parent="#accordionExample"    aria-labelledby={`heading${index}`}>
//       <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore quasi voluptas labore cumque eos corporis quaerat quam doloribus maxime, voluptatibus, ipsam sequi eaque ducimus molestias magnam minima quas animi?</div>
//     </div>
//   </div>
//   )
// })
//       }
//     </div>

//     </div>
//   )
// }

// export default App
