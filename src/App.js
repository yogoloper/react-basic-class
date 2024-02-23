import './App.css';
import { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Subject title='Web' sub='world wide web!'></Subject>
        <TOC></TOC>
        <Content title='HTML' desc='HTML is Hypertext Markup Language.'></Content>
      </div>
    )
  }
}

export default App;
