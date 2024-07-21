import DataTable from "@/components/DataTable";
import { getAll } from "@/services/user";
import { User } from "@/containers/pages/Login";
export default async function List() {
  const user: User[] = await getAll();
  console.log(user);

  const header = ["Foto", "Nombres", "Apellidos", "Correo", "Rol"];
  return user.length != 0 ? (
    <DataTable header={header} title="Usuarios" data={user} />
  ) : (
    <p className="flex justify-center pt-10 text-xl">😥 Sin datos</p>
  );
}
