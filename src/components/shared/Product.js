import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

// Functions
import { shorten, isInCart, quantityCount } from '../../helper/functions';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import trashIcon from "../../assets/icons/trash.svg";

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className=' w-[250px]  border-[1px] border-solid border-silver overflow-hidden bg-white mx-[10px] mb-12 transition-all delay-200 ease text-center lg:w-[45%]  sm:w-72'>
            <img className='w-[230px] h-[200px] m-2.5 md:w-52 sm:w-[230px]' src={productData.image} alt="product"  />
            <h3 className='text-gray text-left mt-6 mx-5 mb-4 text-lg '>{shorten(productData.title)}</h3>
            <p className='text-gray text-left my-4 mx-5 text-base font-medium '>{productData.price}</p>
            <div className=' flex justify-between items-center mt-9 mx-5 mb-5 '>
                <Link className='no-underline text-blue text-base' to={`/products/${productData.id}`}>Details</Link>
                <div className='buttonContainer'>
                    {quantityCount(state, productData.id) > 1 && <button className='w-8 text-lg font-bold ' onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className='w-8 text-lg font-bold ' onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><img src={trashIcon} alt="trash" className='w-5' /></button>}
                    {
                        isInCart(state, productData.id) ?
                        <button className='w-8 text-lg font-bold ' onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button> :
                        <button className='w-[120px]'   onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;