import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        <ProjetoItem
          img="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
        <ProjetoItem
          img="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
          title="Projeto 01"
          type="Website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
