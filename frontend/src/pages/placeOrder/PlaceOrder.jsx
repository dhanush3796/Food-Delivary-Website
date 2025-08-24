import { useContext } from 'react';
import './placeOrder.css'
import { StoreContext } from '../../components/context/StoreContext';

function placeOrder(){

    const {getTotalAmout}=useContext(StoreContext);

    return(
        <>
        <form action="" className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivary Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                </div>
                <input type="text" placeholder='Email address'/>
                <input type="text" placeholder='Street'/>
                  <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>

            <div className="place-order-right">
                 <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>Rs {getTotalAmout()==0?0:getTotalAmout()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivary Fee</p>
                            <p>Rs {getTotalAmout()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>Rs {getTotalAmout()+2}</p>
                        </div>
                        </div>
                        <button >proceed to payment</button>
                    </div>
            </div>
        </form>
        </>
    )
}
export default placeOrder;