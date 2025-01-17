import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext'; // สำหรับ Search Bar
import './home.css';

function Home() {
    const [items, setItems] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null); // สำหรับเก็บค่าจาก Search Bar

    const columns = [
        { field: 'serial', header: 'Serial' },
        { field: 'hostname', header: 'Hostname' },
        { field: 'type', header: 'Type' },
        { field: 'brand', header: 'Brand' },
        { field: 'port', header: 'Port' },
    ];

    useEffect(() => {
        axios
            .get("https://6785ea41f80b78923aa4c127.mockapi.io/Transceiver_location")
            .then((res) => {
                setItems(res.data);
            });
    }, []);

    return (
        <div className="home_main">
            <div className="card">
                {/* Search Bar */}
                <div className="table-header">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText
                            type="search"
                            placeholder="Search..."
                            onInput={(e) => setGlobalFilter(e.target.value)} // อัปเดตค่า globalFilter
                        />
                    </span>
                </div>

                {/* DataTable */}
                <DataTable
                    value={items}
                    paginator
                    rows={10} // จำนวนแถวที่แสดงต่อหน้า
                    globalFilter={globalFilter}
                    header="Transceiver Table"
                    tableStyle={{ minWidth: '50rem' }}
                >
                    {columns.map((item, index) => (
                        <Column
                            key={index}
                            field={item.field}
                            header={item.header}
                            sortable
                            filter

                        ></Column>
                    ))}
                </DataTable>
            </div>
        </div>
    );
}

export default Home;
