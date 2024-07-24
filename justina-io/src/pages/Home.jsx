// Home.js
import React from 'react';
import './Home.css'; 
import Calendar from '../components/calendar/Calendar'; 
import LayoutSidebar from '../layouts/layoutSidebar';

const Home = () => {
  return (
    <LayoutSidebar>
      <div className="flex justify-center items-center h-full">
        <Calendar />
      </div>
    </LayoutSidebar>
  );
};

export default Home;
