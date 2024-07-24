"use client"
import DataTable from "@/components/DataTable";
import { getAll } from "@/services/user";
import { User } from "@/containers/pages/Login";
import { useEffect, useState } from "react";
export default function List() {
const [users, setUser] = useState<User[]>([]);
  useEffect(()=>{
    async function findAll(){
      setUser(await getAll());
    }
    findAll();
  },[]);

  const header = ["Foto", "Nombres", "Apellidos", "Correo", "Rol"];
  return users.length != 0 ? (
    <DataTable header={header} title="Usuarios" data={users} />
  ) : (
    <p className="flex justify-center pt-10 text-xl">😥 Sin datos</p>
  );
}
