// import { useEffect, useState } from "react"
// import { useLocation, useNavigate } from "react-router-dom"
// import axios from "axios"

// const PaymentConfirmation = () => {
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [status, setStatus] = useState("checking")
//   const reference = new URLSearchParams(location.search).get("reference")

//   useEffect(() => {
//     const checkTicketStatus = async () => {
//       if (!reference) {
//         setStatus("invalid")
//         return
//       }

//       try {
//         const response = await axios.get(`https://our-lady-database.onrender.com/api/verify-payment/${reference}`)
//         if (response.data.status === "success") {
//           setStatus("success")
//         } else {
//           setStatus("failed")
//         }
//       } catch (error) {
//         console.error("Error checking payment status:", error)
//         setStatus("error")
//       }
//     }

//     checkTicketStatus()
//   }, [reference])

//   return (
//     <div>
//       <h2>Payment Confirmation</h2>
//       {status === "checking" && <p>Checking payment status...</p>}
//       {status === "success" && <p>✅ Payment Successful! Your ticket is confirmed.</p>}
//       {status === "failed" && <p>❌ Payment Failed. Please try again.</p>}
//       {status === "invalid" && <p>⚠️ Invalid reference provided.</p>}
//       <button onClick={() => navigate("/")}>Go Home</button>
//     </div>
//   )
// }

// export default PaymentConfirmation


import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
    const [searchParams] = useSearchParams();
    const reference = searchParams.get("reference");
    const [, setStatus] = useState("Pending");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        if (reference) {
            verifyPayment(reference);
        }
    }, [reference]);

    const verifyPayment = async (reference: string) => {
        try {
            const response = await axios.get(`https://our-lady-database.onrender.com/api/verify-payment/${reference}`);
            setStatus(response.data.status);
        } catch (error: any) {
            console.error("Error checking payment status:", error);
            setError(error.response?.data?.message || "Error verifying payment.");
        }
    };

    return (
        <div className="w-full h-[400px] flex justify-center items-center">
            <div className="w-[300px] bg-[#fff] shadow-lg flex justify-center items-center p-[20px] flex-col">
            <h2 className="font-[600] text-[20px]">Congratulations 🎉🎊</h2>
            <p className="mt-[20px]">Reference: {reference}</p>
            <p className="mt-[20px] text-[18px] font-[600]">Status</p>
            {error && <p className="text-center" style={{ color: "green" }}>Your payment is Verified successfully</p>}

            <button onClick={() => navigate("/")} className="w-[150px] rounded-[5px] mt-[15px] h-[45px] bg-[#0c8f54] text-[#fff] flex justify-center items-center">
                Go back home
            </button>
        </div> 

        </div>
    );
};

export default PaymentConfirmation;


