import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    { text: "technology", class: "font-mono text-cyan-700", },
    { text: "reading", class: "font-serif text-emerald-900", },
    { text: "sleeping", class: "font-light text-fuchsia-400", },
    { text: "internet culture", class: "font-sans text-red-500 tracking-tight" }
  ];

  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = words[index].text;
    let i = 0;

    const type = setInterval(() => {
      setDisplayed(current.slice(0, i + 1));
      i++;

      if (i === current.length) {
        clearInterval(type);

        setTimeout(() => {
          const del = setInterval(() => {
            i--;
            setDisplayed(current.slice(0, i));

            if (i === 0) {
              clearInterval(del);
              setIndex((prev) => (prev + 1) % words.length);
            }
          }, 60);
        }, 1100);
      }
    }, 70);

    return () => clearInterval(type);
  }, [index]);

  return (
    <section className="text-center fade-up">

      <div className="flex justify-center mb-6">
        <img 
          src="/site.jpg"
          alt="Profile photo"
          className="w-14 h-14 rounded-full border border-white/20 shadow object-cover"
        />
      </div>

      <p className="text-gray-300 text-lg mb-4 tracking-wide font-light">
        Hi! I'm Suyesha.
      </p>

      <div className="flex flex-col items-center justify-center w-full select-none">

        <span className="font-light text-[46px] md:text-[64px] leading-tight">
          I like
        </span>

        <div className="mt-1 flex justify-center w-full">
          <div className="text-center min-w-[320px]">
            <span className={`${words[index].class} text-[46px] md:text-[64px]`}>
              {displayed}
            </span>
            <span className="animate-pulse">|</span>
          </div>
        </div>

      </div>

    </section>
  );
}
