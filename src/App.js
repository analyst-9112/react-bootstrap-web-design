import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/inc/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path= "/" exact component={ Home }/>
        <Route path= "/contact" component={ Contact }/>
        <Route path= "/about" component={ About }/>
      </Switch>
    </Router>
    
  );
}

export default App;
