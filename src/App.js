import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComponent from './Components/Header';
import Home from './Pages/Home';
import Register from './Pages/materi/Form/Register';
import Counter from './Pages/materi/Reusable/Counter/Count';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
