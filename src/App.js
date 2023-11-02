import './App.css';
//importing compone
import Navbar from './components/Navbar';
import Container from './components/Container';
function App() {
  return (
    <div className="grid grid-cols-6">
       <Navbar className='col-span-1 bg-[#3055b8] h-full py-10 px-5'/>
       <Container className='col-span-5 border-2 '/>
    </div>
  );
}

export default App;
