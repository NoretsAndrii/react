import { Routes, Route, NavLink } from 'react-router-dom';

//===========================================//

import './App.css';
import Slider from './Slider/Slider';
import Shop from '../pages/Shop/Shop';

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/slider">Slider</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}
