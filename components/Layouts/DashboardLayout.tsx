import React from 'react';
import GoTop from './GoTop';

const DasboardLayout = (props: React.PropsWithChildren) => {
  return (
    <>
      <main className="m-4">{props.children}</main>
      <GoTop />
    </>
  );
};

export default DasboardLayout;
