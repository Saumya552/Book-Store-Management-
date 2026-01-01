import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

import bannerImg from '../../assets/banner.png'

const Banner = () => {
  const { currentUser } = useAuth();

  // Check if user is subscribed (stored in localStorage)
  const isSubscribed = localStorage.getItem('subscribed') === 'true';

  // Don't show subscribe button if user is logged in or already subscribed
  if (currentUser || isSubscribed) {
    return (
      <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
           <div className='md:w-1/2 w-full flex items-center md:justify-end'>
              <img src={bannerImg} alt="" />
          </div>

          <div className='md:w-1/2 w-full'>
              <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
              <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>
          </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg} alt="" />
        </div>

        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week</h1>
            <p className='mb-10'>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

            <Link to="/subscribe">
              <button className='btn-primary'>Subscribe</button>
            </Link>
        </div>


    </div>
  )
}

export default Banner