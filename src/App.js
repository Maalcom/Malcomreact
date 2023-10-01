import React from "react";
import Header from "./Shared/Header";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Inicio from "./componentes/Inicio";
import Calculadora from "./componentes/Calculadora";
import Formedad from "./componentes/Formedad";
import Formulario from "./componentes/Formulario";
import Galeria from "./componentes/Galeria";
import Seccion1 from "./componentes/Seccion1";
import Seccion2 from "./componentes/Seccion2";
import Seccion3 from "./componentes/Seccion3";

const App = () => {
  return (
    <div
      className="App">
        {/*}Renderizado componente Top{*/}
        <Header/>{/*}Renderizado componente Header{*/}
          <Routes>{/*}Rutas{*/}
        <Route path="/" element={<Inicio />}/>
        <Route path="/Calculadora" element={<Calculadora/>}/>
        <Route path="/Formedad" element={<Formedad/>}/>
        <Route path="/Formulario" element={<Formulario/>}/>
        <Route path="/Galeria" element={<Galeria/>}/>
        <Route path="/Seccion1" element={<Seccion1/>}/>
        <Route path="/Seccion2" element={<Seccion2/>}/>
        <Route path="/Seccion3" element={<Seccion3/>}/>

        </Routes>
      
    </div>
  );
};

export default App