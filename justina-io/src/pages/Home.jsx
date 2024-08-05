import React from 'react';
import './Home.css';
import LayoutSidebar from '../layouts/layoutSidebar';
import TuAgenda from '../components/yourAgenda/TuAgenda';
import Chats from '../components/chats/Chats';
import ChartsHome from '../components/molecules/ChartsHome';

const Home = () => {
  return (
    <LayoutSidebar>
      <div className="flex flex-col items-start justify-start w-full gap-4 py-4 md:flex-row md:items-start">
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
