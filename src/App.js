import React from "react";
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from "./Widgets";
import './App.css';


function App() {
  return (
    //BEM convention
    <div className="app"> {/* By default it stacks vertically, flex:display; change to row */}
      {/* <h1> Hey, Good that you are learning!! Let's build</h1 >*/}
      {/*Sidebar*/}
      <Sidebar />
      
      {/* Feed*/}
      <Feed />

      {/* Widgets*/}
      <Widgets />
    </div>
  );
}

export default App;
