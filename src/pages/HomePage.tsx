import Hero from '../components/home/Hero';
import QuickIntro from '../components/home/QuickIntro';
import FeaturedProjects from '../components/home/FeaturedProjects';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <QuickIntro />
      <FeaturedProjects />
      <section className="h-screen bg-[rgb(var(--bg-secondary))] flex items-center justify-center">
        <p className="text-display-sm text-[rgb(var(--text-secondary))]">
          More content below the fold...
        </p>
      </section>
    </div>
  );
};

export default HomePage;