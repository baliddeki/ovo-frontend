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

export const loginSchema = z.object({
    email: z.string({
        required_error: "Name is Required"
    }),
    password: z.string({
        required_error: "Password is Required"
    }),
})

export const signupSchema = z.object({
    firstName: z.string({
        required_error: "Please provide First Name"
    }),
    lastName: z.string(),
    email: z.string({
        required_error: "Name is Required"
    }),
    password: z.string({
        required_error: "Password is Required"
    }),
    confirmPassword: z.string(),
})

export const createUserSchema = z.object({
    firstName: z.string({
        required_error: "Please provide First Name"
    }),
    lastName: z.string(),
    email: z.string({
        required_error: "Name is Required"
    }),
    password: z.string({
        required_error: "Password is Required"
    }),
    confirmPassword: z.string(),
    addProduct: z.boolean(),
    upDateProduct: z.boolean(),
    deleteProduct: z.boolean(),
})

export type Customers = {
    id: string;
    email: string;
    firstName: string,
    lastName: string,
    password: string;
    permissions: {
        "add-product": boolean;
        "update-product": boolean;
        "delete-product": boolean;
    }
}