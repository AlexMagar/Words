import './App.css';
import { Card } from './Components/admin-signup/Card';
import { Footer } from './Components/layout/Footer';
import { Header } from './Components/layout/Header';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
