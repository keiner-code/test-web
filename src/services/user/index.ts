"use server";
import { cookies } from "next/headers";
import { endPoint } from "../api";
import { User } from "@/containers/pages/Login";
import { Message } from "../auth";

export async function getAll(): Promise<User[]> {
  const users: User[] = [];
  try {
    const cookieState = cookies();
    const token = cookieState.get("accessToken")?.value;
    if (token == undefined) return [];

    const response = await fetch(`${endPoint.user.findAll}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    for (let user of data) {
      users.push({
        photo: user.photo,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      });
    }
    return users;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function getOneById(id: number): Promise<User | Message> {
  try {
    const cookiesState = cookies();
    const token = cookiesState.get("accessToken")?.value;
    const response = await fetch(endPoint.user.findOne(id), {
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
    const user: User = {
      id: jsonData.id,
      email: jsonData.email,
      lastName: jsonData.lastName,
      name: jsonData.name,
      photo: jsonData.photo,
      role: jsonData.role,
      password: jsonData.password,
    };
    return user;
  } catch (error) {
    throw new Error(`${error}`);
  }
}

export async function create(user: User): Promise<boolean | Message> {
  try {
    const response = await fetch(endPoint.user.create, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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

export async function update(user: User): Promise<boolean | Message> {
  try {
    const cookiesTate = cookies();
    const token = cookiesTate.get("accessToken")?.value;
    const { id, ...rest } = user;
    const response = await fetch(endPoint.user.update(parseInt(user.id!)), {
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
