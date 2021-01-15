import './App.css';
import Header from './header'
import Sidebar from './Sidebar'
import Feed from './Feed'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />  
        <Feed />
      </div>
    </div>
  );
}

export default App;
