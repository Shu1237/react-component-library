import React from 'react';
import { InputProps } from './type';

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  size = 'medium',
  variant = 'default',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-3 py-2',
    large: 'px-4 py-3 text-lg'
  };

  const variantClasses = {
    default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-200',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-200',
    success: 'border-green-500 focus:border-green-500 focus:ring-green-200'
  };

  const inputClasses = `
    w-full border rounded-md
    focus:outline-none focus:ring-2
    transition-colors duration-200
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
