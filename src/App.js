
import Home from './components/Home';
import { Routes ,Route } from 'react-router-dom';
import Store from './components/Store';
import About from './components/About';
import MyNavbar from './components/MyNavbar';
import { Container } from 'react-bootstrap';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">

      <MyNavbar/>
      <Container>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/store' element={ <Store/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/cart' element={ <Cart/>}/>
      </Routes>
      </Container>
    </div>

  );
}

export default App;
