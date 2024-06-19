import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Main from './components/Main';
import Footer from './components/footer'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="Bienvenidos a Nuestra FunKo Tienda" />
          </Route>
          <Route path="/products">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
