import './App.css';
import Domain from "./pages/Domain";
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Coordinators from './pages/Coordinators';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
      <Coordinators />
      <Domain />
    </div>
  );
}

export default App;
