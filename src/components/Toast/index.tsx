import React, { useEffect, useState } from 'react';
import { ToastProps, ToastPosition } from './type';
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  X
} from 'lucide-react';

const positionClasses: Record<ToastPosition, string> = {
  'top-left': 'top-4 left-4',
  'top-right': 'top-4 right-4',
  'top-center': 'top-4 left-1/2 -translate-x-1/2',
  'bottom-left': 'bottom-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
};

const Toast: React.FC<ToastProps> = ({
  children,
  variant = 'info',
  title,
  onClose,
  autoClose = false,
  autoCloseDelay = 5000,
  showCloseButton = true,
  className = '',
  position = 'top-right'
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
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  const variantConfig = {
    success: {
      bg: 'bg-green-50 border-green-200 text-green-800',
      iconColor: 'text-green-500',
      icon: <CheckCircle size={20} />
    },
    error: {
      bg: 'bg-red-50 border-red-200 text-red-800',
      iconColor: 'text-red-500',
      icon: <XCircle size={20} />
    },
    warning: {
      bg: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      iconColor: 'text-yellow-500',
      icon: <AlertTriangle size={20} />
    },
    info: {
      bg: 'bg-blue-50 border-blue-200 text-blue-800',
      iconColor: 'text-blue-500',
      icon: <Info size={20} />
    }
  };

  const current = variantConfig[variant];

  return (
    <div
      className={`fixed z-50 ${positionClasses[position]}`}
    >
      <div
        className={`flex w-full max-w-sm items-start p-4 border rounded-xl shadow-lg transition-all duration-300 ease-in-out
        ${current.bg} ${className}`}
        role="alert"
      >
        <div
          className={`mr-3 mt-1 ${current.iconColor}`}
          role="img"
          aria-label={`${variant} icon`}
        >
          {current.icon}
        </div>
        <div className="flex-1">
          {title && <p className="text-sm font-semibold mb-0.5">{title}</p>}
          <div className="text-sm">{children}</div>
        </div>
        {showCloseButton && (
          <button
            onClick={handleClose}
            className="ml-3 rounded p-1 text-gray-500 hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
