import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App flex h-screen flex-col">
      <Navbar />
      <div className="flex flex-grow justify-start">
        <Sidebar />
      </div>

    </div>
  );
}

export default App;
