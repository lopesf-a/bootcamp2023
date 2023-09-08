import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [user, setUser] = useState({
    firstName: "Franck",
    lastName: "Castle",
    isAuth: false
  })

  const [count, setCount] = useState(0);

  const { firstName, lastName, isAuth } = user;

  const authenticateUser = () => {
    setUser({
      ...user,
      isAuth: true
    });
  }

  const incrementCount = () => {
    setCount(count=>count+1);
  }
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>
          Bonjour {user.firstName} {user.lastName}
        </p>
        <p><button onClick={() => incrementCount()}>Ad 1</button></p>
        <p>{count}</p>
        <p>
          {
            isAuth ? 
            (<div> 
              <p> Vous êtes connecté ! </p>
              <button onClick={() => authenticateUser()}>Se Deconnecter </button>
              {/* les States! */}
             </div>)
            : (<div> 
              <p> Vous n'êtes pas connecté ! </p>
              <button onClick={() => authenticateUser()}>Connexion</button>
             </div>)
          }
        </p>
      </header>
    </div>
  );
}

export default App;
