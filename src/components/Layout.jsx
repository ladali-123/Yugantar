// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />  {/* Nested routes render here */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
