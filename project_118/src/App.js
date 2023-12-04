import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import NoPage from "./pages/NoPage";
import './index.css';
import Skills from './pages/Skills';
import SearchSpread from './projects/SearchSpread';
import Projects from './pages/Projects';
import CryptoBotAlgoSMABollinger from './projects/CryptoBotAlgoSMABollinger';
import CryptoBotAlgoSMABollingerGrid from './projects/CryptoBotAlgoSMABollingerGrid';
import CryptoBotAlgoGridTrading from './projects/CryptoBotAlgoGridTrading';
import CryptoBotAutoScalp from './projects/CryptoBotAutoScalp';
import CryptoBotAlgoShotVer1 from './projects/CryptoBotAlgoShotVer1';
import TelegramBotHistoryTrade from './projects/TelegramBotHistoryTrade';
import CryptoBotAlgoShotVer2 from './projects/CryptoBotAlgoShotVer2';
import CryptoBotAlgoShotVer3 from './projects/CryptoBotAlgoShotVer3';
import SpreadHunter from './projects/SpreadHunter';

const App = () => {
 return (
    <>
    <HashRouter>
      <Suspense fallback={<div className="container">Loading...</div>}>
       <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/search-spread" element={<SearchSpread />} />
            <Route path="/spread-hunter" element={<SpreadHunter />} />
            <Route path="/crypto-bot-algo-sma-bollinger" element={<CryptoBotAlgoSMABollinger />} />
            <Route path="/crypto-bot-algo-sma-bollinger-grid" element={<CryptoBotAlgoSMABollingerGrid />} />
            <Route path="/crypto-bot-algo-grid-trading" element={<CryptoBotAlgoGridTrading />} />
            <Route path="/crypto-bot-algo-auto-scalp" element={<CryptoBotAutoScalp />} />
            <Route path="/crypto-bot-algo-shot-ver-1" element={<CryptoBotAlgoShotVer1 />} />
            <Route path="/telegram-bot-history-trade" element={<TelegramBotHistoryTrade />} />
            <Route path="/crypto-bot-algo-shot-ver-2" element={<CryptoBotAlgoShotVer2 />} />
            <Route path="/crypto-bot-algo-shot-ver-3" element={<CryptoBotAlgoShotVer3 />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
    </>
 );
};

export default App;