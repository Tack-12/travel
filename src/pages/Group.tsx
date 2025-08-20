import React from 'react'
import { groupTrips } from '../data/groupdata';

function Group() {
  return (
    <>
      <section className="rounded-2xl my-6 bg-[url('https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg')] bg-cover bg-center w-full h-96 relative">
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30 rounded-2xl'></div>
        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-6'>
          <h1 className='text-5xl font-bold text-white mb-4'>Group Trips</h1>
          <p className='text-white text-lg max-w-2xl'>
            Join like-minded travelers on guided adventures across Nepal. Experience culture, nature, and fun together.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 rounded-2xl py-12 my-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F0B51C] mb-6">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {groupTrips.map((trip) => (
              <div key={trip.id} className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col">
                <img className="w-full h-56 object-cover" src={trip.imageUrl} alt={trip.title}/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl text-blue-700 mb-2 line-clamp-1">{trip.title}</h3>
                  <p className="text-gray-700 text-base mb-4 line-clamp-3">{trip.description}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300">
                      Book Now
                    </button>
                    <div className="flex gap-4 text-gray-600 text-sm">
                      <p className="flex items-center gap-1"><i className="bi bi-people-fill text-yellow-500 text-lg"></i> {trip.travelers}</p>
                      <p className="flex items-center gap-1"><i className="bi bi-star-fill text-yellow-500 text-lg"></i> {trip.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Group;
