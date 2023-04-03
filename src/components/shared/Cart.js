import React, { useContext } from 'react';
import './Cart.css'

// Context
import { CartContext } from '../../context/CartContextProvider';

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trashIcon from "../../assets/icons/trash.svg";

const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = props.data;

    return (
        <div className='flex flex-row items-center  justify-between bg-white p-4 border-2 border-solid border-silver mb-5 rounded-md sm:flex-col '>
            <img className='w-20 sm:w-36' src={image} alt="product" />
            <div className='text-left sm:text-center'>
                <h3 className='text-blue mb-2.5 sm:mx-0 mt-8'>{shorten(title)}</h3>
                <p  className='text-light-green font-bold sm:mt-5 mx-0 mb-8'>{price} $</p>
            </div>
            <div>
                <span className='relative bg-orange w-6 h-6 leading-6 rounded text-white font-bold text-center sm:mt-0 mx-0 mb-2.5'>{quantity}</span>
            </div>
            <div className='cartButtonContainer' >
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img className='w-5'  src={trashIcon} alt="trash" style={{width: "20px"}} /></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;