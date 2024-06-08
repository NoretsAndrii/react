import { Routes, Route, NavLink } from 'react-router-dom';

//===========================================//

import './App.css';
import Slider from './Slider/Slider';
import Shop from '../pages/Shop/Shop';
import BasketDetals from '../pages/BasketDetals/BasketDetals';
import TestTask1 from '../pages/TestTask1/TestTask1';

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/slider">Slider</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/testTask1">TestTask1 </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/basket" element={<BasketDetals />} />
        <Route path="/testTask1" element={<TestTask1 />} />
      </Routes>
    </div>
  );
}
