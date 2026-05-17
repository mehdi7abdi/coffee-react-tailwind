export default function Footer() {
  return (
    <div
      id="Footer"
      className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-12 pt-30 pb-16 px-8 md:px-16 lg:px-28 text-white"
    >
      {/* COL 1 — Logo + description + socials */}
      <div className="flex flex-col items-start gap-6">
        <a
          style={{ fontFamily: "Clicker Script" }}
          className="text-[54px] md:text-[54px] font-normal cursor-pointer select-none"
          href="#"
        >
          Bean Scene
        </a>

        <p className="text-[13px] md:text-[15px] font-light leading-6 md:leading-8 w-full lg:w-95">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </p>

        {/* Icônes sociales — à remplir avec Iconify */}
        <div className="flex items-center gap-4 mt-2">
          <span className="facebook"></span>
          <span className="instagram"></span>
          <span className="youtube"></span>
          <span className="twitter"></span>
        </div>
      </div>

      {/* COL 2 — About */}
      <div className="flex flex-col gap-5">
        <h3 className="text-[22px] font-bold mb-2">About</h3>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">Menu</a>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">Features</a>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">News & Blogs</a>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">Help & Supports</a>
      </div>

      {/* COL 3 — Company */}
      <div className="flex flex-col gap-5">
        <h3 className="text-[22px] font-bold mb-2">Company</h3>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">How we work</a>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">Terms of service</a>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">Pricing</a>
        <a href="#" className="text-[15px] font-light hover:text-amber-300 transition-colors">FAQ</a>
      </div>

      {/* COL 4 — Contact */}
      <div className="flex flex-col gap-5">
        <h3 className="text-[22px] font-bold mb-2">Contact Us</h3>
        <p className="text-[15px] font-light leading-7">
          Akshya Nagar 1st Block 1st Cross,<br />
          Rammurthy nagar, Bangalore-560016
        </p>
        <p className="text-[15px] font-light">+1 202-918-2132</p>
        <p className="text-[15px] font-light">beanscene@mail.com</p>
        <p className="text-[15px] font-light">www.beanscene.com</p>
      </div>
    </div>
  );
}