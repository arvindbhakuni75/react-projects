import React,{useEffect, useState} from 'react';
import axios from 'axios';

function WithImg() {
    const [data, setData] = useState([])

   useEffect(()=> {
    fatchApi()
    console.log(data[1]?.name)
   },[]) 

   async function fatchApi () {
    
        let dataapi = await axios.get("http://localhost:5000/user")
        setData(dataapi.data)
      //  console.log(data)
   }

  return (
    <div>
       <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
        {
          data.map((item, i) => {
            return (
              <tr key= {i}>
                <td>{item.id}</td>
                <td className='imgbox'>{item.url}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            )
          })
        }

            
          
          
          
        </tbody>
      </table>
    </div>
  )
}

export default WithImg
