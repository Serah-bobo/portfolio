import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const StatItem = ({ value, label, suffix = '', prefix = '', duration = 2.5 }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(var(--accent-primary))] mb-2">
        {prefix}
        {startCount && (
          <CountUp
            start={0}
            end={value}
            duration={duration}
            suffix={suffix}
            enableScrollSpy
            scrollSpyDelay={100}
          />
        )}
        {!startCount && '0'}
      </div>
      <div className="text-body-md text-[rgb(var(--text-secondary))]">
        {label}
      </div>
    </motion.div>
  );
};
export default StatItem;