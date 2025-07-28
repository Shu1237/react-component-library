import React from 'react';
import { CardProps } from './type';

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  actions,
  footer,
  children,
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
    bg-white rounded-2xl border border-gray-200
    ${shadowClasses[shadow]} 
    ${paddingClasses[padding]}
    ${className}
  `.trim();

  return (
    <div className={classes}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl mb-4"
        />
      )}

      {(title || subtitle || actions) && (
        <div className="mb-4 flex justify-between items-start gap-2">
          <div>
            {title && (
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
          </div>
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}

      <div className="mb-4">{children}</div>

      {footer && <div className="border-t pt-3 mt-4">{footer}</div>}
    </div>
  );
};

export default Card;
