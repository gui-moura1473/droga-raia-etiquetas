import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"
import toast from "react-hot-toast";

export const useEditaLoja = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: editLoja,
        onSuccess: () => {
            queryClient.invalidateQueries(['lojas-data'])
        }
    })
    return mutate;
}

const editLoja = (data) => {
    const lojaEditada = axios
        .put(`${import.meta.env.VITE_API_URL}api/lojas/${data._id}`, data)
        .then(() => toast.success("Serviço editado com sucesso!"))
        .catch(() => toast.error("Houve algum erro ao tentar editar o serviço!"));
    return lojaEditada;
}