import React from 'react';
import { CardProps } from './type';

const Card: React.FC<CardProps> = ({ 
  children, 
  title,
  className = '',
  shadow = 'medium',
  padding = 'medium'
}) => {
  const shadowClasses = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg'
  };

  const paddingClasses = {
    none: '',
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6'
  };

  const classes = `
    bg-white rounded-lg border
    ${shadowClasses[shadow]}
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  return (
    <div className={classes}>
      {title && (
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
