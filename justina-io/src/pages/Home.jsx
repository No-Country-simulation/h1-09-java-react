import React from 'react';
import './Home.css'; 
import LayoutSidebar from '../layouts/layoutSidebar';
import TuAgenda from '../components/yourAgenda/TuAgenda';
import Chats from '../components/chats/Chats';

const Home = () => {
  return (
    <LayoutSidebar>
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center p-4 gap-4 w-100">
        <Chats />
        <TuAgenda />
      </div>
    </LayoutSidebar>
  );
};

export default Home;
