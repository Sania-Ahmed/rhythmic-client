// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const usePayments = () => {
    const {user, loading} = useContext(AuthContext)
    const {data: AllPayments = [], isLoading, refetch} = useQuery({
        queryKey: ['payments'],
        enabled: !loading,
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/payments/${user?.email}`);
            return res.json();
        }
    })

    return [AllPayments, isLoading, refetch]

}

export default usePayments ;