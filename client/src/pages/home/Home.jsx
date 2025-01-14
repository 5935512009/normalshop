import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Home() {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        axios
            .get("https://6785ea41f80b78923aa4c127.mockapi.io/Transceiver_location")
            .then((res)=>{
                // console.log(res.data);
                setItems(res.data);
            })
    },[])
  return (
    <div>
      home
      <div>
        {items.map((item,index)=>(
            <ul key={index}>
                <p>serial : {item.serial}</p>
                <p>hostname :{item.hostname}</p>
                <p>type : {item.type}</p>
                <p>brand : {item.brand}</p>
                <p>port : {item.port}</p>
                ------------------
            </ul>
        ))}
      </div>
    </div>
  )
}

export default Home
