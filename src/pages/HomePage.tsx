// HomePage.tsx
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Skills from '../components/home/Skills';
import Experience from '../components/home/Experience';
import Contact from '../components/home/Contact';

const HomePage = () => {
  return (
    <div>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><FeaturedProjects /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default HomePage;