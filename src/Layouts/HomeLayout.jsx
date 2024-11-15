import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/Main-content-Layout/LeftNavbar';
import RightNav from '../components/RightNav';
import FindUs from '../components/FindUs';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className='font-poppins'>
      <header>
        <Header></Header>
        <section className=' w-11/12 mx-auto'>
          <LatestNews></LatestNews>
        </section>

      </header>
      <nav className='w-11/12 mx-auto py-5 '>
        <Navbar></Navbar>
      </nav>
      <main className='w-11/12 pt-5 mx-auto grid md: grid-cols-12 gap-4'>
        <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
        <section className='col-span-6'><Outlet></Outlet></section>
        <aside className='col-span-3 space-y-2'><RightNav></RightNav>
        <FindUs></FindUs>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;