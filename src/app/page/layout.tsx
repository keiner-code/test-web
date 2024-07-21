import Aside from "@/containers/pages/layouts/Aside";
import Headers from "@/containers/pages/layouts/Headers";
import Navbar from "@/containers/pages/layouts/Navbar";

export default function PageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
        <>
        <header><Headers /></header>
      <nav><Navbar /> </nav>
      <div className="flex justify-center">
      <div className="w-11/12">
      <h1 className="border-b-2 border-gray-500 border-dotted text-lg text-gray-400">
        Home
      </h1>
      <div className="flex">
        <div className="w-1/4">
          <Aside />
        </div>
         {children}
      </div>
    </div>
      </div></>
    )
}