import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PostWall from './components/Post/PostWall';

let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<PostWall />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
