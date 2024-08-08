import React from 'react';
import LayoutSidebar from '../layouts/layoutSidebar';
import ProfileCard from '../components/profile/ProfileCard';
import InfoPanel from '../components/profile/InfoPanel';
import NotesCard from '../components/profile/NotesCard';

const EditProfile = () => {
  return (
    <LayoutSidebar>
      <ProfileCard />
      <InfoPanel/>
      <NotesCard />
    </LayoutSidebar>
  );
};

export default EditProfile;