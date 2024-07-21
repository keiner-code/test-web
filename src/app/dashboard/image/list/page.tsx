import DataTable from "@/components/DataTable";
import {findAll} from '@/services/image'
export default async function List() {
  const header = ["Id", "Imagen 1", "Imagen 2", "Imagen 3","Imagen 4"];
  const images = await findAll();
  return <div className="overflow-y-auto h-[calc(100vh-5rem)]">
    <DataTable header={header} title="Usuarios" data={images} />
  </div>;
}
