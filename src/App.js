import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// import Home from './pages/Home';
// import Services from './pages/Services';
// import Products from './pages/Products';
// import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} /> */}
          {/* <Route path='/sign-up' component={SignUp} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
