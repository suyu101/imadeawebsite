export default function ProjectCard({ title, desc, href }) {
  return (
    <article className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition">
      <h3 className="text-lg text-white mb-1">{title}</h3>
      <p className="text-gray-400 mb-4">{desc}</p>
      <a
        className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-white hover:text-white transition"
        href={href}
      >
        View
      </a>
    </article>
  );
}
