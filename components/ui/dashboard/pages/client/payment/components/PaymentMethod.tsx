import React from "react";

const PaymentMethod = () => {
    return (
        <div className="flex flex-col items-center pt-10">
            <p className="text-black font-bold font-arial">
                Receive payment with Stripe Connect
            </p>
            <span className="bg-primary p-2 rounded mt-40 cursor-pointer text-white">
                Connect Payment Method
            </span>
        </div>
    )
};

export default PaymentMethod;
