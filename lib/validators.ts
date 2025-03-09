import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';


// z object for two decimal places
const currency =  z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))), 'Price must have exatcly 2 decimal points.')



// Schema for inserting Products
export const insertProductsSchema = z.object({
    name: z.string().min(3,  'Name must be 3 characters long'),
    slug: z.string().min(3,  'Slug must be 3 characters long'),
    category: z.string().min(3,  'Category must be 3 characters long'),
    brand: z.string().min(3,  'Brand must be 3 characters long'),
    description: z.string().min(3,  'Description must be 3 characters long'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must have at least One Image'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency
});