import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/notFound/NotFound';
import PostWithComment from './components/postWithComment/PostWithComment';
import Posts from './components/posts/Posts';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route exact path="/" >
            <Header></Header>
          </Route>
          <Route path="/postWithComment/:postId">
            <PostWithComment></PostWithComment>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
