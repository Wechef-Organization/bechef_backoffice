export interface Product {
    id: number,
    image: string,
    name: string,
    category: string,
    mark: string,
    stock: number,
    value: number,
    profit: number,
    status: boolean,
};

export interface Coupon {
    id: number,
    name: string,
    value: number,
}
