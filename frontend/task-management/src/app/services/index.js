import axios from "axios";
import * as services from "./services";

const getFullUrl = (url) => {
  return `http://localhost:4321/api/auth/${url}`;
};
const checkUserLogin = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:4321/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`, // Replace with your token
      },
    });
    console.log(response)
    // return response;
  } catch (error) {
    console.log(error)
  }

  // services.Get('http://localhost:4321/api/auth/profile',{headers: {
  //   Authorization: token
  // }}).then(response=>{
  //   console.log(response)
  // }).catch(error=>{
  //   console.log(error)
  // })
};
export { getFullUrl,checkUserLogin, services };
