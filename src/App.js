import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';
import Learn from './components/Learn';
import Python from './components/Python';
import BackEnd from './components/BackEnd';
import InfoSec from './components/InfoSec';
import MLearning from './components/MLearning';
import Responsive from './components/Responsive';
import Javascript from './components/Javascript';
import Frontend from './components/Frontend';
import DataVis from './components/DataVis';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/learn' element={<Learn/>} />
          <Route exact path='/learn/back-end' element={<BackEnd />} />
          <Route exact path='/learn/information-security' element={<InfoSec />} />
          <Route exact path='/learn/machine-learning' element={<MLearning />} />
          <Route exact path='/learn/responsive' element={<Responsive />} />
          <Route exact path='/learn/javascript' element={<Javascript />} />
          <Route exact path='/learn/front-end' element={<Frontend />} />
          <Route exact path='/learn/data-visualisation' element={<DataVis />} />
          <Route exact path='/learn/python' element={<Python />} />
          <Route exact path='/sign-up' element={<Signup />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
