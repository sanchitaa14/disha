import { useEffect, useState } from 'react'
import axios from "../../axios"
import React from 'react'
import avatar from '../Images/img_avatar.png'
import './Guide.css'
import Card from '../Card/Card';
//note map works only for arrays no for objects
export default function Guide() {
 //in this empty array we can write a dependency i.e change will only occur when we see that change in dependency
//useEffect runs the function before rendering
const[guideInfo, setGuideInfo] = useState("");

useEffect(()=> {
  const fetchdata = async () => {
    const data = await axios.get("/models/guideIndo/get");
    console.log('products>>>>', data);
  };
  fetchdata();
},[])//empty bracket of dependency so it reloads everytime
  return (
    <div className='guide'>
        <div className='container'>
        {
  guideInfo && guideInfo.data.map((guideInfo) => (
    <Card 
      key={guideInfo._id} // Add a unique key for each Card component
      name={guideInfo.name}
      image={guideInfo.image}
      price={guideInfo.price}
      description={guideInfo.description}
      location={guideInfo.location} /* Fix the property name here */
      number={guideInfo.number}
    />
  ))
}

              
               
              
               
        </div>
    </div>
  )
}
