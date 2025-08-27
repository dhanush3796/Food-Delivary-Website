import { useContext } from 'react';
import './Cart.css'
import { StoreContext } from '../../components/context/StoreContext';
import {useNavigate} from 'react-router-dom'

function Cart(){

    const {cartItems,food_list,removeCart,getTotalAmout,url}=useContext(StoreContext);
    const navigate=useNavigate();

    return(
        <>
            <div className="cart">
                <div className="cart-items">
                    <div className="cart-items-title">
                        <p>Items</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <br />
                    <hr />
                    {
                        food_list.map((item,index)=>{
                            if(cartItems[item._id]>0){
                                return(
                                    <div>
                                        <div className='cart-items-title cart-items-item'>
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>Rs {item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>Rs {item.price*cartItems[item._id]}</p>
                                        <p onClick={()=>removeCart(item._id)} className='cross'>x</p>
                                    </div>
                                    <hr />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className='cart-bottom'>
                    <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>Rs {getTotalAmout()===0?0:getTotalAmout()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivary Fee</p>
                            <p>Rs {getTotalAmout()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>Rs {getTotalAmout()===0?0:getTotalAmout()+2}</p>
                        </div>
                        </div>
                        <button onClick={()=>navigate('/order')}>proceed to checout</button>
                    </div>
                    
                    <div className="cart-promocode">
                        <div>
                            <p>If you have promo code, Enter it here</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder='Promocode' />
                                <button>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;