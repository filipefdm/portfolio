import { SectionTitle } from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export default function Experiences() {
  return (
    <Container>
      <SectionTitle title="03 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </section>
    </Container>
  );
}
