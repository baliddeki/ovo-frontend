import z from "zod";

export type Product = {
    id: string,
    name: string,
    quantity: number,
    price: string,
    category: string,
    brand: string,
    gender: string;
    size: string;
    availability: string,
    date: Date;
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

export const productSchema = z.object({
    productName: z.string().min(4).max(20),
    category: z.string(),
    gender: z.string(),
    quantity: z.number(),
    price: z.string(),
    size: z.string(),
    date: z.date(),
    description: z.string(),
    brand: z.string(),
    availability: z.string(),
    image: z.string(),
})