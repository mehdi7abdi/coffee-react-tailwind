export default function Subscribe() {
  return (
    <section
      id="Subscribe"
      className="relative flex flex-col items-center text-center gap-4 px-6 md:px-10 lg:px-28 py-10 md:py-14 lg:py-32 bg-amber-50 mt-2 lg:mt-16 "
    >
      <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-tight">
        Subscribe to get the Latest News
      </h1>

      <p className="text-lg text-white">
        Don’t miss out on our latest news, updates, tips and special offers
      </p>

      <form className="flex justify-between items-center  ">
        <input
          type="email"
          placeholder="Your email address"
          className="bg-white py-2 px-4 placeholder: text-gray-800 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-4xs lg:w-96 "
        />
        <button
          type="submit"
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 transition duration-300"
        >
          Subscribe
        </button>
        </form>
        
          <img className="absolute hidden xs md:block lg:block -bottom-25 left-0 " src="/Subscribe/Sub.png" alt="sub" />
          <img className="absolute hidden xs md:block lg:block -bottom-25 right-0 scale-x-[-1] " src="/Subscribe/Sub.png" alt="sub" />

      </section>
  )
}