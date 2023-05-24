import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import FirstRow from './Components/FirstRow';
import SecondRow from './Components/SecondRow';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FirstRow/>
      <SecondRow/>
      <Footer/>
    </div>
  );
}

export default App;
