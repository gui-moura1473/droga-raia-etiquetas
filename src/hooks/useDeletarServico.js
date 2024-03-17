import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"

export const useDeletarServico = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deletaServico,
        onSuccess: () => {
            queryClient.invalidateQueries(['servicos-data'])
        }
    })

    return mutate
}

const deletaServico = (id) => {
    const servicoDeletado = axios
        .delete(`https://drogaraiaetiquetas-api-beige.vercel.app/api/servicos/${id}`)
        .then(() => toast.success("Serviço deletado com sucesso!"))
        .catch(() => toast.error("Falha ao cadastrar serviço!"))
    return servicoDeletado
}