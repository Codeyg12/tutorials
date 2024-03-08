"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <ToastContainer />
      </RecoilRoot>
    </>
  );
};

export default Body;
