import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './home.css'
function Home() {
    const [items,setItems] = useState([]);
    
    const columns = [
        {field:'serial', header:'Serial'},
        {field:'hostname', header:'Hostname'},
        {field:'type', header:'type'},
        {field:'brand', header:'brand'},
        {field:'port', header:'port'},
    ]
    useEffect(()=>{
        axios
            .get("https://6785ea41f80b78923aa4c127.mockapi.io/Transceiver_location")
            .then((res)=>{
                // console.log(res.data);
                setItems(res.data);
            })
    },[])
  return (
    <di className="home_main">
      <div className='card'>
            <DataTable value={items} tableStyle={{ minWidth: '50rem' }} >
                {columns.map((item,index)=>(
                    <Column key={index} field={item.field} header={item.header}></Column>
                ))}
            </DataTable>
      </div>
    </di>
  )

}

export default Home
