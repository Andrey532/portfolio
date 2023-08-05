import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {MySkills} from "./my_skills/MySkills";
import { MyWorks } from './my_works/MyWorks';
import { Contacts } from './contacts/Contacts';
import { Footer } from './footer/Footer';


export const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <MySkills/>
      <MyWorks/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
