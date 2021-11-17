
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './home/Home'
import Bollywood from './bollywood/Bollywood'
import Hollywood from './hollywood/Hollywood'
import Technology from './technology/Technology'
import Fitness from './fitness/Fitness'
import Food from './food/Food'
// function Bolly(){
//   return <h1>bolly</h1>;
// }

function App() {
  return (
    <div className="">
      <Navbar/>
      
      <Routes>

      <Route path="/food" element={<Food/>}/>
      <Route path="/fitness" element={<Fitness/>}/> 
      <Route path="/bollywood" element={<Bollywood/>}/>
      <Route path="/hollywood" element={<Hollywood/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
