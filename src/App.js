import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import PostForm from './components/PostForm';
import {Provider} from 'react-redux';



import  store from './Store';

class App extends Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store} >
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <PostForm />
        <hr />
       <Post />
      </div>
      </Provider>
    );
  }
}

export default App;
