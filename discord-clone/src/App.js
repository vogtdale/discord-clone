import './App.css';
import SideBar from "./components/sidebar/SideBar"
import Chat from "./components/chat/Chat"

function App() {
  return (
    <div className="app">
      <SideBar />
      <Chat />
    </div>
  );
}

export default App;
