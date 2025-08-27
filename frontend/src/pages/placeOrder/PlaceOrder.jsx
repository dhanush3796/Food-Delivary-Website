import { useContext, useEffect, useState } from 'react';
import './placeOrder.css'
import { StoreContext } from '../../components/context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function placeOrder(){

    const {getTotalAmout,token,food_list,cartItems,url}=useContext(StoreContext);
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const place_Order=async (event) => {
        event.preventDefault();
        let orderItems=[];
        food_list.map((item)=>{
            if(cartItems[item._id]>0){
                let itemInfo=item;
                itemInfo["quantity"]=cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
       let orderData={
        address:data,
        items:orderItems,
        amount:getTotalAmout()+2,
       }
       let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
       if(response.data.success){
        const {session_url}=response.data;
        window.location.replace(session_url);
       }else{
        alert("error")
       }
    }
  const navigate=useNavigate();
useEffect(()=>{
    if(!token){
        navigate("/cart")
    }
    else if(getTotalAmout()===0){
        navigate("/cart")
    }
},[token])
    return(
        <>
        <form onSubmit={place_Order} className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivary Information</p>
                <div className="multi-fields">
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name'  />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
                </div>
                <input required name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder='Email address'/>
                <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
                  <div className="multi-fields">
                    <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                    <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
                </div>
                <div className="multi-fields">
                    <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
                    <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                </div>
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
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
                        <button type='submit'>proceed to payment</button>
                    </div>
            </div>
        </form>
        </>
    )
}
export default placeOrder;