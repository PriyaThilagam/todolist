import React from 'react';
import Home from './Home';
import Completed from './Completed'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Pending from './Pending'

function App() {
  return (
    <main>
      <Router>
    <div className="App">
    
      <Navbar />
      <Routes>
        <Route path="/completed" element={<Completed />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/createtodo" element={<Home/>} />
      </Routes>
    </div>
    </Router>
     
    </main>
  );
}

export default App;
