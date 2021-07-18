// import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import PollLink from './Component/PollLink';
import Poll from './Component/Poll';
import Body from './Component/Body';
import { InputProvider } from './Component/ContextApi/InputContext';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import { OptionPollContext, OptionPollContextProvider } from './Component/ContextApi/OptionPollContext';


function App() {

  const [data, setdata] = useState('');
  const dataval = (val) => {
    setdata(val);
  }
  return (

    <div className="App">
      <InputProvider>
        <OptionPollContextProvider>
          <Route exact path="/">
            <Navbar />
            <Header />
            <Body GetData={dataval} />
          </Route>
          <Route path="/pollLink">
            <Navbar />
            <Header />
            <PollLink value={data} />
          </Route>
          <Route exact path="/poll/:_id">
            <Navbar />
            <Header />
            <Poll />
          </Route>
        </OptionPollContextProvider>
      </InputProvider>
    </div>
  );
}

export default App;
