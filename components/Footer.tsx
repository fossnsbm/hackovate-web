import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='mt-6 pt-2 pb-2 bg-gray-400 border-t border-gray-900/10 text-center'>
          <div className='md:flex justify-center md:space-x-6'>
            <p className='t-8 text-xs leading-5 text-black md:order-1 md:mt-0 font-medium hidden md:inline'>
              &copy; 2023 FOSS COMMUNITY OF NSBM. 
            </p>
            <p className='mt-8 text-xs leading-5 text-black md:order-1 md:mt-0 font-medium hidden md:inline'>
              |
            </p>
            <p className='t-8 text-xs leading-5 text-black md:order-1 md:mt-0 font-medium hidden md:inline'>
              V 0.1
            </p>
            <p className='mt-8 text-xs leading-5 text-black md:order-1 md:mt-0 font-medium hidden md:inline'>
              |
            </p>
            <p className='t-8 text-xs leading-5 text-black md:order-1 md:mt-0 font-medium hidden md:inline'>
              Sri Lanka
            </p>
            <p className='mt-8 text-xs leading-5 text-black md:order-1 md:mt-0 font-medium hidden md:inline'>
              |
            </p>
            <p className='mt-8 text-xs leading-5 text-black md:order-1 md:mt-0 font-medium hidden md:inline'>
            {'</>'} WITH ❤ BY THE FOSS COMMUNITY OF NSBM
            </p>
          </div>
        </div>
    </>
  )
}

export default Footer