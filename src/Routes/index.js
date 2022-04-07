import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../../src/Components/Home';
import TeamsDetail from '../Components/TeamsDetail';
import Search from '../Components/Search';
import { WelcomeModal } from '../Components/Modal/WelcomeModal';
import Nav from '../Components/Nav';


const RoutesComp = () => {
  return <>
            <Nav />
            <Routes>
              <Route exact path='/' element={<WelcomeModal />} />
              <Route path='/home' element={<Home />} />
              <Route path='/equipos-detalle' element={<TeamsDetail />}/>
              <Route path='/busqueda' element={<Search />}/>
            </Routes>
        </>
};

export default RoutesComp;
