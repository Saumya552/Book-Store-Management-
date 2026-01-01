import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Our Book Store</h1>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 mb-6">
              Welcome to our online book store, your premier destination for discovering and purchasing books from around the world. 
              We are passionate about connecting readers with their next great read.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              Our mission is to make books accessible to everyone, fostering a love for reading and learning. 
              We believe that every book has the power to change lives, and we're here to help you find yours.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Wide selection of books across all genres</li>
              <li>Competitive pricing and special offers</li>
              <li>Fast and reliable shipping</li>
              <li>Secure online payments</li>
              <li>Personalized recommendations</li>
              <li>Excellent customer service</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Have questions? We'd love to hear from you! Reach out to our customer service team for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About