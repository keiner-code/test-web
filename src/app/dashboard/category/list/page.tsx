import DataTable from "@/components/DataTable";
import { Category, findAll } from "@/services/category";
export default async function List() {
  const header = ["Id", "Titulo", "Imagen"];
  const categories: Category[] = await findAll();
  return <DataTable header={header} title="Categorias" data={categories} />;
}
