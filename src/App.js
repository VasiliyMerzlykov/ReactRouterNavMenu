import {BrowserRouter as Router, Route} from 'react-router-dom'
import DriftPage from './components/Link/DriftPage';
import ForzaPage from './components/Link/ForzaPage';
import HomePage from './components/Link/HomePage';
import TimeAttackPage from './components/Link/TimeAttackPage';
import NavMenu from './components/NavMenu/NavMenu';



export default function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <div className="page">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/drift" component={DriftPage} />
          <Route exact path="/timeattack" component={TimeAttackPage} />
          <Route exact path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}