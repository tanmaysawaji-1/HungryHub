import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import './Verify.css';

function Verify() {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(url + "/api/order/verify", {
                success: success,   // "true" or "false"
                orderId: orderId
            });
            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Verification error:", error);
            navigate("/");
        }
    };

    useEffect(() => {
        if (orderId && success) {
            verifyPayment();
        } else {
            navigate("/");
        }
    }, [orderId, success]);  // Add dependencies

    return (
        <div className='verify'>
            <div className="spinner"></div>
            <p>Verifying payment...</p>
        </div>
    );
}

export default Verify;