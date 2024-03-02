import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"

export const useCadastrarServico = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: createNovoServico,
        onSuccess: () => {
            queryClient.invalidateQueries(['servicos-data'])
        }
    })

    return mutate
}

const createNovoServico = (data) => {
    const servicos = axios
        .post("https://drogaraia-etiquetas-api.cyclic.app/api/servicos", data)
        .then((res) => res)
        .then(() => toast.success("Serviço cadastrado com sucesso!"))
        .catch(() => {
            toast.error("Falha ao cadastrar serviço!")
        });
    return servicos
}


// https://drogaraia-etiquetas-api.cyclic.app/api/servicos