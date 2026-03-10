import { ReactNode, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
}

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  href,
  onClick,
  className = '',
  ...props // These are the remaining HTML div attributes
}: CardProps) => {
  
  const baseClasses = 'rounded-xl transition-all duration-300 bg-[rgb(var(--bg-card))]';
  
  const variantClasses = {
    default: 'border border-[rgb(var(--border-light))]',
    elevated: 'shadow-custom-md hover:shadow-custom-lg',
    outlined: 'border-2 border-[rgb(var(--border-light))]',
    interactive: 'border border-[rgb(var(--border-light))] hover:shadow-custom-lg hover:scale-[1.02] cursor-pointer',
  };
  
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  // If href is provided, render as Link (don't pass div props to Link)
  if (href) {
    return (
      <Link to={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // If onClick is provided, render as clickable div
  if (onClick) {
    return (
      <div 
        className={`${combinedClassName} cursor-pointer`} 
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        }}
        {...props} // These are safe here because we're rendering a div
      >
        {children}
      </div>
    );
  }

  // Default: render as regular div
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

// Sub-components for consistent card structure
export const CardHeader = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const CardFooter = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`mt-4 pt-4 border-t border-[rgb(var(--border-light))] ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h3 className={`text-display-xs font-bold text-[rgb(var(--text-primary))] mb-2 ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <p className={`text-body-md text-[rgb(var(--text-secondary))] ${className}`}>{children}</p>
);

export const CardImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className={`-m-6 mb-4 overflow-hidden rounded-t-xl ${className}`}>
    <img src={src} alt={alt} className="w-full h-48 object-cover" />
  </div>
);

export default Card;