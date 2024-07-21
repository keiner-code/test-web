import { findAll } from "@/services/category";
import Image from "next/image";
import Link from "next/link";
export default async function Navbar() {
  const category = await findAll();
  
  return (
    <div className="flex justify-center gap-8 bg-gray-800 h-16 items-center">
      <li className="bg-gray-800 text-xl list-none">
        <Link className="bg-gray-800 hover:text-gray-500" href="/page/home">
          Home
        </Link>
      </li>
      {category.map((category) => (
        <li key={category.id} className="bg-gray-800 text-xl list-none flex gap-1 items-center">
          <Image className="rounded-full block w-5 h-5" width="27" height="0" src={category.image} alt={category.name} />
          <Link className="bg-gray-800 hover:text-gray-500" href={`/page/${category.name}/${category.id}`}>
            {category.name}
          </Link>
        </li>
      ))}

      <li className="bg-gray-800 text-xl list-none">
        <a className="bg-gray-800 hover:text-gray-500" href="">
          About
        </a>
      </li>
    </div>
  );
}
