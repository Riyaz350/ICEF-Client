import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRegistrations = () => {
    const axiosPublic = useAxiosPublic()
    const {data: registrations=[], refetch, isLoading:loading} =useQuery({
        queryKey:['registrations'],
        queryFn: async()=>{
                const res = await axiosPublic.get(`/registrationsData`)
                return res.data.data
        }
    })
    return [registrations, refetch, loading]
};

export default useRegistrations;