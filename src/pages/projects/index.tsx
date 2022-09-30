import Header from '../../components/Header';
import { ProjectItem } from '../../components/ProjectItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
        />
        <ProjectItem
          title="Projeto 02"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
        />
        <ProjectItem
          title="Projeto 03"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
        />
        <ProjectItem
          title="Projeto 04"
          type="Website"
          slug="teste"
          imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
        />
      </main>
    </ProjectsContainer>
  );
}
