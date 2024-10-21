import { FaGithub, FaLinkedin, FaWhatsapp, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGit, FaEnvelope, FaGitAlt } from "react-icons/fa"; // Importa os ícones que você deseja usar
import Footer from "@/components/Footer";
import Layout from "../components/Layout";
import { SiNextdotjs, SiPrisma, SiStyledcomponents, SiTailwindcss } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-col lg:flex-row flex-grow justify-center items-center p-6 my-8">
            {/* Seção de Apresentação */}
            <div className="lg:w-1/2 mb-4 lg:mb-0 text-center">
              <img
                src="/images/perfil.png" // Substitua pelo caminho da sua foto na pasta public
                alt="Foto de João da Silva"
                className="w-72 h-64 mx-auto shadow-lg"
              />
              <h1 className="text-3xl font-bold mt-4">Henrique Fernandes</h1>
              <h2 className="text-2xl font-semibold mb-2 text-green-500">Desenvolvedor Web</h2>
              <p className="text-lg mb-2">
                <span className="font-semibold text-xl">Formação:</span> Análise e Desenvolvimento de Sistemas - 2026
              </p>
              <p className="text-lg mb-2">BR - Recife-PE</p>
              <div className="flex flex-col items-center space-y-2 mb-2 lg:flex-row lg:space-x-4 lg:space-y-0 lg:justify-center">
                <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="flex items-center text-xl text-green-500 hover:underline">
                  <FaLinkedin className="mr-1" /> LinkedIn
                </a>
                <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="flex items-center text-xl text-green-500 hover:underline">
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a href="https://api.whatsapp.com/send?phone=seu-numero" target="_blank" rel="noopener noreferrer" className="flex items-center text-xl text-green-500 hover:underline">
                  <FaWhatsapp className="mr-1" /> WhatsApp
                </a>
                <a href="mailto:henriquefernandes.gouveia@gmail.com" className="flex items-center text-xl text-green-500 hover:underline">
                  <FaEnvelope className="mr-1" /> E-mail
                </a>
                {/* Adicione mais redes sociais conforme necessário */}
              </div>
              <p className="text-base">
                Oi, meu nome é Henrique Fernandes, tenho 25 anos e sou desenvolvedor há cerca de 2 anos. Atualmente estou cursando o segundo período da faculdade de <strong className="text-green-500">Análise e Desenvolvimento de Sistemas na Faculdade Senac</strong> e procuro sempre estar me preparando e participando de desafios. Por isso, venho fazendo projetos pessoais, cursos e bootcamps para aprofundar meus conhecimentos. No momento, minhas principais habilidades são: <strong className="text-green-500">HTML, CSS, JavaScript, TypeScript, Python, React, NextJS, TailwindCSS, Styled-Components, GIT, Banco de Dados, Prisma e NodeJS.</strong>
                Também possuo alguns conhecimentos que adquiri participando de cursos e bootcamps como: Angular, Scrum, Figma e Trello. Hoje, estou em busca de um projeto em que eu possa alavancar minha carreira como Dev e que me permita colocar minhas habilidades em prática trazendo benefícios para minha equipe.
              </p>
            </div>

            {/* Seção de Habilidades */}
            <div className="lg:w-1/2 flex flex-col justify-center items-center p-4 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-4 bg-gray-800 py-4 px-12 rounded-md text-green-500">Minhas Skills</h2>
              <ul className="list-disc pl-5 space-y-2">
              <li className="flex items-center text-lg font-semibold">
                  <FaHtml5 className="mr-2 text-orange-600" /> HTML5
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <FaCss3Alt className="mr-2 text-blue-600" /> CSS3
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <FaJs className="mr-2 text-yellow-500" /> JavaScript
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <FaReact className="mr-2 text-blue-400" /> React
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <FaNodeJs className="mr-2 text-green-500" /> Node.js
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <SiNextdotjs className="mr-2 text-black" /> Next.js
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <SiTailwindcss className="mr-2 text-sky-400" /> TailwindCSS
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <SiStyledcomponents className="mr-2 text-pink-400" /> Styled-Components
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <FaDatabase className="mr-2 text-blue-800" /> Banco de Dados
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <FaPython className="mr-2 text-blue-500" /> Python
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <FaGitAlt className="mr-2 text-orange-600" /> Git
                </li>
                <li className="flex items-center text-lg font-semibold">
                  <SiPrisma className="mr-2 text-purple-600" /> Prisma
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
}
