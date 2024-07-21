"use server"
import { User } from "@/containers/pages/Login";
import { endPoint } from "../api";
import { cookies } from "next/headers";
export interface Message{
  message: string | string[];
  error: string;
  statusCode: number
}

export async function loginUser(email: string, password: string): Promise<User | Message> {
  const response = await fetch(`${endPoint.auth.login}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();

  if((data as Message).error != undefined) return data;

  const user: User = {
    email: data.user.email, 
    name: data.user.name, 
    lastName: data.user.lastName, 
    photo: data.user.photo, 
    role: data.user.role
  };
  createToken(data.access_token);
  return user;
}

function createToken(token: string) {
  const cookieStore = cookies();
  cookieStore.set("accessToken", token, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict'
  });
}
