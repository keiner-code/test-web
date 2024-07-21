"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { loginUser, Message } from "@/services/auth";
interface FormUser {
  email?: string;
  password?: string;
  error?: Message;
}
interface LoginState {
  setUser: (user: User) => void
}

export interface User {
  id?: string;
  email: string;
  name: string;
  lastName: string;
  photo: string;
  role: string;
  password?: string
}
const initialValueUser: FormUser = {
  email: "angieZafra@mail.com",
  password: "angieZafra",
};
export default function Login({setUser}: LoginState) {
  const [userForm, dispatch] = useState<FormUser>(initialValueUser);

  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      userForm.email == undefined ||
      (userForm.email == "" && userForm.password == "") ||
      userForm.password == undefined
    ) {
      dispatch({
        error: {
          message: "Por favor ingrese los datos",
          error: "Sin datos",
          statusCode: 0,
        },
      });
      return null;
    }
    try {
      const response: User | Message = await loginUser(
        userForm.email,
        userForm.password
      );
      if ((response as Message).message !== undefined) {
        const status = response as Message;
        dispatch({
          error: {
            error: status.error,
            message: status.message,
            statusCode: status.statusCode,
          },
        });
        return null;
      }
      dispatch({error: {error: '',message: '',statusCode: 0}});
      const user = response as User;
      setUser(user);
    } catch (error) {
      console.log(error);
      
      dispatch({
        error: {
          error: "¡Ups algo salio mal!",
          message: "Error de conexion",
          statusCode: 404,
        },
      });
      throw new Error(`error => ${error}`);
    }
  };
  return (
    <div className="w-48">
      <h1 className="text-center text-lg font-semibold">Iniciar Session</h1>
      <div className="flex justify-center py-2">
        <FaUser className="text-5xl" />
      </div>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="correo">Correo</label>
          <input
            className="pl-1 w-full rounded-md h-7 outline-none bg-gray-500"
            type="email"
            placeholder="Ingrese El Correo"
            value={userForm.email}
            onChange={(e) => dispatch({ ...userForm, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            className="pl-1 w-full rounded-md h-7 outline-none bg-gray-500"
            type="password"
            placeholder="Ingrese El Contraseña"
            value={userForm.password}
            onChange={(e) =>
              dispatch({ ...userForm, password: e.target.value })
            }
          />
        </div>
        <div className="text-center py-4">
          <button
            type="submit"
            className="bg-emerald-500 px-2 text-lg font-semibold rounded-md shadow-lg"
          >
            Login
          </button>
        </div>
      </form>
      <span className="text-sm text-center w-full block text-red-400">
        {userForm.error?.message}
      </span>
    </div>
  );
}
