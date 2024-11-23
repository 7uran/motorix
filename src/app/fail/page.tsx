"use client"
export default function Fail() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-100">
            <div className="text-center p-6 bg-white shadow-md">
                <h1 className="text-3xl font-semibold text-red-500">Payment Failed!</h1>
                <p className="text-lg mt-4">Your payment could not be processed. Please check your card details or try again later.</p>
                <button
                    onClick={() => window.location.href = "/checkout"}
                    className="mt-6 py-2 px-4 bg-main text-white  hover:bg-main-dark"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
