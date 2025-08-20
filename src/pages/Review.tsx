const reviews = [
  {
    id: 1,
    name: "Shyam",
    comment: "Amazing experience! The group trip was well organized and the guides were fantastic.",
    rating: 5
  },
  {
    id: 2,
    name: "RAM",
    comment: "Loved the cultural tour! Learned so much about Nepal and met great people.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Arjun",
    comment: "Beautiful scenery and perfect itinerary. Highly recommend for first-time visitors!",
    rating: 5
  }
];

function Review() {
  return (
    <>
      <section className="rounded-2xl my-6 bg-[url('https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg')] bg-cover bg-center w-full h-96 relative">
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30 rounded-2xl'></div>
        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-6'>
          <h1 className='text-5xl font-bold text-white mb-4'>Reviews</h1>
          <p className='text-white text-lg max-w-2xl'>
            See what travelers are saying about our trips and experiences.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 rounded-2xl py-12 my-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#F0B51C] mb-6">Traveler Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col">
                <h3 className="font-bold text-xl text-blue-700 mb-2">{review.name}</h3>
                <p className="text-gray-700 text-base mb-4 line-clamp-4">{review.comment}</p>
                <div className="mt-auto flex items-center gap-2 text-yellow-500">
                  {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                    <i key={i} className="bi bi-star-fill text-lg"></i>
                  ))}
                  {review.rating % 1 !== 0 && <i className="bi bi-star-half text-lg"></i>}
                  <span className="text-gray-600 ml-2">{review.rating.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
