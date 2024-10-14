import './App.css';
import Input from './components/Input';
import Llm from './components/Llm';
import Navbar from './components/Navbar';
import Output from './components/Output';
import Sidebar from './components/Sidebar';
import chatLogo from './assets/images/chat-logo.png'

const  App = () => {
  return (
    <div className="App flex h-screen flex-col relative">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className='flex items-center justify-center w-full'>
          <div className="flex space-x-24 mx-20 flex-row items-center">
              <Input />
              <Llm />
              <Output />
          </div>
        </div>
      </div>
      <img className="absolute right-10 cursor-not-allowed hover:scale-105 transition-all duration-300 opacity-50 bottom-6" src={chatLogo} alt="" />
    </div>
  );
}

export default App;
