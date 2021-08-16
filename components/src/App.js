
import './App.css';
import Cards from './Components/Cards/Cards';
import Carousels from './Components/Carousels/Carousels';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousels/>
      <Cards/>
      <Footer/>
    </div>
  );
}


export default App;
