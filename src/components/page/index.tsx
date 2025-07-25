
import React from 'react';
import { PageProps } from './type';

const Page: React.FC<PageProps> = ({title,children}) => {
  return (
   <>
     <h1>{title}</h1>
     <div>{children}</div>
   </>
  );
}

export default Page;