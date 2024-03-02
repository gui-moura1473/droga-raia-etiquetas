export const formatMoney = (value) => {
  return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
};

export const formatMoneyEditServico = (value) => {
  return value >= 10 ? `R$ ${value.toFixed(2).toString().replace(".", ",")}` : `R$ 0${value.toFixed(2).toString().replace(".", ",")}`;
}

export const deformatMoney = (value) => {
  return parseFloat(value.replace(/[^\d,]/g, "").replace(",", "."));
};
