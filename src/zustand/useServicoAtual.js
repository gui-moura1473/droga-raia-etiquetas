import { create } from "zustand";

const useServicoAtual = create((set) => ({
    servicoAtual: null,
    setServicoAtual: (servicoAtual) => set({ servicoAtual })
}))

export default useServicoAtual;