"use client"
import Image from "next/image";
import { FaArrowLeftLong, FaStar } from "react-icons/fa6";
import imgProduct from "../../../../../public/avatar/bananas-1642706_1280.jpg";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useRouter } from "next/navigation";
interface ProductId {
  params: {
    id: string;
  };
}
export default function Details(props: any) {
    const router = useRouter();
  const { id } = props.params;
  return (
    <div className="bg-gray-700 opacity-90 absolute w-full h-[90%] top-20 left-0 px-10">
      <FaArrowLeftLong className="text-3xl mt-2 cursor-pointer" onClick={()=> router.back()}/>
      <div className="flex justify-center">
        <div className="w-4/5 flex">
          <div className="w-1/2">
            <div className=" flex">
              <Image
                className="rounded-lg shadow-lg w-1/4 mb-2 pr-1"
                src={imgProduct}
                alt=""
              />
              <Image
                className="rounded-lg shadow-lg w-1/4 mb-2 pr-1"
                src={imgProduct}
                alt=""
              />
              <Image
                className="rounded-lg shadow-lg w-1/4 mb-2 pr-1"
                src={imgProduct}
                alt=""
              />
              <Image
                className="rounded-lg shadow-lg w-1/4 mb-2"
                src={imgProduct}
                alt=""
              />
            </div>
            <Image className="rounded-lg" src={imgProduct} alt="" />
          </div>

          <div className="w-1/2 pl-2">
            <h1 className="text-4xl font-bold mb-2">Bananas</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias provident, non illum earum dicta iure, itaque eos
              tempore minus ad placeat blanditiis libero asperiores corrupti
              mollitia magni inventore accusantium dolore.
            </p>
            
            <div className="flex mt-4 justify-between text-xl text-gray-300">
              <p className="line-through">Precio anterior: $300.000</p>
              <p>Precio nuevo: $400.000</p>
            </div>

            <div className="flex justify-between px-1 pt-4">
              <div className="flex gap-3 items-center">
                <span className="flex items-center gap-1 text-xl">
                  10 <AiOutlineLike className=" text-blue-400" />
                </span>
                <span className="flex items-center gap-1 text-xl">
                  15 <AiOutlineDislike className="text-blue-600" />
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <span className="flex items-center gap-1 text-xl">
                  20 <FcLike className="" />
                </span>
                <span className="flex items-center gap-1 text-xl">
                  22 <FaStar className="text-yellow-600" />
                </span>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
            <button className="bg-blue-500 px-10 py-1 rounded-lg shadow-xl">Add To Cart</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
