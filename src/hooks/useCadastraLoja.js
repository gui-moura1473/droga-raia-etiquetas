import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"
import toast from "react-hot-toast";

export const useCadastraLoja = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createNovaLoja,
        onSuccess: () => {
            queryClient.invalidateQueries(['lojas-data'])
        }
    })
    return mutate;
}

const createNovaLoja = (data) => {
    const novaLoja = axios
        .post(`${import.meta.env.VITE_API_URL}api/lojas`, data)
        .then((res) => res)
        .then(() => toast.success("Serviço cadastrado com sucesso!"))
        .catch(() => {
            toast.error("Falha ao cadastrar serviço!")
        });
    return novaLoja;
}