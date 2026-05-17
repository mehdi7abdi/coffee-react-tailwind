export default function AboutUs() {
  return (
    <section
      id="About-us"
      className="relative bg-amber-50 "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          justify-center
          gap-20
          px-6
          md:px-10
          lg:px-28
          pt-20
          lg:pt-20
        "
      >

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center gap-6">

          <h1
            className="
              text-4xl
              md:text-5xl
              lg:text-[54px]
              font-bold
              text-amber-950
              leading-tight
            "
          >
            Discover the best coffee
          </h1>

          <p
            className="
              text-[16px]
              md:text-[18px]
              lg:text-[20px]
              text-amber-900
              font-light
              leading-8
              lg:leading-10
            "
          >
            Bean Scene is a coffee shop that provides you with
            quality coffee that helps boost your productivity
            and helps build your mood. Having a cup of coffee
            is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee
            more than others you have ever tasted.
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
            Learn More
          </button>

          <img className="absolute -bottom-30 left-0  pointer-events-none w-87.5 z-10" src="/AboutUs/coffee_blast.png" alt="coffee-blast" />

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <img
            src="/AboutUs/coffee-About.png"
            alt="Coffee cup"
            className="
              w-full
              max-w-125
              object-cover
            "
          />

        </div>

      </div>
    </section>
  );
}