import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpenCompleted, setIsOpenCompleted] = useState(false)
  const [isOpenPractice, setIsOpenPractice] = useState(false)

  const menu = [
    {
      name: "Form",
      to: "form"
    },
    {
      name: "GNB",
      to:"gnb"
    },
    {
      name: "Footer",
      to:"footer"
    },
    {
      name: "Login",
      to:"login"
    },
    {
      name: "Listitem",
      to:"listitem"
    },
    {
      name: "Table & Card",
      to:"table"
    },
    {
      name: "Modal",
      to:"modal"
    },
    {
      name: "Skeleton",
      to:"skeleton"
    },
    {
      name: "Pagination",
      to:"pagination"
    },
    {
      name: "Carousel",
      to:"carousel"
    },
  ]

  const PracitceMenu = [
    {
      name: "연습장One",
      to: "practice-one"
    }
  ]

  return (
    <>
      <nav className='bg-teal-500 h-16 relative flex items-center px-4'>
        <div className='mr-8'>
          <h2 className='text-xl font-semibold'>TailwindCSS Practice</h2>
        </div>
        <div className='flex space-x-16 items-center'>
          <div className='relative'>
            <button 
              onClick={() => {
                setIsOpenCompleted(!isOpenCompleted)
                setIsOpenPractice(false)
              }}
              className='px-4 py-2 hover:bg-teal-600 hover:text-white'
            >
              완성본
            </button>
            {isOpenCompleted && (
              <div className='flex flex-col absolute inset-y-0 top-12 space-y-2'>
                {menu.map(item => (
                  <Link 
                    to={item.to}
                    className='px-4 py-2 w-40 border border-gray-300 shadow-md rounded-md hover:bg-teal-600 hover:text-white'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className='relative'>
            <button 
              onClick={() => {
                setIsOpenPractice(!isOpenPractice)
                setIsOpenCompleted(false)
              }}
              className='px-4 py-2 hover:bg-teal-600 hover:text-white'
            >
              연습장
            </button>
            {isOpenPractice && (
              <div className='flex flex-col absolute inset-y-0 top-12 space-y-2'>
                {PracitceMenu.map(item => (
                  <Link 
                    to={item.to}
                    className='px-4 py-2 w-40 border border-gray-300 shadow-md rounded-md hover:bg-teal-600 hover:text-white'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default NavBar;