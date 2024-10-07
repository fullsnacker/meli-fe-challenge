import { Outlet } from "react-router-dom";

import { QueryInputBox } from "../QueryInputBox/QueryInputBox";

export const Layout = () => {
  return (
    <>
      <QueryInputBox />
      <main className="main-results-container">
        <Outlet />
      </main>
    </>
  );
};
