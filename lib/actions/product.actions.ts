'use server'

import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";




// get latest Prosucts
export async function getLatestProducts() {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: 'desc'}
    })

    return convertToPlainObject(data);
};


//  get products by it's slug
export async function getProductbySlug(slug: string){
    return await prisma.product.findFirst({
        where: { slug:slug}
    })
}