import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import { Projetos } from '../components/Projetos';
import { Knowledges } from '../components/Knowledges';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projetos />
        <Knowledges />
        <ContactForm />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic= getPrismicClient();

  const projectResponse = await prismic.query(
    
  )

  return {
    props: {},
  };
