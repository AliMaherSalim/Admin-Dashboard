import axios from "axios";




export const axiosInstance = axios.create({
    baseURL: "https://zombie-hat.herokuapp.com", 
    withCredentials: true,
});





