import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PersonalDetails from './Pages/Home/PersonalDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<PersonalDetails />}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
