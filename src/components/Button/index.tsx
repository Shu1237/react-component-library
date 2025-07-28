import React from "react";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  ...props
}) => {
  const baseClasses =
    "px-4 py-2 rounded font-medium transition-colors duration-200 focus:outline-none focus:ring-2";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const classes = `
    ${baseClasses} 
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${disabled ? disabledClasses : ""} 
    ${className}
  `.trim();

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
