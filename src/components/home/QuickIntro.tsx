import { motion } from 'framer-motion';
import Container from '../shared/Container';
import StatItem from './Stats';

const statsData = [
  { value: 3, label: 'Years of Experience', suffix: '+' },
  { value: 15, label: 'Projects Completed' },
  { value: 8, label: 'Happy Clients' },
  { value: 10, label: 'Technologies Mastered' },
];

const QuickIntro = () => {
  return (
    <section className="section-padding bg-[rgb(var(--bg-secondary))]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Intro text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-display-sm md:text-display-md lg:text-display-lg font-bold mb-6">
              Building digital solutions with{' '}
              <span className="gradient-text">passion and precision</span>
            </h2>
            
            <div className="space-y-4 text-body-lg text-[rgb(var(--text-secondary))]">
              <p>
                I'm a full-stack developer with a keen eye for detail and a passion for 
                creating seamless user experiences. My journey in tech started 3 years ago, 
                and since then, I've worked on diverse projects ranging from e-commerce 
                platforms to real-time applications.
              </p>
              
              <p>
                What sets me apart is my holistic approach to development - I don't just 
                write code, I solve problems. Whether it's optimizing database queries, 
                crafting responsive UIs, or architecting scalable solutions, I bring the 
                same level of dedication to every project.
              </p>
            </div>

            {/* Personal highlights */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {['Problem Solver', 'Clean Code Advocate', 'Team Player', 'Continuous Learner'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[rgb(var(--bg-tertiary))] rounded-full text-body-sm text-[rgb(var(--text-secondary))]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatItem value={statsData[0].value} label={statsData[0].label} />
            
            {/* Additional info card */}
            <motion.div
              className="mt-8 p-6 rounded-xl bg-[rgb(var(--bg-card))] border border-[rgb(var(--border-light))]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgb(var(--accent-primary))] bg-opacity-20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[rgb(var(--accent-primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm text-[rgb(var(--text-tertiary))]">Availability</p>
                  <p className="text-body-lg font-semibold text-[rgb(var(--text-primary))]">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default QuickIntro;