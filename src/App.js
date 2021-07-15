// import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Body from './Component/Body';
import { InputProvider } from './Component/ContextApi/InputContext';

function App() {
  return (
    <div className="App">
      <InputProvider>
        <Navbar />
        <Header />
        <Body />
      </InputProvider>
    </div>
  );
}

export default App;
