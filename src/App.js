import logo from './logo.svg';
import './App.css';
const user = {
  firstName: 'Franck',
  lastName:  'Lopes',
  isAuth : true
}
const { firstName, lastName, isAuth } = user;
const authenticateUser = () => {
  user.isAuth = false;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
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
        <p>
          {
            isAuth ? 
            (<div> 
              <p> Vous êtes connecté ! </p>
              <button onClick={()=>authenticateUser()}> Se Deconnecter </button>
              {/* les States! */}
             </div>)
            : (<div> 
              <p> Vous n'êtes pas connecté ! </p>
              <button onClick={()=>console.log('coucou')}> Connexion </button>
             </div>)
          }
        </p>
      </header>
    </div>
  );
}

export default App;
