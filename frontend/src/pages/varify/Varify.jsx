import { useContext, useEffect, useState } from "react";
import "./varify.css";
import { useSearchParams } from "react-router-dom";
import { StoreContext } from "../../components/context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function varify(){
    const [searchParam,setSearchParam]=useSearchParams();
    const success=searchParam.get("success");
    const orderId=searchParam.get("orderId");
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();

    const verifyPayment=async () => {
        const response =await axios.post(url+"/api/order/verify",{success,orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
    return(
        <>
        <div className="verify">
            <div className="spinner">


            </div>
        </div>
        </>
    )
}
export default varify;