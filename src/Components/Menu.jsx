const Coffee = [
  {
    name: "Cappuccino",
    description: "Coffee 50% | Milk 50%",
    price: 8.50,
    image: "/Menu/Cappuccino.png",
  },
  {
    name: "Chai Latte",
    description: "Coffee 50% | Milk 50%",
    price: 8.50,
    image: "/Menu/chai-latte.png",
  },
  {
    name: "Macchiato",
    description: "Coffee 50% | Milk 50%",
    price: 8.50,
    image: "/Menu/macchiato.png",
  },
  {
    name: "Expresso",
    description: "Coffee 50% | Milk 50%",
    price: 8.50,
    image: "/Menu/expresso.png",
  },
];

export default function Menu() {
  return (
    <section
      id="Menu"
      className="relative bg-amber-50 "
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
          py-20
        "
      >
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
          pb-20
        "
      >
        {Coffee.map((coffee, index) => (
          <article
            key={index}
            className="relative
              bg-[#fff8f1]
              border
              border-[#F2E6D9]
              rounded-2xl
              flex
              flex-col
              items-center
              text-center
              transition
              hover:-translate-y-2
              hover:shadow-xl
              cursor-pointer
            "
          >

            {/* IMAGE */}
            <img
              src={coffee.image}
              alt={coffee.name}
              className="
                w-full
                h-[220px]
                object-cover
              "
            />

            {/* CONTENT */}
            <div className="p-6 flex flex-col items-center gap-2">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-amber-950
                "
              >
                {coffee.name}
              </h2>

              <p
                className="
                  text-[16px]
                  text-gray-600
                "
              >
                {coffee.description}
              </p>

              <span
                className="
                  text-xl
                  font-bold
                  text-primary
                  pb-5
                "
              >
                ${coffee.price}
              </span>

              <button
                className="absolute
                -bottom-7
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
                Order Now
              </button>

            </div>
          </article>
        ))}
      </div>

    {/* COFFEE BLAST */}
<img
  className="absolute -bottom-15 md:-bottom-20 lg:-bottom-25 right-0 scale-x-[-1] pointer-events-none w-87.5 z-10"
  src="/AboutUs/coffee_blast.png"
  alt=""
/>

    </section>
  );
}