import React, { useEffect, useState } from 'react';
import { ToastProps } from './type';

const Toast: React.FC<ToastProps> = ({
  children,
  variant = 'info',
  title,
  onClose,
  autoClose = false,
  autoCloseDelay = 5000,
  showCloseButton = true,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseDelay);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [autoClose, autoCloseDelay]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  const variantClasses = {
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: '✓',
      iconBg: 'bg-green-100 text-green-600'
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: '✕',
      iconBg: 'bg-red-100 text-red-600'
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: '⚠',
      iconBg: 'bg-yellow-100 text-yellow-600'
    },
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: 'ℹ',
      iconBg: 'bg-blue-100 text-blue-600'
    }
  };

  const currentVariant = variantClasses[variant];

  return (
    <div className={`
      relative flex items-start p-4 border rounded-lg shadow-md
      ${currentVariant.container}
      ${className}
    `}>
      {/* Icon */}
      <div className={`
        flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3
        ${currentVariant.iconBg}
      `}>
        <span className="text-sm font-bold">{currentVariant.icon}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="text-sm font-semibold mb-1">{title}</h4>
        )}
        <div className="text-sm">{children}</div>
      </div>

      {/* Close Button */}
      {showCloseButton && (
        <button
          onClick={handleClose}
          className="
            flex-shrink-0 ml-3 p-1 rounded-md
            hover:bg-black hover:bg-opacity-10
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
            transition-colors duration-200
          "
          aria-label="Close notification"
        >
          <span className="text-lg leading-none">×</span>
        </button>
      )}
    </div>
  );
};

export default Toast;
