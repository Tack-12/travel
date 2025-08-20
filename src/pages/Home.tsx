import React from 'react'
import { destinations } from '../data/destination';
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <>
      <section className=" rounded-2xl my-2 bg-[url('https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg')] bg-repeat bg-cover bg-bottom w-full h-screen relative" >
        <div className='rounded-2xl absolute left-0 top-0 bg-black w-[100%] h-[100%] opacity-30'></div>

        <div className='relative z-5 top-[400px]'>
          <h1 className='text-center text-white text-7xl text-shadow-lg text-shadow-black font-bold'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'YOUR PATHWAY TO ADVENTURES',
                10000,
                'YOUR PATHWAY TO CULTURE',
                10000,
                'YOUR PATHWAY TO FUN',
                10000,
                'YOUR PATHWAY TO SUPRISES',
                10000
              ]}
              wrapper="span"
              speed={20}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            /></h1>
          <h3 className='text-center text-red-500 text-5xl text-shadow-lg text-shadow-black font-bold'> Visit Nepal</h3>

          <div className='flex items-center gap-5 justify-center py-2'>
            <button className='p-2 bg-blue-700 text-white rounded-xl font-semibold'> Learn More </button>
            <button className='p-2 bg-blue-700 text-white rounded-xl font-semibold'> Popular Destinations </button>

          </div>
        </div>
      </section>



      <section className='bg-gray-100 rounded-2xl py-2 my-2'>
        <div className="container mx-auto">

          <h1 className='text-center text-4xl font-bold py-2 text-[#F0B51C] text-shadow-xs text-shadow-black'>MUST VISIT</h1>
          {destinations.slice(0, 2).map((a) =>
            <div key={a.id} className="flex ">
              <img className='w-[800px] m-3 rounded-2xl' src={a.imageUrl} alt="" />
              <div>
                <h3 className='font-bold text-3xl text-center py-4 text-blue-600 text-shadow-md text-shadow-gray-200'>{a.title}</h3>
                <p className='text-left text-gray-700 p-5 text-xl'>{a.description}</p>

                <button className='p-2 m-5 bg-blue-700 text-white rounded-xl font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 ...'> Book Now </button>

                <div className='flex text-center gap-5 p-5'>
                  <p><i className="bi bi-people-fill text-yellow-500 text-2xl"></i> {a.travelers}</p>
                  <p><i className="bi bi-star-fill text-yellow-500 text-2xl"></i> {a.rating}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className='bg-gray-100 rounded-2xl py-2 my-2'>
        <h1 className='text-center text-4xl font-bold py-5 text-[#F0B51C] text-shadow-xs text-shadow-black'>OTHER RECCOMENDATIONS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {destinations.slice(2, 5).map((a) => (
            <div
              key={a.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                className="w-full h-56 object-cover"
                src={a.imageUrl}
                alt={a.title}
              />
              <div className="p-6 flex flex-col flex-grow my-2 py-2">
                <h3 className="font-bold text-2xl text-blue-700 mb-3 line-clamp-1">
                  {a.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-3">
                  {a.description}
                </p>
                <div className="mt-auto flex items-center justify-between ">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold transition transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700">
                    Book Now
                  </button>
                  <div className="flex gap-4 text-gray-600 text-sm">
                    <p className="flex items-center gap-1">
                      <i className="bi bi-people-fill text-yellow-500 text-lg"></i>
                      {a.travelers}
                    </p>
                    <p className="flex items-center gap-1">
                      <i className="bi bi-star-fill text-yellow-500 text-lg"></i>
                      {a.rating}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>
    </>
  )
}

export default Home