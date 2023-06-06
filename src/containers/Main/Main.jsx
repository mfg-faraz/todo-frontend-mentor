import React from "react";
import { useEffect } from "react";

const Main = ({ children }) => {
  /** use Effect Hooks */
  useEffect(() => {
    document.body.className = "bg-light-200 dark:bg-dark-100";
  }, []);

  /** Render */
  return (
    <main
      className={`flex justify-center items-center min-h-screen bg-no-repeat p-10
      xs:bg-image-light-desktop xs:dark:bg-image-dark-desktop bg-image-light-mobile dark:bg-image-dark-mobile`}
    >
      {children}
    </main>
  );
};

export default Main;
