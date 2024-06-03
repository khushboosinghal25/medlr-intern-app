// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Medlr</h1>
        <input
          type="text"
          placeholder="Search medicines..."
          className="p-2 rounded"
        />
        <nav>
          <Link href="/login"><a className="text-white">Login</a></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
