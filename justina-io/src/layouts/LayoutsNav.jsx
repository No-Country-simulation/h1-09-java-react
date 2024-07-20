import Navbar from '../components/navbar/Navbar';

 
const LayoutsNav = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LayoutsNav;
