import './App.css';
import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Sidebar />
      {/* <div className="App-body">
      </div> */}
    </div>
  );
}

export default App;