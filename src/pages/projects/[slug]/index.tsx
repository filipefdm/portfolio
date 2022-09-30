import { BannerProject } from '../../../components/BannerProject';
import Header from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title="Projeto 01"
        type="Website"
        imgUrl="https://images.prismic.io/aulaportfolio/4062bd0a-5769-4dca-9b86-283af4c99654_isometric-psd-web-mockup-1-208.jpg?auto=compress,format"
      />

      <main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eum
          laborum eos eligendi maiores maxime perspiciatis. Sapiente,
          necessitatibus!
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
