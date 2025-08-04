import React, { useEffect, useState} from 'react'
import { fetchdata } from '../api/fetch'


const Fetchuserdetails = () => {

    const [userdata, setuserdata] = useState([])

    useEffect(() => {
      fetchdata().then((data)=> setuserdata(data))  
        
    
    }, [])
    

  return (
    <>
     <div>
        <h1>User Details</h1>
        {
            userdata ? userdata.map((data, index) =>(

                <li key={index}>{data.name}  {data.age} {data.email}</li>

            )):<p>No data find</p>
        }

     </div>
    </>
  )
}

export default Fetchuserdetails