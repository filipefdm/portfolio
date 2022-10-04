import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: {
    url: string;
  };
}

interface ProjectsProps {
  projects: IProject[];
}

export function Projetos({ projects }: ProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjetoItem
            key={project.slug}
            img={project.thumbnail.url}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
