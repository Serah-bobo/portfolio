import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';
import Button from '../shared/Button';
import FeaturedProjectCard from './FeaturedProjectCard';
import projectsData from '../../data/projects.json';
import { Project } from '../../types/ProjectTypes'

interface FeaturedProjectsProps {
  projects?: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const projectList = projects || (projectsData as { projects: Project[] }).projects;
  
  // Filter featured projects
  const featuredProjects = projectList.filter(p => p.featured).slice(0, 3);

  return (
    <section className="section-padding bg-[rgb(var(--bg-primary))]">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my best work"
          align="center"
          size="lg"
          decorative={true}
        >
          <p className="text-body-lg text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
            Here are three projects that showcase my skills and problem-solving abilities.
            Each one presented unique challenges that I thoroughly enjoyed solving.
          </p>
        </SectionTitle>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard 
              key={project.id} 
              project={project} 
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;