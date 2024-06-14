import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import GenerateImage from './components/GenerateImage/GenerateImage';

function App() {
  return (
   
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/generateAiImage' element={<GenerateImage/>}></Route>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
