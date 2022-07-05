import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './pages/Inicio';
import Reserva from './pages/Reserva';
import Nosotros from './pages/Nosotros';
import Menu from './pages/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/reservar">
          <Reserva />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/" exact>
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
