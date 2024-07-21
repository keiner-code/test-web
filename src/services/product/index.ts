"use server"
import { cookies } from "next/headers";
import { endPoint } from "../api";
import { Message } from "../auth";

export interface Product {
  id?: number;
  imagesId: number;
  categoryId: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  amount: number;
  images?: string
}

export async function getAll (
  limit?: number,
  offset?: number
): Promise<Product[]> {
  const products: Product[] = [];
  try {
    const response = await fetch(
      `${endPoint.products.findAll(limit, offset)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    
    for (let product of data) {
      products.push({
        id: product.id,
        imagesId: product.imagesId,
        categoryId: product.categoryId,
        title: product.title,
        description: product.description,
        oldPrice: product.oldPrice,
        price: product.price,
        amount: product.amount,
        images: product.images.image_one
      });
    }
    return products;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function getOneById(id: number): Promise<Product | Message> {
  try {
    const cookiesState = cookies();
    const token = cookiesState.get("accessToken")?.value;
    const response = await fetch(endPoint.products.findOne(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const jsonData = await response.json();

    if ((jsonData as Message).message != null) {
      const { message, error, statusCode } = jsonData;
      return { message, error, statusCode };
    }
    const product: Product = {
      id: jsonData.id,
      imagesId: jsonData.imagesId,
      categoryId: jsonData.categoryId,
      title: jsonData.title,
      description: jsonData.description,
      oldPrice: jsonData.oldPrice,
      price: jsonData.price,
      amount: jsonData.amount,
    };
    return product;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function create(product: Product): Promise<boolean | Message> {
  try {
    const cookiesState = cookies();
    const token = cookiesState.get('accessToken')?.value;
    const response = await fetch(endPoint.products.create, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();
    if ((data as Message).message != null) {
      const messajeError: Message = {
        error: data.error,
        message: data.message,
        statusCode: data.statusCode,
      };
      return messajeError;
    }
    return true;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function update(product: Product): Promise<boolean | Message> {
  try {
    const cookiesTate = cookies();
    const token = cookiesTate.get("accessToken")?.value;
    const { id, ...rest } = product;
    const response = await fetch(endPoint.products.update(product.id!), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(rest),
    });
    const data = await response.json();
    if ((data as Message).message != null) {
      const messajeError: Message = {
        error: data.error,
        message: data.message,
        statusCode: data.statusCode,
      };
      return messajeError;
    }
    return true;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
