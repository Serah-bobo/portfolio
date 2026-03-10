import { ReactNode } from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  decorative?: boolean;
  children?: ReactNode;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  align = 'left',
  size = 'md',
  decorative = true,
  children,
  className = '',
}: SectionTitleProps) => {
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const titleSizes = {
    sm: 'text-display-sm md:text-display-md',
    md: 'text-display-md md:text-display-lg',
    lg: 'text-display-lg md:text-display-xl',
  };
  
  const subtitleSizes = {
    sm: 'text-body-md',
    md: 'text-body-lg',
    lg: 'text-body-xl',
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      {decorative && (
        <div className="flex items-center gap-2 mb-4">
          <div className="w-12 h-0.5 bg-[rgb(var(--accent-primary))]" />
          <span className="text-body-sm uppercase tracking-wider text-[rgb(var(--text-secondary))]">
            {subtitle || 'Section'}
          </span>
        </div>
      )}
      
      <h2 className={`font-bold text-[rgb(var(--text-primary))] mb-4 ${titleSizes[size]}`}>
        {title}
      </h2>
      
      {subtitle && !decorative && (
        <p className={`text-[rgb(var(--text-secondary))] max-w-2xl mx-auto ${align === 'center' ? 'mx-auto' : ''} ${subtitleSizes[size]}`}>
          {subtitle}
        </p>
      )}
      
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;