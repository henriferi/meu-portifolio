import Layout from '../../components/Layout';

const projects = [
  {
    id: 1,
    name: 'Meu Projeto 1',
    description: 'Este é o meu primeiro projeto',
    imageUrl: '/images/projeto1.png',
    githubUrl: 'https://github.com/seu-perfil/projeto1',
  },
  {
    id: 2,
    name: 'Meu Projeto 2',
    description: 'Este é o meu segundo projeto',
    imageUrl: '/images/projeto2.png',
    githubUrl: 'https://github.com/seu-perfil/projeto2',
  },
  {
    id: 3,
    name: 'Meu Projeto 3',
    description: 'Este é o meu terceiro projeto',
    imageUrl: '/images/Cathouse.png',
    githubUrl: 'https://github.com/seu-perfil/projeto3',
  },
];

export default function Projects() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Meus Projetos</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.githubUrl} target="_blank" className="text-blue-500 hover:underline">Ver no GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
