const formatDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });
};

export default formatDate