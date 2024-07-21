import { FaSearch } from "react-icons/fa";
export default function Edit(){
    return (
        <>
      <h1 className="text-2xl p-3">Editar Imagenes</h1>
      <div className="flex absolute right-10 bg-gray-500 items-center px-1 h-7 rounded-lg">
        <input className="bg-transparent outline-none" type="text" placeholder="Ingrese El Id" />
        <FaSearch />
      </div>
      <div className="flex justify-center items-start w-full h-screen">
        <div className="w-1/3">
        <form action="" className="flex flex-col gap-2">
            <div>
              <label htmlFor="">Imagen 1</label>
              <input className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" type="file" />
            </div>

            <div>
              <label htmlFor="">Imagen 2</label>
              <input className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" type="file" />
            </div>

            <div>
              <label htmlFor="">Imagen 3</label>
              <input className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" type="file" />
            </div>

            <div>
              <label htmlFor="">Imagen 4</label>
              <input className="w-full h-8 bg-gray-700 rounded-lg outline-none pl-1" type="file" />
            </div>
            

            <div className="flex justify-center pt-6">
                <button className="bg-blue-700 px-4 py-1 rounded-lg shadow-xl" >Editar</button>
            </div>

          </form>
        </div>
      </div>
    </>
    )
}