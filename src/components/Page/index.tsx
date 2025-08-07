import React from "react";
import { PageProps } from "./type";

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default Page;
