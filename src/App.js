import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import store from './redux/store';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </Provider>
  );
}

export default App;
