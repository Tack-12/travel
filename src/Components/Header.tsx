import React from 'react'
import { menuItems } from '../data/menu'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'


function Header() {
    return (
        <>
            <section>
                <div className="bg-white">
                    <div className="container mx-auto">
                        <div className="flex justify-between">
                            <img className='w-[350px] h-[200px] py-2' src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Travel-logo-design-Graphics-9786083-1.jpg" alt="" />
                            <h1 className='text-5xl text-center font-bold py-20'>TRAVEL WEBSITE</h1>
                            <ul className='flex gap-4 font-bold py-20 text-xl'>
                                <li><i className="bi bi-facebook" /></li>
                                <li><i className="bi bi-instagram" /></li>
                                <li><i className="bi bi-youtube" /></li>
                                <li><i className="bi bi-twitter-x" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#F0B51C] py-2'>
                <div className=' container mx-auto  '>
                    <ul className='flex gap-10 justify-center py-3 ' >
                        <li className='group text-black transition-all duration-300 ease-in-out' > <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'><Link to={`/`} >HOME </Link></span></li>
                        {menuItems.map(a =>

                            <li className='group text-black transition-all duration-300 ease-in-out' key={a}> <span className='bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>{a}</span></li>

                        )}
                    </ul>
                </div>
            </section>


            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Category/:cid/' element={<Category />} />
                <Route path='/Detail' element={<Details />} />
            </Routes>
        </>
    )
}

export default Header