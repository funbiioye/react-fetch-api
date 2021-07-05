import React, { useState, useEffect } from 'react'

function FetchApi() {
    const [data, setData] = useState([]);
    const apiGet = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((json) => {
            console.log(json);
           setData(json);
         });
    };
    useEffect(() => {
      apiGet();
      
    }, []);
        
    return (
        <div >
            <span>
                <h2>My Api Fetch With React</h2><br />
                <div className="btn-div">
                    <button onClick ={apiGet()}>Users</button>
                </div>
                <br />
                {/* <pre>{JSON.stringify(data)}</pre> */}
            </span>
           
            <div>
                {data.map(item =>
                        <div className="item-container-div" key = {item.id}>
                            <div className="item-div-id">{item.id}</div>
                            <div className="item-div">{item.name}</div>
                            <div className="item-div">{item.phone}</div>
                            <div className="item-div">{item.username}</div>
                            <div className="item-div">{item.email}</div>
                            <div className="item-div">{item.address.street}</div>
                            <div className="item-div">{item.company.name}</div>
                        </div>
                        
                    )}
            </div>
        </div>
        
    );
  
}
export default FetchApi;