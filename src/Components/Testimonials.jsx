import { useState } from "react";

const testimonials = [
  {
    name: "Jonny Thomas",
    role: "Project Manager",
    photo: "/testi/client1.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
  },
  {
    name: "Sarah Mitchell",
    role: "UX Designer",
    photo: "/testi/client1.png",
    text: "The coffee here is absolutely outstanding. Every sip feels like a journey through the finest coffee regions of the world. The ambiance is warm and inviting, making it the perfect place to work or catch up with friends. I keep coming back every single week without fail.",
  },
  {
    name: "Karim Benali",
    role: "Software Engineer",
    photo: "/testi/client1.png",
    text: "I've tried coffee shops all over the city and nothing comes close to Bean Scene. The baristas are passionate, knowledgeable, and always ready to recommend the perfect blend. The quality is consistently exceptional and the service is always top-notch. Highly recommend to everyone.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Director",
    photo: "/testi/client1.png",
    text: "Bean Scene has completely changed my morning routine. What started as a one-time visit quickly became a daily ritual I look forward to every day. The attention to detail in every cup is remarkable. You can truly taste the passion and craftsmanship in each and every sip.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const { name, role, photo, text } = testimonials[current];

  return (
    <section
      id="Testimonials"
      className="relative flex flex-col justify-center items-center px-6 md:px-10 lg:px-48 pt-10 lg:pt-28 pb-40 lg:pb-20 bg-white overflow-hidden"
    >
      {/* TITLE */}
      <div className="flex flex-col items-center text-center gap-4 px-4 md:px-10 lg:px-28 py-10">
        <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-amber-900 leading-tight">
          Our coffee perfection feedback
        </h1>

        <p className="text-[15px] md:text-[18px] lg:text-[20px] text-amber-900 font-light leading-7 lg:leading-10 max-w-3xl">
          Our customers has amazing things to say about us
        </p>
      </div>

      {/* TESTIMONIAL CARD */}
      <div className="flex flex-col items-center justify-center relative w-full mx-auto px-8 pt-12 pb-12 md:px-16 md:pt-16 md:pb-40 lg:px-20 lg:py-32 bg-amber-50 border border-amber-200 rounded-2xl">

        {/* Guillemets décoratifs */}
        <span className="absolute top-12 left-10 lg:top-20 lg:left-20 text-amber-900 font-bold text-[60px] md:text-[100px] lg:text-[220px] scale-y-[-1] scale-x-[-1] tracking-tighter leading-none">
          ,,
        </span>

        {/* Texte du témoignage */}
        <p className="relative z-10 text-[13px] md:text-[16px] lg:text-[18px] text-amber-900 font-light leading-6 md:leading-8 lg:leading-10 text-center mt-6 md:mt-10">
          {text}
        </p>

        {/* Nom du client */}
        <h2 className="text-xl md:text-2xl font-bold text-amber-900 mt-6 lg:mt-10">
          {name}
        </h2>

        {/* Poste */}
        <p className="text-[15px] md:text-[18px] lg:text-[20px] text-amber-900 font-light leading-8">
          {role}
        </p>

        {/* Indicateurs */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "bg-amber-900 w-4" : "bg-amber-300 w-2"
              }`}
            />
          ))}
        </div>

        {/* Image client — centrée sous la card */}
        <img
          className="absolute -bottom-20 md:-bottom-24 left-1/2 -translate-x-1/2 w-28 md:w-36 lg:w-40 object-cover"
          src={photo}
          alt={name}
        />

        {/* Bouton suivant */}
        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-10 bg-amber-200 p-2 md:p-4 lg:p-8 rounded-lg lg:rounded-2xl cursor-pointer"
        >
          <span className="arrow bg-amber-900"></span>
        </button>

        {/* Bouton précédent */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 lg:-left-10 bg-amber-200 p-2 md:p-4 lg:p-8 rounded-lg lg:rounded-2xl cursor-pointer"
        >
          <span className="arrow scale-x-[-1] bg-amber-900"></span>
        </button>
      </div>

      {/* Décorations */}
      <img
        className="md:block absolute top-50 lg:top-90 xl:top-50 -right-10 lg:right-0 scale-x-[-1] w-40 lg:w-auto"
        src="/AboutUs/coffee_blast.png"
        alt="coffee blast"
      />
      <img
        className="md:block absolute bottom-35 lg:bottom-0 -left-10 lg:left-0 w-40 lg:w-auto"
        src="/testi/coffee_blast2.png"
        alt="coffee blast"
      />
    </section>
  );
}