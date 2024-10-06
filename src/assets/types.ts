export type Product = {
    id: string,
    name: string,
    quantity: number,
    price: string,
    category: string,
    brand: string,
    availability: string,
    totalSales: string,
    image: string;
}

export type Order = {
    id: string;
    product: string,
    customer: string;
    price: string;
    deliveryDate: string;
    image: string;
}

export type Brand = {
    id: string;
    name: string;
    country: string;
    established: number;
    category: string;
};
