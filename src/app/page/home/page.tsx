import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Products from "../../../containers/pages/Products";

export default function Home() {
  
  return (
    <div className="w-3/4 h-12"> 
    <div className="flex justify-between items-center ">
        <Pagination />
        <Search />
    </div>
    <div className="pl-4">
        <Products paramsRef={{id: '',name: 'Products'}}/>
    </div>
</div>
  );
}