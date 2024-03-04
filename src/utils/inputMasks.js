export const currencyMask = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.target.value = value;
    return e;
};

export const phoneMask = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value
}

export const cpfMask = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
    return value
}