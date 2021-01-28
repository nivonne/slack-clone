import React from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <h1>Hello Nadia</h1>

      <Header />
      <div className="app__body">
        <Sidebar />
        {/*react-router -> chat-screen */}
      </div>
    </div>
  );
}

export default App;
