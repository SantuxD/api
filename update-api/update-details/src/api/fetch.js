export const fetchdata = async () => {
   const response = await fetch('https://mocki.io/v1/5d935df3-2a71-4dd3-ba74-009fa1b36b96')
   const resdata = await response.json()
   //console.log(resdata)
   return resdata;
}