import React from "react";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
