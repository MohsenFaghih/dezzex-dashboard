import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContextDataProvider from './contexts/DataContext';
import { Login, Dashboard, NotFound } from './pages';

function App() {
  return (
    <ContextDataProvider>
      <Router>
        <div className="App">
            <Routes>
              <Route  path="/" exact element={<Login />} />
              <Route  path="/dashboard" exact element={<Dashboard />} />
              <Route  element={<NotFound />} />  {/* Not found 404 */}
            </Routes>
        </div>
      </Router>
    </ContextDataProvider>
  );
}

export default App;
