"use client"
import Image from "next/image";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaStar, FaCartShopping } from "react-icons/fa6";
import {useRouter} from 'next/navigation';
import type { Product } from "@/services/product";
interface Props {
  product: Product
}
export default function Product({product}: Props) {
  const router = useRouter();
  const handlerClick = (value: number) => {
    router.push(`/page/details/${value}`);
  }
  return (
    <div onClick={() => handlerClick(1)} className="shadow-xl w-52 h-68 bg-slate-900 rounded-b-lg pb-1 cursor-pointer">
      <div className="relative">
      <Image
        width={900}
        height={900}
        src={product.images as string}
        alt={product.title}
        className="rounded-t-lg h-32"
      />
        <FaCartShopping  className="text-green-400 absolute top-2 right-2 bg-transparent"/>
      </div>
      <h1 className="pl-1 text-2xl text-gray-300">{product.title}</h1>
      <div className="flex justify-between px-1">
        <span className="text-gray-600 line-through pb-1">
          ${product.oldPrice}
        </span>
        <span>${product.price}</span>
      </div>
      <div className="flex justify-between px-1">
        <div className="pt-2">
          <span className="flex items-center gap-1 pb-1">
            10 <AiOutlineLike className=" text-blue-400"/>
          </span>
          <span className="flex items-center gap-1">
            15 <AiOutlineDislike className="text-blue-800" />
          </span>
        </div>

        <div className="pt-2">
          <span className="flex items-center gap-1 pb-1">
            20 <FcLike className="bg-slate-900"/>
          </span>
          <span className="flex gap-1 items-center">
            22 <FaStar className="text-yellow-600"/>
          </span>
        </div>
      </div>
    </div>
  );
}
