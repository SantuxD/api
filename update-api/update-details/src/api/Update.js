export const Updatedata = async()=>{
     const response = await fetch("http://localhost:3000/users",{
        method : "PUT"
        
    } )
     return await response.json();
}