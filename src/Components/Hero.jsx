export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex
        items-center
        px-6
        md:px-10
        lg:px-28
        pt-28
      "
    >
      <div
        className="
          max-w-xl
          flex
          flex-col
          gap-6
        "
      >

        {/* SMALL TITLE */}
        <h3
          className="
            text-white
            font-semibold
            text-[16px]
            md:text-[20px]
          "
        >
          We’ve got your morning covered with
        </h3>

        {/* MAIN TITLE */}
        <h1
          style={{ fontFamily: "Clicker Script" }}
          className="
            text-white
            leading-none
            text-[100px]
            sm:text-[140px]
            md:text-[180px]
            lg:text-[220px]
          "
        >
          Coffee
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            text-white
            text-[16px]
            md:text-[18px]
            leading-7
            md:leading-8
            max-w-lg
          "
        >
          It is best to start your day with a cup of coffee.
          Discover the best flavours coffee you will ever have.
          We provide the best for our customers.
        </p>

        {/* BUTTON */}
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
    </section>
  );
}