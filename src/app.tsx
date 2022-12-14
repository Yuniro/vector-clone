import React from "react";
import clsx from "clsx";
import { Outlet } from "react-router-dom";
import useResponsive from "./common/hooks/useResponsive";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  const isDesktop = useResponsive();

  return (
    <div className="app">
      <Header />
      <div className="w-full">
        <div
          className={clsx(
            isDesktop
              ? "main-view w-full m-auto mt-20 mb-40 pt-8 max-w-5xl"
              : "main-view mt-16 pt-1.5"
          )}
        >
          <Outlet />
        </div>
      </div>
      {!isDesktop && <Footer />}
    </div>
  );
}

export default App;
