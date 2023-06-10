import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
const useList = () => {
  const {user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure()

  const { isLoading, refetch, data: lists = [] } = useQuery({
    queryKey: ['lists', user?.email],
    queryFn: async () => {
        const response = await axiosSecure(`/lists?email=${user?.email}`)

        return response.data ;
    },
  })

  return [lists, isLoading , refetch] ;

}
export default useList ; 