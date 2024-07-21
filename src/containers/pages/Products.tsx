import Product from "@/components/Product";
import { getAll } from '@/services/product';
import {Category, getOneById} from '@/services/category';
import type { Product as ProductType } from '@/services/product'

interface Props {
    paramsRef: {
        id: string,
        name: string
    }
}

export default async function Products({paramsRef}: Props){
    let products: ProductType[] | [] = [];
    if(paramsRef.name === 'Products'){
       products = await getAll(20,0);
    }else{
        const response = await getOneById(parseInt(paramsRef.id));
        if((response as Category).products != null){
            const category: Category = response as Category;
            products = category.products as ProductType[];
        }
    }
    
    
    return (
        <div className="pt-2 ">
            <h1 className="text-xl font-medium text-gray-400">{paramsRef.name}</h1>
            <div className="flex flex-wrap gap-6 pb-10">
                {
                   products.length != 0 ? products.map(product => (
                        <Product key={product.id}  product={product}/>
                    )): <p className="bg-yellow-400 text-gray-600 rounded-md font-semibold p-2">Sin Productos</p>
                }
            </div>
        </div>
    )
}