import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './containers/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/article/:id" component={ArticleListing} /> */}
      </Router>
    </div>
  );
}

export default App;
