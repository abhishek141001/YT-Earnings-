import './App.css';
import{BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

function App() {
  return (

    <Router>
    <div className="App">
    <Header/>
    <Routes>
    <Route exact path='/' element={<Page1/>}/>
    <Route path='/page2' element={<Page2/>}/>
    
    </Routes>
     
    </div>
    </Router>
  );
}

export default App;
