
import { faqs } from '../data/groupdata';
function Faq() {
  return (
    <>
      <section className="rounded-2xl my-6 bg-[url('https://media.digitalnomads.world/wp-content/uploads/2021/07/20115822/kathmandu-digital-nomads.jpg')] bg-cover bg-center w-full h-96 relative">
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30 rounded-2xl'></div>
        <div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-6'>
          <h1 className='text-5xl font-bold text-white mb-4'>FAQ</h1>
          <p className='text-white text-lg max-w-2xl'>
            Find answers to the most common questions about our trips, bookings, and services.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 rounded-2xl py-12 my-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#F0B51C] text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white shadow-lg rounded-2xl p-6">
                <h3 className="font-bold text-xl text-blue-700 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;