import { ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  size = 'lg'
}: ContainerProps) => {
  
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full'
  };

  return (
    <Component 
      className={`
        w-full mx-auto px-4 sm:px-6 lg:px-8
        ${sizeClasses[size]}
        ${className}
      `.trim()}
    >
      {children}
    </Component>
  );
};

export default Container;