import React from 'react';
import './Home.css';
import LayoutSidebar from '../layouts/layoutSidebar';
import TuAgenda from '../components/yourAgenda/TuAgenda';
import Chats from '../components/chats/Chats';
import ChartsHome from '../components/molecules/ChartsHome';

const Home = () => {
  return (
    <LayoutSidebar>
      <div className="flex flex-col md:flex-row justify-start items-start md:items-start p-4 gap-4 w-full">
        <div className="mt-9">
          <ChartsHome />
          <Chats />
        </div>
        <TuAgenda />
      </div>
    </LayoutSidebar>
  );
};

export default Home;
