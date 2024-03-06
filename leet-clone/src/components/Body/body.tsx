"use client";

import { RecoilRoot } from "recoil";

type BodyProps = {
  children: React.ReactNode;
  className?: string;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <>
      <RecoilRoot>
        <body>{children}</body>
      </RecoilRoot>
    </>
  );
};

export default Body;
