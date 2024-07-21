"use server"
import { endPoint } from "../api";
import { cookies } from "next/headers";
import { Message } from "../auth";
export interface Image {
  id?: number;
  image_one: string;
  image_two: string;
  image_three: string;
  image_four: string;
}
export async function findAll(): Promise<Image[]> {
  const images: Image[] = [];
  const response = await fetch(`${endPoint.image.findAll}`, {});
  const data = await response.json();
  
  data.map((image: Image) =>
    images.push({
      id: image.id,
      image_one: image.image_one,
      image_two: image.image_two,
      image_three: image.image_three,
      image_four: image.image_four
    })
  );
  return images;
}

export async function getOneById(id: number): Promise<Image | Message> {
  try {
    const cookiesState = cookies();
    const token = cookiesState.get("accessToken")?.value;
    const response = await fetch(endPoint.image.findOne(id), {
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
    const image: Image = {
      id: jsonData.id,
      image_one: jsonData.image_one,
      image_two: jsonData.image_two,
      image_three: jsonData.image_three,
      image_four: jsonData.image_four
    };
    return image;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function create(formData: FormData): Promise<boolean | Message> {
  try {
    const cookiesState = cookies();
    const token = cookiesState.get('accessToken');
    
    const response = await fetch(endPoint.image.create, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token?.value}`,
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

/* export async function update(category: Category): Promise<boolean | Message> {
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
} */
