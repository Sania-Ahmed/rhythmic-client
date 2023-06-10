import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {user} = useContext(AuthContext) ;
    const [axiosSecure] = useAxiosSecure() ;
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
      queryKey : ['isInstructor', user?.email],
      queryFn: async () => {
          const res = await axiosSecure(`/users/instructor/${user?.email}`)
  
          return res.data ;
      }
    })
  
    return [isInstructor, isInstructorLoading] ;
}

export default useInstructor ;