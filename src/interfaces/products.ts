export interface Product {
    id: number,
    photo: string,
    name: string,
    category: string,
    brand: string,
    stock: number,
    value: number,
    sales_profit: number,
    product_status: boolean,
};

export interface Coupon {
    id: string,
    name: string,
    value: string,
}
