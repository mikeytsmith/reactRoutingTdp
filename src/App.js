import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routing/Home';
import About from './routing/About';
import Shop from './routing/Shop';
import Contact from './routing/Contact';
import Users from './routing/Users';
import Nav from './routing/Nav';
import NotFound from './routing/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Heading /> */}

      <BrowserRouter>
      <Nav/>
        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
