import './App.css';
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import Feed from './feed/Feed'
import Widgets from './feed/Widgets';
import Login from './login/Login'
import { useStateValue } from "./login/StateProvider"


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ?
        (
          <Login />
      ) : (
  <>
    <Header />
    <div className="app__body">
      <Sidebar />  
      <Feed />
      <Widgets />
    </div>
   </>
      )
}
      
    </div>
  );
}

export default App;
