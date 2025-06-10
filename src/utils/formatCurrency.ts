const formatCurrency = (value: string | number) => {
    const numericValue = typeof value === "string" ? parseFloat(value.replace(",", ".")) : value;

    if (isNaN(numericValue)) return "Valor inválido";

    return numericValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
};

export default formatCurrency