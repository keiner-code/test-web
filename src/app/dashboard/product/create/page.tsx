"use client"
import { Message } from "@/services/auth";
import { Product, create } from "@/services/product";
import { ChangeEvent, useState } from "react";

export default function Create() {
  const [error, setError] = useState<Message>();

  const handlerSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const product: Product = {
      amount: parseInt(formData.get('amount') as string) | 0,
      categoryId: parseInt(formData.get('idCategory') as string),
      description: formData.get('description') as string,
      imagesId: parseInt(formData.get('idImage') as string),
      price: parseInt(formData.get('price') as string),
      title: formData.get('title') as string,
      oldPrice: 10,
    }
    const response = await create(product);
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
  }
  return (
    <>
      <h1 className="text-2xl p-3">Crear Producto</h1>
      <div className="flex justify-center items-start w-full h-screen">
        <div className="w-1/3">
          <form onSubmit={handlerSubmit} className="flex flex-col gap-2">
            <div>
              <label htmlFor="">Id Imagen</label>
              <input 
              className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1" 
              type="number"
              name="idImage" />
            </div>

            <div>
              <label htmlFor="">Id Categoria</label>
              <input 
              className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1" 
              type="number" 
              name="idCategory"/>
            </div>

            <div>
              <label htmlFor="">Titulo</label>
              <input 
              className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1" 
              type="text"
              name="title" />
            </div>

            <div>
              <label htmlFor="">Price</label>
              <input 
              className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1" 
              type="text"
              name="price" />
            </div>

            <div>
              <label htmlFor="">Cantidad</label>
              <input 
              className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1" 
              type="number" 
              name="amount"/>
            </div>

            <div>
              <label htmlFor="">Descripcion</label>
              <textarea 
              className="w-full h-20 bg-gray-700 rounded-lg outline-none pl-1" 
              name="description"
              ></textarea>
            </div>

            <div className="flex justify-center pt-6">
                <button className="bg-green-700 px-4 py-1 rounded-lg shadow-xl" >Registrar</button>
            </div>

          </form>
          <div className="absolute left-1/4 top-32 w-1/4">  
            <span className="">
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
