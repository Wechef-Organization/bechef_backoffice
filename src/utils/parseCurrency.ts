const parseCurrency = (value: string): number => {
    const cleaned = value
        .replace(/\s/g, "")
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".");

    const numericValue = parseFloat(cleaned);

    if (isNaN(numericValue)) {
        throw new Error("Valor monetário inválido");
    }

    return numericValue;
};

export default parseCurrency;
