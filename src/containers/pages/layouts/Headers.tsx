"use client";
import Image from "next/image";
import logo from "../../../../public/logos/logo.png"
import { FaStar } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import Login, { User } from "../Login";
import CardAside from "@/components/CardAside";
export default function Headers() {
  const [infoUser, setInfoUser] = useState<boolean>(false);
  const [isLogger, setIsLogger] = useState<boolean>(false);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setShowLogin(false);
    if (user?.email) {
      setIsLogger(true);
    }
  }, [user]);
  return (
    <div className="flex justify-between items-center px-5 h-20 border-b-gray-500 border-b-[1px]">
      <Link href="/page/home">
        <Image src={logo} alt="logo" width={70} />
      </Link>
      <div>
        <h1 className="text-4xl">TEST - WEB - PORTER</h1>
      </div>
      <div className="flex gap-4 items-center">
        <div className="border-r-[1px] border-gray-400 h-16"></div>
        <FaStar />
        <div className="border-r-[1px] border-gray-400 h-16"></div>
        <FiShoppingCart onClick={() => setShowCard(!showCard)} />
        <div className="border-r-[1px] border-gray-400 h-16"></div>
        <div
          className={`w-1/4 h-full bg-gray-700 fixed top-20 right-0 transition-transform duration-300 ${
            showCard ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <CardAside />
        </div>

        {isLogger ? (
          <div className="flex items-center gap-1 relative">
            <div className="flex flex-col items-center">
              <Image
                className="rounded-full"
                src={user?.photo as string}
                width={40}
                height={40}
                alt="avatar"
              />
              <p className="text-sm">{user?.email}</p>
            </div>
            <FaChevronDown
              className="absolute right-3 top-4"
              onClick={() => setInfoUser(!infoUser)}
            />
            {infoUser && (
              <div className="absolute top-16 border p-2 rounded-lg bg-white shadow-xl">
                <ul className="bg-white text-black">
                  <li className="bg-white text-black pb-1">
                    {user?.name} {user?.lastName}
                  </li>
                  <hr />
                  <li className="bg-white text-black pt-1">{user?.role}</li>
                  <li className="bg-white text-black pt-1">
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <a className="bg-white text-red-700" href="">
                    Cerrar Session
                  </a>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-4 relative">
            <a href="">Register</a>
            <button onClick={() => setShowLogin(!showLogin)}>Sing in</button>
            {showLogin && (
              <div className="absolute z-10 -left-20 top-7 bg-gray-700 p-2 rounded-lg shadow-2xl">
                <Login setUser={setUser} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
