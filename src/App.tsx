import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MySkills} from "./my_skills/MySkills";


export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MySkills/>
    </div>
  );
}

export default App;
