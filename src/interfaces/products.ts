export interface Product {
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
};

export interface Coupon {
    id: number,
    name: string,
    value: number,
}