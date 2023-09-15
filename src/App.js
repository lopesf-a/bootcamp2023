import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import TitlePage from './components/UI/TitlePage/index';
import Button from './components/UI/Button/index';
import Header from './components/Header/index';
import Product from './components/Product__Grid/Index';


function App() {
 
  const [user, setUser] = useState({
    firstName: "Franck",
    lastName: "Castle", 
    isAuth: false
  })

  // const [count, setCount] = useState(0);

  // const { firstName, lastName, isAuth } = user;

  // const authenticateUser = () => {
  //   setUser({
  //     ...user,
  //     isAuth: true
  //   });
  // }

  // const incrementCount = () => {
  //   setCount(count=>count+1);
  // }
  return (
    <div className="App">
      
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <Header/>
         <Product/>
         
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
        {/* <p>
          Bonjour {user.firstName} {user.lastName}
        </p>
        <p>
          <button onClick={() => incrementCount()}>Ad 1</button>
          <TitlePage
           title="Mon App test"
           subtitle="coucou"
           />
        </p>
        <p>{count}</p>
        <p>
          {
            isAuth ? 
            (<div> 
              <p> Vous êtes connecté ! </p>
              {/* <button onClick={() => authenticateUser()}>Se Deconnecter </button> */}
              {/* <Button
                handleClick={() => authenticateUser()}
                title= 'Se Deconnecter'
                color='black'
              /> */} 
              {/* les States! */}
             {/* </div>)
            : (<div> 
              <p> Vous n'êtes pas connecté ! </p>
              <button onClick={() => authenticateUser()}>Connexion</button>
             </div>)
          }
        </p> */}
      </header>
    </div>
  );
}

export default App;
