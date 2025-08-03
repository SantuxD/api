export const randomuser = async () => {
     const response = await fetch("https://randomuser.me/api/")
     return await response.json();

}