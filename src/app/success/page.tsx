"use client";

export default function Success() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="text-center p-6 bg-white shadow-md ">
                <h1 className="text-3xl font-semibold text-green-500">Payment Successful!</h1>
                <p className="text-lg mt-4">Your payment has been successfully received. Your order is being processed. Thank you!</p>
                <button
                    onClick={() => window.location.href = "/"}
                    className="mt-6 py-2 px-4 bg-main text-white hover:bg-main-dark"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}
