import './App.css';
import {useMoralis} from 'react-moralis'
import {useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import Navbar from './Navbar';
import Home from './Home';
import Console from './Console'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Pay from './Pay';
import Search from './Search';

function App() {
  const { Moralis, authenticate, isAuthenticated, user, logout } = useMoralis();
  const [addr, setAddr] = useState('0');
  const [accounts, setAccounts] = useState(null);
  const [friends, setFriends] = useState(null);
  
  const getAccounts = function(){
    fetch('http://localhost:8000/users')
    .then(res=>res.json())
    .then(data=>setAccounts(data))
  }
  const getFriends = function(){
    fetch('http://localhost:8000/address_book?='+addr)
    .then(res=>res.json())
    .then(data=>setFriends(data[0].friends))
  }  
  useEffect(()=>{
    getAccounts();
    if(user!=null){
      setAddr(user.get('ethAddress'));
    }
    getFriends()
  },[])
  if(!isAuthenticated){
    return(
      <div className='App'>
        <img src="http://127.0.0.1:8080/Desktop/mini_project_trials/trial1/logo/default.png" alt="" className='main'/>
        <br />
        <h3>Click below to Login</h3>
        <button onClick={()=>{authenticate({signingMessage:"Welcome to PayApp"})}}>Login</button>
      </div>
    );
  }
  
  return (
    <div className='App'>
      <div className="container">
      <Router>
        <Navbar addr={user.get('ethAddress')} />
        <Switch>
          <Route exact path='/'>
            <Home  addr={user.get('ethAddress')}/>
          </Route>
          <Route path={'/pay/:'+user.getaddress}>
            <Pay friends = {friends}/>
          </Route>
          <Route path={'/search'}>
            <Search accounts={accounts}/>
          </Route>
          <Route path={'/console'}>
            <Console Moralis={Moralis} />
          </Route>
        </Switch>
      </Router>
      </div>
      <button onClick={()=>{logout()}}>Log out</button>
    </div>
  );
}

export default App;
