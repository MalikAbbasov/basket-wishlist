
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myproducts from './components/Myproducts';
import DetailPage from './components/DetailPage';
import Error from './components/Error';


function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/products' element={<Myproducts/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}></Route>
        <Route path='*' element={<Error/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
