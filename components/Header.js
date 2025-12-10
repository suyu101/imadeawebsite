export default function Header() {
  return (
    <header className="flex justify-between items-center mb-24">
      <div className="text-gray-300 text-sm">suyesha.site</div>

      <nav className="flex space-x-10 text-gray-400 text-sm">
        <a href="#work" className="hover:text-white transition">Work</a>

        <a
          href="/duck.jpg"
          download
          className="hover:text-white transition"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
