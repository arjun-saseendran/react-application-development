import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function root() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </>
  );
}

export default root;
