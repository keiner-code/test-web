"use client"
import { Category, create } from "@/services/category";
import { Message } from "postcss";
import { ChangeEvent, useState } from "react";

interface FormType {
  title: string;
  file: File | null;
}
export default function Create() {
  const [file, setFile] = useState<File | null>(null);

  const handlerSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await create(formData);
    
    /* const category: Category = {
      image: file as File,
      name: form.get('title') as string
    } */

    /* if (response != true) {
      const data = response as Message;
      setError({
        error: data.error,
        message: data.message,
        statusCode: data.statusCode,
      });
      return null;
    }
    setError({ error: "", message: ["Usuario Creado"], statusCode: 200 }); */
  };

//  }
  return (
    <>
      <h1 className="text-2xl p-3">Crear Categoria</h1>
      <div className="flex justify-center items-start w-full h-screen">
        <div className="w-1/3">
          <form onSubmit={handlerSubmit} className="flex flex-col gap-2">
            <div>
              <label htmlFor="">Title</label>
              <input 
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1" 
                type="text"
                name="name" />
            </div>

            <div>
              <label htmlFor="">Foto</label>
              <input 
              className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" 
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files && e.target.files[0])}
               />
            </div>

            <div className="flex justify-center pt-6">
                <button className="bg-green-700 px-4 py-1 rounded-lg shadow-xl" >Registrar</button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}
