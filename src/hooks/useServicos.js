import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import toast from "react-hot-toast";

export const useServicos = () => {
    const query = useQuery({
        queryFn: getServicos,
        queryKey: ['servicos-data'],
        refetchOnWindowFocus: false,
        retry: false
    });

    return query
}

const getServicos = () => {
    const servicos = axios
        .get(`${import.meta.env.VITE_API_URL}api/servicos`)
        .then((res) => res.data)
        .catch(() => {
            toast.error("Falha ao buscar os serviços!")
        });
    return servicos
}