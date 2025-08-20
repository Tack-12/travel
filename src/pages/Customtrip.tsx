import React from 'react'


  function Customtrip() {
  return (
    <>
      <section className="rounded-2xl my-6 bg-[url('https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg')] bg-cover bg-center w-full h-96 relative">
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30 rounded-2xl'></div>
        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-6'>
          <h1 className='text-5xl font-bold text-white mb-4'>Custom Trips</h1>
          <p className='text-white text-lg max-w-2xl'>
            Plan your dream adventure with personalized options tailored just for you.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 rounded-2xl py-12 my-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F0B51C] mb-6">Request Your Custom Package</h2>
          <form className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4">
            <label className="text-left font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border rounded-lg"
            />

            <label className="text-left font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded-lg"
            />

            <label className="text-left font-semibold">Changes / Preferences</label>
            <textarea
              placeholder="Describe the changes or preferences for your package"
              className="p-2 border rounded-lg resize-none"
              rows={4}
            />

            <button
              type="button"
              className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-300 mt-4"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Customtrip;


