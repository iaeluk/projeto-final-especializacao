import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import PaginaInicio from "./pages/indexPage";
import PaginaFavoritos from "./pages/favoritesPage";
import PaginaDetalhe from "./pages/pageDetails";
import Cabecalho from "./components/layout/header";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cabecalho />
          <Routes>
            <Route path="/" element={<PaginaInicio />} />
            <Route path="favoritos" element={<PaginaFavoritos />} />
            <Route path="detalhe" element={<PaginaDetalhe />} />
          </Routes>
      </Provider>
    </div>
  );
}

export default App;
