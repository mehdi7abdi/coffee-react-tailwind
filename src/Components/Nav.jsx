export default function Nav() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/20
        backdrop-blur-md
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-6
          md:px-10
          lg:px-22
          py-5
          text-white
        "
      >
        {/* LOGO */}
        <h1
          style={{ fontFamily: "Clicker Script" }}
          className="
            text-[28px]
            md:text-[35px]
            font-normal
            cursor-pointer
            select-none
          "
        >
          Bean Scene
        </h1>

        {/* DESKTOP NAV */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-8
            lg:gap-14
            text-[14px]
          "
        >
          <li>
            <a
              href="#"
              className="hover:text-primary-hover transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#Menu"
              className="hover:text-primary-hover transition"
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="#About-us"
              className="hover:text-primary-hover transition"
            >
              About us
            </a>
          </li>

          <li>
            <a
              href="#Footer"
              className="hover:text-primary-hover transition"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 md:gap-4 text-[14px]">

          {/* SIGN IN */}
          <button
            className="
              hidden
              sm:block
              hover:text-primary-hover
              transition
              cursor-pointer
            "
          >
            Sign in
          </button>

          {/* SIGN UP */}
          <button
            className="
              inline-block
              w-fit
              bg-primary
              hover:bg-primary-hover
              text-black
              font-semibold
              rounded-full
              px-5
              md:px-8
              py-3
              md:py-4
              text-[13px]
              md:text-[14px]
              cursor-pointer
              transition
            "
          >
            Sign Up
          </button>


        </div>
      </div>
    </nav>
  );
}