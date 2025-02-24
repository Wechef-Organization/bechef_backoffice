export interface MetricCardsProps {
    title: string;
    value: number;
    percentage?: number | undefined;
};

export interface Ingredients {
    id: number,
    image: string,
    title: string,
    quantity: number,
    value: number,
}

export interface Recipie {
    id: number,
    image: string,
    description: string,
    nick_name: string,
    user_image: string,
    total: number,
    ingredients: Ingredients[],
};

export interface Order {
    id: number,
    date: string,
    client: {
        name: string,
        image: string,
    },
    address: string,
    items_number: number,
    value: number,
    freight: number,
    status: string,
    recipies: Recipie[],
};