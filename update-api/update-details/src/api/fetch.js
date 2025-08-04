export const fetchdata = async () => {
   const response = await fetch("http://localhost:3000/users")
   const resdata = await response.json()
   //console.log(resdata)
   return resdata;
}