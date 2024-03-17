import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"

export const useGetLojas = () => {
    const query = useQuery({
        queryFn: getLojas,
        queryKey: ['lojas-data'],
        refetchOnWindowFocus: false,
        retry: false
    })

    return query;
}

const getLojas = () => {
    const lojas = axios
        .get(`https://drogaraiaetiquetas-api-beige.vercel.app/api/lojas`)
        .then((res) => res.data)
        .catch(() => {
            toast.error("Erro ao buscar as lojas")
        });
    return lojas;
}