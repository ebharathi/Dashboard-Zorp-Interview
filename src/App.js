import './App.css';
//importing compone
import Navbar from './components/Navbar';
import Container from './components/Container';
import SideNav from './components/SideNav';
function App() {
  return (
    <div className="grid grid-cols-5 lg:space-y-0 lg:grid-cols-6">
       <Navbar className='lg:block hidden col-span-1 bg-[#3055b8] h-full py-10 px-5'/>
       <SideNav className='z-50 fixed top-0 w-full lg:hidden block col-span-5 bg-[#3055b8] px-2 py-3'/>
       <Container className='col-span-5 py-4 px-2 md:px-16 py-5' isMobile='lg:mt-0 mx-2 mt-20'/>
    </div>
  );
}

export default App;
