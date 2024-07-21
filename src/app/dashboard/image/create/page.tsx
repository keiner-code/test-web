"use client"
import { ChangeEvent } from "react";
import {create} from '@/services/image'
export default function Create() {
  const handlerSubmit = async(e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await create(formData);
  }
  return (
    <>
      <h1 className="text-2xl p-3">Crear Imagenes</h1>
      <div className="flex justify-center items-start w-full h-screen">
        <div className="w-1/3">
          <form onSubmit={handlerSubmit} className="flex flex-col gap-2">
            <div>
              <label htmlFor="">Imagen 1</label>
              <input 
              className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" 
              type="file"
              name="files" />
            </div>

            <div>
              <label htmlFor="">Imagen 2</label>
              <input 
              className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" 
              type="file"
              name="files" />
            </div>

            <div>
              <label htmlFor="">Imagen 3</label>
              <input 
              className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" 
              type="file"
              name="files" />
            </div>

            <div>
              <label htmlFor="">Imagen 4</label>
              <input 
              className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" 
              type="file"
              name="files" />
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
