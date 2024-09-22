import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://icef-backend.vercel.app'
    baseURL:'http://localhost:5002'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;