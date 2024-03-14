import './App.css';
import Domain from "./pages/Domain";
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About />
      <Domain />
    </div>
  );
}

export default App;
