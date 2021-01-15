import './App.css';
import Header from './header/header'
import Sidebar from './sidebar/Sidebar'
import Feed from './feed/Feed'
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />  
        <Feed />
      </div>
    </div>
  );
}

export default App;
