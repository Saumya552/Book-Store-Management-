import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { FiMail, FiCheckCircle, FiUser } from 'react-icons/fi';

const Subscribe = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState(currentUser?.email || '');
  const [loading, setLoading] = useState(false);

  // Check if user is already subscribed
  const isSubscribed = localStorage.getItem('subscribed') === 'true';

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Email Required',
        text: 'Please enter your email address',
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate API call (replace with actual API endpoint)
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Store subscription status
      localStorage.setItem('subscribed', 'true');
      localStorage.setItem('subscriberEmail', email);

      Swal.fire({
        icon: 'success',
        title: 'Successfully Subscribed!',
        text: 'Thank you for subscribing to our newsletter. You\'ll receive updates on new releases and special offers.',
        confirmButtonColor: '#10B981',
      });

      // Force page reload to update UI
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (_) {
      Swal.fire({
        icon: 'error',
        title: 'Subscription Failed',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <FiCheckCircle className="mx-auto h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Already Subscribed!
          </h1>
          <p className="text-gray-600 mb-6">
            {currentUser ? `Welcome back, ${currentUser.displayName || 'Reader'}!` : 'You\'re already subscribed to our newsletter.'}
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 text-sm">
              📧 Newsletter subscriber since: {new Date().toLocaleDateString()}
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Keep an eye on your inbox for the latest book releases and exclusive offers!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="mb-4">
            <FiMail className="mx-auto h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join Our Newsletter
          </h1>
          <p className="text-gray-600">
            Get notified about new book releases, exclusive offers, and literary insights delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Subscribing...
              </>
            ) : (
              <>
                <FiMail className="h-5 w-5" />
                Subscribe Now
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <FiCheckCircle className="h-4 w-4 text-green-500" />
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-1">
              <FiCheckCircle className="h-4 w-4 text-green-500" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            By subscribing, you agree to receive marketing emails from us. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
