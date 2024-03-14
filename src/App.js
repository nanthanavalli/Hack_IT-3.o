import './App.css';
import Domain from "./pages/Domain";
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Location from './pages/Location';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
      <Domain />
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
