import Navbar from '../components/Navbar/Navbar';

 
const LayoutsNav = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LayoutsNav;
