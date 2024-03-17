import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"
import { deformatMoney } from "../utils/formatValues";

export const useEditarServico = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: editarServico,
        onSuccess: () => {
            queryClient.invalidateQueries(['servicos-data'])
        }
    })

    return mutate
}

const editarServico = (data) => {
    const formatedData = {
        name: data.name,
        price: deformatMoney(data.price),
        ean: data.ean
    }
    const servicoEditado = axios
        .put(`${import.meta.env.VITE_API_URL}api/servicos/${data._id}`, formatedData)
        .then(() => toast.success("Serviço editado com sucesso!"))
        .catch(() => toast.error("Houve algum erro ao tentar editar o serviço!"))

    return servicoEditado
}