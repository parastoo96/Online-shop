import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className='flex flex-wrap justify-between items-center mt-[150px] px-[150px] xl:py-4 xl:px-20 xl:mt-28  md:px-10 sm:justify-center sm:py-4 sm:px-2.5 mb-10'>
            {
                products.map(product => <Product 
                                            key={product.id} 
                                            productData={product} 
                                        />)
            }
        </div>
    );
};

export default Store;