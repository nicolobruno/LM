import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React, { Fragment } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Quotes from './screens/Quotes';
import DetailQuote from './screens/DetailQuote';
import './App.scss';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quote/:id" element={<DetailQuote />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
