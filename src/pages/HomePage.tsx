import Hero from '../components/home/Hero';

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* We'll add more sections here later */}
      <section className="h-screen bg-[rgb(var(--bg-secondary))] flex items-center justify-center">
        <p className="text-display-sm text-[rgb(var(--text-secondary))]">
          More content below the fold...
        </p>
      </section>
    </div>
  );
};

export default HomePage;