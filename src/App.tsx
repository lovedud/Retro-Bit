import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GameList from './components/GameList';
import Collection from './components/Collection';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GameList />} /> 
          <Route path="/collection" element={<Collection />} /> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;