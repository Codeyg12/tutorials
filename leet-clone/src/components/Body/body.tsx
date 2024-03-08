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
        <body>
          {children}
          <ToastContainer />
        </body>
      </RecoilRoot>
    </>
  );
};

export default Body;
