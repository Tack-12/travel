import React from 'react'
import { destinations } from '../data/destination'

function Home() {
  return (
    <>
    <section className=" rounded-2xl my-2 bg-[url('https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg')] bg-repeat bg-cover bg-bottom w-full h-screen relative" >
      <div className='rounded-2xl absolute left-0 top-0 bg-black w-[100%] h-[100%] opacity-30'></div>
        
        <div className='relative z-5 top-[400px]'>
          <h1 className='text-center text-white text-7xl text-shadow-lg text-shadow-black font-bold'> YOUR PATHWAY TO ADVENTURES</h1>
          <h3 className='text-center text-red-500 text-5xl text-shadow-lg text-shadow-black font-bold'> Welcome to Nepal</h3>
        </div>
    </section>



    <section>
        <div className="container mx-auto">
          {destinations.map((a)=>
          <div key={a.id} className="flex">
            
            <img className='w-100' src={a.imageUrl} alt="" />
            <div>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>
            
          </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Home