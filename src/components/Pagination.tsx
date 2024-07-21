"use client"
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Pagination(){
    const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -50,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 50,
        behavior: 'smooth'
      });
    }
  };
    return(
<div className="mt-4 ml-4 flex h-7 items-center">
      <FaArrowLeft onClick={handleScrollLeft} className="cursor-pointer" />
      <div className="flex w-48 overflow-auto hide-scrollbar" ref={containerRef}>
        <button className="ml-2 border px-1 rounded-md border-gray-500 text-gray-500">10</button>
        <button className="ml-2 border px-1 rounded-md border-gray-500 text-gray-500">20</button>
        <button className="ml-2 border px-1 rounded-md border-gray-500 text-gray-500">30</button>
        <button className="ml-2 border px-1 rounded-md border-gray-500 text-gray-500">40</button>
        <button className="ml-2 border px-1 rounded-md border-gray-500 text-gray-500">50</button>
        <button className="ml-2 mr-2 border px-1 rounded-md border-gray-500 text-gray-500">60</button>
      </div>
      <FaArrowRight onClick={handleScrollRight} className="cursor-pointer" />
    </div>
    )
}