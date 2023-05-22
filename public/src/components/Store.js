import React, { useContext } from 'react';
// import Skeleton from 'react-loading-skeleton'
// import '../../node_modules/react-loading-skeleton/dist/skeleton.css'

import LoadingProducts from './Loading/LoadingProducts';




// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className='flex flex-wrap justify-between items-center mt-[150px] px-[150px] xl:py-4 xl:px-20 xl:mt-28  md:px-10 sm:justify-center sm:py-4 sm:px-2.5 mb-10'>
            {
                products.length?
                products.map(product => <Product 
                                            key={product.id} 
                                            productData={product} 
                                        />):
                                        // <h1>loading...</h1>
                                         <LoadingProducts/>
                                     
                                       
                                      
                                        
            }
        </div>
    );
};

export default Store;