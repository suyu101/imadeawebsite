import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const about = [
    "I design and build minimal applications.",
    "I do this using whatever catches my interest.",
    "I focus on efficiency and performance in all aspects of my life."
  ];

  const projects = [
    { title: "doppelganger", desc: "harry potter sentiment analysis", href: "https://github.com/suyu101/doppelganger2.0" },
    { title: "this site", desc: "portfolio", href: "#" }
  ];

  return (
    <>
      <Head>
        <title>Suyesha</title>
      </Head>

      <main className="min-h-screen bg-[#0c0c0c] text-white">
        <div className="w-[95%] mx-auto mt-10 bg-black rounded-t-[90px] px-16 pb-32 pt-28 shadow-[0_-60px_90px_rgba(0,0,0,0.6)]">
          <Header />
          <Hero />

          <section className="mt-32 text-gray-300 text-lg max-w-2xl mx-auto">
            {about.map((p, i) => (
              <p key={i} className="mb-4">{p}</p>
            ))}
          </section>

          <section id="work" className="mt-[65vh] max-w-5xl mx-auto">
            <h2 className="text-2xl text-white mb-10 text-center">Work</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </section>

          <div className="mt-40">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
