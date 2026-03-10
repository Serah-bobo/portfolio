import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import { Project } from '../../types/ProjectTypes';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[rgb(var(--bg-card))] rounded-xl overflow-hidden border border-[rgb(var(--border-light))] hover:shadow-custom-lg transition-all duration-300"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="relative h-48 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-card))] to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs bg-[rgb(var(--bg-card))] text-[rgb(var(--text-primary))] rounded-full border border-[rgb(var(--border-light))]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/projects/${project.id}`}>
          <h3 className="text-display-xs font-bold text-[rgb(var(--text-primary))] mb-2 hover:text-[rgb(var(--accent-primary))] transition-colors">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-body-md text-[rgb(var(--text-secondary))] mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <Link 
            to={`/projects/${project.id}`}
            className="text-body-sm text-[rgb(var(--accent-primary))] hover:underline inline-flex items-center gap-1 group"
          >
            <span>View Case Study</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;