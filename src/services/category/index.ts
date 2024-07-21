"use server";
import { endPoint } from "../api";
import { cookies } from "next/headers";
import { Message } from "../auth";
import type { Product } from "../product";
export interface Category {
  id?: number;
  name: string;
  image: string;
  products?: Product[];
}
export async function findAll(): Promise<Category[]> {
  const categories: Category[] = [];
  const response = await fetch(`${endPoint.category.findAll}`);
  const data = await response.json();

  data.map((category: Category) =>
    categories.push({
      id: category.id,
      name: category.name,
      image: category.image,
    })
  );
  return categories;
}

export async function getOneById(id: number): Promise<Category | Message> {
  try {
    const cookiesState = cookies();
    const token = cookiesState.get("accessToken")?.value;
    const response = await fetch(endPoint.category.findOne(id), {
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
    const category: Category = {
      id: jsonData.id,
      name: jsonData.name,
      image: jsonData.image,
      products: jsonData.products.map((data: any) => ({
        ...data,
        images: data.images?.image_one,
      })),
    };
    return category;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function create(formData: FormData): Promise<boolean | Message> {
  try {
    const cookiesState = cookies();
    const token = cookiesState.get("accessToken");

    const response = await fetch(endPoint.category.create, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
      body: formData,
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

export async function update(category: Category): Promise<boolean | Message> {
  try {
    const cookiesTate = cookies();
    const token = cookiesTate.get("accessToken")?.value;
    const { id, ...rest } = category;
    const response = await fetch(endPoint.category.update(category.id!), {
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
