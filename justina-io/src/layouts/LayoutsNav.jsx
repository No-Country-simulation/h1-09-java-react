import Navbar from '../components/Navbar/Navbar';

// eslint-disable-next-line react/prop-types
const LayoutsNav = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LayoutsNav;
