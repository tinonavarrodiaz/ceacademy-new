import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Contacto from './page/Contacto';
import Ebooks from './page/ebooks';
import Inicio from './page/Inicio';
import Management from './page/Management';
import Nosotros from './page/Nosotros';
import Trading from './page/Trading';
import isMobile from './utils/isMobile';
import menu from './utils/menu';
import Podcast from "./page/Podcast.jsx";
import Footer from "./components/Footer";

// console.log(isMobile());
const checkMobile = (mob) => {
  const dd = document.documentElement;
  // console.log(`dentro de funcion ${mob}`);
  if (mob) {
    dd.classList.remove('desktop');
    dd.classList.add('mobile');
  } else {
    dd.classList.remove('mobile');
    dd.classList.add('desktop');
  }
};
checkMobile(isMobile());

function App() {
  const element = [
    <Inicio />,
    <Nosotros />,
    <Trading />,
    <Management />,
    <Contacto />,
  ];
  console.log(element, menu);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/ebooks" element={<Ebooks />}></Route>
        <Route path="/podcast" element={<Podcast />}></Route>
        {menu.map((el, i) => (
          <Route key={el.title} path={el.link} element={element[i]} />
        ))}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
