import Router from './routers'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Navbar from './components/Navbar/Navbar';
import NavbarMobile from './components/NavbarMobile/NavbarMobile';

import Button from './components/Button/Button';
import Notify from './components/Notify/Notify';

import {useSelector} from 'react-redux';

import { selectNotify$ } from './selector';

import './App.scss';


function App() {
  const notify = useSelector(selectNotify$);


  return (
    <div className="App">
      <div className="container">
        <NavbarMobile />
        <Header/>
        <div className="row">
          <Navbar/>
          <div className="content">
            <Router/>
          </div>
        </div>
        <Footer />
        <Copyright/>
      </div>
      {notify.length!==0&&
      <div className="notify">
        {notify.map((item,index)=><Notify key={index} content={item.content} state={item.state} />)}
      </div>}
      <Button 
        className="btn-scrollToTop"
        classify="btn-outline"
        bg="bg-blue"
        onClick={()=>{window.scrollTo(0,0)}}
      >
        <i className="fas fa-arrow-up"></i>
      </Button>
    </div>
  );
}

export default App;
