import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"><ContactMe /></section>
      <Footer />
    </main>
  );
}