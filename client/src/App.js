import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PrimeReactProvider } from 'primereact/api';
import Home from './pages/home/Home';
function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
