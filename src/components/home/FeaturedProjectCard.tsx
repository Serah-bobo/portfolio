import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../shared/Button';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
  index: number;
}

const FeaturedProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-[rgb(var(--bg-card))] rounded-xl overflow-hidden border border-[rgb(var(--border-light))] hover:border-[rgb(var(--accent-primary))] transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.div
          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          {/* Placeholder gradient - replace with actual image later */}
          <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] opacity-50" />
          
          {/* Overlay with technologies */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-card))] via-transparent to-transparent" />
        </motion.div>

        {/* Technology chips - visible on hover */}
        <motion.div 
          className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-[rgb(var(--bg-card))] text-[rgb(var(--text-primary))] rounded-full border border-[rgb(var(--border-light))]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-[rgb(var(--bg-card))] text-[rgb(var(--text-primary))] rounded-full border border-[rgb(var(--border-light))]">
              +{project.technologies.length - 3}
            </span>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-display-xs font-bold text-[rgb(var(--text-primary))] mb-2">
          {project.title}
        </h3>
        
        <p className="text-body-md text-[rgb(var(--text-secondary))] mb-4">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <Button
              size="sm"
              href={project.liveUrl}
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              }
            >
              Live Demo
            </Button>
          )}
          
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              href={project.githubUrl}
              icon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              }
            >
              Code
            </Button>
          )}
        </div>
      </div>

      {/* Featured badge */}
      {index === 0 && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-[rgb(var(--accent-primary))] text-white text-body-xs rounded-full">
          Featured
        </div>
      )}
    </motion.div>
  );
};

export default FeaturedProjectCard;