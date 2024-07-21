import Link from "next/link";

export default function Aside() {
  return (
    <div className="pl-8">
      <h1 className="text-2xl font-semibold mb-2">DashBoard</h1>
      <hr />
      <div className="pl-4 mt-2">
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard">Home</Link>
        </li>
      </div>
      <h1 className="text-2xl font-semibold mb-2">Usuario</h1>
      <hr />
      <div className="pl-4 mt-2">
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/user/list">Listar</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/user/create">Crear</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/user/edit">Editar</Link>
        </li>
      </div>

      <h1 className="text-2xl font-semibold mb-2">Categoria</h1>
      <hr />
      <div className="pl-4 mt-2">
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/category/list">Listar</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/category/create">Crear</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/category/edit">Editar</Link>
        </li>
      </div>

      <h1 className="text-2xl font-semibold mb-2">Imagen</h1>
      <hr />
      <div className="pl-4 mt-2">
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/image/list">Listar</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/image/create">Crear</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/image/edit">Editar</Link>
        </li>
      </div>

      <h1 className="text-2xl font-semibold mb-2">Producto</h1>
      <hr />
      <div className="pl-4 mt-2">
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/product/list">Listar</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/product/create">Crear</Link>
        </li>
        <li className="mb-1 text-xl list-none hover:bg-gray-600 bg-gray-400 bg-opacity-50 py-0.5 rounded-md pl-1">
          <Link href="/dashboard/product/edit">Editar</Link>
        </li>
      </div>
    </div>
  );
}
