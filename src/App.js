// import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import PollLink from './Component/PollLink';
import Body from './Component/Body';
import { InputProvider } from './Component/ContextApi/InputContext';
import { Route } from 'react-router-dom';
import { useState } from 'react';


function App() {

   const [data,setdata]=useState('');
   const dataval= (val)=>{
     setdata(val);
   }
  return (
  
    <div className="App">
      <InputProvider>
        <Route exact path="/">
          <Navbar />
          <Header />
          <Body GetData={dataval} />
        </Route>
        <Route path="/pollLink">
          <Navbar />
          <Header />
          <PollLink value={data}/>
        </Route>
      </InputProvider>
    </div>
  );
}

export default App;
