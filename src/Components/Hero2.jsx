export default function Hero2() {
  return (
    <section
        id="hero2"
       className="relative "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-5
          items-center
          justify-center
          gap-10
          md:gap-25
          lg:gap-25
          px-6
          md:px-10
          lg:px-28
          pt-20
          pb-10
          lg:pb-10
          lg:pt-20
        "
      >

        {/* LEFT CONTENT */}
        <div className="flex flex-col col-span-3 justify-center gap-6">

          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-[54px]
              font-bold
              text-white
              leading-tight
            "
          >
            Get a chance to have<br /> an Amazing morning
          </h1>

          <p
            className="
              text-[16px]
              md:text-[18px]
              lg:text-[20px]
              text-white
              font-light
              leading-8
              lg:leading-10
            "
          >
            We are giving you are one time opportunity to<br /> experience a better life with coffee.
          </p>

          <button
            className="
              inline-block
              w-fit
              bg-primary
              hover:bg-primary-hover
              text-black
              font-semibold
              rounded-full
              px-6
              md:px-8
              py-3
              md:py-4
              cursor-pointer
              transition
            "
          >
            Order Now
          </button>

          

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center col-span-2">

          <img
            src="/hero2/cup.png"
            alt="Coffee cup"
            className="
              w-75
              h-116
              object-cover
              z-50
            "
          />

        </div>

      </div>

      <img className="absolute bottom-0 right-0 z-40  pointer-events-none " src="/hero2/coffee_bean.png" alt="coffee-bean" />
    </section>
  );
}