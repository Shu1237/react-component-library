import React from 'react';
import { TextareaProps } from './type';

const Textarea: React.FC<TextareaProps> = ({ value, onChange, placeholder, ...props }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
      className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Textarea;
