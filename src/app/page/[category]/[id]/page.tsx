import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import Products from "@/containers/pages/Products";

export default function Category(prop: any){
    return (
        <div className="w-3/4 h-12"> 
    <div className="flex justify-between items-center ">
        <Pagination />
        <Search />
    </div>
    <div className="pl-4">
        <Products paramsRef={{id: prop.params.id, name: prop.params.category}}/>
    </div>
</div>
    )
}