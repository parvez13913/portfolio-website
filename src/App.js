import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PersonalDetails from './Pages/Home/PersonalDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Skill from './Pages/Home/Skill';
import Education from './Pages/Home/Education';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Home/Projects';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<PersonalDetails />}></Route>
        <Route path='/skill' element={<Skill />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
