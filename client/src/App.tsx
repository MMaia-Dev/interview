import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarComponent from './components/navbar-component';
import Account0 from './components/Accounts/account-zero';
import Account1 from './components/Accounts/account-one';
import 'semantic-ui-css/semantic.min.css';
import Account2 from './components/Accounts/account-two';



function App() {
    
  return (
  <Router forceRefresh={true}>
    <NavbarComponent/>
    <Route path='/account0' component={Account0} />    
    <Route path='/account1' component={Account1} />    
    <Route path='/account2' component={Account2} />    
  </Router>
  );
}

export default App;
