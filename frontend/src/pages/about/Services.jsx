import React from 'react';

const Services = () => {
    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Book Sales</h3>
                    <p className="text-gray-600">Browse and purchase from our extensive collection of books across all genres.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Online Orders</h3>
                    <p className="text-gray-600">Place orders online and get them delivered to your doorstep.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                    <p className="text-gray-600">Get help with your orders and queries from our dedicated support team.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;