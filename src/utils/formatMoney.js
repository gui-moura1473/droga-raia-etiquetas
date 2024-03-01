export const formatMoney = (value) => {
  return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
};

export const deformatMoney = (value) => {
  return parseFloat(value.replace(/[^\d,]/g, "").replace(",", "."));
};
