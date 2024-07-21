"use client";
import { Message } from "@/services/auth";
import { create } from "@/services/user";
import { FormEvent, useState } from "react";
interface FormUser {
  email: string;
  lastName: string;
  name: string;
  photo: string;
  role: string;
  password: string;
}

export default function Create() {
  const [error, setError] = useState<Message>();

  const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target as HTMLFormElement);
    const user: FormUser = {
      email: form.get("email") as string,
      lastName: form.get("lastName") as string,
      name: form.get("name") as string,
      password: form.get("password") as string,
      photo:
        "https://img.freepik.com/vector-premium/diseno-avatar-persona_24877-38130.jpg",
      role: form.get("role") as string,
    };
    const response = await create(user);

    if (response != true) {
      const data = response as Message;
      setError({
        error: data.error,
        message: data.message,
        statusCode: data.statusCode,
      });
      return null;
    }
    setError({ error: "", message: ["Usuario Creado"], statusCode: 200 });
  };
  return (
    <>
      <h1 className="text-2xl p-3">Crear Usuario</h1>
      <div className="flex justify-center items-start w-full h-screen">
        <div className="w-1/3">
          <form onSubmit={handlerSubmit} className="flex flex-col gap-2">
            <div>
              <label htmlFor="">Nombres</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="text"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="">Apellidos</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="text"
                name="lastName"
              />
            </div>
            <div>
              <label htmlFor="">Correo</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="email"
                name="email"
              />
            </div>
            <div>
              <label htmlFor="">Roles</label>
              <select
                name="role"
                className="w-full h-10 bg-gray-700 rounded-lg outline-none"
              >
                <option value="">Selecione Un Rol</option>
                <option value="admin">Administrador</option>
                <option value="Gestion">Gestion</option>
                <option value="Normal">Normal</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Contraseña</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="password"
                name="password"
              />
            </div>
            <div>
              <label htmlFor="">Foto</label>
              <input
                className="w-full h-7 bg-gray-700 rounded-lg outline-none pl-1"
                type="file"
                name="photo"
              />
            </div>
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-green-700 px-4 py-1 rounded-lg shadow-xl"
              >
                Registrar
              </button>
            </div>
          </form>
          <div>
            <span>
              {Array.isArray(error?.message) &&
                error?.message.map((error: string) => (
                  <p className="text-red-400 text-sm" key={error}>
                    {error}.
                  </p>
                ))}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
