export const formatMoney = (value) => {
  return `R$ ${value.toFixed(2).toString().replace(".", ",")}`;
};

export const formatMoneyEditServico = (value) => {
  return value.toFixed(2).toString().replace('.', ',');
}

export const deformatMoney = (value) => {
  return parseFloat(value.replace(/[^\d,]/g, "").replace(",", "."));
};

export const formatedActualDate = () => {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = (dia.length == 1) ? '0' + dia : dia,
    mes = (data.getMonth() + 1).toString(),
    mesF = (mes.length == 1) ? '0' + mes : mes,
    anoF = data.getFullYear();
  return diaF + "/" + mesF + "/" + anoF;
}