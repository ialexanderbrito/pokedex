import { Routes, Route } from 'react-router-dom';

import { Homepage } from 'pages/Home/index';
import { Pokemon } from 'pages/Pokemon';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  );
}
