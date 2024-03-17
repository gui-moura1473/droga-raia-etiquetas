import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const mountPhones = () => {
    const { filial } = useContext(AuthContext);

    if (filial.phone && filial.celphone) {
        return `${filial.phone} | ${filial.celphone}`
    } else if (filial.phone) {
        return `${filial.phone}`
    } else if (filial.celphone) {
        return `${filial.celphone}`
    }
}