import './App.css';
import { Footer } from './Components/layout/Footer';
import { Header } from './Components/layout/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Footer />
      </header>
    </div>
  );
}

export default App;
