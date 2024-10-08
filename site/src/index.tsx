import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Introduction from './contents/Introduction';
import Banner from './scaffold/Banner';
import Software from './contents/Software';
import Translation from './contents/Translation';
import Material from './contents/Material';
import Title from './scaffold/Title';
import Books from './contents/Books';
import Websites from './contents/Websites';
import Tutorials from './contents/Tutorials';
import ResolutionAndNaming from './contents/ResolutionAndNaming';
import Articles from './contents/Articles';
import Footer from './scaffold/Footer';
import TracePaint from './contents/TracePaint';
import FinalThoughts from './contents/FinalThoughts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Banner />
    <Title />
    <Introduction />
    <Software />
    <Translation />
    <Material />
    <Books />
    <Websites />
    <Tutorials />
    <ResolutionAndNaming />
    <Articles />
    <TracePaint />
    <FinalThoughts />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
