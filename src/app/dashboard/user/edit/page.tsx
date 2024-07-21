"use client"
import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {getOneById, update} from '@/services/user';
import { Message } from "@/services/auth";
import { User } from "@/containers/pages/Login";
const initialUser: User = {
  email: '',
  name: '',
  lastName: '',
  photo: '',
  role: '',
  password: ''
}
export default function Edit() {
  const [idSearch, setIdSearch] = useState<string>('');
  const [msj, setMsj] = useState<Message>();
  const [formUser, dispatch] = useState<User>(initialUser);
  const [error, setError] = useState<string[]>([]);

  const handlerSearch = async() => {
    setError([]);
    const data = await getOneById(parseInt(idSearch));
    if((data as Message).error != null){
      const {error,message,statusCode} = data as Message;
      setMsj({error, message, statusCode,});
      dispatch(initialUser);
      return;
    }
    setMsj({error: '', message: '', statusCode: 0,});
    dispatch(data as User);
  }

  const handlerSubmit = async(e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await update(formUser);

    if((response as Message).error != null){
      const msjError = response as Message;
      if(Array.isArray(msjError.message)){
        setError(msjError.message);
        return;
      }
      setError([msjError.message]);
      return;
    }
  }
  return (
    <>
    <div className="absolute text-red-400 bottom-0 w-1/4">
      {error.map((er,index) => (
        <p key={index}><span>{index + 1}</span>. {er}.</p>
      ))}
    </div>
      <h1 className="text-2xl p-3">Editar Usuario</h1>
      <div className="flex absolute right-10 bg-gray-500 items-center px-1 h-7 rounded-lg">
        <input
          className="bg-transparent outline-none"
          type="text"
          placeholder="Ingrese El Id"
          value={idSearch}
          onChange={(e)=> setIdSearch(e.target.value)}
        />
        <FaSearch onClick={handlerSearch} />
        <span className="absolute -bottom-6 text-red-400">{msj?.message}</span>
      </div>
      <div className="flex justify-center items-start w-full h-screen">
        <div className="w-1/3">
          <form onSubmit={handlerSubmit} className="flex flex-col gap-2">
          <input
                className="hidden w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="text"
                value={formUser.id}
                onChange={(e) => dispatch({...formUser, id: e.target.value})}
              />
            <div>
              <label htmlFor="">Nombres</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="text"
                value={formUser.name}
                onChange={(e) => dispatch({...formUser, name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="">Apellidos</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="text"
                value={formUser.lastName}
                onChange={(e) => dispatch({...formUser, lastName: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="">Correo</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="email"
                value={formUser.email}
                onChange={(e) => dispatch({...formUser, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="">Roles</label>
              <select
                className="w-full h-10 bg-gray-700 rounded-lg outline-none"
                value={formUser.role}
                onChange={(e) => dispatch({...formUser, role: e.target.value})}
              >
                <option value="">Selecione Un Rol</option>
                <option value="admin">Administrador</option>
                <option value="">Gestion</option>
                <option value="">Normal</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Contraseña</label>
              <input
                className="w-full h-10 bg-gray-700 rounded-lg outline-none pl-1"
                type="password"
                value={formUser.password}
                onChange={(e) => dispatch({...formUser, password: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="">Foto</label>
              <input
                className="w-full h-7 bg-gray-700 rounded-lg outline-none pl-1"
                type="text"
                value={formUser.photo}
                onChange={(e) => dispatch({...formUser, photo: e.target.value})}
              />
            </div>

            <div className="flex justify-center pt-6">
              <button className="bg-blue-700 px-4 py-1 rounded-lg shadow-xl">
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
