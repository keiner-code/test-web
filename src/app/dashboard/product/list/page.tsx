import DataTable from "@/components/DataTable";
import { getAll } from "@/services/product";
export default async function List() {
  const header = ["Id","Imagen Id","Categoria Id","Titulo", "Descripcion", "Precio nuevo", "Precio anterior","Cantida"];
  const products = await getAll(10,0);
  return <DataTable header={header} title="Productos" data={products} />;
}
