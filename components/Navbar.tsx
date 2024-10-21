import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 h-16"> {/* Defina a altura da navbar */}
      <ul className="flex gap-10 h-full items-center justify-center"> {/* Utilize h-full e items-center para centralizar verticalmente */}
        <li className="flex-1"> {/* Isso permite que o botão ocupe toda a largura disponível */}
          <Link
            href="/"
            className="p-2 h-full text-green-500 font-bold text-2xl rounded-lg bg-gray-900 hover:bg-black transition duration-300 ease-in-out text-center flex items-center justify-center"
          >
            Sobre
          </Link>
        </li>
        <li className="flex-1">
          <Link
            href="/projects" 
            className="p-2 h-full text-green-500 font-bold text-2xl rounded-lg bg-gray-900 hover:bg-black transition duration-300 ease-in-out text-center flex items-center justify-center"
          >
            Projetos
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
