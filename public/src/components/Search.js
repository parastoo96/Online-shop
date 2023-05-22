import React, { useContext , useState}  from "react";

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';


const Search=()=> {
    const products = useContext(ProductsContext)
    const[search,setSearch]=useState("");

    const searchHandler=event =>{
    setSearch(event.target.value)
     }

    const searchedProducts=products.filter(p=>p.title.toLowerCase().includes(search.toLowerCase()))

    return (  
        <div className="flex flex-col items-center   mt-[250px] min-h-[52vh]">
            <form >
                 <input type="text"
                  placeholder="Search.." 
                  value={search} 
                  onChange={searchHandler} 
                  className="w-[500px] h-[60px] rounded-md px-2.5 mb-14 border-[1px] border-solid border-silver transition-all" 
                  />
            </form>
            <div className="grid grid-cols-5 gap-x-4 ">
                 {
                   searchedProducts.map(product => <Product 
                        key={product.id} 
                        productData={product} 
                    />)
                 }
             </div>
        </div>
    );
}

export default Search;