import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Prismic from '@prismicio/client';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { getPrismicClient } from '../services/prismic';

import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiences from '../components/Experiences';
import { Projetos } from '../components/Projetos';
import { Knowledges } from '../components/Knowledges';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';

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

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projetos projects={projects} />
        <Knowledges />
        <ContactForm />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link,
    thumbnail: project.data.thumbnail
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
