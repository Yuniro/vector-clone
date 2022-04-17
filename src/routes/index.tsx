import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import StakePage from "../pages/stake";
import ClaimPage from "../pages/claim";
import LockPage from "../pages/lock";
import App from "../app";

const { PUBLIC_URL } = process.env;


const AppRoutes: FC = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="stake" element={<StakePage />} />
          <Route path="claim" element={<ClaimPage />} />
          <Route path="lock" element={<LockPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
