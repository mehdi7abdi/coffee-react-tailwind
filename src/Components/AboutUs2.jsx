const Coffee = [
  {
    name: "Supreme Beans",
    description: "Beans that providess great taste",
    image: "/AboutUs2/testi1.svg",
  },

  {
    name: "High Quality",
    description: "We provide the highest quality",
    image: "/AboutUs2/testi2.svg",
  },

  {
    name: "Extraordinary ",
    description: "Coffee like you havenever tasted",
    image: "/AboutUs2/testi3.svg",
  },

  {
    name: "Affordable Price",
    description: "Our Coffee prices areeasy to afford",
    image: "/AboutUs2/testi4.svg",
  },
];

export default function AboutUs2() {
  return (
    <section
      id="AboutUs2"
      className="relative bg-amber-50 pb-20 "
    >

      {/* TITLE */}
      <div
        className="
          flex
          flex-col
          items-center
          text-center
          gap-4
          px-6
          md:px-10
          lg:px-28
          py-10
        "
      >

        <h1
          className="
            text-4xl
            md:text-5xl
            lg:text-[54px]
            font-bold
            text-amber-900
            leading-tight
          "
        >
          Enjoy a new blend of coffee style
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
            max-w-3xl
          "
        >
          Explore all flavours of coffee with us.
          There is always a new cup worth experiencing
        </p>

      </div>

      {/* CARDS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
          px-6
          md:px-10
          lg:px-28
          pb-10
        "
      >

        {Coffee.map((coffee, index) => (
          <article
            key={index}
            className="
              bg-amber-50
              hover:bg-[#fef1e4]
              border
              border-[#F2E6D9]
              rounded-2xl
              overflow-hidden
              flex
              flex-col
              items-center
              text-center
              transition
              hover:-translate-y-2
              hover:shadow-xl
              pt-6
              cursor-pointer
            "
          >

            {/* IMAGE */}
            <img
              src={coffee.image}
              alt={coffee.name}
              className="
                w-22
                h-22
                object-cover
              "
            />

            {/* CONTENT */}
            <div className="p-6 flex flex-col items-center gap-3">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-amber-900
                "
              >
                {coffee.name}
              </h2>

              <p
                className="
                  text-[16px]
                  text-amber-800
                "
              >
                {coffee.description}
              </p>


            </div>

          </article>
        ))}

      </div>
      <div  className="
          flex
          flex-col
          items-center
          text-center
          gap-1
          px-6
          md:px-10
          lg:px-28"
          >
         <p
          className="
            text-[16px]
            md:text-[18px]
            lg:text-[20px]
            text-amber-900
            font-light
            leading-8
            lg:leading-10
            max-w-3xl
          "
        >
          Great ideas start with great coffee, Lets help you achieve that
        </p>

         <h2
          className="
            text-2xl
            md:text-3xl
            lg:text-[34px]
            font-bold
            text-amber-900
            leading-tight
          "
        >
          Get started today.
        </h2>
         <button
                className="
                  mt-2
                  inline-block
                  w-fit
                  bg-primary
                  hover:bg-primary-hover
                  text-black
                  font-semibold
                  rounded-full
                  px-6
                  py-3
                  transition
                  cursor-pointer
                "
              >
                Join Us
              </button>
      </div>

    </section>
  );
}