import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
