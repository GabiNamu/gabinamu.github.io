import './App.css';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Front from './pages/front/Front';
import Back from './pages/back/Back';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Portfolio }/>
      <Route path="/front" component={ Front }/>
      <Route path="/back" component={ Back }/>
    </Switch>
  );
}

export default App;
