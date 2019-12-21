import React from "react";
import '../src/scss/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../src/components/Home';
import About from '../src/components/About';
import Users from '../src/components/Users';


 class App extends React.Component {
   constructor(prop) {
      super(prop);
      //this.mouseAnime = this.mouseAnime.bind(this);
    }
    componentDidMount() {
      let execute = import('./js/mouseSpecial.js');
      return execute;
    }
   render() {
    return (
      <Router basename="/app">
        <div id="App" className="App" ref="myApp">
          <nav className="App-header">
            <div className="left-avatar">
              <h1>墨戈的博客</h1>
            </div>
            <ul className="right-menu">
              <li>
                <Link to="/">学习路径</Link>
              </li>
              <li>
                <Link to="/about">日志</Link>
              </li>
              <li>
                <Link to="/users">标签</Link>
              </li>
              <li>
                <Link to="/">资源</Link>
              </li>
              <li>
                <Link to="/">关于我</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
   }
   
}

export default App;