import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import HomePage from './views/HomePage';
import NotFound from './views/NotFound';
function App() {

  return (
    // <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // </Provider>
  )
}

export default App
